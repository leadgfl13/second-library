let main = document.getElementById('main')
let addBook = document.getElementById('add')
let uploadBook =document.getElementById('upBook')
let formcontainer = document.getElementById('formcontainer')

let bottomright = document.getElementById('bottomR')

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
    makeBookCard()
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

//Takes values from form and stores them in the library
function addInfo(){
    let bookName = document.getElementById('bookTitle')
    let bookAuthor = document.getElementById('bookAuthor')
    let bookPages = document.getElementById('pages')
    let booky = new Book(bookName.value, bookAuthor.value, bookPages.value)
    myLibrary.push(booky)
    console.log(myLibrary.length)
}

const myLibrary = []

function Book(title, author, pages){
    this.title = title
    this.author = author
    this.pages = pages
}




//makes a book card using divs and info from the library
function makeBookCard(){
    for(let i = 0; i<myLibrary.length; i++){
        alert('You have a book!')
        //clear function goes here
        var bookcard = document.createElement('div')
        bookcard.setAttribute('class','formbox')
        bottomright.append(bookcard)
        let titleinfo = document.createElement('div')
        titleinfo.setAttribute('class', 'info')
        titleinfo.innerHTML = "Title"
        bookcard.append(titleinfo)
        let enteredtitle = document.createElement('div')
        enteredtitle.setAttribute('class', 'enteredinfo')
        bookcard.append(enteredtitle)
        enteredtitle.innerHTML = myLibrary[i].title
        let authorinfo = document.createElement('div')
        bookcard.append(authorinfo)
        authorinfo.setAttribute('class','info')
        authorinfo.innerHTML = 'Author'
        let enteredauthor = document.createElement('div')
        bookcard.append(enteredauthor)
        enteredauthor.setAttribute('class','enteredinfo')
        enteredauthor.innerHTML = myLibrary[i].author
        let numpages = document.createElement('div')
        numpages.setAttribute('class','info')
        numpages.innerHTML = '#pages'
        bookcard.append(numpages)
        let enteredpages =document.createElement('div')
        enteredpages.setAttribute('class','enteredinfo')
        enteredpages.innerHTML = myLibrary[i].pages
        bookcard.append(enteredpages)
        let readinfo = document.createElement('div')
        readinfo.setAttribute('class','info')
        bookcard.append(readinfo)
        readinfo.innerHTML = 'Read?'
        let enteredread = document.createElement('div')
        enteredread.setAttribute('class','enteredinfo')
        bookcard.append(enteredread)
        enteredread.innerHTML = 'fill in'
    }
}




