let arr = []

while(arr.length < 80){
    let randomNumber = Math.random() * 10
    arr.push(randomNumber)
}
console.log(arr)

var table =  document.querySelector('#tbl')
let i = 0
for(var b=0; b<8; b++){
    var row = table.insertRow()
    for(var c=0; c < 8; c++){
        var cell = row.insertCell()
        cell.appendChild(document.createTextNode(arr[i++]))
    }      
}


$('#gr').click(function(){
    let arrSort = arr.slice()
    arrSort.sort()
    let req = {
        arr: arr,
        arrSort: arrSort
    }
    $.ajax({
        url: 'http://127.0.0.1:3000/form',
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        success: function(data){
            createTable (data)
            console.log(data);
        },
        data: JSON.stringify(req)
    })
})

$('#lw').click(function(){
    let arrSort = arr.slice()
    arrSort.sort()
    arrSort.reverse()
    let req = {
        arr: arr,
        arrSort: arrSort
    }
    $.ajax({
        url: 'http://127.0.0.1:3000/form2',
        type: 'post',
        dataType: 'json',
        contentType: 'application/json',
        success: function(data){
            createTable (data)
            console.log(data);
        },
        data: JSON.stringify(req)
    })
})

function createTable(data){
    let z = 0
    var newTable2 =  document.querySelector('#tbl-2')
    for(let b=0; b<8; b++){
        let row = newTable2.insertRow()
        for(let c=0; c < 8; c++){
            let cell = row.insertCell()
            cell.appendChild(document.createTextNode(data.arr[z++]))
        }      
    }
}

