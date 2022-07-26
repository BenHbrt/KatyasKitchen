import { useState, useEffect } from 'react';
import axios from 'axios';
import IngredientListItem from "./IngredientListItem";
import IngredientForm from "./IngredientForm";
import AddButton from "../Buttons/AddButton";

const ShoppinglistForm = ({ ingredients, setIngredients }) => {

    // const [ingredients, setIngredients] = useState([])
    const [dishes, setDishes] = useState([])
    const [selected, setSelected] = useState(null)
    const [units, setUnits] = useState([])

    const loadDishes = async () => {
        const response = await axios.get(`/api/dishes/index/names`);
        setDishes(response.data)
        setSelected(response.data[0].id)
    }

    // const Foo = (
    //         <div>
    //             {ingredients && ingredients.map((ingredient) => (
    //                     <p style={{fontSize: "0.3em" }}>{ingredient.ingredient}     {ingredient.amount}{ingredient.unit}</p>
    //             ))}
    //         </div>
    // );

    const handleChange = (e) => {
        setSelected(e.target.value)
    };

    const loadIngredients = async () => {
        const response = await axios.get(`/api/dishes/${selected}`);
        const newIngredients = response.data[0].ingredients
        let ingredientsList = []
        ingredients.forEach((item) => {
            ingredientsList.push(item)
        })
        newIngredients.forEach((newItem, i) => {
            let present = false
            ingredientsList.forEach((listItem) => {
                if (listItem.ingredient == newItem.ingredient) {
                    listItem.amount = listItem.amount + newItem.amount
                    present = true;
                }
            })
            if (present == false) {
                ingredientsList.push(newItem)
            }
        })
        setIngredients(ingredientsList)
    }

    // const showValues = () => {
    //     console.log(dishes)
    //     console.log(ingredients)
    //     console.log(selected)
    // }

    const loadUnits = async () => {
        const response = await axios.get(`/api/units/index`);
        // console.log(response.data)
        setUnits(response.data)
    }

    useEffect(() => {
        loadDishes();
        loadUnits();
    }, [ingredients]);

    return (
        <div className="shoppinglist_form">
        {/* <p onClick={showValues}>Values</p> */}
        {/* {selected && <p>Selected Dish: {selected}</p>} */}
            <div className="shoppinglist_form_dishes">
            <select name="ingredients" onChange={handleChange} >
                {dishes && dishes.map((dish) => (
                    <option key={dish.id} value={dish.id}>{dish.name}</option>
                ))}
            </select>
            <AddButton func={loadIngredients} />
            </div>
            <IngredientForm units={units} setIngredients={setIngredients}/>
            {(ingredients.length > 0) && <><div id="report">
            <h3>List Items:</h3>
                <table>
                <tbody>
                    {ingredients.map((ingredient, i) => (
                    <IngredientListItem key={i} ingredient={ingredient} setIngredients={setIngredients}/>
                    ))}
                </tbody>
                </table>
                </div>
            
        </>}
        </div>
    )
}
export default ShoppinglistForm;