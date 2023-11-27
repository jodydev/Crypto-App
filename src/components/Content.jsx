import Header from "./Header/Header";
import CryptoCarousel from "./Main/CryptoCarousel";
import CryptoPortfolio from "./CryptoPortfolio/CryptoPortfolio"
import CryptoTable from "./CryptoTable/CryptoTable";

function Content({salesData}) {
    return(
        <div id="content" className="p-5">
            <Header />
            <CryptoCarousel salesData={salesData} />
            <div className="row">
            <CryptoPortfolio salesData={salesData} />
            <CryptoTable salesData={salesData}  />
            </div>
           
        </div>
    )
}
export default Content;