console.log("conectado");
const cards = document.getElementById('cards')
const items = document.getElementById('items')
const footer = document.getElementById('footer')

/*TEMPLATES */
const templateCard = document.getElementById('template-card').content
const templateFooter = document.getElementById('template-footer').content
const templateCarrito = document.getElementById('template-carrito').content

const fragment = document.createDocumentFragment()


let carrito = {}

document.addEventListener('DOMContentLoaded', e =>{ /*e ó () son lo mismo*/
  obtenerProductos()
})

const obtenerProductos = async() => {
  const res = await fetch('./api/productos.json') /*LEER LO QUE ESTÁ DENTRO DEL ARCHIVO */
	const data = await res.json()
	//console.log(data)
	pintarCards(data) /*DATA por que es la variable que contiene los productos */
}

const pintarCards = (data) => {
	data.forEach(item => {
		templateCard.querySelector('h5').textContent = item.title 
		templateCard.querySelector('p').textContent = item.precio 
		templateCard.querySelector('button').dataset.id = item.id 

		const clone = templateCard.cloneNode(true)
		fragment.appendChild(clone)
	})
	cards.appendChild(fragment)

}