const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.pokemon.com/br/pokedex/charizard');
    await page.screenshot({ path: 'example.png' });

    await page.evaluate(() => {
        //Pegando nome e numero
        const element = document.querySelectorAll('.pokedex-pokemon-pagination-title');
        const nodeList = [...element];
        const name = nodeList[0].innerText.split(' ')[0].trim();
        const number = nodeList[0].innerText.split(' ')[1].trim();
        
        //Pega imagem do pokemon atual
        const element2 = document.querySelectorAll('.profile-images img');
        const nodeList2 = [...element2];
        const photoURL = nodeList2[0].src;
        
        //Pega stats (hp, attack, defense, sp atk, sp def, speed)
        const statNames = ['hp', 'attack', 'defense', 'sp_atk', 'sp_def', 'speed'];
        const element3 = document.querySelectorAll('.pokemon-stats-info.active .meter');
        const nodeList3 = [...element3];
        const statsDict = {};
        for(i = 0; i < statNames.length; i++){
            statsDict[statNames[i]] = nodeList3[i]['attributes']['data-value']['value'];
        }
        
        //Pega as descricoes x e y

        //Pega as caracteristicas fisicas

        //Pega os tipos e fraquezas

        //Pega as evolucoes
    });

    //await browser.close();
})();