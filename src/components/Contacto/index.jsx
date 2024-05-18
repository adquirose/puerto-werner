import { useState } from "react";
import { ProyectoContainer } from "../Proyecto";
import Alerta from "../Alerta";
import styled from "styled-components";
import theme from "../../constants";

const INITIAL_STATE = {
    nombre:'',
    email:'',
    telefono:'',
    mensaje:'',
}
const INITIAL_STATE_ALERTA = {
     active:false, mensaje:'', tipo:''
}
const Form = styled.form`
    width:100%;
    display:flex;
    flex-direction:column;
    
`
const Label = styled.label`
    width: auto;
    font-size: 1.25rem; 
    align-self:start;
    padding-bottom:0.5rem;
    padding-left:0.75rem;
    
`
const Input = styled.input`
    background: ${theme.grisClaro};
    cursor: pointer;
    border-radius: 0.25rem;
    border: none;
    height: 100%; 
    max-width:100%;
    padding-left:0.75rem;
    font-size: 1.2rem; 
    transition: .5s ease all;
    &:hover {
        background: ${theme.grisClaro2};
    }
`
const Textarea = styled(Input)`
    height:120px;
`
const InputLabel = styled.div`
    display:flex;
    flex-direction:column;
    min-height:70px;
    padding:0.25rem 0;
    &:last-child{
       
    }
`
const Button = styled.button`
    border-radius:5px;
    padding:0.75rem 0.75rem;
    background-color: lightblue;
    color:white;
    font-size: 1rem;
    border:none;
    cursor:pointer;
    height:2.5rem;
    width:120px;

    transition: .5s ease all;
    &:hover{
        background-color:blue;
    }
    
`
const Contacto = () => {
    const [data, setData] = useState({...INITIAL_STATE})
    const [alerta, setAlerta] = useState({...INITIAL_STATE_ALERTA})
    const handleOnChange = (event) => {
        setData({...data, [event.target.name]:event.target.value})
    }
    const handleOnsubmit = (event) => {
        event.preventDefault()
        
        setAlerta({tipo:'exito', mensaje:'mensaje enviado!', active:true})

    }
    const { nombre, email, telefono, mensaje } = data
    return(
        <ProyectoContainer>
            <Form onSubmit={handleOnsubmit}>
                <InputLabel>
                    <Label>Nombre</Label>
                    <Input type="text" name="nombre" placeholder="Tu Nombre" onChange={handleOnChange} value={nombre}/>
                </InputLabel>
                <InputLabel>
                    <Label>Email</Label>
                    <Input type="email" name="email" placeholder="Tu Email" onChange={handleOnChange} value={email}/>
                </InputLabel>
                <InputLabel>
                    <Label>Telefono</Label>
                    <Input type="text" name="telefono" placeholder="Tu Telefono" onChange={handleOnChange} value={telefono}/>
                </InputLabel>
                <InputLabel>
                    <Label>Mensaje</Label>
                    <Textarea type="textarea" name="mensaje" placeholder="Mensaje" onChange={handleOnChange} value={mensaje}/>
                </InputLabel>
                <InputLabel>
                    <Button type="submit">Enviar</Button>
                </InputLabel>
            </Form>
            <Alerta alerta={alerta} setAlerta={setAlerta}/> 
        </ProyectoContainer>
    )
}
export default Contacto