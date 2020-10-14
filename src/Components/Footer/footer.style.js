import styled from 'styled-components';

export const FullSize = styled.footer`
  background: #383b43;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  max-width: 1300px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export const Grid1 = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  border-bottom: 1px solid white;
  padding: 20px 25px;
  width: 100%;

  @media (max-width: 1300px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex: 1;

  a {
    color: rgba(255, 255, 255, 0.6);
  }

  h3 {
    margin: 20px 0px;
    font-size: 1.5rem;
  }

  a {
    padding: 8px 0px;
    font-size: 1rem;
    text-align: left;

    :hover {
      text-decoration: underline;
    }
  }
`;

export const Grid2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  flex-direction: row;
  color: #858585;
  padding: 40px 0px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

export const ListaMensagens = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: left;
  justify-content: space-between;

  @media (max-width: 800px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  li {
    margin: 0px 15px;
  }
`;

export const ListaRedeSociais = styled.ul`
  display: flex;
  margin: 20px 0px;
  align-items: center;

  li {
    margin-left: 15px;
    border-radius: 100%;
    padding: 10px 10px;
    background: red;
  }

  .icon {
    height: 25px;
    width: 25px;
    color: white;
  }
`;
