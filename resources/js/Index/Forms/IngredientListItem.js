const IngredientListItem = ({ ingredient, setIngredients }) => {
    
    const clickHandler = () => {
        setIngredients(prev => prev.filter(item => item.ingredient !== ingredient.ingredient))
    }
    
    return (
        <tr>
            <td>{ingredient.ingredient}</td>
            <td>{ingredient.amount}{ingredient.unit}</td>
            <td onClick={clickHandler}>Delete</td>
        </tr>
    )
}
export default IngredientListItem;