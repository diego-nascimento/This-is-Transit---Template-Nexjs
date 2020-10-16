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

export async function getStaticProps({ params }) {
  try {
    const response = await api.get(`cars/` + params.id);
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

  return {
    props: {
      data: response.data,
    },
  };
}
