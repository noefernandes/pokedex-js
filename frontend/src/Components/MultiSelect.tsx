import React, { useState } from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';
import { useDispatch } from 'react-redux';
import { setFilterNames } from '../Features/pokemonSlice';

const animatedComponents = makeAnimated();

type OptionType = {
    value: string,
    label: string
}

const options: OptionType[] = [
    { value: "normal", label: "Normal" },
    { value: "fighting", label: "Fighting" },
    { value: "flying", label: "Flying" },
    { value: "poison", label: "Poison" },
    { value: "ground", label: "Ground" },
    { value: "rock", label: "Rock" },
    { value: "bug", label: "Bug" },
    { value: "ghost", label: "Ghost" },
    { value: "steel", label: "Steel" },
    { value: "fire", label: "Fire" },
    { value: "water", label: "Water" },
    { value: "grass", label: "Grass" },
    { value: "electric", label: "Electric" },
    { value: "psychic", label: "Psychic" },
    { value: "ice", label: "Ice" },
    { value: "dragon", label: "Dragon" },
    { value: "dark", label: "Dark" },
    { value: "fairy", label: "Fairy" },
    { value: "???", label: "???" }
  ];
  
  const customStyles = {
    option: (provided: any, state: any) => ({
      ...provided,
      borderBottom: '1px dotted pink',
      color: state.isSelected ? 'red' : 'blue',
    }),
    control: (provided: any, state: any) => ({
        ...provided,
        height: 'auto',
        backgroundColor: '#f2f2f2',
        fontSize: 20,
        textAlign: 'left'
    }),
    multiValue: (provided: any, state: any) => ({
        ...provided,
        backgroundColor: '#808080',
        color: 'white',
        height: 30,
    }),
  }

const MultiSelect = () => {
    const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

    const dispatch = useDispatch();

    const handleChange = (option: any) => {
        const names = option.map((el: any) => el.value);
        dispatch(setFilterNames({filterNames: names }));
    };

    return <Select 
            defaultValue={[]}
            components={animatedComponents}
            isMulti
            options={options}
            styles={customStyles}
            className="select"
            placeholder='Tipo...'
            onChange={(item) => handleChange(item)}
        />
}

export default MultiSelect;

