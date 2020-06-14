window.onload = function() {
	const botonAgregar = document.querySelector('.agregar')
	const botonBorrar = document.querySelector('.borrar')
	const sala = document.querySelector('.sala')
	let registroSillas = 0

	function agregarSilla(event) {
		if (registroSillas === 8) {
			alert('Ya se agregaron todas las sillas')
		} else {
			registroSillas++
			const nuevaSilla = document.createElement('img')
			nuevaSilla.src = '../Img/silla.png'
			nuevaSilla.classList.add('silla', 'silla' + registroSillas)
			sala.append(nuevaSilla)
		}
	}
	
	function borrarSilla(event) {
		const sillaABorrar = document.querySelector('.silla' + registroSillas)
		if (registroSillas === 0 || sillaABorrar === null) {
			alert('No hay sillas que borrar')
		} else {
			registroSillas--
			sala.removeChild(sillaABorrar)
		}
	}

	botonAgregar.addEventListener('click', agregarSilla)
	botonBorrar.addEventListener('click', borrarSilla)
}

