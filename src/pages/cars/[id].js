import api from '../../services/api';
import Layout from '../../Components/layout/layout';

const Carro = ({ data }) => {
  return (
    <Layout isIndex={'0'} title={data.name}>
      <h1>{data.name}</h1>
      <p>{data.description}</p>
      <img src={data.photo[0].url} alt={data.photo[0].description} />
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
    const response = await api.get(`/api/cars` + params.id);
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
