/* eslint-disable react/prop-types */
import styled from 'styled-components'
import { Menu2, ERemove } from '../Icons'
import { useState } from 'react'

const ContainerNav = styled.div`
    width:280px;
    position:absolute;
    top:10px;
    left:10px;
    z-index:4;
    border-radius:7px;
    background-color:rgba(255,255,255,0.75);
`
const List = styled.ul`
    margin:0;
    padding:3rem 0;
    list-style:none;
    display:flex;
    flex-direction:column;
    justify-content:start;
    height:100%;
    width:100%;
`
const Item = styled.li`
    padding: 0.5rem 1.75rem;
    line-height:2;
    font-size:1.25rem;
    color:black;
    cursor:pointer;
    &:hover{
        color:white;
        background-color:lightblue;
    } 
`
const Button = styled.button`
    // width:50px;
    // height:50px;
 
    border:none;
    background:none;
    cursor:pointer;
    padding:0;
    
    
`
const Navbar = ({handleClick}) => {
    const [activo, setActivo] = useState(false)
    const handleOnClick = () => {
        setActivo(!activo)
        console.log(activo)
    }
    return(
        <>
            {activo ?
                <ContainerNav>
                    <div style={{position:'absolute', top:'10px', right:'10px', zIndex:'10'}}>
                        <Button onClick={handleOnClick}>
                            <ERemove width={36} height={36}/>
                        </Button>
                    </div>
                    <List>
                        <Item onClick={() => handleClick('proyecto')}>Proyecto</Item>
                        <Item onClick={() => handleClick('ubicacion')}>Ubicación</Item>
                        <Item onClick={() => handleClick('galeria')}>Galeria</Item>
                        <Item onClick={() => handleClick('contacto')}>Contacto</Item>
                        <Item onClick={() => handleClick('club-nautico')}>Club Nautico</Item>
                    </List>
                </ContainerNav>
                :
                <div style={{position:'absolute', top:'10px', left:'10px', zIndex:'10'}}>
                    <Button onClick={handleOnClick}>
                        <Menu2  fill="white" width={42} height={42}/>
                    </Button>
                </div>
            }
        </>
    )
}
export default Navbar