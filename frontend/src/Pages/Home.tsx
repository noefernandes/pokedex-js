import styled, { createGlobalStyle } from 'styled-components';
import { Fragment, useEffect, useState } from 'react';
import Filter from '../Components/Filter';
import Card from '../Components/Card'; 
import api from '../Service/api'; 

const Home = () => {

    const [pokemonList, setPokemonList] = useState<any[]>([]);
    
    useEffect(() => {
        api.get('/pokemon').then((response) => {
            setPokemonList(response.data);
        });
    }, []);

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
                        {pokemonList.map(pokemon => {
                          return <Card name={pokemon.name} types={[pokemon.type1, pokemon.type2]}/> /*<Paragraph> <p key={pokemon.pokedex_number}>{pokemon.name}</p> </Paragraph>*/;
                        })}
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
    }

    body {
        background-color: #4d4dff;
        z-index: -2;
    }
`;

const Container = styled.section`
    display: flex;
    flex-direction: column;
    text-align: center;
    //min-width: 550px;
`;

const Content = styled.div`
    margin-bottom: 10vw;
    width: 100%;
    position: relative;
    min-height: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
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
    width: 70%;
    background-color: white;
    margin-top: 40px;
    //z-index: -1;
    border-style: none;
    border-radius: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 50px;
    padding: 50px;
`;

const Paragraph = styled.div`

`;


export default Home;