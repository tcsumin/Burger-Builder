import React from 'react';

import classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngredient key={igKey + i} type={igKey} />
            });
        })
        .reduce((arr, el) => {
            return arr.concat(el)
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>;
    }
    
    // 1. Object.keys() returns an array of a given object's own property names.
    //  const object1 = {
    //      a: 'something',
    //      b: 42,
    //      c: false
    //  };
    //  Object.keys(object1); gives Array ["a", "b", "c"]
    // 2. map() creates new array with the results of calling a provided function on every element in the calling array.
    // 3. Array1.concat(Array2) merges Array1 and Array2.
    // 4. [...Array(x)] create Array with length x;
    // transformedIngredients is array of objects.
    //console.log(transformedIngredients);

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top"></BurgerIngredient>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"></BurgerIngredient>
        </div>
    );
};

export default burger;