import { Link } from 'react-router-dom'

const EditButton = ({ id }) => {

    return (
        <Link to={`/dish/${id}`}>
            <div className="button_edit">         
                <img src={"/img/assets/Edit.png"} alt="edit icon" />
                Edit              
            </div>
        </Link>
    )
}
export default EditButton;