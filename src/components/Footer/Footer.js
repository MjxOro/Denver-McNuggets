import './Footer.scss'
import homeIcon from '../../images/mcdonalds.png'
import homeIconActive from '../../images/McDonald\'s_Golden_Arches.svg'
import friesIcon from '../../images/french-fries.png'
import friesIconActive from '../../images/french-fries-active.png'
import offers from '../../images/tag.png'
import offersActive from '../../images/tag-active.png'
import past from '../../images/past.png'
import pastActive from '../../images/pas-active.png'
import more from '../../images/more.png'
import moreActive from '../../images/more-active.png'
import { Link } from 'react-router-dom'

const Footer = (props) =>{
	return(
		<footer className='ft'>
			<div className='ft__menu'>
				<Link to='/'  id='home' className='ft__category' onClick={props.menu}>
		{props.active[0] ? <img src={homeIcon} alt='Home Nav' className='ft__icon'/> :<img src={homeIconActive} alt='Home Nav' className='ft__icon ft__icon--active'/>
		}
					<p className='ft__text-nav'>Home</p>
				</Link>
				<Link to='/order'   id='order' className='ft__category' onClick={props.menu}>
		{props.active[1] ? <img src={friesIcon} alt='Order Nav' className='ft__icon'/> :<img src={friesIconActive} alt='Home Nav' className='ft__icon ft__icon--active'/>
		}
					<p className='ft__text-nav'>Order</p>
				</Link>
				<Link to='/loyalty'   id='loyalty' className='ft__category' onClick={props.menu}>
		{props.active[2] ? <img src={offers} alt='Loyalty Nav' className='ft__icon'/> :<img src={offersActive} alt='Home Nav' className='ft__icon ft__icon--active'/>
		}
					<p className='ft__text-nav'>Loyalty</p>
				</Link>
				<Link to='/recents'   id='past' className='ft__category' onClick={props.menu}>
		{props.active[3] ? <img src={past} alt='Recents Nav' className='ft__icon'/> :<img src={pastActive} alt='Home Nav' className='ft__icon ft__icon--active'/>
		}
					<p  id='home' className='ft__text-nav'>Recents</p>
				</Link>
				<Link to='/more'   id='more' className='ft__category' onClick={props.menu}>
		{props.active[4] ? <img src={more} alt='More Nav' className='ft__icon'/> :<img src={moreActive} alt='Home Nav' className='ft__icon ft__icon--active'/>
		}
					<p className='ft__text-nav'>More</p>
				</Link>
			</div>
		</footer>
	)
}
export default Footer
