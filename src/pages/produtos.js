import React from 'react';
import { FullSize, Container } from '../Components/Footer/footer.style';
import Layout from '../Components/layout/layout';
import Elements from '../Components/PageElements/ListaElements/ListaElements';
import Stripe from 'stripe';
import stripeConfig from '../config/stripe';

export default function Generic(props) {
  return (
    <Layout isIndex={'0'} title="Elements">
      <FullSize style={{ background: 'white', margin: '100px 0px' }}>
        <Container style={{ margin: '0px 20px', textAlign: 'center' }}>
          <div>
            <h2>Elements</h2>
            <p>Lorem ipsum dolor sit amet nullam id egestas urna aliquam</p>
          </div>
          <Elements cars={props.data} />
        </Container>
      </FullSize>
    </Layout>
  );
}

export async function getStaticProps() {
  const stripe = new Stripe(stripeConfig.secret_key, {
    apiVersion: '2020-08-27',
  });

  try {
    const response = await stripe.prices.list();
    const data = [];
    for (const price of response.data) {
      const product = await stripe.products.retrieve(price.product);
      product.price = price;
      data.push(product);
    }

    return {
      props: {
        data: data,
        fallback: false,
      },
    };
  } catch (error) {
    return {
      props: {
        error: 1,
      },
    };
  }
}
