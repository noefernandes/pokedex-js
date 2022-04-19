import styled from 'styled-components';
import MultiSelect from './MultiSelect';
import { useDispatch } from 'react-redux';
import { setInputName } from '../Features/pokemonSlice';

const Filter = () => {

    const dispatch = useDispatch();

    const handleChange = (e: React.ChangeEvent) => {
        const target = e.target as HTMLTextAreaElement;
        console.log(target.value);
        dispatch(setInputName({ inputName: target.value }));
    }

    return (
        <FilterHolder>
            <Input 
                placeholder='Nome do Pokémon...' 
                onChange={(item) => handleChange(item)}
            />
            <MultiSelect />
        </FilterHolder>
    );
}

const FilterHolder = styled.div`
    width: 70%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 8px;
    z-index: 1;

    @media(max-width: 678px){
        display: block;
    }
`;

const Input = styled.input`
    width: 100%;
    height: auto;
    border-style: none;
    border-radius: 4px;
    text-align: left;
    text-indent: 10px;
    background-color: #f2f2f2;
    font-family: TekoMedium;
    font-size: 22px;

    &:focus {
        outline-style: solid;
    }

    @media(max-width: 678px){
        height: 40px;
        margin-bottom: 10px;
    }
`;

export default Filter;