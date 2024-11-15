document.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();

function initializeFetch() { //created fetch request
    fetch('/monsters.json')
    .then(resp => resp.json())
    .then(data => {
        console.log(data);
        const monsterNameArray = data.monsters.map(monster => monster.name);
        const monsterAgeArray = data.monsters.map(monster => monster.age);
        const monsterDescArray = data.monsters.map(monster => monster.description);
        const monsterIdArray = data.monsters.map(monster => monster.id);
        console.log(monsterNameArray);        
    })
    .catch(error => console.error('Error:', error))
    
}
initializeFetch(); //calling the fetch and its data into use

})

