console.log('avatarEdit.js success');

// const changeAvatar = async id => {
//     try {
//         let response = await fetch('/api/change-avatar/' + id, {
//             method: 'PUT',
//         })
//         let result = await response.json()
//         console.log(result);
//     } catch (error) {
//         console.log(error)
//     }
// }

// const $ = id => document.getElementById(id); 

// $('imageEdit').addEventListener('click', function() {
//     changeAvatar()
//   })
// const addImage = async (id,files) => {
//     let data = new FormData()
//     for (const file of files) {
//         data.append('images',file,file.name)
//     }
//     console.log(data)

//     try {
//         let response = await fetch('/api/add-images/' + id, {
//             method: 'POST',
//             body : data,
//         })
//         let result = await response.json()
//         showPreview(result.images)
//     } catch (error) {
        
//     }
// }