import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "./components/Header";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function App() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}
