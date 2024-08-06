import { NextApiRequest, NextApiResponse } from 'next';

const blogs = [
  { id: 1, title: 'First Blog', content: 'This is the first blog' },
  { id: 2, title: 'Second Blog', content: 'This is the second blog' },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    res.status(200).json(blogs);
  } else if (req.method === 'POST') {
    const { title, content } = req.body;
    const newBlog = { id: Date.now(), title, content };
    blogs.push(newBlog);
    res.status(201).json(newBlog);
  } else {
    res.setHeader('Allow', ['GET', 'POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
