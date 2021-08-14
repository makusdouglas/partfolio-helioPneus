import styled from "styled-components";
const Vector = "/assets/pneu-vector.png";

export const Container = styled.div`
  min-height: 550px;

  background: url(${Vector}) no-repeat bottom right;
  background-size: 700px 400px;

  section {
    max-width: 400px;
    margin-left: 30px;
    margin-right: 30px;

    p {
      text-align: justify;
    }
  }

  h1 {
    font-family: "Spartan", sans-serif;
    font-weight: 500;
  }

  @media (max-width: 900px) {
    min-height: 600px;
  }

  @media (max-width: 520px) {
    background-size: 500px 300px;

    section {
      margin-left: 10px;
      margin-right: 10px;
    }
  }
`;
