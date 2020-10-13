import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`

*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  
}

body{
  font-family: 'Raleway', sans-serif;
  width: 100%;
}


#__next {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
}

ul, li, a {
  text-decoration: none;
  list-style: none;
}

h2{
  font-size: 3.5rem;
  color: #474747;
  font-weight: bold;
}

h3{
  font-size: 2rem;
  color: white;
}

p{
  font-size: 1.2rem;
  color: #858585;
}

a{
  font-size: 16px;
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
}

section{
  padding: 70px 0px;
}



`;
