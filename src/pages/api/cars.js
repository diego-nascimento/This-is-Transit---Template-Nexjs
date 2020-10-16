import data from './data';

export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(200).json(data);
}
