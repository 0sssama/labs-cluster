export default async function handler(req, res) {
  const { etage } = req.query;

  if (etage == 'e1' || etage == 'e2')
    return res.status(200).json(global.posts[etage]);
  return res.status(404).json({ error: 'Resource not found' });
}
