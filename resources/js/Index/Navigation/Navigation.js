import { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios'

const Navigation = ({ setSelectedType }) => {

    const [types, setTypes] = useState(null)

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
            <div className="nav_option">
                <Link to={`/`}>
                Home
                </Link>
            </div>
            <div className="nav_option">
                View: 
                <select onChange={changeHandler}>
                        <option key={0} value={0}>All</option>
                    {types && types.map((type) => (
                        <option key={type.id} value={type.id}>{type.name}</option>
                    ))}
                </select>
            </div>
        </nav>
    )
}
export default Navigation;