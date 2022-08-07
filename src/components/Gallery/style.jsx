import styled from "styled-components";

export const Container = styled.section`  
  display: flex;
  max-width: 60rem;
  justify-content:center;
  flex-wrap: wrap;
  margin: 0 auto;
`;
export const GallertContent = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);  
  max-width: 60rem;
  grid-gap: 1rem;
  padding: 1rem;
  background: #fff;  
  border-radius: 0.2rem;

  p {
    margin-bottom: 1rem;
  }

  /*break at 832px*/
  @media (max-width: 52rem) {
    grid-template-columns: repeat(2, 1fr);
  }
  /*break at 576px*/
  @media (max-width: 36rem) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
