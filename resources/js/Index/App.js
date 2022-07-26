import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navigation from "./Navigation/Navigation";
import DishRecipe from './Detail/DishRecipe';
import Homepage from './Homepage';
import DishForm from './Forms/DishForm';
import Shoppinglist from './Detail/Shoppinglist';

const App = () => {

    const [selectedType, setSelectedType] = useState(0)

    return (
        <BrowserRouter>
            <div className="page">
                <div className="title_bar">
                    <h1>Katya's Kitchen</h1>
                    <img src="img/assets/Title.png" alt="Plate and cutlery" />
                </div>
                <Navigation setSelectedType={setSelectedType}/>
                <Routes>
                    <Route path="/" element={<Homepage selectedType={selectedType}/>} />
                    <Route path="/dish/form" element={<DishForm />} />
                    <Route path="/shoppinglist" element={<Shoppinglist />} />
                    <Route path="/dish/:id" element={<DishRecipe />} />
                    <Route path="/dish/:id/edit" element={<DishForm />} />
                </Routes>
            </div>
        </BrowserRouter>
    )
}
export default App;