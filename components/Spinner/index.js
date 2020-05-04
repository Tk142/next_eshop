import React from 'react'
import ClipLoader from 'react-spinners/ClipLoader'

const Spinner = () => {
	return (
		<div className='Spinner'>
			<ClipLoader size={250} color={'#000000'} loading={true} />
		</div>
	)
}

export default Spinner
