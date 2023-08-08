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
                <div></div>
                <div></div>
                <img src={reviews[selected].image} alt='reviewer' />

                {/* this is for left arrow logic to go back(previous review)*/}
                <div className={classes.arrows}>
                    <img onClick={() => {
                        selected === 0          //if we are on first review(0)
                            ? setSelected(reviewsLength - 1)      //return the last review
                            : setSelected((prev) => prev - 1)     // or 1 review back
                    }}
                        src={leftArrow}
                        alt='left arrow'
                    />
                    {/* and for right Arrow logic to go next review */}
                    <img onClick={() => {
                        selected === reviewsLength - 1        //if we are already on last review
                            ? setSelected(0)                  //return the first review(0)
                            : setSelected((prev) => prev + 1)
                    }}
                        src={rightArrow}
                        alt='right arrow'
                    />
                </div>
            </div>
        </div>
    )
}

export default Reviews;