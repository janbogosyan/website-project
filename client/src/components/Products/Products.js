import * as React from 'react';
import classes from './Products.module.css';
import { programsData } from '../../data/productsData';
// import ProductsButtons from './ProductsButtons';
// import proba from '../../data/proba';
// import something from '../../assets/20-205890_15-off-purchase-of-for-honor-at-gamestop.png'
// import {images} from '../../data/pictures'

const Products = ({backendUserInfo}) => {
    const [shouldShowResult, setShouldShowResult] = React.useState(false);

    // console.log(result);
    console.log(backendUserInfo)
    return (
        <>
            {/* {images.map((img) => <img className={classes.img} src={img} alt="test" />)}  */}

            {shouldShowResult && backendUserInfo != null && backendUserInfo.users.map((item,i) => <li key={i}>{item}</li>)}

            <div className={classes.products}>
                <div className={classes['products-header']}>
                    <span >
                        <button
                            className='stroke-text'
                            onClick={() => setShouldShowResult(true)}
                        >
                            Discounted
                        </button>
                    </span>
                    <span>Most Selling</span>
                    <span className='stroke-text'>New</span>
                </div>
                <div className={classes['products-categories']}>
                    {programsData.map((x, i) => (
                        <div key={i} className={classes.category}>
                            {/* {x.image} */}
                            <span className={classes['categories-text']}>{x.heading}</span>
                            <img className={classes.img} src={x.image} alt='something' />

                            <span>{x.details}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )

}
export default Products;