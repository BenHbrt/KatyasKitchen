import { useState, useEffect } from 'react'
import axios from 'axios'
import DishThumb from './DishThumb';

const DishesList = ({ setSelectedDish, selectedType }) => {

    const [dishes, setDishes] = useState([]);

    const loadData = async () => {
        const response = await axios.get(`/api/dishes/index`);
        let filteredDishes = []
        if (selectedType == 0) {
            setDishes(response.data);
        } else{
            response.data.forEach(dish => {
                if (dish.type_id == selectedType) {
                    filteredDishes.push(dish)
                }
            })
            setDishes(filteredDishes)
        }
    }

    useEffect(() => {
        loadData();
    }, [selectedType]);

    return (
        <div className="disheslist">
            {dishes && dishes.map((dish) => (
                <DishThumb key={dish.id} dish={dish} setSelectedDish={setSelectedDish}/>
            ))}
        </div>
    )
}
export default DishesList;