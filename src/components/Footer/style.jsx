import styled from "styled-components";

export const Container = styled.footer`
  display: grid;
  color: #fff;
  font-family: "Poppins";
  grid-template-columns: 37.5% 25% 37.5%;
  width: 100%;

  text-align: left;
  align-items: center;

  .timeStamp {
    font-size: 0.7rem;
  }

  .tel-icon {
  }
  .logo {
    text-align: center;
  }
  span {
    display: block;
    margin-bottom: 0.6rem;
    font-size: 1rem;
  }

  div {
    padding: 1rem;
    border-right: 1px solid white;
    text-align: center;
  }
  h3 {
    font-size: 1.3rem;
    margin: 2rem 0 1rem;
    color: #fff;
  }
  p {
    color: #969cb3;
    font-size: 0.9rem;
  }

  div img {
    height: 150px;
    width: 150px;
    border-radius: 1rem;
    margin-bottom: 0.3rem;
  }

  @media (max-width: 48.75rem) {
    grid-template-columns: repeat(2, 1fr);
    align-items: start;

    h3{
        margin: 0 0 1rem;
    }

    div {
      border: 0;
      padding: 2rem 1rem;
    }

    .map {
      grid-column: 2;
      grid-row: 1/3
    }
  }

  @media (max-width: 26.5rem) {
    grid-template-columns: 1fr;
    align-items: start;
    div {
      padding: 1rem;
      text-align: center;
      border-bottom: 1px solid white;
    }
    .map {
      grid-column: 1;
      grid-row: 3;
    }
  }
`;
