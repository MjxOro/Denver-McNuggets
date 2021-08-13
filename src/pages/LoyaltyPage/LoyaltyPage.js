import './LoyaltyPage.scss'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Footer from '../../components/Footer/Footer'
import Offers from '../../components/Offers/Offers'

const LoyaltyPage = (props) =>{

	return(
		<main className='loyal'>
				<Header />
				<Hero points={props.points} username={props.username}/>
				<Offers />
				<Footer menu={props.menu} active={props.active}/>
		</main>
	)
}
export default LoyaltyPage
