import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  h1 {
    font-size: 40px;
    font-family: "Berkshire Swash", cursive;
    height: 80px;
    margin-top: 40px;
  }
`;
const BackBtn = styled.button`
  width: 100px;
  height: 50px;
  border: 1px solid tomato;
  border-radius: 30px;
  font-size: 40px;
  &:hover {
    cursor: pointer;
    border: 0;
    background-color: tomato;
    color: white;
  }
`;

function Header() {
  const { pathname } = useLocation();
  return (
    <Container>
      <h1>Disney Characters</h1>
      {pathname !== "/" && (
        <Link to={"/"}>
          <BackBtn>&larr;</BackBtn>
        </Link>
      )}
    </Container>
  );
}
export default Header;
