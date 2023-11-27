function CryptoCard({salesData}) {

  console.log(salesData);
 
  return (

    salesData.map((crypto, index) => (

    <div className="col-3 ">
      <div key={index} id="card" className="card p-4">

              <div className="title">
                <div className="container-fluid">
                  <div className="row">
                  <img
                        src="/src/assets/icon.svg" // Assicurati che il percorso dell'immagine sia corretto
                        alt=""
                        srcSet=""
                        width="40"
                      />

                    <p className="title-text">{crypto.name}</p>

                    <p className="percent">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 1792 1792"
                        fill="currentColor"
                        height="20"
                        width="30"
                      >
                        <path d="M1408 1216q0 26-19 45t-45 19h-896q-26 0-45-19t-19-45 19-45l448-448q19-19 45-19t45 19l448 448q19 19 19 45z"></path>
                      </svg>

                      {crypto.percent_change_24h}
                    </p>
                  </div>
                </div>
              </div>

              <div className="data">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-7">
                      <p className="crypto-price text-nowrap">{crypto.price_usd} $</p>
                    </div>
                    <div className="col-5">
                      <img src="/src/assets/percentual.svg" alt="" srcset="" />
                    </div>
                  </div>
                </div>
             </div>
      </div>
    </div>
     
    ))
  );
}

export default CryptoCard;
