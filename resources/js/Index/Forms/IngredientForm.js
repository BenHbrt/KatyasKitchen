import { useState } from "react";

const IngredientForm = ({ units, setIngredients, ingredients }) => {

    const [data, setData] = useState({
        "name": "",
        "amount": "",
        "unit": "each"
    })

    const handleUpdate = (e) => {
        setData((previous_values) => {
            return {
                ...previous_values,
                [e.target.name]: e.target.value,
            };
        });
    };

    const clickHandler = () => {
        setIngredients(current => [...current, {ingredient: data.name, amount: data.amount, unit: data.unit}])
        setData({"name": "",
        "amount": "",
        "unit": "each"})
    }

    return (
        <tr>
            <td><input type="text" name="name" onChange={handleUpdate} value={data.name}/></td>
            <td><input type="number" name="amount" onChange={handleUpdate} value={data.amount}/>
            <select name="unit" onChange={handleUpdate} value={data.unit}>
                {units && units.map((unit) => (
                    <option key={unit.id} value={unit.unit}>{unit.unit}</option>
                ))}
            </select></td>
            <td><p onClick={clickHandler}>Add</p></td>  
        </tr>
    )
}
export default IngredientForm;