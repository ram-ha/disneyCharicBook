import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchCharacterList } from "../api";
import styled from "styled-components";

const Ul = styled.ul`
  display: grid;
  grid-template-columns: 4fr 4fr 4fr 4fr;
  gap: 1rem;
  padding: 0;
`;
const Li = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  a {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 30px 25px;
    border-radius: 10px;
    transition: all 0.2s ease-in-out;
    &:hover {
      color: black;
      background-color: white;
    }
  }
  span {
    margin-top: 12px;
    text-align: center;
    width: 120px;
  }
`;
const Loader = styled.span`
  text-align: center;
  display: block;
`;
const Img = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

interface ICharacter {
  id: number;
  name: string;
  imageUrl: string;
}

function Home() {
  const { isLoading, data } = useQuery<ICharacter[]>(
    ["Charaters"],
    fetchCharacterList,
  );
  const characterData = data?.slice(0, 100);

  return (
    <>
      {isLoading ? (
        <Loader> Loading..... </Loader>
      ) : (
        <Ul>
          {characterData?.map((item) => (
            <Li key={item.id}>
              <Link to={`/character/${item.id}`}>
                <Img src={item.imageUrl} />
                <span>{item.name}</span>
              </Link>
            </Li>
          ))}
        </Ul>
      )}
    </>
  );
}

export default Home;
