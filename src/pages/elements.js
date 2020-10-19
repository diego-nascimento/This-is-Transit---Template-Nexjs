import React from 'react';
import { FullSize, Container } from '../Components/Footer/footer.style';
import Layout from '../Components/layout/layout';
import Elements from '../Components/PageElements/ListaElements/ListaElements';
import api from '../services/api';

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
  try {
    const response = await api.get('/api/cars');
    return {
      props: {
        data: response.data,
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
