import React from 'react'
import propTypes from 'prop-types'
import { revisarPresupuesto } from '../helpers'

const ControlPresupuesto = ({ presupuesto, restante }) => {
	return (
		<div>
			<div className='alert alert-primary'>Presupuesto: ${presupuesto}</div>
			<div className={revisarPresupuesto(presupuesto, restante)}>
				Restante: ${restante}
			</div>
		</div>
	)
}

ControlPresupuesto.propTypes = {
	presupuesto: propTypes.number.isRequired,
	restante: propTypes.number.isRequired,
}

export default ControlPresupuesto
