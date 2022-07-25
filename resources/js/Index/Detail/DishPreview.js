const DishPreview = ({ selectedDish }) => {
    return (
        <div className="dishpreview">
            {selectedDish && 
            <>
            <h2>{selectedDish.name}</h2>
            <p>{selectedDish.heading}</p>
            <img src={`/img/dishes/${selectedDish.pic_name}`} />
            <p><strong>Ingredients: </strong></p>
            <table>
            <tbody>
            {selectedDish.ingredients.map((ingredient) => (
                <tr>
                    <td>{ingredient.ingredient}</td>
                    <td>{ingredient.amount}{ingredient.unit}</td>
                </tr>
            ))}
            </tbody>
            </table>
            </>}      
        </div>
    )
}
export default DishPreview;