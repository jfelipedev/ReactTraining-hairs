import styled from "styled-components";

export const MenuContent = styled.nav`
  background-color: #fff;
  border-radius: 0.2rem;
  margin: 1rem auto 1rem auto;
  max-width: 58rem;
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const MainMenu = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding-right: 0.5rem;
  list-style: none;
  text-decoration: none;
  gap: 1.1rem;

  .menu {
    display: flex;
  }

  input {
    border: 0;
    border-bottom: 1px solid #696767;
    padding-left: 20px;
  }

  input:focus {
    border: 0;
    outline: none;
    border-bottom: 1px solid lightgrey;
    padding-left: 20px;
  }

  .search-icon {
    position: absolute;
  }

  .menu li a {
    text-decoration: none;
    color: #696767;
    font-weight: bold;
    padding: 1rem;    
    background: white;
    border-radius: 0.5rem;  

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
