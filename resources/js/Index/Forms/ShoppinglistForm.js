import ReactDOMServer from "react-dom/server";
import { useState, useEffect } from 'react';
import axios from 'axios';
import jsPDF from "jspdf";

const ShoppinglistForm = () => {

    const [ingredients, setIngredients] = useState([])
    const [dishes, setDishes] = useState([])
    const [selected, setSelected] = useState(null)

    const loadDishes = async () => {
        const response = await axios.get(`/api/dishes/index/names`);
        setDishes(response.data)
    }

    // const Foo = (
    //         <div>
    //             {ingredients && ingredients.map((ingredient) => (
    //                     <p style={{fontSize: "0.3em" }}>{ingredient.ingredient}     {ingredient.amount}{ingredient.unit}</p>
    //             ))}
    //         </div>
    // );
    
    const generatePDF = () => {
        const report = new jsPDF('portrait','pt','a4');
        report.html(document.querySelector('#report')).then(() => {
            report.save('report.pdf');
    })};

    const handleChange = (e) => {
        setSelected(e.target.value)
    };

    const loadIngredients = async () => {
        const response = await axios.get(`/api/dishes/${selected}`);
        const newIngredients = response.data[0].ingredients
        let ingredientsList = []
        const oldIngredients = ingredients
        oldIngredients.forEach((item) => {
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

    const showValues = () => {
        console.log(dishes)
        console.log(ingredients)
        console.log(selected)
    }

    useEffect(() => {
        loadDishes();
    }, [ingredients]);

    return (
        <>
        <h1>Shopping List</h1>
        <p onClick={showValues}>Values</p>
        {selected && <p>Selected Dish: {selected}</p>}
        <select name="ingredients" onChange={handleChange} >
            {dishes && dishes.map((dish) => (
                <option key={dish.id} value={dish.id}>{dish.name}</option>
            ))}
        </select>
        <button onClick={loadIngredients}>Add</button>
        <div id="report">
        <h3>Ingredients:</h3>
            <table>
            <tbody>
                {ingredients && ingredients.map((ingredient) => (
                    <tr key={ingredient.id}>
                        <td>{ingredient.ingredient}</td>
                        <td>{ingredient.amount} {ingredient.unit}</td>
                    </tr>
                ))}
            </tbody>
            </table>
            </div>
        <button onClick={generatePDF}>save</button>
        </>
    )
}
export default ShoppinglistForm;