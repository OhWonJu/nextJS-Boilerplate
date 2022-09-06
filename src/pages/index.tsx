import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styled from "styled-components";

const Home: NextPage = () => {
  return (
    <Container>
      <Wrapper>
        <div className="title">
          NEXTJS TYPESCRIPT STYLEDCOMPONENT BOILERPLATE.
        </div>
      </Wrapper>

      <Footer></Footer>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex: 5;
  justify-content: center;
  align-items: center;
  .title {
    font-size: 2.5rem;
    font-weight: 900;
  }
`;
const Footer = styled.footer`
  display: flex;
  flex: 1;
  width: 100%;
`;

export default Home;
