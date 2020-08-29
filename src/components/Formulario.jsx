import React, { useState } from 'react'

const Formulario = () => {
	const [name, setName] = useState('')
	const [cantidad, setCantidad] = useState(0)

	const handleChange = (e) => {
		setName(e.target.value)
	}

	const handleCantidad = (e) => {
		setCantidad(parseInt(e.target.value))
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		// validar

		// construir el gasto

		// pasar el gasto

		// resetear el form
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<h2>Agrega tus gastos aqui</h2>

				<div className='campo'>
					<label>Nombre Gasto</label>
					<input
						type='text'
						className='u-full-width'
						placeholder='Ej. Transporte'
						value={name}
						onChange={handleChange}
					/>
				</div>

				<div className='campo'>
					<label>Cantidad Gasto</label>
					<input
						type='number'
						className='u-full-width'
						placeholder='Ej. 300'
						value={cantidad}
						onChange={handleCantidad}
					/>
				</div>

				<input
					type='submit'
					className='button-primary u-full-width'
					value='Agregar Gasto'
				/>
			</form>
		</div>
	)
}

export default Formulario
