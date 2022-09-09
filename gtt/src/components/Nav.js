import styled from "styled-components";
import {Link} from 'react-router-dom'

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link id="logo" to='/'>GTodev</Link>
      </h1>
      <ul>
        <li>
          <Link to='/aboutus'> 1. About us</Link>
        </li>
        <li>
          <Link to='/ourwork'> 2. Our Work</Link>
        </li>
        <li>
          <Link to='/contactus'> 3.Contact us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items:center;
  padding:1rem 10rem;
  background:#282828;
  a{
    color:white;
    text-decoration:none;
  }
  ul {
    display:flex;
    list-style:none;
  }
  #logo {
    font-size: 2rem;
    font-family: 'Lobster' , cursive;
    font-weight:lighter;
    border:solid 1px white;
    padding:0.4rem;
    border-radius:10px;
  } 
  li {
    padding-left:10rem;
    position:relative;
  }
`;

export default Nav;
