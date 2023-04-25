// const carro = []

// const mensaje = "selecciona tu modelo \n1-Pauny EVO 580 \n2-Agco Allis 5.190\n3-Farmtrac 50 HP\n4-Case Farmall 110m\n5-New Holland T7.195\n6-Valtra BH 180\n7-John Deere 5082"

// const catalogo =  [{ nombre: 'Pauny', modelo: 'EVO 580', importe: 90000, codigo: 1 },
//                 { nombre: 'Agco', modelo: 'Allis 5.190', importe: 72000, codigo: 2 },
//                 { nombre: 'Farmtrac', modelo: '50 HP', importe: 20000, codigo: 3 },
//                 { nombre: 'CASE', modelo: 'Farmall 110m', importe: 78800, codigo: 4 },
//                 { nombre: 'New Holland', modelo: 'T7.195', importe: 122000, codigo: 5 },
//                 { nombre: 'Valtra', modelo: 'BH 180', importe: 77000, codigo: 6 },
//                 { nombre: 'John Deere', modelo: '5082', importe: 99000, codigo: 7 },]

// function buscarTractor(codigo) {
//     let resultado = tractores.find((modelo)=> modelo.codigo === parseInt(codigo))
//         return resultado
// }

// function comprar() {
//     let codigo = prompt(mensaje)
//         if (!parseInt(codigo)) {
//             alert("No tenemos ese modelo en stock")
//             let respuesta = confirm("queres buscar de nuevo?")
//                 if (respuesta === true) {
//                     comprar()
//                 }
//                 return
//         }

//     let modeloSeleccionado = buscarTractor(codigo)
//         if (modeloSeleccionado === undefined) {
//             alert("❌ Error en la eleccion del modelo")
//                 return
//         }

//         alert(modeloSeleccionado.marca + ' ' + modeloSeleccionado.modelo + ' Disponible para la compra ✔')
//         carro.push(modeloSeleccionado)


//         let respuesta = confirm("Desea finalizar la compra o buscar otro modelo para comprar?")
//             if (respuesta === true) {
//                 comprar()
//             } else {
//                 finalizarAdquisicion()
//             }
// }

// function finalizarAdquisicion() {
//     if (carro.length === 0) {
//         console.warn("No estas interesado en ningun modelo?")
//             return
//     }

//     const mercado = new Compra(carro)
//     alert(' El costo total a pagar es: $ ' + mercado.obtenerTotal())   

//     let respuesta = confirm("Queres seguir con este modelo?")
//     if (respuesta === true) {
//         alert('El total a pagar es de (USD): $ ' + (mercado.obtenerTotal()))
//         carro.length = 0
//     }

// }


