import axios from 'axios'
import { useEffect, useState } from 'react'

const TypesList = () => {
    // This was a practice component
    const [types, setTypes] = useState([]);

    const loadData = async () => {
        const response = await axios.get(`/api/types/index`);
        // console.log(response.data);
        setTypes(response.data);
    }

    useEffect(() => {
        loadData();
    }, []);

    return (
        <div className="types-list">
            {types.map((type) => (
                <h3>{type.name}</h3>
            ))}
        </div>
    )
}
export default TypesList;