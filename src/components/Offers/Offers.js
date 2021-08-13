import './Offers.scss'
import { Link } from 'react-router-dom'


const Offers = () =>{
	return(
		<>
		<main className='offers'>
			<section className='offers__reward-section'>
				<div className='offers__top-container'>
					<h2 className='offers__reward-title'> My Rewards</h2>
					<a className='offers__link'>View all {'->'}</a>
				</div>
				<div className='offers__reward-container'>
					<div className='offers__square'>
						<h2 className='offers__cost'>1500pts</h2>
						<figure className='offers__img1'/>
					</div>
					<div className='offers__square'>
						<h2 className='offers__cost'>1500pts</h2>
						<figure className='offers__img2'/>
					</div>
					<div className='offers__square'>
						<h2 className='offers__cost'>3000pts</h2>
						<figure className='offers__img3'/>
					</div>
				</div>
			</section>
			
			<section className='offers__game'>
				<h1 className='offers__game-title'>Just in time for Back to School</h1>
				<p className='offers__game-text'>Enter for your chance to win.</p>
				<p className='offers__game-text'>First play is on us!</p>
				<div className='offers__btn-container'>
					<Link to='/' className='offers__btn'>Play Now</Link>
					<figure className='offers__macbook' />
				</div>

			</section>
		</main>
		</>
	)
}
export default Offers
