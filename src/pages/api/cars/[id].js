import data from '../data';

export default function handler(req, res) {
  const id = req.query.id;
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(data[id]);
}
