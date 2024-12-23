import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import WatchList from "./components/WatchList";
import Watched from "./components/Watched";
import Add from "./components/Add";
import ContextProvider from "./context/GlobalContext";

function App() {
  return (
    <>
      <BrowserRouter>
        <ContextProvider>
          <Header />
          <Routes>
            <Route path="/" element={<WatchList />} />
            <Route path="/watched" element={<Watched />} />
            <Route path="/add" element={<Add />} />
          </Routes>
        </ContextProvider>
      </BrowserRouter>
    </>
  );
}

export default App;
