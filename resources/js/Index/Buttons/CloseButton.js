const CloseButton = ({ func }) => {

    return (
            <div className="button_close" onClick={func} >         
                <img src={"/img/assets/Close.png"} alt="close icon" />            
            </div>
    )
}
export default CloseButton;