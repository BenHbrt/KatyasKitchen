import { useState, useEffect } from "react"
import { useNavigate, useParams, useLocation } from "react-router-dom";
import axios from 'axios'
import IngredientForm from "./IngredientForm";
import IngredientListItem from "./IngredientListItem";
import SaveButton from "../Buttons/SaveButton";

const DishForm = () => {

    const { id } = useParams();
    const location = useLocation();

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
        } else {
            setValues({
                "name": "",
                "type_id": 1,
                "heading": "",
                "source": "",
                "method": "",
                "notes": "",
                "ingredients": []
            })
            setIngredients([])
        }
    }, [location]);

    return (
        <div className="dishform">
            {/* <p onClick={showValues}>Values</p> */}
            {/* <form action="" method="post" onSubmit={(e) => {handleSubmit(e)}}> */}
            <div className="dishform_title">
                {(location.pathname === "/dish/form") ? <h2>New Recipe</h2> : <h2>Edit Recipe</h2>}
                <SaveButton func={handleSubmit} />
            </div>
            <div className="dishform_main">
                <div className="dishform_main_left">
                    <table>
                        <tbody>
                            <tr>
                                <td>Name:</td>
                                <td><input type="text" name="name" onChange={(e) => {handleChange(e)}} value={values.name}/></td>
                            </tr>
                            <tr>
                                <td>Heading:</td>
                                <td><input type="text" name="heading" onChange={(e) => {handleChange(e)}} value={values.heading}/></td>
                            </tr>
                            <tr>
                                <td>Type:</td>
                                <td><select name="type_id" onChange={handleChange} value={values.type_id}>
                                    {types && types.map((type) => (
                                    <option key={type.id} value={type.id}>{type.name}</option>
                                    ))}
                                </select></td>
                            </tr>
                            <tr>
                                <td>Source:</td>
                                <td><input type="text" name="source" onChange={(e) => {handleChange(e)}} value={values.source}/></td>
                            </tr>
                            {(location.pathname != "/dish/form") && <tr>
                                <td className="dishform_main_left_currentimage">Current Image:</td>
                                <td><img className="input_image" src={`/img/dishes/${values.pic_name}`} alt="Picture of a dish"/></td>
                                </tr>}
                            <tr>
                                <td>{(location.pathname != "/dish/form") ? <span>Upload New Image:</span> : <span>Upload Image:</span>}</td>
                                <td><input type="file" name="image" onChange={handleImage} /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="dishform_main_centre">
                    <table>
                        <tbody>
                            <tr>
                                <td>Ingredient</td>
                                <td>Amount</td>
                                <td>Unit</td>
                                <td></td>
                            </tr>
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
                </div>
                <div className="dishform_main_right">
                    <label>Method:</label>
                    <textarea name="method" onChange={(e) => {handleChange(e)}} value={values.method}/>
                    <br/>
                    <label>Notes:</label>
                    <textarea name="notes" onChange={(e) => {handleChange(e)}} value={values.notes}/>
                </div>
            </div>
                
            
        </div>
    )
}
export default DishForm