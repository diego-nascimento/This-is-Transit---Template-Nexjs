import data from './data';

export default function handler(req, res) {
  res.setHeader('Content-Type', 'application/json');
  const dados = [];
  data.forEach((element) => {
    dados.push({
      id: element.id,
    });
  });
  res.status(200).json(dados);
}
