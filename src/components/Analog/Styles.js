import styled from 'styled-components';

export const Analog = styled.div`
#app {
	display: flex;
	align-items: center;
	justify-content: center;
}

.c-clock {
	transform: scale(0.8);
	width: 500px;
	height: 500px;
	background: #34495e;
	border-radius: 50%;
	border: 50px solid #95a5a6;
	position: relative;
	margin: auto;
	-webkit-box-shadow: inset 0 32px 0 0 rgba(0,0,0,0.20);
	-moz-box-shadow: inset 0 32px 0 0 rgba(0,0,0,0.20);
	box-shadow: inset 0 32px 0 0 rgba(0,0,0,0.20);

	&:after {
		content: '';
		display: block;
		width: 100px;
		height: 100px;
		background: #34495e;
		position: absolute;
		left: 50%;
		top: 50%;
		border-radius: 50%;
		transform: translate(-50%,-50%);
		border: 25px solid #bdc3c7;
		z-index: 3;
	}

	.c-clock__tick {
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%,-100%);
		transform-origin: bottom center;
		text-align: center;
		&.c-clock__tick--hours {
			width: 40px;
			height: 150px;
			background: #bdc3c7;
			z-index: 2;
			transform: translate(-50%,-100%);
			border-radius: 20px 20px 0 0;
		}

		&.c-clock__tick--minutes {
			width: 40px;
			height: 150px;
			background: #bdc3c7;
			z-index: 2;
			transform: translate(-50%,-100%);
			border-radius: 20px 20px 0 0;
			overflow: hidden;
			&:after{
				content: '';
				display: block;
				position: absolute;
				bottom: -30px;
				left: 50%;
				transform: translateX(-50%);
				width: 100px;
				height: 100px;
				background: rgba(0,0,0,0.35);
				border-radius: 50%;
			}
		}

		&.c-clock__tick--seconds {
			width: 20px;
			height: 150px;
			background: #cc0000;
			z-index: 3;
			transform: translate(-50%,-100%);
			border-radius: 10px;
		}
	}
}`