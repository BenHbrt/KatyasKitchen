import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import axios from 'axios'
import IngredientForm from "./IngredientForm";

const DishForm = () => {

    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [types, setTypes] = useState(null);
    const [units, setUnits] = useState(null);
    const [ingredients, setIngredients] = useState([])
    const [values, setValues] = useState({
        "name": null,
        "type_id": 1,
        "heading": null,
        "source": null,
        "method": null,
        "notes": null,
        "ingredients": []
    })

    const loadTypes = async () => {
        const response = await axios.get(`/api/types/index`);
        setTypes(response.data)
    }

    const loadUnits = async () => {
        const response = await axios.get(`/api/units/index`);
        // console.log(response.data)
        setUnits(response.data)
    }

    const handleChange = (e) => {
        setValues((previous_values) => {
            return {
                ...previous_values,
                [e.target.name]: e.target.value,
            };
        });
    };

    const handleImage = (e) => {
        // console.log(e.target.value)
        setImage(e.target.files[0]);
    };

    const showValues = () => {
        console.log(values)
        console.log(ingredients)
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        const options = {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        };

        const formData = new FormData();

        values.ingredients = ingredients;
        console.log(values)
        formData.append("image", image);
        formData.append("values", JSON.stringify(values));

        const response = await axios.post(
            "/api/dishes/create",
            formData,
            options
        );
        const response_data = response.data;
        // console.log(response_data);

        // const response = await axios.post('/api/breweries/create', values);
        // const response_data = response.data;
        // console.log(response)

        return navigate("/");
    };

    useEffect(() => {
        loadTypes();
        loadUnits();
    }, [ingredients]);

    return (
        <div className="dishform">
            <p onClick={showValues}>Values</p>
            <form action="" method="post" onSubmit={(e) => {handleSubmit(e)}}>
                <h2>Dish Form</h2>
                <label>Name:</label>
                <input type="text" name="name" onChange={(e) => {handleChange(e)}}/>
                <br/>
                <label>Heading:</label>
                <input type="text" name="heading" onChange={(e) => {handleChange(e)}}/>
                <br/>
                <label>Type:</label>
                <select name="type_id" onChange={handleChange} >
                    {types && types.map((type) => (
                        <option key={type.id} value={type.id}>{type.name}</option>
                    ))}
                </select>
                <br/>
                <label>Source:</label>
                <input type="text" name="source" onChange={(e) => {handleChange(e)}}/>
                <br/>
                <label>Ingredients:</label>
                <IngredientForm units={units} setIngredients={setIngredients}/>
                <table>
                    <tbody>
                    {ingredients && ingredients.map((ingredient, i) => (
                        <tr key={i}>
                            <td>{ingredient.ingredient}</td>
                            <td>{ingredient.amount}{ingredient.unit}</td>
                        </tr>
                    ))}
                    </tbody>
                    </table>
                <br/>
                <label>Method:</label>
                <textarea name="method" onChange={(e) => {handleChange(e)}}/>
                <br/>
                <label>Notes:</label>
                <textarea name="notes" onChange={(e) => {handleChange(e)}}/>
                <br/>
                <label>Upload Image:</label>
                <input type="file" name="image" onChange={handleImage}/>
                <br/>
                <button>Submit</button>
            </form>
        </div>
    )
}
export default DishForm