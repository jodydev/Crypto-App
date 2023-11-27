import Layout from "./Layout";
import { useEffect, useState} from "react";
// import AppContext from "./Context/AppContext";


function App() {

  const [salesData, setSalesData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const apiUrl = getUrl();
        const response = await fetch(apiUrl);
        const data = await response.json();
        console.log("Data received:", data);
        setSalesData(data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  function getUrl(start = 0) {
    return "https://api.coinlore.com/api/tickers/?start=" + start + "&limit=10";
  }

  return (
    <>
      {/* <AppContext.Provider value={{salesData, setSalesData}} > */}
        <Layout salesData={salesData} />
      {/* </AppContext.Provider> */}
      

    </>
  )
}

export default App;

