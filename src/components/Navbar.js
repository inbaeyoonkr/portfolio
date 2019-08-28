import React, { Component } from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from 'react-scroll';

const NavContainer = styled.nav`
  background-color: white;
  /* background-color: var(--off-white); // 투명 느낌*/
  position: sticky;
  top: 0px;
  width: 100%;
  height: 50px;
  z-index: 1000;
  box-shadow: 0 4px 14px 0 rgba(0, 0, 0, 0.15);
`;

const NavLogo = styled.span`
  &:hover {
    cursor: pointer;
  }
`;

const NavContent = styled.div`
  max-width: 900px;
  padding: 0rem 3rem;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

const NavItems = styled.ul``;

const NavItem = styled.li`
  display: inline;
  margin-left: 2rem;
  color: #333;

  &:hover {
    color: black;
    cursor: pointer;
  }
`;

export default class Navbar extends Component {
  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <NavContainer>
        <NavContent>
          <NavLogo onClick={this.scrollToTop}>HELLO I'M INBAE 🤠</NavLogo>

          <NavItems>
            <NavItem>
              <Link
                activeClass='active'
                to='section1'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 1
              </Link>
            </NavItem>
            <NavItem>
              <Link
                activeClass='active'
                to='section2'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 2
              </Link>
            </NavItem>
            <NavItem>
              <Link
                activeClass='active'
                to='section3'
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Section 3
              </Link>
            </NavItem>
          </NavItems>
        </NavContent>
      </NavContainer>
    );
  }
}
