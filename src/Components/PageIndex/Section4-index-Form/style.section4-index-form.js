import styled from 'styled-components';

export const FullSize = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #3dadd4;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 800px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  h2,
  p {
    color: white;
  }
`;

export const Formulario = styled.form`
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;

  input {
    height: 40px;
  }

  input,
  .textarea {
    margin-top: 20px;
    width: 100%;
    border-radius: 15px;
    border: none;
    padding: 10px 20px;
    resize: none;
  }

  div {
    display: grid;
    grid-template-columns: 1fr 1fr;
    width: 100%;
    grid-gap: 20px;

    @media (max-width: 700px) {
      grid-template-columns: 1fr;
      grid-gap: 10px;
    }
    input,
    .textarea {
      margin-top: 10px;
      width: 100%;
    }
  }
`;
