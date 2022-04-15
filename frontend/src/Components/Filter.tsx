import styled from 'styled-components';
import MultiSelect from './MultiSelect';

const Filter = () => {
    return (
        <FilterHolder>
            <Input placeholder='Nome do Pokémon...' />
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
`;

const Input = styled.input`
    width: 100%;
    height: auto;
    border-style: none;
    border-radius: 4px;
    text-align: left;
    text-indent:20px;
    background-color: #f2f2f2;
    font-family: TekoMedium;
    font-size: 22px;

    &:focus {
        outline-style: solid;
    }
`;

export default Filter;