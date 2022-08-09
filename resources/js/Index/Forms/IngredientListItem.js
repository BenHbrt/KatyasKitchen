import DeleteButtonSmall from "../Buttons/DeleteButtonSmall";

const IngredientListItem = ({ ingredient, setIngredients }) => {
    
    const clickHandler = () => {
        setIngredients(prev => prev.filter(item => item.ingredient !== ingredient.ingredient))
    }
    
    return (
        <tr>
            <td>{ingredient.ingredient}</td>
            <td>{ingredient.amount}{ingredient.unit}</td>
            <DeleteButtonSmall clickHandler={clickHandler}/>
        </tr>
    )
}
export default IngredientListItem;