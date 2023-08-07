import { useState } from 'react';
import classes from './Reviews.module.css';
import { reviews } from '../../data/reviews';
import leftArrow from '../../assets/leftArrow.png';
import rightArrow from '../../assets/rightArrow.png';

const Reviews = () => {

    const [selected, setSelected] = useState(0);
    const reviewsLength = reviews.length;

    return (
        <div className={classes.reviews}>
            <div className={classes['left-reviews']}>
                <span>Reviews</span>
                <span className='stroke-text'>What they</span>
                <span>say about us</span>
                <span>
                    {reviews[selected].review}
                </span>
                <span>
                    <span style={{ color: 'gold', }}>
                        {reviews[selected].name}
                    </span>
                </span>
            </div>
            
            <div className={classes['right-reviews']}>
                <img src={reviews[selected].image} alt='reviewer' />

                <div className={classes.arrows}>
                    <img src={leftArrow} alt='left arrow' />
                    <img src={rightArrow} alt='right arrow' />
                </div>
            </div>
        </div>
    )
}

export default Reviews;