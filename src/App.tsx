
import Footer from "./layouts/header-footer/Footer";

import Navbar from "./layouts/header-footer/Navbar";
import HomePage from "./layouts/homepage/HomePage";


function App() {
   return (
       <>
           <Navbar />
           <div className="pt-16"> {/* Padding-top bằng chiều cao navbar (khoảng 64px) */}
               <HomePage /> {/* Banner nằm trong HomePage */}
               <Footer />
           </div>

       </>
   );
}

export default App;
