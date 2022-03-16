import { useSelector } from "react-redux";

const useDishesGraph = () =>{
    let drink = 0;
    let breakfast = 0;
    let food = 0;
    let dessert = 0;
    let dinner = 0;
    let priceDrink = 0;
    let priceBreak = 0;
    let priceFood = 0;
    let priceDess = 0;
    let priceDiner = 0;
    const quantities = [];
    const prices = [];

    const { dishes } = useSelector( (state) => state.dishes );

    for(let i = 0; i < dishes.length; i ++){
        if( dishes[i].category === 'drink'){
            drink += dishes[i].quantity;
            priceDrink += dishes[i].price;
        }

        if(dishes[i].category === 'breakfast'){
            breakfast += dishes[i].quantity;
            priceBreak += dishes[i].price;
        }

        if(dishes[i].category === 'food'){
            food += dishes[i].quantity;
            priceFood += dishes[i].price;
        }

        if(dishes[i].category === 'dessert'){
            dessert += dishes[i].quantity;
            priceDess += dishes[i].price;
        }
        
        if(dishes[i].category === 'dinner'){
            dinner += dishes[i].quantity;
            priceDiner += dishes[i].price;
        }
    }
    quantities.push(drink);
    quantities.push(breakfast);
    quantities.push(food);
    quantities.push(dessert);
    quantities.push(dinner);
    prices.push(priceDrink);
    prices.push(priceBreak);
    prices.push(priceFood);
    prices.push(priceDess);
    prices.push(priceDiner);

    return {
        quantities,
        prices
    }
}

export default useDishesGraph;