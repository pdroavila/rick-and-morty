class RickAndMortyAPI {
    constructor() {
        this.baseURL = 'https://rickandmortyapi.com/api/';
    }

    async fetchData(endpoint) {
        try {
            const response = await fetch(this.baseURL + endpoint);
            if (!response.ok) {
                throw new Error(`Erro na solicitação: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Ocorreu um erro:', error);
        }
    }
}

async function getCharacterInfo() {
    const api = new RickAndMortyAPI();
    const characterId = 1; // ID do personagem que você deseja obter (pode ser modificado)

    try {
        const characterData = await api.fetchData(`character/${characterId}`);
        const characterList = document.getElementById('character-list');
        const characterItem = document.createElement('li');

        if (characterData) {
            const characterImage = document.createElement('img');
            characterImage.src = characterData.image;
            characterImage.alt = characterData.name;
            
            const characterName = document.createElement('p');
            characterName.textContent = `Name: ${characterData.name}`;
            
            const characterSpecies = document.createElement('p');
            characterSpecies.textContent = `Species: ${characterData.species}`;
            
            const characterStatus = document.createElement('p');
            characterStatus.textContent = `Status: ${characterData.status}`;
            
            characterItem.appendChild(characterImage);
            characterItem.appendChild(characterName);
            characterItem.appendChild(characterSpecies);
            characterItem.appendChild(characterStatus);
            characterList.appendChild(characterItem);
        }
    } catch (error) {
        console.error('Ocorreu um erro:', error);
    }
}

getCharacterInfo();