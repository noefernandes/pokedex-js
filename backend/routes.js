const express = require('express');
const router = express.Router();
const readCSV = require('./utils');

var pokemonList = null;

readCSV().then(data => {
    pokemonList = data; 
}) ;

router.get('/pokemon', (req, res) => { 
    const filters = req.query.filters;

    console.log(filters)

    const filteredList = pokemonList.filter(pokemon => {
        let result = true;
        if(filters[0] !== pokemon['type1'] && filters[0] !== pokemon['type2'] && filters[1] === 'undefined' && filters[0] !== 'undefined')
            result = false;
        

        return result;
    });

    res.send(filteredList);
});

router.get('/pokemon/:id', async (req, res)  => {
    const { id } = req.params;
    const pokemon = pokemonList.filter(pokemon => pokemon.name === id);
    res.send(pokemon);
});

module.exports = router;