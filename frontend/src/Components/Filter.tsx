import styled from 'styled-components';

const Filter = () => {
    return (
        <FilterHolder>
            <Input />
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
`;

const Input = styled.input`
    width: 100%;
    height: 40px;
    border: solid 1px;
    border-radius: 4px;
    text-align: inherit;
    background-color: white;

    &:focus {
        outline-style: solid;
        border: 1px solid black;
    }
`;

const Select = styled.div`
    max-width: 100%;
    height: 40px;
    border: solid 1px;
    border-radius: 4px;
    text-align: inherit;
    background-color: white;

    ul {
        display: none;
    }

    &:hover {
        ul {
            display: block;
            background: white;
            border-radius: 4px;

            li {
                padding: 10px;
                border-bottom: 1px solid black;
                list-style-type: none;

                a {
                    text-decoration: none;
                    color: black;
                }

                &:hover {
                    background: hsl(240, 60%, 50%);
                    
                    a {
                        color: white;
                    }
                }
            }
        }
    }
`;

export default Filter;