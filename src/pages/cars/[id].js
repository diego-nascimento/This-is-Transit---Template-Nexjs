import api from '../../services/api';
import Layout from '../../Components/layout/layout';
import PageCar from '../../Components/PageCarDesc/PageCarDesc';
import Stripe from 'stripe';
import stripeConfig from '../../config/stripe';

const Carro = ({ data }) => {
  return (
    <Layout isIndex={'0'} title={data.name}>
      <PageCar data={data} />
    </Layout>
  );
};

export default Carro;

export async function getStaticPaths() {
  const stripe = new Stripe(stripeConfig.secret_key, {
    apiVersion: '2020-08-27',
  });
  const response = await stripe.prices.list();

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
    const stripe = new Stripe(stripeConfig.secret_key, {
      apiVersion: '2020-08-27',
    });

    const price = await stripe.prices.retrieve(params.id);
    const product = await stripe.products.retrieve(price.product);
    product.price = price;

    return {
      props: {
        data: product,
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
