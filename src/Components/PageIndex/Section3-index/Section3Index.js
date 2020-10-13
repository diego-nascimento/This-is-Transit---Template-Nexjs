import {
  Lista,
  Item,
  ItemImagem,
  ItemTextos,
  TextoBotao,
} from './style.section3Index';
import { Container } from 'react-bootstrap';
import Botao from '../../Blue-Button/BlueButton';

export default function Section3Index() {
  return (
    <section style={{ background: 'white' }}>
      <Container style={{ textAlign: 'center' }}>
        <h2>Consectetur adipisicing elit</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio,
          autem.
        </p>
        <Lista>
          <Item>
            <ItemImagem
              className="image"
              style={{ background: 'gray' }}
            ></ItemImagem>
            <ItemTextos>
              <h3>Loren Ipsun</h3>
              <p>Lorem ipsum dolor </p>
            </ItemTextos>
          </Item>
          <Item>
            <ItemImagem
              className="image"
              style={{ background: 'gray' }}
            ></ItemImagem>
            <ItemTextos>
              <h3>Loren Ipsun</h3>
              <p>Lorem ipsum dolor </p>
            </ItemTextos>
          </Item>
          <Item>
            <ItemImagem
              className="image"
              style={{ background: 'gray' }}
            ></ItemImagem>
            <ItemTextos>
              <h3>Loren Ipsun</h3>
              <p>Lorem ipsum dolor </p>
            </ItemTextos>
          </Item>
          <Item>
            <ItemImagem
              className="image"
              style={{ background: 'gray' }}
            ></ItemImagem>
            <ItemTextos>
              <h3>Loren Ipsun</h3>
              <p>Lorem ipsum dolor </p>
            </ItemTextos>
          </Item>
        </Lista>
        <TextoBotao>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam
            dolore illum, temporibus veritatis eligendi, aliquam, dolor enim
            itaque veniam aut eaque sequi qui quia vitae pariatur repudiandae ab
            dignissimos ex!
          </p>
          <Botao> Lorem ipsum dolor</Botao>
        </TextoBotao>
      </Container>
    </section>
  );
}
