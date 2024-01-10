

let addBook = document.getElementById('add')
let uploadBook =document.getElementById('upBook')
let formcontainer = document.getElementById('formcontainer')
addBook.addEventListener('click',()=>{
    formcontainer.style.display = "flex"

})

uploadBook.addEventListener('click',()=>{
    formcontainer.style.display = 'none'
})

