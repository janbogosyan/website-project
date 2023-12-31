import classes from './Reasons.module.css';
// import { images } from '../../data/pictures';
// import { programsData } from '../../data/productsData';
import Nintendo1 from '../../assets/nintendo1.png';
import Nintendo2 from '../../assets/nintendo22.png';
import Nintendo3 from '../../assets/nintendo3.png';
import NintendoLogo from '../../assets/nintendo.png';
import Check from '../../assets/check.png';
import Sponsor1 from '../../assets/sponsor1.png';
import Sponsor2 from '../../assets/sponsor2.png';
import Sponsor3 from '../../assets/sponsor3.png';



const Reasons = () => {

    return (
        <div className={classes.reasons}>
            {/* {programsData.map( image => <img src={image.image} alt='something'/>)} */}
            <div className={classes['left-r']}>
                {/* {images.map(picture => <li key={Math.random()}><img src={picture} alt='something' /></li>)} */}
                <img src={Nintendo1} alt='nintendo1' />
                <img src={Nintendo2} alt='nintendo2' />
                <img src={Nintendo3} alt='nintendo3' />
                <img src={NintendoLogo} alt='nintendoLogo' />
            </div>
            <div className={classes['right-r']}>
                <span>some reasons</span>

                <div>
                    <span className='stroke-text'>why </span>
                    <span>choose us?</span>
                </div>
                <div className={classes['details-r']}>
                    <div>
                        <img src={Check} alt='' />
                        <span>OVER 100+ Products</span>
                    </div>
                    <div>
                        <img src={Check} alt='' />
                        <span>Super Models</span>
                    </div>
                    <div>
                        <img src={Check} alt='' />
                        <span>Best prices</span>
                    </div>
                    <div>
                        <img src={Check} alt='' />
                        <span>Best quality</span>
                    </div>
                </div>
                <div className={classes.frame}>
                    <span
                        style={{ color: 'white', fontWeight: 'normal', fontSize: '22px' }}
                    >
                        SPONSORED BY :
                    </span>
                    <div className={classes.sponsors}>
                        <img src={Sponsor1} alt='sponsor1' />
                        <img src={Sponsor2} alt='sponsor2' />
                        <img src={Sponsor3} alt='sponsor3' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reasons;