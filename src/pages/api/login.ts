import { NextApiHandler } from 'next';
import bcrypt from 'bcrypt';
import prisma from 'libs/prisma';
import jwt from 'jsonwebtoken';
import toCapitalize from 'helpers/toCapitalize';

export const handler: NextApiHandler = async (req, res) => {
  const { email, password } = req.body;

  const user = await prisma.user.findFirst({
    where: {
      email,
    },
  });

  if (!user) {
    return res.status(400).send({ status: 'Cannot find user' });
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
          name: toCapitalize(user.name),
          email: user.email,
        },
        status: await bcrypt.compare(password, user.password),
      });
    }
  } catch {
    res.status(500).send({ status: 'Internal Server Error' });
  }
};

export default handler;
