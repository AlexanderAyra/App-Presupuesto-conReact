import React from 'react'
import propTypes from 'prop-types'
import Gasto from './Gasto'

const Listado = ({ gastos }) => {
	return (
		<div className='gastos-realizados'>
			<h2>Listado</h2>
			{gastos.map((gasto) => (
				<Gasto key={gasto.id} gasto={gasto} />
			))}
		</div>
	)
}

Listado.propTypes = {
	gastos: propTypes.array.isRequired,
}

export default Listado
