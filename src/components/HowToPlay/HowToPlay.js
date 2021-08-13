import './HowToPlay.scss'
import Fries from '../../images/french-fries-active.png'
import Footer from '../Footer/Footer'

export default function HowToPlay() {
    return(
				<>
        <section className='howto'>
            <h1 className='howto__header'>Collect points and get rewarded</h1>
            <article className='howto__card'>
                <h2 className='howto__subheader'>How to play</h2>
                <div className='howto__step'>
                    <img className='howto__fries' src={Fries} alt='Fries icon'/>
                    <p className='howto__step--text'>Place an order on the app</p>
                </div>
                <div className='howto__step'>
                    <img className='howto__fries' src={Fries} alt='Fries icon'/>
                    <p className='howto__step--text'>Take a pic, upload to Twitter and tag your bestie</p>
                </div>
                <div className='howto__step'>
                    <img className='howto__fries' src={Fries} alt='Fries icon'/>
                    <p className='howto__step--text'>Earn free rewards with every entry</p>
                </div>
                <input className='howto__button' type='button' value='Play now'/>
            </article>
            <p className='howto__details'>Official Rules | Privacy Policy<br/>
            McDonalds Terms of Use | FAQ</p>
            <p className='howto__details'>*To enter without making a purchase, <a href=''>click here</a></p>
            <p className='howto__details'>LEGAL RESIDENTS OF CANADA, 18 OR OLDER AND WHO ARE MEMBERS OF THE
                MCDONALDS CANADA LOYALITY PROGRAM AT THE TIME OF ENTRY. Participating stores only.
                Promotion ends 8/31/21. For official rules and how to enter visit</p>
        </section>
				</>
    )
}
