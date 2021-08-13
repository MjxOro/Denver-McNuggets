import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Footer from '../../components/Footer/Footer'
import Game from '../../components/Game/Game'


class LandingPage extends React.Component{
	state = {
		showModal: false,
	}
	render = () =>{
		return(
			<>
				<Header />
				<Hero attempts={this.props.attempts} points={this.props.points} username={this.props.username}/>
				<Game getAttempt={this.props.getAttempt} win={this.props.win} handleWin={this.props.handleWin}/>
				<Footer menu={this.props.menu} active={this.props.active}/>
			</>

		)
	}
}
export default LandingPage
