import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'
import IngredientForm from "./IngredientForm";
import IngredientListItem from "./IngredientListItem";
import SaveButton from "../Buttons/SaveButton";

const DishForm = () => {

    const { id } = useParams();

    const navigate = useNavigate();
    const [image, setImage] = useState(null);
    const [types, setTypes] = useState(null);
    const [units, setUnits] = useState(null);
    const [ingredients, setIngredients] = useState([])
    const [values, setValues] = useState({
        "name": "",
        "type_id": 1,
        "heading": "",
        "source": "",
        "method": "",
        "notes": "",
        "ingredients": []
    })

    const loadData = async () => {
        const response = await axios.get(`/api/dishes/${id}`);
        console.log(response.data[0])
        setValues(response.data[0])
        setIngredients(response.data[0].ingredients)
    }

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

    // const showValues = () => {
    //     console.log(values)
    //     console.log(ingredients)
    //     console.log(id)
    // }
    
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

        if (id == undefined) {

        
        const response = await axios.post(
            "/api/dishes/create",
            formData,
            options
        );
        const response_data = response.data;

        return navigate("/");
        } else {
            const response = await axios.post(
                `/api/dishes/edit/${id}`,
                formData,
                options
            );
            const response_data = response.data;
    
            return navigate(`/dish/${id}`);
        }
    };

    useEffect(() => {
        loadTypes();
        loadUnits();
        if (id) {
            loadData();
        }
    }, []);

    return (
        <div className="dishform">
            {/* <p onClick={showValues}>Values</p> */}
            <form action="" method="post" onSubmit={(e) => {handleSubmit(e)}}>
                <h2>Dish Form</h2>
                <label>Name:</label>
                <input type="text" name="name" onChange={(e) => {handleChange(e)}} value={values.name}/>
                <br/>
                <label>Heading:</label>
                <input type="text" name="heading" onChange={(e) => {handleChange(e)}} value={values.heading}/>
                <br/>
                <label>Type:</label>
                <select name="type_id" onChange={handleChange} value={values.type_id}>
                    {types && types.map((type) => (
                        <option key={type.id} value={type.id}>{type.name}</option>
                    ))}
                </select>
                <br/>
                <label>Source:</label>
                <input type="text" name="source" onChange={(e) => {handleChange(e)}} value={values.source}/>
                <br/>
                <label>Ingredients:</label>
                <table>
                    <thead>
                        <tr>
                            <th>Ingredient</th>
                            <th>Amount</th>
                            <th></th>
                        </tr>
                    </thead>
                 
                    <tbody>
                    <IngredientForm units={units} setIngredients={setIngredients}/>
                {ingredients && ingredients.map((ingredient, i) => (
                    <IngredientListItem key={i} ingredient={ingredient} setIngredients={setIngredients}/>
                    ))}
                    </tbody>
                </table>
                {/* <table>
                    <tbody>
                    {ingredients && ingredients.map((ingredient, i) => (
                        <tr key={i}>
                            <td>{ingredient.ingredient}</td>
                            <td>{ingredient.amount}{ingredient.unit}</td>
                        </tr>
                    ))}
                    </tbody>
                    </table> */}
                <br/>
                <label>Method:</label>
                <textarea name="method" onChange={(e) => {handleChange(e)}} value={values.method}/>
                <br/>
                <label>Notes:</label>
                <textarea name="notes" onChange={(e) => {handleChange(e)}} value={values.notes}/>
                <br/>
                <label>Upload Image:</label>
                <input type="file" name="image" onChange={handleImage} />
                <br/>
                <SaveButton func={handleSubmit} />
            </form>
        </div>
    )
}
export default DishForm