const SaveButton = ({ func }) => {

    return (
            <div className="button_save" onClick={func}>         
                <img src={"/img/assets/Save.png"} alt="save icon" /> 
               Save            
            </div>
    )
}
export default SaveButton;