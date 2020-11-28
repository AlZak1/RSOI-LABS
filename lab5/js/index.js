let name = document.querySelector('#name')
let number = document.querySelector('#number')
let adress = document.querySelector('#adress')
let help = document.querySelector('#help')
let addBtn = document.querySelector('#add-btn')
let clearBtn = document.querySelector('#clear-btn')
let delBtn = document.querySelector('#del-btn')
let showBtn = document.querySelector('#show-btn')
let nameBtn = document.querySelector('#name-btn')
let addPropertyBtn = document.querySelector('#add-property-btn')
let selectDel = document.querySelector('#select-del')

let id = 0
class visitor {
    constructor(id, name, number, adress, help){
        this.id = id
        this.name = name
        this.number = number
        this.adress = adress
        this.help = help
    }
}

addBtn.onclick = addVisitor
clearBtn.onclick = clearForm
delBtn.onclick = delVisitor
showBtn.onclick = showTable
nameBtn.onclick = visitorName
addPropertyBtn.onclick = addProperty


let property = ''
let visitors = []
let table = document.querySelector('#my-table')

function addVisitor(e){
    e.preventDefault()
    id++
    addOption = document.createElement('option')
    addOption.value = id
    addOption.innerHTML = id
    selectDel.add(addOption)
    let newVisitor = new visitor(id, name.value, number.value, adress.value, help.value)
    visitors.push(newVisitor)
    console.log(newVisitor);
    showOnlyTable(visitors, table)

}

function clearForm(e){
    e.preventDefault()
    name.value = ''
    number.value = ''
    adress.value = ''
    help.value = ''
}

function delVisitor(e){
    e.preventDefault()
    const index = visitors.findIndex(n => n.id == selectDel.value);
    if (index !== -1) {
        visitors.splice(index, 1);
    }
    for(let i = 0; i < selectDel.length; i++){
        if(selectDel.value == selectDel[i].value) selectDel.removeChild(selectDel[i]);
    }
    showOnlyTable(visitors, table)
}

function showTable(e){
    e.preventDefault()
    document.querySelector('#my-table').classList.remove('hide')
    showOnlyTable(visitors, table)
}


function visitorName(e){
    e.preventDefault()
    let helpVisitor = []
     for(i of visitors){
         if(i.help == ''){
             helpVisitor.push(i)
         }
     }
     document.querySelector('#my-table').classList.remove('hide')
     showOnlyTable(helpVisitor, table)
}

function addProperty(e){
    e.preventDefault()
    property = document.querySelector('#property').value
    showOnlyTable(visitors, table)
}

function showOnlyTable(visitors, table){
    table.innerHTML = ''
    let tr = document.createElement('tr')
    
    let tdid = document.createElement('td');
    tdid.innerHTML = 'ID'
    tr.appendChild(tdid)
    let td1 = document.createElement('td');
    td1.innerHTML = 'ФИО'
    tr.appendChild(td1)
    let td2 = document.createElement('td');
    td2.innerHTML = 'Телефон'
    tr.appendChild(td2)
    let td3 = document.createElement('td');
    td3.innerHTML = 'Адрес'
    tr.appendChild(td3)
    let td4 = document.createElement('td');
    td4.innerHTML = 'Помощь'
    tr.appendChild(td4)
    let td5 = document.createElement('td');
    td5.innerHTML = 'Свойство'
    tr.appendChild(td5)
    table.appendChild(tr)

    for(let addedVisitor of visitors){
        let tr = document.createElement('tr')
    
        let tdid = document.createElement('td');
        tdid.innerHTML = addedVisitor.id
        tr.appendChild(tdid)

        let td1 = document.createElement('td');
        td1.innerHTML = addedVisitor.name
        tr.appendChild(td1)
    
        let td2 = document.createElement('td');
        td2.innerHTML = addedVisitor.number
        tr.appendChild(td2)
    
        let td3 = document.createElement('td');
        td3.innerHTML = addedVisitor.adress
        tr.appendChild(td3)
    
        let td4 = document.createElement('td');
        td4.innerHTML = addedVisitor.help
        tr.appendChild(td4)

        let td5 = document.createElement('td');
        td5.innerHTML = property
        tr.appendChild(td5)
    
        table.appendChild(tr)
    }
    console.log(visitors);
}