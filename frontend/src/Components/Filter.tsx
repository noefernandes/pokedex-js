import styled from 'styled-components';

const Filter = () => {
    return (
        <FilterHolder>
            <Input placeholder='Nome do Pokémon' />
            <Select>
                <ul>
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                </ul>
            </Select>
            <Select>
                <ul>
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                </ul>
            </Select>
            <Select>
                <ul>
                    <li><a href="#">Item 1</a></li>
                    <li><a href="#">Item 2</a></li>
                    <li><a href="#">Item 3</a></li>
                </ul>    
            </Select> 
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
    height: 40px;
    border: solid 1px;
    border-radius: 4px;
    text-align: left;
    text-indent:20px;
    background-color: #f2f2f2;

    &:focus {
        outline-style: solid;
        border: 1px solid black;
    }
`;

const Select = styled.div`
    width: 100%;
    height: 40px;
    border-style: none;
    border-radius: 4px;
    text-align: inherit;
    background-color: #f2f2f2;

    ul {
        display: none;
        border-radius: inherit;
        width: 100%;
    }

    &:hover {
        ul {
            display: block;
            background: #f2f2f2;

            li {
                padding: 10px;
                border-bottom: 1px solid black;
                list-style-type: none;
                width: 100%;

                a {
                    text-decoration: none;
                    color: #262626;
                }

                &:hover {
                    background: hsl(240, 60%, 50%);
                    
                    a {
                        color: #f2f2f2;
                    }
                }
            }
        }
    }
`;

export default Filter;