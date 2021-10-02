import { getSession } from 'next-auth/client';

// Securing API Routes
const handler = async (req, res) => {
  const session = await getSession({ req });
  if (!session) {
    res.status(401).json({ error: 'Unauthenticated User' });
  } else {
    res.status(200).json({ message: 'Success', session: session });
  }
};

export default handler;
