import { useState, useEffect } from 'react'
import axios from 'axios'
import DishThumb from './DishThumb';

const DishesList = () => {

    const [dishes, setDishes] = useState([]);

    const loadData = async () => {
        const response = await axios.get(`/api/dishes/index`);
        console.log(response.data);
        setDishes(response.data);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="disheslist">
            {dishes.map((dish) => (
                <DishThumb key={dish.id} dish={dish} />
            ))}
        </div>
    )
}
export default DishesList;