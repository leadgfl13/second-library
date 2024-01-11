let main = document.getElementById('main')
let addBook = document.getElementById('add')
let uploadBook =document.getElementById('upBook')
let formcontainer = document.getElementById('formcontainer')
addBook.addEventListener('click',()=>{
    formcontainer.style.display = "flex"
    main.style.filter = 'blur(10px)'
    main.style.pointerEvents = 'none'

})

uploadBook.addEventListener('click',()=>{
    formcontainer.style.display = 'none'
    main.style.filter = 'blur(0px)'
    main.style.pointerEvents = 'auto'
    clear(fields)
})

let fields = ['bookTitle', 'bookAuthor','pages']
// Can I put a for loop?
function clear(poo){
    for (let i = 0; i<poo.length; i++ in poo){
        let clearthing = document.getElementById(fields[i])
        clearthing.value = ''

    }
    

}

