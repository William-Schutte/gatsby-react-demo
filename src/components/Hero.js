import React, { useEffect } from 'react'
import styled from 'styled-components'
import { Button } from './Button'
import Video from '../media/videos/islands.mp4'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Hero = () => {
	useEffect(() => {
		Aos.init({})
	}, []);

	return (
		<HeroContainer>
			<HeroBackground>
				<VideoBg src={Video} type="video/mp4" autoPlay loop muted playsInline />
			</HeroBackground>
			<HeroContent>
				<HeroItems>
					<HeroH1
						data-aos="fade-up"
						data-aos-delay="50"
						data-aos-duration="1000"
					>Unique Destinations</HeroH1>
					<HeroP
						data-aos="fade-up"
						data-aos-delay="200"
						data-aos-duration="1000"
					>Untold ADVENT(ur)</HeroP>
					<div
						data-aos="fade-up"
						data-aos-delay="350"
						data-aos-duration="1000"
					>
						<Button big="true" to="/trips">Travel Now</Button>
					</div>
				</HeroItems>
			</HeroContent>
		</HeroContainer>
	)
}

export default Hero

// rafce = React Arrow Function Component Export

const HeroContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	color: #fff;
	height: 100vh;
	padding: 0 1rem;
	position: relative;
	margin-top: -80px;

	:before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		bottom: 0;
		right: 0;
		z-index: 2;
		background: linear-gradient(
			180deg, 
			rgba(0,0,0,0.6) 0%, 
			rgba(0,0,0,0.1) 40%
		),
		linear-gradient(0deg, rgba(0,0,0,0.2) 0%, transparent 40%);
	}

`
const HeroBackground = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	right: 0;
	width: 100%;
	height: 100%;
	overflow: hidden;
`

const VideoBg = styled.video`
	width: 100%;
	height: 100%;
	-o-object-fit: cover;
	object-fit: cover;
`
const HeroContent = styled.div`
	z-index: 3;
	height: calc(100vh - 80px);
	max-height: 100%;
	padding: 0 calc((100vw - 1300px) / 2);
`

const HeroItems = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;
	height: 100vh;
	max-height: 100%;
	padding: 0;
	color: #fff;
	line-height: 1.1;
	font-weight: bold;
`
const HeroH1 = styled.h1`
	font-size: clamp(1.5rem, 6vw, 4rem);
	margin-bottom: 1.5rem;
	letter-spacing: 3px;
	padding: 0 1rem;
`
const HeroP = styled.p`
	font-size: clamp(1rem, 3vw, 3rem);
	margin-bottom: 2rem;
	font-weight: 400;
`