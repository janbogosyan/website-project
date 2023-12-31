import Header from '../Header/Header';
import classes from './First.module.css';
import Goku from '../../assets/goku-png-23549.png';
import { motion } from 'framer-motion';

const First = () => {

    const transition = { type: 'spring', duration: 3 };
    const mobile = window.innerWidth <= 768 ? true : false;  //the_best_ad text calibrated like this for mobile version

    return (

        <div className={classes.first}>
            <div className={classes['left-side']}>
                <Header />

                {/* the best anime shop */}
                <div className={classes['the-best-ad']}>
                    <motion.div
                        initial={{ left: mobile ? '71':'105px' }}
                        whileInView={{ left: '8px' }}
                        transition={{ ...transition, type: 'tween', repeat: Infinity }}
                    >
                    </motion.div>
                    <span>the best anime shop</span>
                </div>
                {/*Buy heading */}
                <div className={classes['size-adjustment']}>
                    <div className={classes['buy-heading']}>
                        <div>
                            {/* this className 'stroke-text' coming from App.css(so no need to import its global) */}
                            <span className='stroke-text'>Buy </span>
                            <span>Your </span>
                        </div>
                        <div>
                            <span>Dream items</span>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: '-60vh' }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 3 }}
                        >
                            <span>Only here you can choose between huge collection of products !</span>
                        </motion.div>

                    </div>
                    {/* figures */}
                    <div className={classes['figures']}>
                        <div>
                            <span>+1000</span>
                            <span>ANIME STICKERS</span>
                        </div>
                        <div>
                            <span>+100</span>
                            <span>ANIME FIGURES</span>
                        </div>
                        <div>
                            <span>+20</span>
                            <span>VIDEO GAMES</span>
                        </div>
                    </div>
                </div>

                {/* cool buttons */}
                <div className={classes['cool-buttons']}>
                    <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity }} >
                        <button className='btn'>Cool Button 1</button>
                    </motion.div>
                    <motion.div
                        // initial={{ left: '105px',right: '20px' }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity }}>
                        <button className='btn'>Cool Button 2</button>
                    </motion.div>
                </div>

            </div>
            <div className={classes['right-side']}>
                <div className={classes['right-button']}>
                    <button>
                        COME NOW
                    </button>
                </div>
            </div>
            {/* <div className={`${classes['goku-img']} ${classes['goku-img-second']}`}>
                    <img src={Goku} alt='young goku' />
                </div> */}
            <img className={classes['goku-img']} src={Goku} alt='Goku' />
            <div className={classes['rightside-new']}>

            </div>
        </div>
    )
}

export default First; 