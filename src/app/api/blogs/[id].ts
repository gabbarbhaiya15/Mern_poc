import { NextApiRequest, NextApiResponse } from 'next';

const blogs = [
  { id: 1, title: 'First Blog', content: 'This is the first blog' },
  { id: 2, title: 'Second Blog', content: 'This is the second blog' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  const blog = blogs.find((b) => b.id === parseInt(id as string, 10));

  if (req.method === 'GET') {
    if (blog) {
      res.status(200).json(blog);
    } else {
      res.status(404).json({ message: 'Blog not found' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
