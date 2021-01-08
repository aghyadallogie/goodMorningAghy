import styled from 'styled-components';

export const DateComponent = styled.div`
width: 400px;
height: 250px;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
padding: 20px 0;
border-radius: 15px;
background: rgba(255, 255, 255, 0.1);
box-shadow: 9px 9px 15px rgba(0, 0, 0, 0.6);
overflow: hidden;
border-top: 1px solid rgba(255, 255, 255, 0.5);
border-left: 1px solid rgba(255, 255, 255, 0.5);
backdrop-filter: blur(3px);
`;

export const Clock = styled.span`
  margin: 0;
  padding: 0 20px;
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.8);
  text-shadow: 0 0 10px #ff005b;
  text-transform: uppercase;
  font-family: 'Chakra Petch', sans-serif;
`