function minhaFn(url) {
  document.getElementById("aparecer").style.animation = "desaparecer 1s";    
  setInterval(carregar,600,url)
}

function carregar(url) {
  window.location = "http://localhost/transicao/"+url
}
