import styled, { createGlobalStyle } from 'styled-components';
import { Fragment } from 'react';
import Filter from '../Components/Filter';

const Home = () => {
    return (
    <Fragment>
        <GlobalStyle />
        <Container>
            <Content>
                <Logo>
                    <img src="https://fontmeme.com/permalink/220410/1a1f29c701177dd30989f60fbfeae75e.png" alt="logo"></img>
                </Logo>
                <Filter />
                <CardsHolder>

                </CardsHolder>
            </Content>
        </Container>
    </Fragment>
    );
  };

const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    /* background-color: #4d4dff; */
}
`;

const Container = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    height: 100vh;
    background-color: #4d4dff;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100vh;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding: 80px 40px;
    height: 100%;
`;

const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;

    img {
        width: 60%;
        background-repeat: no-repeat;
    }
`;

const CardsHolder = styled.div`
    
`;

export default Home;