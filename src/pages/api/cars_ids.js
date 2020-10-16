export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json([
    {
      id: '0',
    },
    {
      id: '1',
    },
    {
      id: '2',
    },
  ]);
}
