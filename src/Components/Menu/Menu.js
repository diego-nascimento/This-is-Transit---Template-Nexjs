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
    <Navegacao isIndex>
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
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Generic</Nav.Link>
          <Nav.Link href="#link">Elements</Nav.Link>
          <NavDropdown title="Dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <Item>
            <button>Sign Up</button>
          </Item>
        </Nav>
      </Lista>
    </Navegacao>
  );
};

export default Menu;
