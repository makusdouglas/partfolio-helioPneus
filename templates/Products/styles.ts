import styled from "styled-components";

export const Container = styled.div`
  margin-top: 100px;
  & > #main-title {
    display: flex;
    /* justify-content: space-between; */
    margin-left: 10px;
    margin-right: 10px;
  }

  h1 {
    color: ${(props) => props.theme.color.primary};
    margin-right: 20px;
  }
`;
export const GroupContainer = styled.div``;
export const GroupTitleContainer = styled.div`
  margin-top: 40px;
  margin-left: 10px;
  margin-right: 10px;
  h2 {
    color: #fff;
  }
`;
export const CardsContainer = styled.div`
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  padding: 20px;

  @media (max-width: 990px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
