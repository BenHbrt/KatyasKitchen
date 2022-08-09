const PreviewButton = ({ generatePDF }) => {

    return (
            <div className="button_preview" onClick={generatePDF}>         
                <img src={"/img/assets/Preview.png"} alt="preview icon" /> 
                Preview List            
            </div>
    )
}
export default PreviewButton;