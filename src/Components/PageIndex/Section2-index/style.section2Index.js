import styled from 'styled-components';

export const Lista = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  padding: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  border: 1px solid rgba(0, 0, 0, 0.3);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 400px;
  background: white;
  flex-direction: column;

  @media (max-width: 1200px) {
    padding: 20px 40px;
  }

  div {
    width: 120px;
    height: 120px;
    border-radius: 100%;
  }

  h3 {
    font-size: 1.3em;
    color: #474747;
    margin: 20px;
  }

  p {
    font-size: 1em;
    line-height: 24px;
  }
`;
