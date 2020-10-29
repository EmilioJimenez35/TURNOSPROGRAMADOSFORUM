let pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];
class Usuario {
    constructor(nombre, apellido, telefono, dni, direccion, email) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.telefono = telefono;
        this.dni = dni;
        this.direccion = direccion;
        this.email = email;
    }
}
let nombre = document.getElementById('nombre');
let apellido = document.getElementById('apellido');
let telefono = document.getElementById('telefono');
let dni = document.getElementById('dni');
let direccion = document.getElementById('direccion');
let email = document.getElementById('email');
let formulario = document.getElementById('form');

function Cargar(event) {
    event.preventDefault();
    if (nombre.value == "" || apellido.value == "" || telefono.value == "" || dni.value == "" || direccion.value == "" || email.value == "") {
        alert("complete los campos")
        return;
    }
    let paciente = new Usuario(nombre.value, apellido.value, telefono.value, dni.value, direccion.value, email.value);
    pacientes.push(paciente);
    document.getElementById('nombre').value = "";
    document.getElementById('apellido').value = "";
    document.getElementById('telefono').value = "";
    document.getElementById('dni').value = "";
    document.getElementById('direccion').value = "";
    document.getElementById('email').value = "";
    localStorage.setItem('pacientes', JSON.stringify(pacientes))
    mostrar()

}

function borrar(i) {
    let borrado = pacientes.filter((item) => {
        return pacientes[i] != item
    });
    localStorage.setItem('pacientes', JSON.stringify(borrado))
    mostrar()
}
function mostrar() {
    pacientes = JSON.parse(localStorage.getItem('pacientes')) || [];
    let tabla = document.getElementById('tabla');
    tabla.innerHTML = ""
    pacientes.map((item, i) => {
        tabla.innerHTML += `<tr>
        <th scope="row">1</th>
        <td>${item.nombre}</td>
        <td>${item.apellido}</td>
        <td>${item.telefono}</td>
        <td>${item.dni}</td>
        <td>${item.direccion}</td>
        <td>${item.email}</td>
        <td class="btn btn-danger" onclick="borrar(${i})">Borrar</td>
        <td class="btn btn-warning" onclick="editar(${i})">Editar</td>
      </tr>`
    })

}
mostrar();

function editar(i) {
    let elements = JSON.parse(localStorage.getItem("pacientes"))
    let nombre = document.getElementById('nombre')
    let apellido = document.getElementById('apellido')
    let telefono = document.getElementById('telefono')
    let dni = document.getElementById('dni')
    let direccion = document.getElementById('direccion')
    let email = document.getElementById('email')

    nombre.setAttribute('value', elements[i].nombre);
    apellido.setAttribute('value', elements[i].apellido);
    telefono.setAttribute('value', elements[i].telefono);
    dni.setAttribute('value', elements[i].dni);
    direccion.setAttribute('value', elements[i].direccion);
    email.setAttribute('value', elements[i].email);

      nombre.disabled = true
      apellido.disabled = true
   
      document.getElementById('button').disabled = true
     
      if (!document.getElementById('guardar'))
          formulario.innerHTML += `<button id='guardar'onclick="save(${i})">Guardar cambios</button>`
      else {
          element = document.getElementById('guardar')
          element.parentNode.removeChild(element)
          formulario.innerHTML += `<button id='guardar'onclick="save(${i})">Guardar cambios</button>`
      }
}

function save(i) {
    borrar(i)
    Cargar(event)
    mostrar()
    location.reload();
}

