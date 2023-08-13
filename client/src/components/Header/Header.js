import classes from './Header.module.css';
import Logo from '../../assets/NicePng_anime-hair-png_4764979.png'
const Header = () => {

    return (
        <div className={classes.header}>

            <img className={classes.logo} src={Logo} alt='logo' />
         
            <ul className={classes['header-menu']}>
                <li>Home</li>
                <li>Shop</li>
                <li>Why us</li>
                <li>Discounts</li>
                <li>Contacts</li>
            </ul>
        </div>
    )
}
export default Header;