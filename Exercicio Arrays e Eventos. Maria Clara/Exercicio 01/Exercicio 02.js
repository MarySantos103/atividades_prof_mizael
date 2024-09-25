const items= [
    {id: 1,name: 'Item 1', description: 'Descrição do Item 1'},
    {id: 2,name: 'Item 2', description: 'Descrição do item 2'},
    {id: 3,name: 'Item 3', description: 'Descrição do Item 3'},
    {id: 4,name: 'Item 4', description: 'Descrição do Item 4'},
];
document.getElementById('filterButton').addEventListener('click', () =>{
    const inputValue = document.getElementById('searchInput').value.tolowerCase();
    const filteredItems = items.filter(item =>
        item.name.toLowerCase().includes(inputValue)||
        item.description.toLowerCase().includes(inputValue)
    );

    const resultList = document.getElementById('resultList');
    resultList.innerHTML = filteredItems.length
       ?filteredItems.map(item => '<li>${item.name}: ${item.description}</li>').join('')
        : '<li>Nenhum item encontrado.</li.';
});