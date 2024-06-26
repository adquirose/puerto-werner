import styled, { keyframes } from "styled-components"
import theme from '../../constants'
import { useEffect } from "react";

const slideDown = keyframes`
    0% {
        transform: translateY(-1.25rem); /* 20px */
        opacity: 0;
    }
 
    10% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
    
    90% {
        transform: translateY(1.25rem);
        opacity: 1;
    }
 
    100% {
        transform: translateY(1.25rem);
        opacity: 0;
    }
`;
 
const ContenedorAlerta = styled.div`
    z-index: 1000;
    width: 100%;
    left: 0;
    top: 1.25rem; 
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: ${slideDown} 4s ease forwards;
 
    p {
        background: ${(props) => {
            if(props.$tipo === 'error'){
                return theme.rojo;
            } else if (props.$tipo === 'exito') {
                return theme.verde;
            } else {
                return '#000';
            }
        }};
        color: #fff;
        padding: 1.25rem 2.5rem; /* 20px 40px */
        border-radius: 0.31rem; /* 5px */
        box-shadow: 0px 0px 15px rgba(0,0,0,.1);
        text-align: center;
    }
`;

// eslint-disable-next-line react/prop-types, no-unused-vars
const Alerta = ({alerta = {}, setAlerta}) => {
	useEffect(()=> {
        let tiempo 

        if(alerta.active === true){
            tiempo = setTimeout(() => { 
                setAlerta({active:false, mensaje:'', tipo:''}
            )}, 4000)
        }
        return (() => clearTimeout(tiempo)) 
    },[alerta.active, setAlerta])
	return (
		<>
            {alerta.active && <ContenedorAlerta $tipo={alerta.tipo}>
				<p>{alerta.mensaje}</p>
			</ContenedorAlerta>
            }
		</>
	);
}
 
export default Alerta;