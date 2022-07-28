import styled from "styled-components";
export const Container = styled.div`
  height: 150px;
  width: 100px;
  background-color: blue;
`;
export const styledLink = styled.a`
  height: 50px;
  width: 100px;
  padding: 10px;
  background-color: red;
  color: black;
  border-radius: 100px;
`;
const showMoreBtn = styled.button`
height: 40px;
width: 100px
background-color: orange;
padding: 10px;
`;
export const styledshowMoreBtn = styled(showMoreBtn);

// export default Container;
