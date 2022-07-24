import TypesList from "./Lists/TypesList";

const App = () => {
    return (
        <div className="page">
            <div className="title_bar">
            <h1>Katya's Kitchen</h1>
            <img src="img/assets/Title.png" alt="Plate and cutlery" />
            </div>
            <TypesList />
        </div>
        
    )
}
export default App;