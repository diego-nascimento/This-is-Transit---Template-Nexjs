import Layout from '../Components/layout/layout';
import Painel from '../Components/PageIndex/Painel-Index/Painel';
import Section2 from '../Components/PageIndex/Section2-index/Section2Index';
import Section3 from '../Components/PageIndex/Section3-index/Section3Index';
import Section4 from '../Components/PageIndex/Section4-index-Form/Section4-index-Form';

export default function Home() {
  return (
    <Layout isIndex={true} title="Home">
      <Painel />
      <Section2 />
      <Section3 />
      <Section4 />
    </Layout>
  );
}
