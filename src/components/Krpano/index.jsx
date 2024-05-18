import useKrpano from 'react-krpano-hooks'
import styled from 'styled-components'


const KrpanoContainer = styled.div`
    width:100%;
    height:100%;
    grid-column: 1 / -1;
    grid-row: 1 / -1;
`

// const slideOut = keyframes`
//     0% {
//         transform: translateX(20px); 
//         opacity: 1;
//     }
//     100% {
//         transform: translateX(-340px);
//         opacity: 0;
//     }
// `;


const Krpano = () => {
    
    const { 
        containerRef 
    } = useKrpano({
            height:'100%',
            width:'100%',
           
    })

    return(
        <KrpanoContainer>
            <div ref={containerRef}/>
        </KrpanoContainer>   
    )
}
export default Krpano

