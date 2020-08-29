import React, { useState, useEffect } from 'react'
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/Listado'
import ControlPresupuesto from './components/ControlPresupuesto'

function App() {
	const [presupuesto, setPresupuesto] = useState(0)
	const [restante, setRestante] = useState(0)
	const [showPregunta, updatePregunta] = useState(true)
	const [gastos, setGastos] = useState([])
	const [gasto, setGasto] = useState({})
	const [creargasto, setCrearGasto] = useState(false)

	useEffect(() => {
		if (creargasto) {
			setGastos([...gastos, gasto])

			const presupuestoRestante = restante - gasto.cantidad
			setRestante(presupuestoRestante)
		}

		setCrearGasto(false)
	}, [creargasto, gasto, gastos, restante])

	return (
		<div className='container'>
			<header>
				<h1>Gasto Semanal</h1>
				<div className='contenido-principal contenido'>
					{showPregunta ? (
						<Pregunta
							setPresupuesto={setPresupuesto}
							setRestante={setRestante}
							updatePregunta={updatePregunta}
						/>
					) : (
						<div className='row'>
							<div className='one-half column'>
								<Formulario setGasto={setGasto} setCrearGasto={setCrearGasto} />
							</div>
							<div className='one-half column'>
								<Listado gastos={gastos} />
								<ControlPresupuesto
									presupuesto={presupuesto}
									restante={restante}
								/>
							</div>
						</div>
					)}
				</div>
			</header>
		</div>
	)
}

export default App
