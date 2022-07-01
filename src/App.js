import Navbar from "./Component/Navbar";
import News from "./Component/News";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  let pagesize = 15;
  return (   
      <BrowserRouter>
      <Navbar />
      <br />
        <Routes>
          <Route exact path="/"  element={ <News pagesize={pagesize} country="IN" category="general" />} />
          <Route exact path="/business"  element={ <News pagesize={pagesize} country="IN" category="business" />} />
          <Route exact path="/entertainment"  element={ <News pagesize={pagesize} country="IN" category="entertainment" />} />
          <Route exact path="/health"  element={ <News pagesize={pagesize} country="IN" category="health" />} />
          <Route exact path="/science"  element={ <News pagesize={pagesize} country="IN" category="science" />} />
          <Route exact path="/sports"  element={ <News pagesize={pagesize} country="IN" category="sports" />} />
          <Route exact path="/technology"  element={ <News pagesize={pagesize} country="IN" category="technology" />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
