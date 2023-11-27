import React from "react";


function CryptoPortfolio({ salesData }) {
  return (
    <div className="col-4 p-4">
          <div className="container bg-portfolio px-5 py-3">
            <div className="row">
              
              <div className="col-12 flex-column">
              <h2 className="text-light mb-4 mt-3 fs-5 letter-spacing">Portfolio </h2>
              {salesData.map((crypto, index) => (

                
                <div key={index}  className="container">
                  {console.log(crypto)}
                  <div className="row">
                    <div className="col-2 p-0 ms-5">
                      <img
                        src="/src/assets/icon.svg" // Assicurati che il percorso dell'immagine sia corretto
                        alt=""
                        srcSet=""
                        className="img-fluid" // Aggiunto una classe per rendere l'immagine responsiva
                      />
                    </div>
                    <div className="col-4">
                      <h6 className="text-light text-nowrap">{crypto.name}</h6> {/* Mostra il nome della crypto dall'oggetto crypto */}
                      <p>${crypto.price_usd}</p> {/* Utilizza un campo del tuo oggetto crypto per mostrare il prezzo */}
                    </div>
                    <div className="col-6">
                     
                        {crypto.percent_change_24h < 0 ? (
                            <h6 className="text-danger d-flex justify-content-end">{crypto.percent_change_24h}%</h6>
                          ) : (
                            <h6 className="text-success d-flex justify-content-end">{crypto.percent_change_24h}%</h6>
                          )}
                          <p className="d-flex justify-content-end">{crypto.price_btc} BTC</p> {/* Aggiunto il valore di capitalizzazione di mercato in dollari */}
                    
                        
                    </div>
                  </div>
                </div>
                   ))}
              </div>
            </div>
          </div>
     </div>
  );
}

export default CryptoPortfolio;
