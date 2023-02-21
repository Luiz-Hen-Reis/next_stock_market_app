import { NextApiHandler } from 'next';
import bcrypt from 'bcrypt';
import prisma from 'libs/prisma';

export const handler: NextApiHandler = async (req, res) => {
  const { name, email, password } = req.body;

  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: { name, email, password: hashedPassword },
    });

    res.status(201).json({
      user: {
        name,
        email,
      },
    });
  } catch {
    res.status(500);
  }
};

export default handler;
