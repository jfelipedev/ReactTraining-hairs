import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  justify-items: center;
  width: 100%;
  margin: 2rem auto 0 auto;
  background: #fff;
  padding-top: 1rem;    
`;

export const ContainerContent = styled.div`
  display: grid;
  grid-template-columns: 0.7fr 0.5fr;
  max-width: 70rem;

  div {
    display: grid;
    padding: 1rem;
    margin: 0 auto;
    align-items: initial;
    text-align: center;
    
  }
  h1 {
    font-size: 2rem;
    margin-bottom: 0.8rem;
    font-family: 'Bevan';
  }
  p{
    line-height: 1.6rem;
  }
  img {
    border-radius: 2rem; 
    box-shadow: 2px 2px 0.7em #888;
  }
  div:nth-child(1){
    align-items: flex-end;
  }

  /* break at 800px */
  @media (max-width: 50rem) {
    grid-template-columns: 43rem;
    h1{
      text-align: center;       
    }
  } 

/*break at 600px*/
  @media (max-width: 37.5rem) {
    grid-template-columns: 30rem;
  }
  /*break at 420px*/
    @media (max-width: 26.25rem) {
    grid-template-columns: 22rem;
  }
/*break at 350px*/
  @media (max-width: 21.875rem) {
    grid-template-columns: 18rem;
    img{
      width: 99%;
    }
  }`;
