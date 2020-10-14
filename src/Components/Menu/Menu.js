import { Navegacao, Lista, Item, DropDownMenu } from './Menu.style';
import { Nav, NavDropdown } from 'react-bootstrap';
import React from 'react';

const Menu = ({ isIndex }) => {
  const [DropDownState, setDropDownState] = React.useState(0);

  function handleClick() {
    if (DropDownState == 1) {
      setDropDownState(0);
    } else {
      setDropDownState(1);
      setTimeout(() => {
        return setDropDownState(0);
      }, 7000);
    }
  }

  return (
    <Navegacao isIndex={isIndex}>
      {DropDownState == 1 && window.innerWidth < 1050 && (
        <div
          className="Sumir"
          onClick={() => {
            handleClick();
          }}
        ></div>
      )}
      <DropDownMenu
        onClick={() => {
          handleClick();
        }}
      >
        <div></div>
        <div></div>
        <div></div>
      </DropDownMenu>
      <h1>Transit</h1>
      <Lista DropDownState={DropDownState}>
        <Nav className="ml-auto black">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/generic">Generic</Nav.Link>
          <Nav.Link href="#link">Elements</Nav.Link>
          <Item>
            <button>Sign Up</button>
          </Item>
        </Nav>
      </Lista>
    </Navegacao>
  );
};

export default Menu;
