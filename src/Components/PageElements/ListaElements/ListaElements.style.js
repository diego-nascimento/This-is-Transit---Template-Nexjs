import styled from 'styled-components';

export const Lista = styled.ul`
  display: grid;
  width: 80%;
  grid-template-columns: repeat(3, 1fr);
  margin-top: 20px;
  grid-gap: 30px;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  width: 100%;
  background: #eee;
  border-radius: 15px;
  overflow: hidden;
  padding:20px 10px;
  -webkit-box-shadow: 0px 1px 10px 2px rgba(87, 87, 87, 1);
  -moz-box-shadow: 0px 1px 10px 2px rgba(87, 87, 87, 1);
  box-shadow: 0px 1px 10px 2px rgba(87, 87, 87, 1);

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    }
  }

  h3 {
    margin-top: 10px;
    color: black;
    font-size: 1.6rem;
    font-weight: 700;
  }

  p {
    color: black;
  }

  img {
    width: 100%;
    border-radius: 15px;
  }
`;
