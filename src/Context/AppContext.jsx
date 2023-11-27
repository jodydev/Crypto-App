import { createContext } from "react";

const AppContext = createContext({
  salesData: [],
  setSalesData: () => {},
});

export default AppContext;