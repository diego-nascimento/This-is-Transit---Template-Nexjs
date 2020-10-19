import api from '../../services/api';
import Layout from '../../Components/layout/layout';
import PageCar from '../../Components/PageCarDesc/PageCarDesc';

const Carro = ({ data }) => {
  return (
    <Layout isIndex={'0'} title={data.name}>
      <PageCar data={data} />
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
