import AboutUs from "./pages/AboutUs";
//Global Style
import GlobalStyle from "./components/GlobalStyle";
import Nav from "./components/Nav";
import ContactUs from "./pages/ContactUs";
import OurWork from "./pages/OurWork";
import {Routes , Route , Link} from 'react-router-dom'
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <div className="App">
    <GlobalStyle/>
    <Nav />
    <Routes>
      <Route path='/' exact element={<AboutUs />} />
      <Route path='/aboutus' exact element={<AboutUs />} />
      <Route path='/ourwork' exact element={<OurWork />} />
      <Route path='/contactus' exact element={<ContactUs />} />
      </Routes>
    </div>
  );                
}

export default App;
