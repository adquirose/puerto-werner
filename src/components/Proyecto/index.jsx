import styled from "styled-components"
import Logo from "../../assets/logo.png"

export const ProyectoContainer = styled.div`
    max-width:520px;
    min-width:360px;
    width:90%;
    height:100%;
    max-height:680px;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
    z-index:6;
    justify-self:center;
    align-self:center;
    border-radius:7px;
    box-shadow: 4px 9px 50px -10px rgba(0,0,0,0.85);
    background-color:white;
    overflow-y:auto;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:1rem;
    @media(max-width:420px){
        padding:0;
        max-height:480px;
    }
`
const Parrafo = styled.p`
    padding: 0 0.75rem;
`
const Proyecto = () => {
    return(
        <ProyectoContainer>
            <img src={Logo} alt="logo-proyecto" style={{width:'320px', }}/>
            <Parrafo>	
                Puerto Werner está ubicado a 10 minutos al Norte de Puerto Varas, a orillas de
            una de las lagunas más hermosas y grandes del Sur de Chile, La Pichilaguna. <br/><br/>
            Consta de solo una etapa de 46 parcelas, desde 5.000m2 aprox.
            Cuenta con amplios caminos pavimentados e iluminados, energía eléctrica
            subterránea, agua potable de pozo profundo, fibra óptica, parque, mirador y Club
            Náutico.<br/><br/>
            Su conectividad hace de este loteo, un lugar privilegiado a solo 1 km de la
            Carretera 5 Sur, conectando a ciudades como Frutillar, Puerto Varas y Puerto
            Montt, así como también hacia Aeropuerto El Tepual.<br/><br/>
            Todo el entorno de este loteo es de gran belleza y tranquilidad, la vista a los
            Volcanes Osorno, Calbuco y Puntiagudo son uno más de los atributos de esta
            parcelación.<br/><br/>
            Valor:  UF 3.900 .- sin comisión.
            </Parrafo>
        </ProyectoContainer>
    )
}
export default Proyecto