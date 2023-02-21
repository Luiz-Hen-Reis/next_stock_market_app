import { NextApiHandler } from 'next';
import bcrypt from 'bcrypt';
import prisma from 'libs/prisma';
import jwt from 'jsonwebtoken';

export const handler: NextApiHandler = async (req, res) => {
  const { name, email, password } = req.body;

  const userAlreadyExist = await prisma.user.findFirst({ where: { email } });

  if (!userAlreadyExist) {
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      await prisma.user.create({
        data: { name, email, password: hashedPassword },
      });

      const user = await prisma.user.findFirst({ where: { email } });
      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60 /*1 hour*/,
          id: user.id,
        },
        'privateKey',
      );

      res.status(201).json({
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      });
    } catch {
      res.status(500);
    }
  }

  return res.status(200).json({ status: 'User already exists' });
};

export default handler;
