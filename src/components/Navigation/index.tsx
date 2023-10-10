import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
  StyledNavigation,
  StyledLogo,
  StyledNavList,
  StyledNavItem,
  StyledCartButton,
  StyledHamburger,
  StyledMobileMenu,
} from './styles';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <StyledNavigation>
      <StyledLogo>
        <NavLink to="/">
          <img src="/logo.png" alt="Blockbuster" />
        </NavLink>
      </StyledLogo>
      <StyledHamburger onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </StyledHamburger>
      <StyledNavList>
        <StyledNavItem>
          <NavLink to="/">Home</NavLink>
        </StyledNavItem>
        <StyledNavItem>
          <NavLink to="/checkout">
            <StyledCartButton>
              <img src="/shop-icon.gif" alt="Cart" />
            </StyledCartButton>
          </NavLink>
        </StyledNavItem>
      </StyledNavList>
      {isMenuOpen && (
        <StyledMobileMenu>
          <StyledNavItem>
            <NavLink to="/">Home</NavLink>
          </StyledNavItem>
          <StyledNavItem>
            <NavLink to="/checkout">Checkout</NavLink>
          </StyledNavItem>
        </StyledMobileMenu>
      )}
    </StyledNavigation>
  );
};

export default Navigation;
