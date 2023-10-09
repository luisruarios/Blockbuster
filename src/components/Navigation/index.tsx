import React from 'react';
import { NavLink } from 'react-router-dom'; // You may need to install react-router-dom if not already done
import {
  StyledNavigation,
  StyledLogo,
  StyledNavList,
  StyledNavItem,
} from './styles'; // Import styled components

const Navigation = () => {
  return (
    <StyledNavigation>
      <StyledLogo>
        {/* Add your logo image here */}
        <img src="/logo.png" alt="Logo" />
      </StyledLogo>
      <StyledNavList>
        <StyledNavItem>
          <NavLink to="/">
            Home
          </NavLink>
        </StyledNavItem>
        <StyledNavItem>
          <NavLink to="/about">
            About
          </NavLink>
        </StyledNavItem>
        <StyledNavItem>
          <NavLink to="/contact">
            Contact
          </NavLink>
        </StyledNavItem>
      </StyledNavList>
    </StyledNavigation>
  );
};

export default Navigation;
