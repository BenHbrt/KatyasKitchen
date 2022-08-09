const DeleteButtonSmall = ({ clickHandler }) => {

    return (
            <div className="button_delete_small" onClick={clickHandler}>         
                <img src={"/img/assets/Delete.png"} alt="delete icon" />              
            </div>
    )
}
export default DeleteButtonSmall;