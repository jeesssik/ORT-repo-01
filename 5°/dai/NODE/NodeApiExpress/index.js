const express = require('express')

const app= express()

app.use(express.json())

const books=[
    {title: 'Java Programming', id:1},
    {title: 'C# Programming', id:2},
    {title: 'NodeJS Programming', id:3}
]


app.get('/', (req,resp)=>{
resp.send('Welcome to study automation')
})
//ingresamos a http://localhost:8080


// devolver en un endpoint el objeto books
app.get('/api/books', (req,resp)=>{
    resp.send(books)
})
//ingresamos a http://localhost:8080/api/books   y vemos el objeto en pantalla


//buscar un libro especifico segun su id
app.get('/api/books/:id', (req,resp)=>{
    const book= books.find(v=>v.id===parseInt(req.params.id))
    if(!book) resp.status(404).send('Libro no encontrado')
    resp.send(book)
})


// post request  (subir un nuevo libro)

app.post('/api/books/addBook', (req,resp) => {
    const book={
        id: books.length+1,
        title: req.body.title
    }
    books.push(book)
    resp.send(book)
    resp.send('Agregado a la lista')
})


// PUT request

app.put('/api/books/:id', (req,resp) =>{
    const book= books.find(v=>v.id===parseInt(req.params.id))
    if(!book) resp.status(404).send('Libro no encontrado')

    book.title= req.body.title

    resp.send(book)

})


// DELETE

app.delete('/api/books/:id', (req,resp) => {
    const book= books.find(v=>v.id===parseInt(req.params.id))
    if(!book) resp.status(404).send('Libro no encontrado')
    const index= books.indexOf(book)
    books.splice(index,1)
    resp.send(book)
 
})

app.listen(8080)
