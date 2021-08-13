import logo from './logo.svg';
import React from 'react';
import './App.css';
import LandingPage from './pages/LandingPage/LandingPage'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import LoyaltyPage from './pages/LoyaltyPage/LoyaltyPage';
import ModalInit from './components/ModalInit/ModalInit';


class App extends React.Component {

	state ={
		menuActive: [false,true,true,true,true],
		username: 'Nancy',
		points: 500,
		modal: true,
		win: false,

	}
	componentDidMount = () =>{

	}
	getWin = (obj) =>{
		this.setState({win: obj,points: this.state.points + 500,})



	}

	handleMenu = (e) =>{
		e.stopPropagation();
		if(e.target.id === 'home'){
			this.setState({menuActive: [false,true,true,true,true]})
		}
		else if(e.target.id === 'order'){
			this.setState({menuActive:[true,false,true,true,true]})
		}
		else if(e.target.id === 'loyalty'){
			this.setState({menuActive:[true,true,false,true,true]})
		}
		else if(e.target.id === 'past'){
			this.setState({menuActive:[true,true,true,false,true]})
		}
		else if(e.target.id === 'more'){
			this.setState({menuActive:[true,true,true,true,false]})
		}
		else {
			this.setState({menuActive:[false,false,false,false,false]})
		}
	}
	closeModal = () =>{
		this.setState({modal:false})
	}
	render = () =>{
		return (
			this.state.menuActive &&
			<>
			<BrowserRouter>
				<div className="App">
					<Route  path='/' exact render ={(routerProps)=>
						<ModalInit open={this.state.modal} close={this.closeModal} {...routerProps} />
					}/>
				<Switch>
					<Route  path='/loyalty' exact render ={(routerProps)=>
						<LoyaltyPage username={this.state.username} points={this.state.points} menu={this.handleMenu} active={this.state.menuActive} {...routerProps} />
					}/>
					<Route  path='/'  render ={(routerProps)=>
						<LandingPage win={this.getWin}username={this.state.username} points={this.state.points} menu={this.handleMenu} active={this.state.menuActive} {...routerProps} />
					}/>
						
				</Switch>
				</div>
			</BrowserRouter>
			</>
		);
	}
}

export default App;
