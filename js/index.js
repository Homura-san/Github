function registro(){
  var nome = document.getElementById('on')
  var lista = document.getElementById('presenca')
  
  lista.innerHTML += nome.value
  
  console.log(nome.value, lista.innerHTML)
}
