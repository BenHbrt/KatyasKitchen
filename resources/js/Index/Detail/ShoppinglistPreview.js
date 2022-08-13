import jsPDF from "jspdf";
import ReactDOMServer from "react-dom/server";
import DownloadButton from "../Buttons/DownloadButton"
import CloseButton from "../Buttons/CloseButton";

const ShoppinglistPreview = ({ ingredients, setPreview }) => {
    
    const clickHandler = () => {
        setPreview(false)
    }

    const generatePDF = () => {
        const report = new jsPDF('portrait','pt','a4');
        report.html(document.querySelector('#list')).then(() => {
            report.save('Shopping List.pdf');
    })};
    
    return (
        <div className="shoppinglistpreview">
            {(ingredients.length > 0) && 
            <>
            <div className="shoppinglistpreview_top">
            <DownloadButton func={generatePDF} />
            <CloseButton func={clickHandler} />
            </div>
            <div id="list" className="shoppinglistpreview_main">
            <h3>Shopping List</h3>
            <div className="shoppinglistpreview_list">
            <div className="shoppinglistpreview_list_ingredients">
                {ingredients.map((ingredient) => (
                    <span key={ingredient.id}>{ingredient.ingredient}</span>
                ))}
            </div>
            <div className="shoppinglistpreview_list_amounts">
                {ingredients.map((ingredient) => (
                    <span key={ingredient.id}>{ingredient.amount}{ingredient.unit}</span>
                ))}
            </div>
            </div>
        </div></>
            }      
        </div>
    )
}
export default ShoppinglistPreview;