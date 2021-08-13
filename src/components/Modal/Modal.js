import './Modal.scss'


const Modal = (props) =>{
	return(
		<section className={props.win ?'modal':'modal modal--close'}>
			<div className={props.win ?'modal__container':'modal__container modal__container--close'}>
				<figure onClick={props.close} className='modal__close' />
				<h1 className='modal__greeting'>Congratulations!</h1>
				<h2 className='modal__greeting'>You won a Big Mac and +500pts!</h2>
				<figure className='modal__logo' />
				<h3 className='modal__message'>{"And you've entered to win a Macbook Pro"}</h3>
				<h3 className='modal__message'>Make a purchase to earn another play</h3>
				<h3 className='modal__share'>Share</h3>
				<div className='modal__socials'>
					<figure className='modal__icon' />
					<figure className='modal__icon modal__icon--i' />
					<figure className='modal__icon modal__icon--f' />
				</div>

			</div>
		</section>
	)
}
export default Modal
