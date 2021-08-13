import { motion } from 'framer-motion'
import './Hero2.scss'

const HeroL = (props) =>{
	console.log(props.attempts)
	return(
		<section className='heroL'>
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
				<h1 className='heroL__title'>Good afternoon </h1>
				<div className='heroL__msg-container'>
					<h1 className='heroL__username'>{props.username}</h1>
					<motion.p className='heroL__emoji'
						animate={{
							rotate:[-10,15],
						}}
						transition={{yoyo: Infinity}}
					>👋</motion.p>
				</div>
					<p className='heroL__rewards'>Rewards Points Balance: {props.points}</p>
			</motion.div>
		</section>
	)

}
export default HeroL
