import styled from "styled-components";

export const StyledPagination = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 8% 0 4%;
  backdrop-filter: blur(5px);
  padding: 10px;
  border-radius: 10px;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }

  button {
    background-color: #860a04;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 8px 16px;
    margin: 0 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;
    font-size: 25px;
    outline: none;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

    &:hover {
      background-color: #0c090a;
    }

    &:disabled {
      cursor: not-allowed;
      color: black;
      background-color: #ccc;
    }
  }

  span {
    font-size: 25px;
    color: #fff;
    margin: 0 10px;
  }
`;
