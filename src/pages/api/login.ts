import { NextApiHandler } from 'next';
import bcrypt from 'bcrypt';
import prisma from 'libs/prisma';
import jwt from 'jsonwebtoken';

export const handler: NextApiHandler = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    return res.status(400).json({ status: 'Cannot find user' });
  }

  try {
    if (await bcrypt.compare(password, user.password)) {
      const token = jwt.sign(
        {
          exp: Math.floor(Date.now() / 1000) + 60 * 60 /*1 hour*/,
          id: user.id,
        },
        'privateKey',
      );

      res.status(200).json({
        token,
        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },
      });
    }
  } catch {
    res.status(500);
  }
};

export default handler;
