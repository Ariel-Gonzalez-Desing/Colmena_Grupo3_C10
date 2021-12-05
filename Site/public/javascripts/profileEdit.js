const $ = id => document.getElementById(id);  
const edit = $('passwordEdit');
const pass = $('password');

edit.addEventListener('change', function() {
  switch (true) {
    case edit.checked:
      pass.classList.add('show');
      break;
    case !edit.checked:
      pass.classList.remove('show');
      break;
    default:
      break;
  }
})

const image = $('imageEdit');
const imageUpload = $('imageUpload');

image.addEventListener('click', function() {   
    image.classList.add('hide');
    imageUpload.classList.remove('hide');     
  })
