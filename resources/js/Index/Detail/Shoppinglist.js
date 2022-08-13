import { useState } from 'react'
import ShoppinglistForm from '../Forms/ShoppinglistForm'
import ShoppinglistPreview from './ShoppinglistPreview'
import PreviewButton from "../Buttons/PreviewButton";

const Shoppinglist = () => {
    
    // const [selectedDish, setSelectedDish] = useState(null)
    const [ingredients, setIngredients] = useState([])
    const [preview, setPreview] = useState(false)

    return (
        <div className='shoppinglist'>
            <div className="shoppinglist_title">
                <h2>Shopping List </h2>
                {(ingredients.length > 0) && (preview == false) && <PreviewButton setPreview={setPreview} />}
            </div>
            <div className="shoppinglist_body">
                <ShoppinglistForm ingredients={ingredients} setIngredients={setIngredients} />
                {preview && <ShoppinglistPreview ingredients={ingredients} setPreview={setPreview} />}
            </div>
        </div>
    )
}
export default Shoppinglist;

