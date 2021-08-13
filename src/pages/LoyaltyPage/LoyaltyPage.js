import './LoyaltyPage.scss'
import Header from '../../components/Header/Header'
import HeroL from '../../components/Hero2/Hero2'
import Footer from '../../components/Footer/Footer'
import Offers from '../../components/Offers/Offers'

const LoyaltyPage = (props) =>{

	return(
		<main className='loyal'>
				<Header />
				<HeroL points={props.points} username={props.username}/>
				<Offers />
				<Footer menu={props.menu} active={props.active}/>
		</main>
	)
}
export default LoyaltyPage
