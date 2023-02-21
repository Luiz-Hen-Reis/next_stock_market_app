import { NextApiHandler } from 'next';
import bcrypt from 'bcrypt';
import prisma from 'libs/prisma';

export const handler: NextApiHandler = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findFirst({ where: {
    email
  } });

  if (!user) {
    return res.status(400).send("Cannot find user");
  }

  try {
    if(await bcrypt.compare(password, user.password)) {
        res.status(200).json({ user: {
          id: user.id,
          name: user.name,
          email: user.email
        } })
    }

  } catch {
    res.status(500);
  }
};

export default handler;