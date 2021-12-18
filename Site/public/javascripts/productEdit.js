console.log('productEdit.js success');

const preview = document.getElementById('preview');

const showPreview = array => {
    preview.innerHTML = null;
    array.forEach(image => {
        preview.innerHTML += `
        <div class="Containers">
                    <div class="MessageInfo">
                    <img src="/images/products/${image.file}" alt="imagen producto">
                      <div class="btn-eliminar-image">
                        <a onclick="deleteImage('${image.id}')">Eliminar</a>
                      </div>
                    </div>
                  </div>
        `
    })
    return false
}

const deleteImage = async id => {
    try {
        let response = await fetch('/api/delete-image/' + id, {
            method: 'POST',
        })
        let result = await response.json()
        showPreview(result.images)
    } catch (error) {
        console.log(error)
    }
}

const addImage = async (id,files) => {
    let data = new FormData()
    for (const file of files) {
        data.append('images',file,file.name)
    }
    console.log(data)

    try {
        let response = await fetch('/api/add-images/' + id, {
            method: 'POST',
            body : data,
        })
        let result = await response.json()
        showPreview(result.images)
    } catch (error) {
        
    }
}

// document.querySelectorAll("[id^='this_div_id']")
   

const $ = id => document.getElementById(id);  
let images = document.querySelectorAll('.imgDetalle');

// $('imgDetalle').addEventListener('click', function() {
//     $('imgDetalle').classList.toggle('imgZoom');   
// })

images.forEach((item) => {
    item.addEventListener('click', () => { 
        $('imgDetalle').classList.toggle('imgZoom');
    });
})


// const $ = id => document.getElementById(id);  

// const imgs = document.querySelectorAll('#imgDetalle')

// var div_list = document.querySelectorAll('Containers'); // returns NodeList
// var div_array = [...div_list]; // converts NodeList to Array

// div_array.forEach(imgs => {

// imgs.addEventListener('click', function() {
//     imgs.classList.toggle('imgZoom');   

// })
// })

// -------------------

// $('imgDetalle').addEventListener('change', function() {
//     $('imgDetalle').classList.remove('imgZoom');   
// })
  
  

// const $ = id => document.querySelectorAll('#id');  
// const imgDetalle = document.getElementById('#imgDetalle')
// const img = document.getElementById('#img')

// imgDetalle.addEventListener('click', function() {
//     img.classList.toggle('.imgZoom');   
// })


// function imageEnlarge() {
//     $('imgDetalle').classList.add(imgZoom);    
//     }
   
//    function imageReset()   { 
//     $('imgDetalle').classList.remove(imgZoom);
//    }
