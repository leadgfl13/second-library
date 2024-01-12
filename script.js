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
    addInfo()
    clear(fields)
})

let fields = ['bookTitle', 'bookAuthor','pages']
// Can I put a for loop?
function clear(list){
    for (let i = 0; i<list.length; i++){
        let clearthing = document.getElementById(list[i])
        clearthing.value = ''


    }
}

//Need function to take values and put them in form

function addInfo(){
    let enterT = document.getElementById('enteredtitle')
    let bookName = document.getElementById('bookTitle')
    enterT.innerHTML = bookName.value
    let enterA= document.getElementById('enteredauthor')
    let bookAuthor = document.getElementById('bookAuthor')
    enterA.innerHTML = bookAuthor.value
    let enterP = document.getElementById('enteredpages')
    let bookPages = document.getElementById('pages')
    enterP.innerHTML =bookPages.value

}