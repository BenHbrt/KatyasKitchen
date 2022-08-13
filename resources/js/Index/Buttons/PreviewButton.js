const PreviewButton = ({ setPreview }) => {

    const clickHandler = () => {
        setPreview(true)
    }

    return (
            <div className="button_preview" onClick={clickHandler}>         
                <img src={"/img/assets/Preview.png"} alt="preview icon" /> 
                Preview List            
            </div>
    )
}
export default PreviewButton;