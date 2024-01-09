

let addBook = document.getElementById('add')
let uploadBook =document.getElementById('upBook')
let formcontainer = document.getElementById('formcontainer')
addBook.addEventListener('click',()=>{
    alert("I am clicked")
    formcontainer.style.display = "flex"

})

uploadBook.addEventListener('click',()=>{
    formcontainer.style.display = 'none'
})

