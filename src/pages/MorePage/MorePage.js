import React from 'react'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Footer from '../../components/Footer/Footer'
import HowToPlay from '../../components/HowToPlay/HowToPlay'


class MorePage extends React.Component{
	state = {
		showModal: false,
	}
	render = () =>{
		return(
			<>
				<Header />
				<HowToPlay />
				<Footer menu={this.props.menu} active={this.props.active}/>
			</>

		)
	}
}
export default MorePage
