import React from 'react';
import { Container, FullSize, Formulario } from './style.section4-index-form';
import Botao from '../../Blue-Button/BlueButton';

export default function Section4Index() {
  return (
    <FullSize>
      <Container>
        <div>
          <h2>Consectetur adipisicing elit</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Distinctio, autem.
          </p>
        </div>
        <Formulario>
          <div>
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
          </div>
          <textarea
            placeholder="Message"
            className="textarea"
            name=""
            id=""
            cols="30"
            rows="10"
          ></textarea>
          <Botao backgroundColor="#383d43" borderRadius="50px">
            Send Message
          </Botao>
        </Formulario>
      </Container>
    </FullSize>
  );
}
