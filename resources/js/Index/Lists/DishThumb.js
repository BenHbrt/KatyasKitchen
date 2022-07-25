const DishThumb = ({ dish }) => {
    return (
        <div className="dishthumb">
            <img src={`/img/dishes/${dish.pic_name}`} />
            <div className="dishthumb_text">
                <p>{dish.name}</p>
            </div>
        </div>
    )
}
export default DishThumb;