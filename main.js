const item=document.getElementById('userinput')
const list=document.querySelector('ul')
document.getElementById('enter').addEventListener('click', addItem)
item.addEventListener('keydown', addItem2) 



function addItem() {
    let listItem = document.createElement('li')
    let itemText=document.createTextNode(`${item.value}`)
    listItem.appendChild(itemText)
    list.appendChild(listItem)
}
function addItem2() {
    if (event.keyCode == 13) {
        let listItem = document.createElement('li')
        let itemText = document.createTextNode(`${item.value}`)
        listItem.appendChild(itemText)
        list.appendChild(listItem)
    }
}


