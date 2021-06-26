import styled from "styled-components";

export const Container = styled.div`
  padding: 80px 15px;
  h1 {
    padding: 0;
  }
  h5 {
    padding: 10px 0 5px 0;
  }
`;

export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 15px;
  padding-bottom: 30px;
`;
