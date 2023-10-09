import styled from 'styled-components';

export const StyledNavigation = styled.nav`
  background-color: rgba(0, 0, 0, 0.8);
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const StyledLogo = styled.div`
  img {
    max-width: 335px;
    height: auto;
  }

  @media (max-width: 768px) {
    margin-bottom: 1rem;
  }
`;

export const StyledNavList = styled.ul`
  list-style: none;
  display: flex;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const StyledNavItem = styled.li`
  margin-right: 20px;

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    font-size: 16px;
    transition: color 0.3s ease-in-out;
    text-transform: uppercase;

    &:hover {
      color: rgb(225, 28, 37);
    }

    &.active {
      color: rgb(225, 28, 37);
    }
  }

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;

    a {
      font-size: 18px;
    }
  }
`;
