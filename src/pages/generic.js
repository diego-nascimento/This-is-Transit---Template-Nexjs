import React from 'react';
import { FullSize, Container } from '../Components/Footer/footer.style';
import Layout from '../Components/layout/layout';
import GenericContent from '../Components/PageGeneric/GenericSession1';

export default function Generic() {
  return (
    <Layout isIndex={'0'} title="Generic">
      <FullSize style={{ background: 'white', margin: '100px 0px' }}>
        <Container style={{ margin: '0px 20px', textAlign: 'center' }}>
          <GenericContent />
        </Container>
      </FullSize>
    </Layout>
  );
}
