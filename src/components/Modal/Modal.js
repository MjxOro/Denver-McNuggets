import './Modal.scss'


const Modal = (props) =>{
	return(
		<section className={props.win ?'modal':'modal modal--close'}>
			<div className={props.win ?'modal__container':'modal__container modal__container--close'}>
				<figure onClick={props.close} className='modal__close' />
				<h2 className='modal__greeting'>Congratulations!</h2>
				<h2 className='modal__greeting'>You won a Big Mac and +500pts!</h2>
				<figure className='modal__logo' />
				<h3 className='modal__message'>{"And you've entered to win a Macbook Pro"}</h3>
				<h3 className='modal__message'>Make a purchase to earn another play</h3>
			</div>
		</section>
	)
}
export default Modal
