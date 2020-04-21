import React from 'react'
import './index.scss'
import ClipLoader from 'react-spinners/ClipLoader'

const Spinner = () => {
	return (
		<div className='spinner'>
			<ClipLoader size={250} color={'#000000'} loading={true} />
		</div>
	)
}

export default Spinner
