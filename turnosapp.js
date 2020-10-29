let ordenes=JSON.parse(localStorage.getItem("ordenes")) || [];

function turnos(){
    let tablatres = document.getElementById('tablatres')
    tablatres.innerHTML = " "
    let ordenes = JSON.parse(localStorage.getItem('ordenes')) || []
    ordenes.map(function(orden,i){
        tablatres.innerHTML += `<tr>
        <th scope="row">1</th>
        <td>${orden.especialidad}</td>
        <td>${orden.profesional}</td>
        <td>${orden.dia}</td>
        <td>${orden.horario}</td>
        <td class="btn btn-danger" onclick = "removeorden(${i})">Borrar</td>
        <td class="btn btn-warning"onclick = "editorden(${i})">Editar</td>
        <td class="btn btn-success" onclick = "confirm(${i})">Confirmar</td>
      </tr>`
    }
    )
}

function confirm(){
  
  let respuesta=  alert("Turno Confirmado")
  if(respuesta==true){
    return true;
  }
  else{
    return false;
    
  }
 
}
turnos();