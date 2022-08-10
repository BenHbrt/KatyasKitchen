import { useState } from 'react'
import ShoppinglistForm from '../Forms/ShoppinglistForm'
import ShoppinglistPreview from './ShoppinglistPreview'
import PreviewButton from "../Buttons/PreviewButton";

const Shoppinglist = () => {
    
    // const [selectedDish, setSelectedDish] = useState(null)
    const [ingredients, setIngredients] = useState([])

    return (
        <>
        <div className="shoppinglist_title_main">
            <h2>Shopping List </h2>
            {(ingredients.length > 0) && <PreviewButton />}
        </div>
        <div className="shoppinglist">
            <ShoppinglistForm ingredients={ingredients} setIngredients={setIngredients} />
            {/* {selectedDish && <DishPreview selectedDish={selectedDish} setSelectedDish={setSelectedDish}/>} */}
        </div>
        </>
    )
}
export default Shoppinglist;

