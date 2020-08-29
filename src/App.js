import React, { useState } from 'react'
import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'
import Listado from './components/Listado'

function App() {
	const [presupuesto, setPresupuesto] = useState(0)
	const [restante, setRestante] = useState(0)
	const [showPregunta, updatePregunta] = useState(true)
	const [gastos, setGastos] = useState([])

	const addGasto = (gasto) => {
		setGastos([...gastos, gasto])
		console.log(gastos)
	}

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
								<Formulario addGasto={addGasto} />
							</div>
							<div className='one-half column'>
								<Listado gastos={gastos} />
							</div>
						</div>
					)}
				</div>
			</header>
		</div>
	)
}

export default App
