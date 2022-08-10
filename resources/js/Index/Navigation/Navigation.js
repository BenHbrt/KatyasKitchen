import { useState, useEffect } from 'react'
import { Link, useLocation } from "react-router-dom";
import axios from 'axios'

const Navigation = ({ setSelectedType }) => {

    const [types, setTypes] = useState(null)
    const location = useLocation();

    const loadData = async () => {
        const response = await axios.get(`/api/types/index`);
        // console.log(response.data);
        setTypes(response.data)
    }

    const changeHandler = (e) => {
        // console.log(e.target.value)
        setSelectedType(e.target.value)
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <nav>
            {(location.pathname != "/") ? 
            <div className="nav_option">
                <Link to={`/`}>
                <img src={"/img/assets/Home.png"} alt="home icon" />
                <span>Home</span>
                </Link>
            </div> : 
            <div className="nav_option-selected">
            <img src={"/img/assets/Home.png"} alt="home icon" />
            <span>Home</span>
            </div>}
            {(location.pathname != "/dish/form") ?
            <div className="nav_option">
                <Link to={`/dish/form`}>
                <img src={"/img/assets/Menu.png"} alt="recipe icon" />
                <span>Add Recipe</span>
                </Link>
            </div> :
            <div className="nav_option-selected">
            <img src={"/img/assets/Menu.png"} alt="recipe icon" />
            <span>Add Recipe</span>
            </div>}
            {(location.pathname != "/shoppinglist") ?
            <div className="nav_option">
                <Link to={`/shoppinglist`}>
                <img src={"/img/assets/Receipt.png"} alt="list icon" />
                <span>Shopping List</span>
                </Link>
            </div> :
            <div className="nav_option-selected">
            <img src={"/img/assets/Receipt.png"} alt="list icon" />
            <span>Shopping List</span>
            </div>}
            {(location.pathname == "/") && <div className="nav_view">
                <img src={"/img/assets/Search.png"} alt="search icon" />
                <span>View</span>
                <select onChange={changeHandler}>
                        <option key={0} value={0}>All</option>
                    {types && types.map((type) => (
                        <option key={type.id} value={type.id}>{type.name}</option>
                    ))}
                </select>
            </div>}
        </nav>
    )
}
export default Navigation;