import { useState } from 'react'

import Navigation from "./Navigation/Navigation";
import DishesList from "./Lists/DishesList";
import DishPreview from "./Detail/DishPreview";

const App = () => {

    const [selectedDish, setSelectedDish] = useState(null)
    const [selectedType, setSelectedType] = useState(0)

    return (
        <div className="page">
            <div className="title_bar">
                <h1>Katya's Kitchen</h1>
                <img src="img/assets/Title.png" alt="Plate and cutlery" />
            </div>
            <Navigation setSelectedType={setSelectedType}/>
            <div className="main">
                <DishesList setSelectedDish={setSelectedDish} selectedType={selectedType}/>
                {selectedDish && <DishPreview selectedDish={selectedDish}/>}
            </div>
        </div>
        
    )
}
export default App;