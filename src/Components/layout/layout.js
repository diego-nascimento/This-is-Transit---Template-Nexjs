import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import { LayoutPage } from './layout.style';
import Head from 'next/head';

const Layout = ({ children, isIndex, title }) => {
  return (
    <LayoutPage>
      <Head>
        <title>This is Transit - {title}</title>
      </Head>
      <Menu isIndex={isIndex} />
      <main>{children}</main>
      <Footer />
    </LayoutPage>
  );
};

export default Layout;
