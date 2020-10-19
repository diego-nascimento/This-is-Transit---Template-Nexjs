import api from '../../services/api';
import Layout from '../../Components/layout/layout';
import { Item, Botao } from './cars[id].styles';
import Link from 'next/link';

const Carro = ({ data }) => {
  return (
    <Layout isIndex={'0'} title={data.name}>
      <Item>
        <Link href="/elements">
          <Botao>Voltar</Botao>
        </Link>
        <h1>{data.name}</h1>
        <img src={data.photo[0].url} alt={data.photo[0].description} />

        <p>
          <span style={{ color: 'black', fontWeight: 'bold' }}>
            Descrição:{' '}
          </span>
          {data.description}
        </p>
      </Item>
    </Layout>
  );
};

export default Carro;

export async function getStaticPaths() {
  const response = await api.get('/api/cars_ids');
  const dado = [];

  response.data.forEach((element) => {
    dado.push({
      params: {
        id: element.id,
      },
    });
  });
  return {
    paths: dado,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  try {
    console.log(params.id);
    const response = await api.get(`/api/cars/` + params.id);

    return {
      props: {
        data: response.data,
      },
    };
  } catch (error) {
    return {
      props: {
        data: 'error',
      },
    };
  }
}
