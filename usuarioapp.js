let ordenes=JSON.parse(localStorage.getItem("ordenes")) || [];

class Order {
    constructor(especialidad,profesional,dia,horario){
        this.especialidad = especialidad;
        this.profesional =profesional;
        this.dia = dia;
        this.horario = horario;
    }
}

function Reset(){
    especialidad.value = ""
    profesional.value = ""
    dia.value = ""
    horario.value = ""
}


function btn_guardar(event){
    event.preventDefault();
    if (especialidad.value == "" || profesional.value == "" || dia.value == "" || horario.value == "") {
        alert("complete los campos")
        return;
    }
      let ordenes=JSON.parse(localStorage.getItem("ordenes")) || [];
      let orden = new Order(especialidad.value, 
                          profesional.value,
                          dia.value,
                          horario.value,)
      ordenes.push(orden)
      localStorage.setItem("ordenes", JSON.stringify(ordenes))
      appendTable()
      Reset()
    }
  
    function removeorden(i){
        let ordenes=JSON.parse(localStorage.getItem("ordenes")) || [];
        let borrar = ordenes.filter((orden)=>{
           return ordenes[i] != orden
        })
        localStorage.setItem('ordenes',JSON.stringify(borrar))
        appendTable()
    }

function appendTable(){
    let tablados = document.getElementById('tablados')
    tablados.innerHTML = " "
    let ordenes = JSON.parse(localStorage.getItem('ordenes')) || []
    ordenes.map(function(orden,i){
        tablados.innerHTML += `<tr>
        <th scope="row">1</th>
        <td>${orden.especialidad}</td>
        <td>${orden.profesional}</td>
        <td>${orden.dia}</td>
        <td>${orden.horario}</td>
        <td class="btn btn-danger" onclick = "removeorden(${i})">Borrar</td>
        <td class="btn btn-warning"onclick = "editorden(${i})">Editar</td>
      </tr>`
    }
    )
}

appendTable();