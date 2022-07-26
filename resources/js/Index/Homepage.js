import { useState } from 'react'
import DishesList from "./Lists/DishesList";
import DishPreview from "./Detail/DishPreview";

const Homepage = ({ selectedType }) => {
    
    const [selectedDish, setSelectedDish] = useState(null)

    return (
        <div className="main">
            <DishesList setSelectedDish={setSelectedDish} selectedType={selectedType}/>
            {selectedDish && <DishPreview selectedDish={selectedDish} setSelectedDish={setSelectedDish}/>}
        </div>
    )
}
export default Homepage;