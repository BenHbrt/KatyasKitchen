import { useState } from "react";

const IngredientForm = ({ units, setIngredients }) => {

    const [data, setData] = useState({
        "name": null,
        "amount": null,
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
    }

    return (
        <div>
            <label>Name:</label><input type="text" name="name" onChange={handleUpdate}/>
            <label>Amount:</label><input type="number" name="amount" onChange={handleUpdate}/>
            <label>Unit:</label>
            <select name="unit" onChange={handleUpdate}>
                {units && units.map((unit) => (
                    <option key={unit.id} value={unit.unit}>{unit.unit}</option>
                ))}
            </select>
            <p onClick={clickHandler}>Add</p>
        </div>
    )
}
export default IngredientForm;