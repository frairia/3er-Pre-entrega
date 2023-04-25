const catalogo = [{ nombre: 'Pauny', modelo: 'EVO 580', imagen: '../img/Tractor-Pauny-Novo-580.jpg', importe: 90000, codigo: 1 },
{ nombre: 'Agco', modelo: 'Allis 5.190', imagen: '../img/tractor-Deutz-Allis-5190-a-1.jpg', importe: 72000, codigo: 2 },
{ nombre: 'Farmtrac', modelo: '50 HP', imagen: '../img/Farmtrac-50-Powermaxx.jpg', importe: 20000, codigo: 3 },
{ nombre: 'CASE', modelo: 'Farmall 110m', imagen: '../img/b2ap3_large_caseih-farmall-m-activedrive-4.jpg', importe: 78800, codigo: 4 },
{ nombre: 'New Holland', modelo: 'T7.195', imagen: '../img/new-holland-0km-t7-195-oferta--Borio-agrofy-0-20230308131210.webp', importe: 122000, codigo: 5 },
{ nombre: 'Valtra', modelo: 'BH 180', imagen: '../img/Tractor-Valtra-BH180.jpg', importe: 77000, codigo: 6 },
{ nombre: 'John Deere', modelo: '5082', imagen: '../img/3aabeb5a9b5643e4a5c07c6927c904df.jpg', importe: 99000, codigo: 7 },]


const contenedorCards = document.querySelector("div#contenedorCards")
const carrito = recuperarCarrito()
const inputSearch = document.querySelector("#barraSearch")

function estructuraCardHTML(carta) {
    return `<div class="contenedorProducto" id="contenedorProducto">
                <div class="cardImg"><img src="${carta.imagen}"></div>
                <div class="cardName">${carta.nombre}</div>
                <div class="cardModelo">${carta.modelo}</div>
                <div class="cardPrice">$${carta.importe}</div>
                <div class="addButton">
                    <button class="cardButton" id="${carta.codigo}" title="Agregar al carrito">Agregar al carrito</button>
                </div>
            </div>`
}



function cargarCatalogo(array) {
    contenedorCards.innerHTML = ""
    array.forEach(carta => {
        contenedorCards.innerHTML += estructuraCardHTML(carta)
    })
    activarBotones()
}

cargarCatalogo(catalogo)

//SEARCH DEL CATALOGO
inputSearch.addEventListener("search", (e) => {
    filtrarCatalogo(e.target.value)
})


//FUNCION DE BUSQUEDA DE PRODUCTOS EN CATALOGO
function filtrarCatalogo(valor) {
    let resultado = catalogo.filter(carta => carta.nombre.toLowerCase().includes(valor.toLowerCase()))
    if (resultado.length > 0) {
        cargarCatalogo(resultado)
    }
}

//FUNCION ACTIVAR BOTONES - AGREGAR AL CARRITO
function activarBotones() {
    const botonesAgregar = document.querySelectorAll("button.cardButton")
    for (let botonAgregar of botonesAgregar) {
        console.log(botonAgregar.id)
        botonAgregar.addEventListener("click", () => {
            let resultado = catalogo.find(carta => carta.codigo === parseInt(botonAgregar.id))
            carrito.push(resultado)
            guardarCarrito()
        })
    }
}

//FUNCION GUARDAR EN LOCALSTORAGE INFO CARRITO
function guardarCarrito() {
    localStorage.setItem("articulosCarrito", JSON.stringify(carrito))
}

//FUNCION RECUPERAR CARRITO
function recuperarCarrito() {
    return JSON.parse(localStorage.getItem("articulosCarrito")) || []
}

recuperarCarrito()