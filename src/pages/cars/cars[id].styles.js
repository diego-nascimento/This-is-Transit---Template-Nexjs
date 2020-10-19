import styled from 'styled-components';

export const Item = styled.section`
  position: relative;
  margin: 100px auto;
  width: 100%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 10px;

  img {
    width: 80%;
    margin: 20px 0px;
    border-radius: 15px;
  }

  h1 {
    font-weight: 700;
  }

  p {
    text-align: justify;
  }
`;

export const Botao = styled.button`
  position: absolute;
  right: 10px;
  width: 100px;
  border-radius: 15px;
  border: 0;
  background: #222;
  color: white;
  height: 30px;
`;
