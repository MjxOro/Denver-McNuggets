import React from 'react'
import './Game.scss'
import backFace from '../../images/McDonald\'s_Golden_Arches.svg'
import pair from '../../images/bigmac.png'
import wrong from '../../images/wrong.png'
import Modal from '../Modal/Modal'

class Game extends React.Component{
	state={
		frontFace: [false,false,false,false,false,false],
		win: false,
		flip: false,
		
	}
	componentDidUpdate = (prevProps, prevState) =>{
		const filtered = this.state.frontFace.filter(elem=>{return elem === true})
		if(filtered.length===2){
			if( this.state.frontFace[2] && this.state.frontFace[4]){
				setTimeout(() =>{
					this.setState({frontFace:[false,false,false,false,false,false] ,win: true})
					this.props.win(this.state.win)
					console.log('Win')
				},700)
			}
			else{
				setTimeout(() =>{
					this.setState({frontFace:[false,false,false,false,false,false] ,win: false,})
					console.log('loose')
				},700)
			}
		}
	}
	handleClose = () =>{
		this.setState({win: false})
	}

	handleChoice = (e) =>{
		this.handleFlip()
		console.log(e.target)
		let arr = this.state.frontFace;
		const filtered = this.state.frontFace.filter(elem=>{return elem === true})
		console.log(filtered.length)
		if(filtered.length < 2){
			switch(e.target.id){
				case 'one':
					arr[0] = true;
					this.setState({frontFace: arr})
					break;
				case 'two':
					arr[1] = true;
					this.setState({frontFace: arr})
					break;
				case 'three':
					arr[2] = true;
					this.setState({frontFace: arr})
					break;
				case 'four':
					arr[3] = true;
					this.setState({frontFace: arr})
					break;
				case 'five':
					arr[4] = true;
					this.setState({frontFace: arr})
					break;
				case 'six':
					arr[5] = true;
					this.setState({frontFace: arr})
					break;
				default:
					console.log('none found')
			}
			console.log(this.state.frontFace)
		}
	}
	handleFlip = () =>{
		console.log('handleclick')

	}

	render = () =>{
		return(
			<>
				<section className='game'>
					<div className='game__row'>

						<div onClick={this.handleChoice} id='one' className={this.state.frontFace[0]?'game__card-container':'game__card-container game__card-container--flip'}>
							{
								this.state.frontFace[0] ? 
								<figure className='game__card'  />
								:
								<figure className='game__card game__card--back' />
							}
						</div>
						<div onClick={this.handleChoice} id='two' className={this.state.frontFace[1]?'game__card-container':'game__card-container game__card-container--flip'}>
							{
								this.state.frontFace[1] ? 
								<figure className='game__card' />
								:
								<figure className='game__card game__card--back' />
							}
						</div>
						<div onClick={this.handleChoice} id='three' className={this.state.frontFace[2]?'game__card-container':'game__card-container game__card-container--flip'}>
							{
								this.state.frontFace[2] ? 
								<figure className='game__card game__card--pair' />
								:
								<figure className='game__card game__card--back' />
							}
						</div>
					</div>

					<div  className='game__row'>
						<div onClick={this.handleChoice} id='four' className={this.state.frontFace[3]?'game__card-container':'game__card-container game__card-container--flip'}>
							{
								this.state.frontFace[3] ? 
								<figure className='game__card' />
								:
								<figure className='game__card game__card--back' />
							}
						</div>
						<div onClick={this.handleChoice} id='five' className={this.state.frontFace[4]?'game__card-container':'game__card-container game__card-container--flip'}>
							{
								this.state.frontFace[4] ? 
								<figure className='game__card game__card--pair' />
								:
								<figure  className='game__card game__card--back' />
							}
						</div>
						<div onClick={this.handleChoice} id='six' className={this.state.frontFace[5]?'game__card-container':'game__card-container game__card-container--flip'}>
							{
								this.state.frontFace[5] ? 
								<figure className='game__card' />
								:
								<figure  className='game__card game__card--back' />
							}
						</div>
					</div>
				</section>
			<Modal win={this.state.win} close={this.handleClose} />
			</>
		)
	}
}
export default Game
