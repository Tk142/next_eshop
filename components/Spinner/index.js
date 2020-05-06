import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

export const Spinner = () => {
	return (
		<div className='Spinner'>
			<ClipLoader size={250} color={'#000000'} loading={true} />
		</div>
	)
}

export const EmailSpinner = () => {
	return (
		<div>
			<ClipLoader size={25} color={'#000000'} loading={true} />
		</div>
	)
}
