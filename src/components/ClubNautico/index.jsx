/* eslint-disable react/prop-types */
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css";

const ClubNautico = ({estado, setEstado}) => {
    const {sectionActiva} = estado
    return(
        <Lightbox
            open={sectionActiva}
            close={() => {
                setEstado({...estado, sectionActiva:false})
                
            }}
            slides={[
                { src: new URL('../../assets/clubnautico/1.jpg', import.meta.url).href, },
                { src: new URL('../../assets/clubnautico/2.jpg', import.meta.url).href, },
                { src: new URL('../../assets/clubnautico/3.jpg', import.meta.url).href, },
                { src: new URL('../../assets/clubnautico/4.jpg', import.meta.url).href, },
                { src: new URL('../../assets/clubnautico/5.jpg', import.meta.url).href, },
                { src: new URL('../../assets/clubnautico/6.jpg', import.meta.url).href, },
                { src: new URL('../../assets/clubnautico/7.jpg', import.meta.url).href, },
                { src: new URL('../../assets/clubnautico/8.jpg', import.meta.url).href, },
                { src: new URL('../../assets/clubnautico/9.jpg', import.meta.url).href, },
                { src: new URL('../../assets/clubnautico/10.jpg', import.meta.url).href, },
            ]}
        />
    )
}
export default ClubNautico