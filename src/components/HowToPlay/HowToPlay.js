import './HowToPlay.scss'
import Fries from '../../images/french-fries-active.png'

export default function HowToPlay() {
    return(
        <section>
            <h1>Collect points and get rewarded</h1>
            <article>
                <h2>How to play</h2>
                <div>
                    <img src={Fries} alt='Fries icon'/>
                    <p>Place an order on the app</p>
                </div>
                <div>
                    <img src={Fries} alt='Fries icon'/>
                    <p>Take a pic, upload to Twitter and tag your bestie</p>
                </div>
                <div>
                    <img src={Fries} alt='Fries icon'/>
                    <p>Earn free rewards with every entry</p>
                </div>
                <input type='button' value='Play now'/>
            </article>
            <p>Official Rules | Privacy Policy<br/>
            McDonalds Terms of Use | FAQ</p>
            <p>*To enter without making a purchase, <a href=''>click here</a></p>
            <p>LEGAL RESIDENTS OF CANADA, 18 OR OLDER AND WHO ARE MEMBERS OF THE
                MCDONALDS CANADA LOYALITY PROGRAM AT THE TIME OF ENTRY. Participating stores only.
                Promotion ends 8/31/21. For official rules and how to enter visit</p>
        </section>
    )
}