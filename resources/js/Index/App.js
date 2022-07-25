import { useState } from 'react'

import Navigation from "./Navigation/Navigation";
import DishesList from "./Lists/DishesList";
import DishPreview from "./Detail/DishPreview";

const App = () => {

    const [selectedDish, setSelectedDish] = useState(null)

    return (
        <div className="page">
            <div className="title_bar">
                <h1>Katya's Kitchen</h1>
                <img src="img/assets/Title.png" alt="Plate and cutlery" />
            </div>
            <Navigation />
            <div className="main">
                <DishesList setSelectedDish={setSelectedDish}/>
                {selectedDish && <DishPreview selectedDish={selectedDish}/>}
            </div>
        </div>
        
    )
}
export default App;