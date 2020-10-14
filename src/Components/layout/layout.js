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
      </Head>

      <Menu isIndex={estadoMenu} />

      <main>{children}</main>
      <Footer />
    </LayoutPage>
  );
};

export default Layout;
