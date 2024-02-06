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

//Clears the data in the form field
function clear(list){
    for (let i = 0; i<list.length; i++){
        let clearthing = document.getElementById(list[i])
        clearthing.value = ''


    }
}

// create function to take value of either read or no read if there is a value there
function checkRead(){
    if(document.getElementById('yes').checked){
    reads = 'yes'
    console.log(reads)}
    if (document.getElementById('no').checked){
        reads = 'no'
        console.log(reads)
    }
    else{
    }
    return (reads);

}

//Takes values from form and stores them in the library in the form of a book object
function addInfo(){
    let bookName = document.getElementById('bookTitle')
    let bookAuthor = document.getElementById('bookAuthor')
    let bookPages = document.getElementById('pages')
    checkRead()
    let booky = new Book(bookName.value, bookAuthor.value, bookPages.value, reads)
    myLibrary.push(booky)
    console.log(myLibrary)
}


// an array to hold all of the book objects
const myLibrary = []


class Book{
    constructor(title, author, pages, read){
        this.title = title
        this.author = author
        this.pages = pages
        this. read = read
    }
}





//makes a book card using divs and info from the Book objects in the library array
function makeBookCard(){
    bottomright.innerHTML = ''
    for(let i = 0; i<myLibrary.length; i++){
        var container = document.createElement('div')
        container.setAttribute('class','container')
        bottomright.append(container)
        var bookcard = document.createElement('div')
        bookcard.setAttribute('class','formbox')
        container.append(bookcard)
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
        enteredread.setAttribute('id', 'thisread')
        bookcard.append(enteredread)
        enteredread.innerHTML = myLibrary[i].read
        let changecontainer = document.createElement('div')
        changecontainer.setAttribute('class','changecontainer')
        container.append(changecontainer)
        let change = document.createElement('button')

        change.addEventListener('click', ()=>{
          let thisBook = myLibrary[i]
          if(thisBook.read == 'yes'){
            thisBook.read = 'no'
          }
          else if(thisBook.read =='no'){
            thisBook.read = 'yes'
          }
          makeBookCard()
        })
        change.innerHTML = 'Change Read Status'
        changecontainer.append(change)
        change.setAttribute('class','change')
        let getRid = document.createElement('button')
        getRid.setAttribute('class', 'change')
        getRid.innerHTML = 'Remove Book'
        changecontainer.append(getRid)
        getRid.addEventListener('click', ()=>{
            myLibrary.splice(i,1)
            makeBookCard()
          })
    }
    

}


//function to exit out of form box

let cancel = document.getElementById('cancel')
cancel.addEventListener('click',()=>{
    clear(fields)
    formcontainer.style.display = 'none'
    main.style.filter = 'blur(0px)'
    main.style.pointerEvents = 'auto'})


