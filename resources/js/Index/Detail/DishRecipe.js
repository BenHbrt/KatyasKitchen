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
                <EditButton id={id}/>
                <DeleteButton id={dish.id}/>
            </div>
            <div className="dishrecipe_main">
                <div className="dishrecipe_main_left">          
                    <p>{dish.heading}</p>
                    <p><strong>Source: </strong>{dish.source}</p>
                    <img src={`/img/dishes/${dish.pic_name}`} alt="Picture of a dish"/>
                </div>
                <div className="dishrecipe_main_centre">
                    <h3>Ingredients</h3>
                    <div className="ingredients">
                    <div className="ingredients_ingredients">
                        {dish.ingredients.map((ingredient) => (
                            <span key={ingredient.id}>{ingredient.ingredient}</span>
                        ))}
                    </div>
                    <div className="ingredients_amounts">
                        {dish.ingredients.map((ingredient) => (
                            <span key={ingredient.id}>{ingredient.amount}{ingredient.unit}</span>
                        ))}
                    </div>
                    </div>
                </div>
                <div className="dishrecipe_main_right">
                    <h3>Method</h3>
                    <p><pre className="fromtext">{dish.method}</pre></p>
                    <h3>Notes</h3>
                    <p><pre className="fromtext">{dish.notes}</pre></p>
                </div>
            </div>
            </>}
        </div>
    )
}
export default DishRecipe;