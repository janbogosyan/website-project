import classes from './Products.module.css';
import { programsData } from '../../data/productsData';

const Products = () => {

    return (
        <div className={classes.products}>
            <div className={classes['products-header']}>
                <span className='stroke-text'>Discounted</span>
                <span>Most Selling</span>
                <span>New</span>
            </div>
            <div className={classes['products-categories']}>
                {programsData.map(x => (
                    <div className={classes.category}>
                        {x.image}
                        <span className={classes['categories-text']}>{x.heading}</span>
                        <span>{x.details}</span>
                    </div>
                ))}
            </div>
        </div>
    )

}
export default Products;