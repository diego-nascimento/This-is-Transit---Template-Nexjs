import styled from 'styled-components';

export const Navegacao = styled.nav`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;
  color: white;
  z-index: 999;
  background: ${(props) => (props.isIndex == 1 ? 'none' : '#222')};
  position: ${(props) => (props.isIndex == 1 ? 'absolute' : 'block')};

  @media (max-width: 1050px) {
    background: none;
    position: absolute;
  }

  .Sumir {
    display: none;
    @media (max-width: 1050px) {
      display: block;
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      z-index: 9;
    }
  }
  h1 {
    font-size: 20px;
    letter-spacing: 1px;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }

    @media (max-width: 1050px) {
      display: none;
    }
  }
`;

export const Lista = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-around;
  transition: 0.6s;

  @media (max-width: 1050px) {
    transform: ${(props) =>
      props.DropDownState === 1 ? 'translateX(0px)' : 'translateX(-240px)'};
    z-index: 10;
    flex-direction: column;
    height: 100vh;
    width: 240px;
    position: fixed;
    padding: 0px 10px;
    top: 0px;
    left: 0;
    background: white;
    justify-content: flex-start;
  }
`;

export const Item = styled.li`
  font-size: 17px;
  color: rgba(255, 255, 255, 0.4);
  transition: 0.3s;
  cursor: pointer;

  :hover {
    color: rgba(255, 255, 255, 1);
  }

  @media (max-width: 1050px) {
    height: 50px;
    display: flex;
    align-items: center;
    width: 100%;
    color: #444;
    border-top: 1px solid #444;

    :first-child {
      border: none;
    }

    :last-child {
      border: none;
    }

    :hover {
      color: #444;
    }
  }

  button {
    width: 90px;
    height: 40px;
    background: #fff;
    color: #444;
    font-size: 16px;
    border: none;
    border-radius: 50px;
    cursor: pointer;

    @media (max-width: 1050px) {
      background: #444;
      color: white;
      width: 90%;
      text-align: center;
    }
  }
`;

export const DropDownMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: rgba(144, 144, 144, 0.8);
  padding: 8px 8px;
  border-radius: 5px;
  display: none;
  cursor: pointer;

  @media (max-width: 1050px) {
    display: flex;
  }

  div {
    width: 20px;
    height: 2px;
    background: white;
    margin: 2px;
  }
`;
