const DishThumb = ({ dish, setSelectedDish }) => {

    const clickHandler = () => {
        setSelectedDish(dish)
    }

    return (
        <div className="dishthumb" onClick={clickHandler}>
            <img src={`/img/dishes/${dish.pic_name}`} alt="Picture of a dish"/>
            <div className="dishthumb_text">
                <p>{dish.name}</p>
            </div>
        </div>
    )
}
export default DishThumb;