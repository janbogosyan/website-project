import classes from './Footer.module.css';
import Instagram from '../../assets/instagram.png';
import Phone from '../../assets/phone.png';

const Footer = () => {
    return (
        <div className={classes['footer-container']}>
            <hr />
            <div className={classes.footer}>
                <img src={Instagram} alt='instagram logo' />
                <img src={Phone} alt='phone logo' />
            </div>
        </div>
    )
}

export default Footer;