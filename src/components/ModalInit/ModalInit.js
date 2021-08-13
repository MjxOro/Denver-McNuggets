import './ModalInit.scss'


const ModalInit = (props) =>{
	return(
		<section className={props.open ?'modalI':'modalI modalI--close'}>
			<div className={props.open ?'modalI__container':'modalI__container modalI__container--close'}>
				<div className='modalI__border'>
					<figure className='modalI__logo' />
					<h3 className='modalI__greeting'>Collect points.</h3>
					<h3 className='modalI__greeting'>Get rewarded.</h3>
					<div className='modalI__group-msg'>
						<p className='modalI__greeting'>Earn points with every purchase</p>
						<p className='modalI__greeting'>redeem for special offers</p>
						<p className='modalI__greeting'>Get access to special offers</p>
					</div>
					<p className='modalI__message'>{"Make a pair with items on our menu with our new card games!"}</p>
					<p className='modalI__message'>{"Ready to play?"}</p>
					<button onClick={props.close} type='button' className='modalI__close'>Play Now</button>
				</div>
			</div>
		</section>
	)
}
export default ModalInit
