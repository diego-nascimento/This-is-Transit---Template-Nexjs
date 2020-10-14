import styled from 'styled-components';

export const Lista = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border-top: 1px solid rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid rgba(0, 0, 0, 0.3);
  width: 100%;
  justify-content: center;
  align-items: center;
  grid-gap: 10px;
  margin-top: 50px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Item = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px 5px;
`;

export const ItemImagem = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 100%;
  background: gray;
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-right: 10px;
`;

export const ItemTextos = styled.div`
  text-align: left;

  h3 {
    font-size: 1.3em;
    color: #474747;
    font-weight: bold;
  }

  p {
    font-size: 1em;
    line-height: 24px;
  }
`;

export const TextoBotao = styled.section`
  width: 100%;

  p {
    font-size: 1.2rem;
  }
`;
