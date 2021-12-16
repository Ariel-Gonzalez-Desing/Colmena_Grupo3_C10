const { rolEdit } = require("../../src/controllers/indexController");

console.log('avatarEdit.js success');

let buttonEditRol = document.getElementById('buttonEditRol'); 

// function editRol() {
//     buttonEditRol.style.display = "block";    
//   }

buttonEditRol.forEach(item => {
    item.addEventListener('click', item => {
        buttonEditRol.style.display = "block"; 
    })
  })

  if(user.rol){   
    document.getElementById('rolEdit').checked = 1;
}