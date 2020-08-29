import React, { useState } from 'react'
import propTypes from 'prop-types'
import Error from './Error'

const Pregunta = ({ setPresupuesto, setRestante, updatePregunta }) => {
	const [cantidad, setCantidad] = useState(0)
	const [error, setError] = useState(false)

	const handleChange = (e) => {
		setCantidad(parseInt(e.target.value, 10))
	}

	const addPresupuesto = (e) => {
		e.preventDefault()

		// Validar
		if (cantidad < 1 || isNaN(cantidad)) {
			setError(true)
			return
		}

		// si se pasa la validacion
		setError(false)
		setPresupuesto(cantidad)
		setRestante(cantidad)
		updatePregunta(false)
	}

	return (
		<div>
			<h2>Coloca tu Presupuesto</h2>

			{error ? <Error mensaje='El presupuesto es incorecto' /> : null}

			<form onSubmit={addPresupuesto}>
				<input
					type='number'
					className='u-full-width'
					placeholder='Coloca tu presupuesto'
					onChange={handleChange}
				/>

				<input
					type='submit'
					className='button-primary u-full-width'
					value='Definir Presupuesto'
				/>
			</form>
		</div>
	)
}

Pregunta.propTypes = {
	setPresupuesto: propTypes.func.isRequired,
	setRestante: propTypes.func.isRequired,
	updatePregunta: propTypes.func.isRequired,
}

export default Pregunta
