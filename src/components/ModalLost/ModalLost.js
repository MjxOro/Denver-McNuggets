import './ModalLost.scss'


const ModalLost = (props) =>{
	return(
		<section className={!props.open && props.modal2 ?'modalL':'modalL modalL--close'}>
			<div className={!props.open && props.modal2 ?'modalL__container':'modalL__container modalL__container--close'}>
				<div className='modalL__border'>
					<figure className='modalL__logo' />
					<h3 className='modalL__greeting'>All Out of Attempts</h3>
					<h3 className='modalL__greeting'>{"Don't Worry! There's other ways to get rewards!"}</h3>
					<button onClick={props.close} type='button' className='modalL__close'>Okay</button>
				</div>
			</div>
		</section>
	)
}
export default ModalLost
