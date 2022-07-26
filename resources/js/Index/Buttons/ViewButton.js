import { Link } from 'react-router-dom'

const ViewButton = ({ id }) => {

    return (
        <Link to={`/dish/${id}`}>
            <div className="button_view">         
                <img src={"/img/assets/View.png"} alt="view icon" />
                View              
            </div>
        </Link>
    )
}
export default ViewButton;