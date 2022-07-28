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
  margin: 1rem auto 1rem auto;

  img {
    width: 50px;
    height: 40px;    
  }

  h1 {
    font-size: 2rem;
    margin-bottom: 0.8rem;
    font-family: "Bevan";
  }

  table {
    width: 100%;
    margin-top: 2rem;

    th {
      color: #969cb3;
      font-weight: 600;
      padding: 0 2rem;
      text-align: left;
      line-height: 1.5rem;
      border-bottom: solid 1px #969cb3;
    }
    .scissors{
    width: 40px;
    height: 30px;
    padding: 1rem;
    }
    .scissors img{
      width: 30px;
    height: 20px;
    }

    td {
      padding: 1rem 0;
      border: 0;
      background: #fff;
      color: #969cb3;
      border-radius: 0.25rem;
    }
    td:nth-child(3) {
      padding: 0 2rem;
    }
    tr:nth-child(6){
      border-bottom: solid 1px #969cb3;
    }
  }
`;
