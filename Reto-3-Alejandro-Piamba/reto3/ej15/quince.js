function perfectoDos() {


  var numero = document.getElementById("n").value;
  //numero =500;
  var muestra = document.getElementById("muestra");
  var crearTabla = document.createElement("table");
  var cuerpo = document.createElement("tbody");
  for (var i = 2; i <= numero; i++) {
    b = 0;
    var fila = document.createElement("tr");
    for (var j = 1; j <= Math.floor(i / 2); j++) {
      if (parseFloat(i) % parseFloat(j) == 0)
        b = b + parseFloat(j);
    }
    if (b == i) {
      var cell = document.createElement("td");
      var contenido = document.createTextNode(i);
      cell.appendChild(contenido);
      fila.appendChild(cell);
    }
    cuerpo.appendChild(fila);

  }
  crearTabla.appendChild(cuerpo);
  muestra.appendChild(crearTabla);

}



