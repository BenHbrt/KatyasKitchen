const AddButton = ({ func }) => {

    return (
            <div className="button_add" onClick={func}>         
                <img src={"/img/assets/Add.png"} alt="preview icon" /> 
               Add            
            </div>
    )
}
export default AddButton;