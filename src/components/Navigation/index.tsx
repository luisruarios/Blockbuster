import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  StyledNavigation,
  StyledLogo,
  StyledNavList,
  StyledNavItem,
  StyledCartButton,
} from './styles';

const Navigation = () => {
  return (
    <StyledNavigation>
      <StyledLogo>
        <NavLink to="/">
          <img src="/logo.png" alt="Blockbuster" />
        </NavLink>
      </StyledLogo>
      <StyledNavList>
        <StyledNavItem>
          <NavLink to="/">
            Home
          </NavLink>
        </StyledNavItem>
        <StyledNavItem>
          <NavLink to="/checkout">
            <StyledCartButton>
              <img src="/shop-icon.gif" alt="Cart" />
            </StyledCartButton>
          </NavLink>
        </StyledNavItem>
      </StyledNavList>
    </StyledNavigation>
  );
};

export default Navigation;
