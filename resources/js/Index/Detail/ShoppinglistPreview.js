import ViewButton from "../Buttons/ViewButton"

const ShoppinglistPreview = ({ selectedDish, setSelectedDish }) => {
    
    const clickHandler = () => {
        setSelectedDish(null)
    }
    
    return (
        <div className="dishpreview">
            {selectedDish && 
            <>
            <div className="dishpreview_title">
                <div className="dishpreview_title_main">
                    <h2>{selectedDish.name}</h2>
                    <ViewButton id={selectedDish.id}/>
                </div>
                <img src={"/img/assets/Close.png"} alt="close icon" onClick={clickHandler} />
            </div>
            <p>{selectedDish.heading}</p>
            <img src={`/img/dishes/${selectedDish.pic_name}`} alt="Picture of a dish" />
            <p><strong>Ingredients: </strong></p>
            <table>
            <tbody>
            {selectedDish.ingredients.map((ingredient) => (
                <tr key={ingredient.id}>
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
export default ShoppinglistPreview;