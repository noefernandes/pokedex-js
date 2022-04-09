const express = require('express');
const router = express.Router();
const readCSV = require('./utils');

var pokemonList = null;

readCSV().then(data => {
    pokemonList = data; 
}) ;

router.get('/pokemon', (req, res) => { 
    const filters = req.body.filters;

    const filteredList = pokemonList.filter(pokemon => {
        let result = true;
        for(let key in filters) {
            if (pokemon[key] !== filters[key]){
                result = false;
                break;
            }
        }

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