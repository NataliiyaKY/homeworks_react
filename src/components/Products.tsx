import React, {FC, useEffect, useState} from 'react';
import Product, {IProductProps, IProductTypeProps} from '../components/Product'

const Products: FC = () => {

    const [recipes, setRecipes] = useState<IProductProps[]>([])

    useEffect(() => {
        fetch('https://dummyjson.com/products')
            .then(value => value.json())
            .then(({value}) => {
                setRecipes(recipes)
            })
    }, []);

    return (
        <div>
            {recipes.map(({
                              id,
                              title,
                              description,
                              price,
                              discountPercentage,
                              rating,
                              stock,
                              brand,
                              category,
                              thumbnail,
                              images
                          }: IProductProps) => (
                <Product key={id}
                         id={id} title={title} description={description} price={price}
                         discountPercentage={discountPercentage}
                         rating={rating} stock={stock} brand={brand} category={category} thumbnail={thumbnail}
                         images={images}/>
            ))}
        </div>
    );
};

export default Products;