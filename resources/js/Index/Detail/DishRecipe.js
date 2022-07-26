import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import EditButton from "../Buttons/EditButton";
import DeleteButton from "../Buttons/DeleteButton";
import axios from "axios";

const DishRecipe = () => {
    
    const { id } = useParams();
    const [dish, setDish] = useState(null)
    
    const loadData = async () => {
        const response = await axios.get(`/api/dishes/${id}`);
        setDish(response.data[0])
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="dishrecipe">
            {dish &&
            <>
            <div className="dishpreview_title_main">
                <h2>{dish.name}</h2>
                <EditButton id={2}/>
                <DeleteButton id={2}/>
            </div>
            <div className="dishrecipe_main">
                <div className="dishrecipe_main_left">          
                    <p>{dish.heading}</p>
                    <p><strong>Source: </strong>{dish.source}</p>
                    <img src={`/img/dishes/${dish.pic_name}`} alt="Picture of a dish"/>
                </div>
                <div className="dishrecipe_main_centre">
                    <h3>Ingredients:</h3>
                    <tbody>
                    {dish.ingredients.map((ingredient) => (
                        <tr key={ingredient.id}>
                            <td>{ingredient.ingredient}</td>
                            <td>{ingredient.amount}{ingredient.unit}</td>
                        </tr>
                    ))}
                    </tbody>
                </div>
                <div className="dishrecipe_main_right">
                    <h3>Method:</h3>
                    <p>{dish.method}</p>
                    <h3>Notes:</h3>
                    <p>{dish.notes}</p>
                </div>
            </div>
            </>}
        </div>
    )
}
export default DishRecipe;