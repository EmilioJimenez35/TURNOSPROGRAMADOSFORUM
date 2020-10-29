var nombre=[];
var apellido=[];
var telefono=[];
var dni=[];
var direccion=[];
var email=[];
var i=0;

function insertarDatos(){
  nombre[i]=document.getElementById("nombre").value;
   apellido[i]=document.getElementById("apellido").value;
   telefono[i]=document.getElementById("telefono").value;
   dni[i]=document.getElementById("dni").value;
   direccion[i]=document.getElementById("direccion").value;
   email[i]=document.getElementById("email").value;
   i++
   alert("Ha insertado Los datos correctamente");  
} 

 function insertarDatos(){

  }

  //Exactamente tu función con una linea extra y expresada como JQuery
  function insertarDatos(){        
    nombre[i]=$("#nombre").val();
    apellido[i]=$("#apellido").val();
    telefono[i]=$("#telefono").val();
    email[i]=$("#correo").val();
    i++;
    insertarNuevaFila();
    alert("Ha insertado Los datos correctamente");  
  }
//Función extra encargada de hacer la inserción en el DOM 
  function insertarNuevaFila() {
    $("tbody").append(`<tr>
      <th scope="row">${nombre[i-1]}</th>
      <td>${apellido[i-1]}</td>
      <td>${telefono[i-1]}</td>
      <td>${email[i-1]}</td>
    </tr>`);
  }

//Asignación de evento para tu formulario
  $("form").submit(function(evento) {
    evento.preventDefault();    
    insertarDatos();
  });