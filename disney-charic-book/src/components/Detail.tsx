import { useQuery } from "@tanstack/react-query";
import { fetchDetails } from "../api";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;
  h1 {
    font-size: 50px;
    margin-top: 20px;
  }
`;

const Img = styled.img`
  width: 300px;
  height: 300px;
  border-radius: 50%;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Tags = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 30px;
`;

const Tag = styled.li`
  background-color: white;
  border-radius: 10px;
  padding: 10px 30px 20px;
  margin-bottom: 10px;
  color: black;
  width: fit-content;
  height: 50px;
  font-size: 30px;
  text-align: center;
`;

interface IDetail {
  id: number;
  films: string[];
  name: string;
  imageUrl: string;
  sourceUrl: string;
}

function Detail() {
  const { charicId } = useParams();
  const { isLoading, data } = useQuery<IDetail>(["Detail"], () =>
    fetchDetails(charicId as string),
  );
  console.log(charicId);
  return (
    <>
      {isLoading ? (
        <Loader> Loading..... </Loader>
      ) : (
        <>
          <Wrapper>
            <Img src={data?.imageUrl} />
            <h1>{data?.name}'s Films</h1>
          </Wrapper>
          <Tags>
            {data?.films?.map((item, index) => <Tag key={index}>{item}</Tag>)}
          </Tags>
        </>
      )}
    </>
  );
}

export default Detail;
