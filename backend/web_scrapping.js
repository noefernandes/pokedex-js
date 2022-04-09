const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    await page.goto('https://www.pokemon.com/br/pokedex/giratina');

    await page.evaluate(() => {
        //Pegando nome e numero
        const element = document.querySelectorAll('.pokedex-pokemon-pagination-title');
        const nodeListNameNumber = [...element];
        const name = nodeListNameNumber[0].innerText.split(' ')[0].trim();
        const number = nodeListNameNumber[0].innerText.split(' ')[1].trim();
        
        //Pega imagem do pokemon atual
        const element2 = document.querySelectorAll('.profile-images img');
        const nodeListImage = [...element2];
        const photoURL = nodeListImage[0].src;
        
        //Pega stats (hp, attack, defense, sp atk, sp def, speed)
        const statNames = ['hp', 'attack', 'defense', 'sp_atk', 'sp_def', 'speed'];
        const element3 = document.querySelectorAll('.pokemon-stats-info.active .meter');
        const nodeListStats = [...element3];
        const statsDict = {};
        for(i = 0; i < statNames.length; i++){
            statsDict[statNames[i]] = nodeListStats[i]['attributes']['data-value']['value'];
        }
        
        //Pega as descricoes x e y
        const element4 = document.querySelectorAll('.version-descriptions.active .version-y');
        const element5 = document.querySelectorAll('.version-descriptions.active .version-x.active');
        const nodeListDescry = [...element4];
        const nodeListDescrx = [...element5];
        const descry = nodeListDescry[0].innerText.trim();
        const descrx = nodeListDescrx[0].innerText.trim();

        //Pega as caracteristicas fisicas
        const element6 = document.querySelectorAll('li .attribute-title');
        const element7 = document.querySelectorAll('li .attribute-value');
        const nodeListAttrName = [...element6];
        const nodeListAttrValue = [...element7];
        var attributesDict = {};
        
        for(i = 0; i < nodeListAttrName.length; i++){
            const name = nodeListAttrName[i].innerText.trim().toLowerCase();
            const value = nodeListAttrValue[i].innerText.trim().toLowerCase();
            if(name == 'gender')
                attributesDict[name] = [value];
            else
                attributesDict[name] = value;
            
        }

        if(nodeListAttrValue[2].children.length > 0){
            console.log('tamanho: ' + nodeListAttrValue[2].length)
            var gender = [...nodeListAttrValue[2].children].map((elem) => elem.className.split('_')[1]);
            attributesDict['gender'] = gender;
        }

        //Pega os tipos e fraquezas

        //Pega as evolucoes

        console.log(name + ': ' + number);
        console.log(photoURL);
        console.log(statsDict);
        console.log(descrx);
        console.log(descry);
        console.log(nodeListAttrName);
        console.log(nodeListAttrValue);
        console.log(attributesDict);
    });

    //await browser.close();
})();