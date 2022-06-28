import { useState, useEffect } from 'react'

export default function useForm(initial = {}) {
	// create state object
	const [inputs, setInputs] = useState(initial)

	const initialValues = Object.values(initial).join('')

	useEffect(() => {
		setInputs(initial)
	}, [initialValues])

	function resetForm() {
		setInputs(initial)
	}

	function clearForm() {
		// convert to array to black them then convert it to array again
		const blankStates = Object.fromEntries(
			Object.entries(inputs).map(([key, value]) => [key, ''])
		)

		setInputs(blankStates)
	}

	function handleChange(e) {
		let { value, name, type } = e.target

		if (type === 'number') value = parseInt(value)

		if (type === 'file') [value] = e.target.files

		setInputs({
			...inputs,
			[name]: value,
		})
	}

	return {
		inputs,
		handleChange,
		resetForm,
		clearForm,
	}
}
