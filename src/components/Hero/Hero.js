import { motion } from 'framer-motion'
import './Hero.scss'

const Hero = (props) =>{
	console.log(props.attempts)
	return(
		<section className='hero'>
			<motion.div className='hero__container'
				initial={{
					opacity: 0,
					x: '-3rem',

				}}
				animate={{
					x: 0,
					opacity: 1, 
					transition: {
						duration: 0.5,


					}


				}}
			>
				<h1 className='hero__title'>Good afternoon </h1>
				<div className='hero__msg-container'>
					<h1 className='hero__username'>{props.username}</h1>
					<motion.p className='hero__emoji'
						animate={{
							rotate:[-10,15],
						}}
						transition={{yoyo: Infinity}}
					>👋</motion.p>
				</div>
					<p className='hero__rewards'>Rewards Points Balance: {props.points}</p>
					<p className='hero__rewards hero__rewards--attempts'>Attempts Left: {String(props.attempts)}</p>
			</motion.div>
		</section>
	)

}
export default Hero
