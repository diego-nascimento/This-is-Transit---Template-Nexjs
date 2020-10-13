import { Lista, Item } from './style.section2Index';
import { Container } from 'react-bootstrap';

export default function Section2Index() {
  return (
    <section style={{ background: 'rgba(0, 0, 0, 0.05)' }}>
      <Container style={{ textAlign: 'center' }}>
        <h2>Consectetur adipisicing elit</h2>
        <p>Lorem ipsum dolor sit amet, delectus consequatur, similique quia!</p>
        <Lista>
          <Item>
            <div style={{ background: '#3dadd4' }}></div>
            <h3>Adipisicing elit totam</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim
              quam consectetur quibusdam magni minus aut modi aliquid.
            </p>
          </Item>
          <Item>
            <div style={{ background: '#add43c' }}></div>
            <h3>Consectetur adipisicing</h3>
            <p>
              orem ipsum dolor sit amet, consectetur adipisicing elit.
              Laudantium ullam consequatur repellat debitis maxime.
            </p>
          </Item>
          <Item>
            <div style={{ background: '#d43c61' }}></div>
            <h3>Lorem ipsum dolor</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque
              eaque eveniet, nesciunt molestias. Ipsam, voluptate vero.
            </p>
          </Item>
        </Lista>
      </Container>
    </section>
  );
}
