import styled from 'styled-components';

interface data {
    name: string
    types: string[],
}

const Card = (props: data) => {
    return (
        <Holder>
            <Photo src='https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png' />
            <Info>
                <h2>{props.name}</h2>
                <p>{props.types[0]}</p>
                {
                    props.types[1] ?
                        <p>{props.types[1]}</p>
                    :
                        <p>d</p> 
                }
            </Info>
        </Holder>
    );
}

const Holder = styled.div`
    display: inline-block;
    background-color: #dd803a;
    border-radius: 10px;
    overflow: hidden;
    transition: .3s;
    width: 100%;

    &:hover {
        background-color: #8d4d1c;
    }
`;

const Photo = styled.img`
    display: inline-block;
    height: auto;
    width: 100%;
`;

const Info = styled.div`
    
`;

export default Card;