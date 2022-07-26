import React, { FC, PropsWithChildren } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const Header = styled.header`
  padding: 40px 0px;
  display: flex;
  justify-content: center;
`;

const Logo = styled.a`
  text-decoration: none;
  color: #000000;
  cursor: pointer;
`;

const LogoHeading = styled.h1`
  font-size: 6.4rem;
  font-weight: 700;
  line-height: 7.8rem;
`;

const Main = styled.main`
  
`;

const MainLayout: FC<PropsWithChildren> = ({ children }) => (
  <Container>
    <Header>
      <Logo href="/">
        <LogoHeading>
          ONLY.
        </LogoHeading>
      </Logo>
    </Header>
    <Main>
      {children}
    </Main>
  </Container>
);

export default MainLayout;
