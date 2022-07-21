import nc from 'next-connect';
import Product from '../../models/Product';
import db from '../../utils/db';
import data from '../../components/Data/index';
import User from '../../models/User';
const handler = nc();

handler.get(async (req, res) => {
  await db.connect();
  await User.deleteMany();
  await User.insertMany(data.users);
  await db.disconnect();
  res.send({ message: 'seeded successfully' });
});

export default handler;