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

export const MainMenu = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  padding-right: 0.5rem;

  .menu {
    display: flex;
  }
  
  .search-icon{
    width: 20px;
    
    padding: 0.5rem;
  }

  .menu li a {
    text-decoration: none;
    color: #696767;
    font-weight: bold;
    padding: 1rem;
    height: 2rem;

    transition: filter 0.2s;

    &:hover {
      filter: brightness(0.9);
    }
  }
`;
