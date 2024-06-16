# react-portfolio-component-library

## 설치

`$ npm install react-portfolio-component-library`

## 컴포넌트 구조

```
import {
  Header,
  Banner,
  Profile,
  Visual,
  ListNormal,
  ListHorizontal,
  ListCard,
  ListLego,
  Intro,
  MainGroup,
  PortfolioGroup,
} from "react-portfolio-component-library";

function App() {
  return (
    <PortfolioGroup>
      <Header />
      <MainGroup>
        <Visual />
        <Intro />
        <ListNormal />
        <ListHorizontal />
        <Banner />
        <ListCard />
        <ListLego />
        <Profile />
      </MainGroup>
    </PortfolioGroup>
  );
}

export default App;

```
