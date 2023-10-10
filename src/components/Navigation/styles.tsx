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
    margin: 0 auto;
    img {
      max-width: 200px;
    }
  }
`;

export const StyledNavList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
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

export const StyledCartButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background-color: white;
  border-radius: 50%;
  cursor: pointer;
  transition: all .3s ease;

  img {
    width: 20px;
    height: 20px;
  }
  &:hover {
    transform: scale(1.3);
  }
`;

export const StyledHamburger = styled.div`
  display: none; /* Hidden by default on larger screens */
  flex-direction: column;
  cursor: pointer;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
    padding: 0;
    margin-left: auto;

    div {
      width: 30px;
      height: 4px;
      background-color: #fff;
      margin: 2px 0;
    }
  }
`;

export const StyledMobileMenu = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 75px;
  right: 0;
  background-color: #000;
  border-radius: 5px;
  z-index: 1;
  width: 100%;

  li {
    text-align: right;
    a {
      text-decoration: none;
      color: #fff;
      font-size: 18px;
      padding: 20px 10px;
      display: block;
      transition: background-color 0.3s ease-in-out;

      &:hover {
        color: #fff;
        background-color: #4b0202;
      }
    }
  }

  @media (min-width: 768px) {
    display: none;
  }
`;
