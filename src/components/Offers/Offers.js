import './Offers.scss'
import { Link } from 'react-router-dom'


const Offers = () =>{
	return(
		<main className='offers'>
			<section className='offers__reward-section'>
				<div className='offers__top-container'>
					<h2 className='offers__reward-title'> My Rewards</h2>
					<a className='offers__link'>View all {'->'}</a>
				</div>
				<div className='offers__reward-container'>
				</div>
			</section>
			
			<section className='offers__game'>
				<h1 className='offers__game-title'>Game for loyalty members</h1>
				<p className='offers__game-text'>First one is on us!</p>
				<div className='offers__btn-container'>
					<Link to='/' className='offers__btn'>Play Now</Link>
					<figure className='offers__fries' />
					<figure className='offers__logo' />
				</div>

			</section>
		</main>
	)
}
export default Offers
