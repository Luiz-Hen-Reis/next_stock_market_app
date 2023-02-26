import { NextApiHandler } from 'next';
import prisma from 'libs/prisma';
import toCapitalize from 'helpers/toCapitalize';

export const handler: NextApiHandler = async (req, res) => {
  const { id } = req.query;

  const user = await prisma.user.findFirst({
    where: { id: parseInt(id as string) },
  });

  if (user) {
    res
      .status(200)
      .json({ id: user.id, email: user.email, name: toCapitalize(user.name) });
  } else {
    res.status(400).json({ status: 'User not found' });
  }
};

export default handler;
