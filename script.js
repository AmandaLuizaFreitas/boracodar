let bottom = document.querySelector('.bottom')
let footer = document.querySelector('footer')
// abrir e fechar 
bottom.addEventListener('click',()=>{
 
  if(bottom.classList.contains('bottom-rope')){
    bottom.style= 'margin-top: 9.5rem;'
  footer.style = 'display:none;'
  }

  else{
    bottom.classList.toggle('bottom-rope')
  }
 

  
 
 

})