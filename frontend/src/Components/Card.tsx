import styled from 'styled-components';

interface data {
    id: string,
    name: string,
    types: string[]
}

const decideColor = (type: string) => {
    if(type === 'normal'){
        return '#A8A878';
    }else if(type === 'fighting'){
        return '#C03028';
    }else if(type === 'flying'){
        return '#A890F0';
    }else if(type === 'poison'){
        return '#A040A0';
    }else if(type === 'ground'){
        return '#E0C068';
    }else if(type === 'rock'){
        return '#B8A038';
    }else if(type === 'bug'){
        return '#A8B820';
    }else if(type === 'ghost'){
        return '#705898';
    }else if(type === 'steel'){
        return '#B8B8D0';
    }else if(type === 'fire'){
        return '#F08030';
    }else if(type === 'water'){
        return '#6890F0';
    }else if(type === 'grass'){
        return '#78C850';
    }else if(type === 'electric'){
        return '#F8D030';
    }else if(type === 'psychic'){
        return '#F85888';
    }else if(type === 'ice'){
        return '#98D8D8';
    }else if(type === 'dragon'){
        return '#7038F8';
    }else if(type === 'dark'){
        return '#705848';
    }else if(type === 'fairy'){
        return '#EE99AC';
    }else {
        return '#68A090';
    }
}

const resolvePath = (number: string) => {
    var base = 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/';
    if(number.length === 1){
        base += '00' + number;
    }else if(number.length === 2){
        base += '0' + number;
    }else{
        base += number;
    }
    return base + '.png';
}

const Card = (props: data) => {
    return (
        <Holder>
            <Photo src={resolvePath(props.id)} />
            <Info>
                <h2>{props.name}</h2>
                <Types>
                    <Type color={decideColor(props.types[0])}>{props.types[0]}</Type>
                    {
                        props.types[1] && props.types[0] !== props.types[1] ?
                            <Type color={decideColor(props.types[1])}>{props.types[1]}</Type>
                        :
                            <></> 
                    }
                </Types>
            </Info>
        </Holder>
    );
}

const Holder = styled.div`
    display: inline-block;
    background-color: #808080;
    border-radius: 10px;
    overflow: hidden;
    transition: .3s;
    width: 100%;
    max-height: 350px;
    font-family: TekoSemiBold;

    &:hover {
        background-color:  #595959;
    }
`;

const Photo = styled.img`
    display: inline-block;
    height: auto;
    width: 100%;
`;

const Info = styled.div`
    display: inline-block;
    width: 100%;
`;

const Types = styled.div`
    display: flex;
    justify-content: space-evenly;
`;

const Type = styled.div`
    width: 100%;
    background-color: ${props => props.color};
    text-transform: capitalize;
    font-family: TekoMedium;
    font-size: 20px;
`;

export default Card;