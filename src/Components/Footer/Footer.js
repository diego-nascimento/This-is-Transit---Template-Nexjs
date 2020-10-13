import {
  Container,
  Grid1,
  Item,
  Grid2,
  FullSize,
  ListaMensagens,
  ListaRedeSociais,
} from './footer.style';
import { FaFacebook } from 'react-icons/fa';

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
            <li>
              <FaFacebook />
            </li>
            <li>insta</li>
            <li>linked</li>
            <li>Twittter</li>
          </ListaRedeSociais>
        </Grid2>
      </Container>
    </FullSize>
  );
};

export default Footer;
