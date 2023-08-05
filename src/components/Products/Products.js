import classes from './Products.module.css';
import { programsData } from '../../data/productsData';
// import proba from '../../data/proba';
// import something from '../../assets/20-205890_15-off-purchase-of-for-honor-at-gamestop.png'
// import {images} from '../../data/pictures'

const Products = () => {

    return (
        <>
            {/* {images.map((img) => <img className={classes.img} src={img} alt="test" />)}  */}
            

            <div className={classes.products}>
                <div className={classes['products-header']}>
                    <span className='stroke-text'>Discounted</span>
                    <span>Most Selling</span>
                    <span>New</span>
                </div>
                <div className={classes['products-categories']}>
                    {programsData.map((x,i) => (
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