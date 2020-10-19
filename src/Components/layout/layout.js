import Menu from '../Menu/Menu';
import Footer from '../Footer/Footer';
import { LayoutPage } from './layout.style';
import Head from 'next/head';
import React from 'react';

const Layout = ({ children, isIndex, title }) => {
  const [estadoMenu, setEstadoMenu] = React.useState(0);

  React.useEffect(() => {
    setEstadoMenu(isIndex);
  }, []);

  return (
    <LayoutPage>
      <Head>
        <title>This is Transit - {title}</title>
        <meta http-equiv="content-language" content="pt-br"></meta>
        <meta
          name="description"
          content="Test your website with the free SEO check from Seobility and get tips for a better search engine optimization."
        ></meta>
        <meta
          property="og:image"
          content="/https://transit.diego-nascimento.com/favico.png"
        ></meta>
      </Head>
      <Menu isIndex={estadoMenu} />

      <main>{children}</main>
      <Footer />
    </LayoutPage>
  );
};

export default Layout;
