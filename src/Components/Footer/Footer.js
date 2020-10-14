import {
  Container,
  Grid1,
  Item,
  Grid2,
  FullSize,
  ListaMensagens,
  ListaRedeSociais,
} from './footer.style';
import {
  FaFacebookF,
  FaTwitter,
  FaGooglePlusG,
  FaLinkedinIn,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <FullSize>
      <Container className="halfSize">
        <Grid1>
          <Item>
            <h3>Lorem ipsum dolor</h3>
            <a href="">Lorem ipsum dolor sit</a>
            <a href="">Nesciunt itaque, alias possimus</a>
            <a href="">Nostrum nemo dolorum facilis</a>
            <a href="">Nesciunt itaque, alias possimus</a>
          </Item>
          <Item>
            <h3>Lorem ipsum dolor</h3>
            <a href="">Lorem ipsum dolor sit</a>
            <a href="">Nesciunt itaque, alias possimus</a>
            <a href="">Nostrum nemo dolorum facilis</a>
            <a href="">Nesciunt itaque, alias possimus</a>
          </Item>
          <Item>
            <h3>Lorem ipsum dolor</h3>
            <a href="">Lorem ipsum dolor sit</a>
            <a href="">Nesciunt itaque, alias possimus</a>
            <a href="">Nostrum nemo dolorum facilis</a>
            <a href="">Nesciunt itaque, alias possimus</a>
          </Item>
          <Item>
            <h3>Lorem ipsum dolor</h3>
            <a href="">Lorem ipsum dolor sit</a>
            <a href="">Nesciunt itaque, alias possimus</a>
            <a href="">Nostrum nemo dolorum facilis</a>
            <a href="">Nesciunt itaque, alias possimus</a>
          </Item>
        </Grid1>
        <Grid2>
          <ListaMensagens>
            <li>© Untitled. All rights reserved. </li>
            <li>Design: TEMPLATED </li>
            <li>Images: Unsplash</li>
          </ListaMensagens>
          <ListaRedeSociais>
            <li style={{ background: '#39599f' }}>
              <FaFacebookF className="icon" />
            </li>
            <li style={{ background: '#2daae4' }}>
              <FaTwitter className="icon" />
            </li>
            <li style={{ background: '#c91e1f' }}>
              <FaGooglePlusG className="icon" />
            </li>
            <li style={{ background: '#31516a' }}>
              <FaLinkedinIn className="icon" />
            </li>
          </ListaRedeSociais>
        </Grid2>
      </Container>
    </FullSize>
  );
};

export default Footer;
