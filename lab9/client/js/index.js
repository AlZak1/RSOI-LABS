let ids = []
function getAllTemps(){
    $.ajax({
      url: 'http://127.0.0.1:3000/getall',
      type: 'get',
      dataType: 'json',
      contentType: 'application/json',
      success: function(data) {
        console.log(data);
        fillTable(data)
      },
    });
    
  }
  
getAllTemps()

$('#btn-1').click(function(event){
  event.preventDefault()
  let region = document.getElementById('region').value
  let midtemp = document.getElementById('temp').value
  let date = document.getElementById('date').value
  let downfall = false

  if(document.getElementById('downfall').checked){
    downfall = true
  } else {
    downfall = false
  }

  let temp = {
    region,
    midtemp,
    downfall,
    date
  }

  $.ajax({
    url: 'http://127.0.0.1:3000/create',
    type: 'post',
    dataType: 'json',
    contentType: 'application/json',
    success: function(data) {
      getAllTemps()
    },
    data: JSON.stringify(temp)
  });
})

$('#btn-2').click(function(event){
  event.preventDefault()
  let id = document.getElementById('number-id').value
  console.log(ids[id-1]);
  $.ajax({
    url: 'http://127.0.0.1:3000/tempdel',
    type: 'post',
    dataType: 'json',
    contentType: 'application/json',
    success: function(data) {
      console.log(data);
      fillTable(data)
    },
    data: JSON.stringify({'id': ids[id-1]})
  });
})

$('#min-temp').click(function(event){
  event.preventDefault()
  $.ajax({
    url: 'http://127.0.0.1:3000/mintemp',
    type: 'get',
    dataType: 'json',
    contentType: 'application/json',
    success: function(data){
      fillTable(data)
    },
  })
})

$('#min-date-temp').click(function(event){
  event.preventDefault()
  let date = document.getElementById('date-temp').value
  console.log(date);
  $.ajax({
    url: 'http://127.0.0.1:3000/gettemp',
    type: 'post',
    dataType: 'json',
    contentType: 'application/json',
    success: function(data) {
      console.log(data);
      fillTable(data)
    },
    data: JSON.stringify({'date': date})
  });
})

function fillTable(data){
  let id = 0
  let table = document.querySelector('#tbl')
  $("#tbl").children().slice(1).remove()
  for(temp of data){
    id++
    let tr = document.createElement('tr')

    let tdid = document.createElement('td');
    ids.push(temp._id)
    tdid.innerHTML = id
    tr.appendChild(tdid)

    let td1 = document.createElement('td');
    td1.innerHTML = temp.region
    tr.appendChild(td1)

    let td2 = document.createElement('td');
    td2.innerHTML = temp.midtemp
    tr.appendChild(td2)

    let td3 = document.createElement('td');
    if (temp.downfall){
      td3.innerHTML = 'Да'
    } else {
      td3.innerHTML = 'Нет'
    }
    tr.appendChild(td3)

    let td4 = document.createElement('td');
    td4.innerHTML = temp.date
    tr.appendChild(td4)

    table.appendChild(tr)
  }
}