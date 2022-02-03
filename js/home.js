function registro(){
  var nome = document.getElementById('on')
  var lista = document.getElementById('presenca')
  
  var cont = nome.value + ' '
  lista.innerHTML += cont
  
  console.log(lista.innerHTML)
}
console.log('Js funcionando')
