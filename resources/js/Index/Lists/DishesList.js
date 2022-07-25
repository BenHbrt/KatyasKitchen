import { useState, useEffect } from 'react'
import axios from 'axios'
import DishThumb from './DishThumb';

const DishesList = ({ setSelectedDish }) => {

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
                <DishThumb key={dish.id} dish={dish} setSelectedDish={setSelectedDish}/>
            ))}
        </div>
    )
}
export default DishesList;