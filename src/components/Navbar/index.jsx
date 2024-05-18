/* eslint-disable react/prop-types */
import styled from 'styled-components'


const NavbarContainer = styled.div`
    grid-area:nav;
    height:70px;
    z-index:5;
    min-width:360px;
`
const Ul = styled.ul`
    margin:0;
    padding:0;
    list-style:none;
    display:flex;
    flex-direction:row;
    justify-content:center;
    height:100%;
    width:100%;
    @media(max-width:750px){
        display:flex;
        flex-direction:column;
        justify-content:start;
    }
`
const Item = styled.li`
    padding: 1rem 1.75rem;
    line-height:2;
    font-size:1.25rem;
    color:white;
    cursor:pointer;
`
const Navbar = ({handleClick}) => {
    return(
        <NavbarContainer>
            <Ul>
                <Item onClick={() => handleClick('proyecto')}>Proyecto</Item>
                <Item onClick={() => handleClick('ubicacion')}>Ubicación</Item>
                <Item onClick={() => handleClick('galeria')}>Galeria</Item>
                <Item onClick={() => handleClick('contacto')}>Contacto</Item>
                <Item onClick={() => handleClick('club-nautico')}>Club Nautico</Item>
            </Ul>
        </NavbarContainer>
    )
}
export default Navbar