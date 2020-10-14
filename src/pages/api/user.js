export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  res.status(400).json({ name: 'Diego Nascimento', age: 29 });
}
