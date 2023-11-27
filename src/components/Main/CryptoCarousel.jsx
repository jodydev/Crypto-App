import CryptoCard from "../CryptoCard/CryptoCard";

function CryptoCarousel({salesData}) {
    return(
        <div className="container-fluid my-5">
            <div className="row">
                <div className="d-flex overflow-hidden ">  <CryptoCard salesData={salesData} /></div>
            </div>
        </div>
    )
}
export default CryptoCarousel;