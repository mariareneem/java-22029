function calcular(){
    //Obtienes el valor
    let valor = document.getElementById("valor").value;
  
    let result= document.getElementById('result');
    let total= document.getElementById('total');
    let categoriaSeleccionada = document.getElementById('categoria')
    //le descuentas el 8% y lo agregas al HTML
    var descuentoEstudiante = parseInt(valor)*0.80;
    var descuentoTrainee = parseInt(valor)*0.50;
    var descuentoJunior = parseInt(valor)*0.15;
  
    //agrega los resultados al DOM
    result.innerHTML = 'Ahorro de: $' + descuentoEstudiante;
    total.innerHTML =  'Total:     $' + (parseInt(valor)-descuento);
  }

  document.getElementById("clickMe").onclick = function () { alert('hello!'); };

