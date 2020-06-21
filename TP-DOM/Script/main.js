window.onload = function() {
	const botonAgregar = document.querySelector('.agregar')
	const botonBorrar = document.querySelector('.borrar')
	const sala = document.querySelector('.sala')
	let registroSillas = 0

	function agregarSilla(event) {
		if (registroSillas === 8) {
			return
		} else {
			registroSillas++
			const nuevaSilla = document.createElement('div')
			nuevaSilla.classList.add('silla', 'silla' + registroSillas)
			sala.append(nuevaSilla)
		}
	}
	
	function borrarSilla(event) {
		const sillaABorrar = document.querySelector('.silla' + registroSillas)
		if (sillaABorrar === null) {
			return
		} else {
			registroSillas--
			sala.removeChild(sillaABorrar)
		}
	}

	botonAgregar.addEventListener('click', agregarSilla)
	botonBorrar.addEventListener('click', borrarSilla)
}

