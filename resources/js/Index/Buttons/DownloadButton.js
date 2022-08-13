const DownloadButton = ({ func }) => {

    return (
            <div className="button_download" onClick={func} >         
                <img src={"/img/assets/Download.png"} alt="download icon" /> 
               Download List           
            </div>
    )
}
export default DownloadButton;