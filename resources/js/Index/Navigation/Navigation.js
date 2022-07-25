import { useState, useEffect } from 'react'
import axios from 'axios'

const Navigation = ({ setSelectedType }) => {

    const [types, setTypes] = useState(null)

    const loadData = async () => {
        const response = await axios.get(`/api/types/index`);
        console.log(response.data);
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
            <select onChange={changeHandler}>
                    <option key={0} value={0}>All</option>
                {types && types.map((type) => (
                    <option key={type.id} value={type.id}>{type.name}</option>
                ))}
            </select>
        </nav>
    )
}
export default Navigation;