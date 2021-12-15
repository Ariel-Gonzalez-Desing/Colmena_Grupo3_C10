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

function alertDelete() {
    alert("¿Desea eliminar el producto permanentemente?");
  }