import styled from 'styled-components';

export const Container = styled.section`
  width: 100vw;
  height: 100vh;
  background-image: url('/trafego.jpg');
  background-position: center center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-repeat: no-repeat;
  position: relative;

  div {
    z-index: 998;
    text-align: center;

    h1 {
      font-size: 4rem;
      margin-bottom: 20px;

      @media (max-width: 500px) {
        font-size: 3rem;
      }
    }

    p {
      font-size: 2rem;

      @media (max-width: 500px) {
        font-size: 1.5rem;
      }
    }
  }

  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.7);
  }
`;
