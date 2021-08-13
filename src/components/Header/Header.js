import react from 'react'
import Sidebar from './Sidebar'
import './Header.scss'
import { Link } from 'react-router-dom'

class Header extends react.Component {
	state = {
		showSidebar: false
	} 
	componentDidMount = () => {
		//Axios call if theres an account thats logged in.
		//That will change the profile picture and status on header 
		//If an account is logged in

	}
	handleSidebar = () =>{
		//Animations for desktop
		!this.state.showSidebar ?
			this.setState({showSidebar: true})
			:
			this.setState({showSidebar: false})
				
	}

	render = () => {
		return(
			<header className='hd'>
				<div className='hd__container'>
					<Link to='/' className='hd__logo' />
				</div>
			</header>
		)
	}
}

export default Header;
