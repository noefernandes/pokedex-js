const express = require('express');
const router = express.Router();
const readCSV = require('./utils');

var pokemonList = null;

readCSV().then(data => {
    pokemonList = data; 
}) ;

router.get('/pokemon', (req, res) => { 
    const filters = req.query.filters;
    const inputName = req.query.inputName;

    const filteredList = pokemonList.filter(pokemon => {
        let result = true;
        if(filters[0] !== pokemon['type1'] && filters[0] !== pokemon['type2'] && filters[1] === 'undefined' && filters[0] !== 'undefined')
            result = false;
        else if((filters[0] !== 'undefined' && filters[1] !== 'undefined') && 
                ((filters[0] !== pokemon['type1'] && filters[0] !== pokemon['type2']) || 
                (filters[1] !== pokemon['type1'] && filters[1] !== pokemon['type2'])))
            result = false;
        
        return result;
    });

    pokemon = filteredList.filter(pokemon => pokemon.name.toLowerCase().startsWith(inputName.toLowerCase()));

    res.send(pokemon);
});

module.exports = router;