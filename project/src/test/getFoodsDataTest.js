import {useEffect, useState} from 'react';
import getFoodsData from "../useCase/getFoodsData";

const [foods, setFoods] = useState([]);

function getFoods() {
    getFoodsData().then(res => {
        setFoods(res);
    })
}

useEffect(() => {
    console.log(foods);
}, [foods])