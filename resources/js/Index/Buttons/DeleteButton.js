import { useNavigate } from "react-router-dom";
import axios from 'axios'

const DeleteButton = ({ id }) => {

    const navigate = useNavigate();

    const clickHandler = async () => {
        const response = await axios.post(`/api/dishes/delete`, { dishID: id });
        return navigate("/");
    }

    return (
            <div className="button_delete" onClick={clickHandler}>         
                <img src={"/img/assets/Delete.png"} alt="delete icon" />
                Delete              
            </div>
    )
}
export default DeleteButton;