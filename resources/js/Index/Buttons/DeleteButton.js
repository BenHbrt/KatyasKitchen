import { Link } from 'react-router-dom'

const DeleteButton = ({ id }) => {

    return (
        <Link to={`/dish/${id}`}>
            <div className="button_delete">         
                <img src={"/img/assets/Delete.png"} alt="delete icon" />
                Delete              
            </div>
        </Link>
    )
}
export default DeleteButton;