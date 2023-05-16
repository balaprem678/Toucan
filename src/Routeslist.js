import React from "react";
import {
  // BrowserRouter,
  Routes,
  Route,
  HashRouter,
} from "react-router-dom";

import Home from "./components/Home";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

import HimachalPlan from "./components/Components-1.js/HimachalPlan";
import ShillongPlan from "./components/Components-1.js/ShillongPlan";
import GujaratPlan from "./components/Components-1.js/GujaratPlan";

import ThailandHoneyMoon from "./components/Components-2.js/ThailandHoneyMoon";
import DubaiHoneyMoon from "./components/Components-2.js/DubaiHoneyMoon";
import SingaporeHoneyMoon from "./components/Components-2.js/SingaporeHoneyMoon";
import MalaysiaHoneyMoon from "./components/Components-2.js/MalaysiaHoneyMoon";
import KashmirHoneyMoon from "./components/Components-2.js/KashmirHoneyMoon";

import FamilyPackage from "./components/Components-3.js/FamilyPackages";
import InternationalHoneyMoonPackages from "./components/Components-3.js/InternationalHoneyMoonPackages";
import InternationalTourPackages from "./components/Components-3.js/InternationalTourPackages";
import BudgetPackages from "./components/Components-3.js/BudgetPackages";
import LuxuryPackages from "./components/Components-3.js/LuxuryPackages";

import ThailandTourPackages from "./components/Components-4.js/ThailandTourPackages";
import DubaiTourPackages from "./components/Components-4.js/DubaiTourPackages";
import MalaysiaTourPackages from "./components/Components-4.js/MalaysiaTourPackages";
import SingaporeTourPackages from "./components/Components-4.js/SingaporeTourPackages";
import KashmirTourPackages from "./components/Components-4.js/KashmirTourPackages";

import ThailandTourPackagesPlan1 from "./components/Components-4.js/Components-4.1/ThailandTourPackagesPlan1";
import ThailandTourPackagesPlan2 from "./components/Components-4.js/Components-4.1/ThailandTourPackagesPlan2";
import ThailandTourPackagesPlan3 from "./components/Components-4.js/Components-4.1/ThailandTourPackagesPlan3";

import KashmirTourPackagesPlan1 from "./components/Components-4.js/Components-4.3/KashmirTourPackagesPlan1";
import KashmirTourPackagesPlan2 from "./components/Components-4.js/Components-4.3/KashmirTourPackagesPlan2";
import KashmirTourPackagesPlan3 from "./components/Components-4.js/Components-4.3/KashmirTourPackagesPlan3";
import KashmirTourPackagesPlan4 from "./components/Components-4.js/Components-4.3/KashmirTourPackagesPlan4";

import SingaporeTourPackagesPlan1 from "./components/Components-4.js/Components-4.4/SingaporeTourPackagesPlan1";
import SingaporeTourPackagesPlan2 from "./components/Components-4.js/Components-4.4/SingaporeTourPackagesPlan2";     
import SingaporeTourPackagesPlan3 from "./components/Components-4.js/Components-4.4/SingaporeTourPackagesPlan3";  

import DubaiTourPackagesPlan1 from "./components/Components-4.js/Components-4.2/DubaiTourPackagesPlan1";
import DubaiTourPackagesPlan2 from "./components/Components-4.js/Components-4.2/DubaiTourPackagesPlan2";
import DubaiTourPackagesPlan3 from "./components/Components-4.js/Components-4.2/DubaiTourPackagesPlan3";
import DubaiTourPackagesPlan4 from "./components/Components-4.js/Components-4.2/DubaiTourPackagesPlan4";
import DubaiTourPackagesPlan5 from "./components/Components-4.js/Components-4.2/DubaiTourPackagesPlan5";

import MalaysiaTourPackagesPlan1 from "./components/Components-4.js/Components-4.5/MalaysiaTourPackagesPlan1";
import MalaysiaTourPackagesPlan2 from "./components/Components-4.js/Components-4.5/MalaysiaTourPackagesPlan2";
import MalaysiaTourPackagesPlan3 from "./components/Components-4.js/Components-4.5/MalaysiaTourPackagesPlan3";
import MalaysiaTourPackagesPlan4 from "./components/Components-4.js/Components-4.5/MalaysiaTourPackagesPlan4";
import MalaysiaTourPackagesPlan5 from "./components/Components-4.js/Components-4.5/MalaysiaTourPackagesPlan5";

import ThailandHoneyMoonPlan1 from "./components/Components-2.js/Components-2.1/ThailandHoneyMoonPlan1";
import ThailandHoneyMoonPlan2 from "./components/Components-2.js/Components-2.1/ThailandHoneyMoonPlan2";
import ThailandHoneyMoonPlan3 from "./components/Components-2.js/Components-2.1/ThailandHoneyMoonPlan3";
import ThailandHoneyMoonPlan4 from "./components/Components-2.js/Components-2.1/ThailandHoneyMoonPlan4";
import ThailandHoneyMoonPlan5 from "./components/Components-2.js/Components-2.1/ThailandHoneyMoonPlan5";
import ThailandHoneyMoonPlan6 from "./components/Components-2.js/Components-2.1/ThailandHoneyMoonPlan6";

import DubaiHoneymoonPlan1 from "./components/Components-2.js/Components-2.2/DubaiHoneymoonPlan1";
import DubaiHoneymoonPlan2 from "./components/Components-2.js/Components-2.2/DubaiHoneymoonPlan2";
import DubaiHoneymoonPlan3 from "./components/Components-2.js/Components-2.2/DubaiHoneymoonPlan3";
import DubaiHoneymoonPlan4 from "./components/Components-2.js/Components-2.2/DubaiHoneymoonPlan4";

import MalaysiaHoneymoonPlan1 from "./components/Components-2.js/Components-2.3/MalaysiaHoneymoonPlan1";
import MalaysiaHoneymoonPlan2 from "./components/Components-2.js/Components-2.3/MalaysiaHoneymoonPlan2";
import MalaysiaHoneymoonPlan3 from "./components/Components-2.js/Components-2.3/MalaysiaHoneymoonPlan3";
import MalaysiaHoneymoonPlan4 from "./components/Components-2.js/Components-2.3/MalaysiaHoneymoonPlan4";

export default function Routeslist() {
  return (
    <div>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Navigation" element={<Navigation />} />
          <Route path="/Footer" element={<Footer />} />

          <Route path="/HimachalPlan" element={<HimachalPlan />} />     
          <Route path="/ShillongPlan" element={<ShillongPlan />} />     
          <Route path="/GujaratPlan" element={<GujaratPlan />} />   

          <Route path="/ThailandHoneyMoon" element={<ThailandHoneyMoon />} />
          <Route path="/DubaiHoneyMoon" element={<DubaiHoneyMoon />} />
          <Route path="/MalaysiaHoneyMoon" element={<MalaysiaHoneyMoon />} /> 
          <Route path="/SingaporeHoneyMoon" element={<SingaporeHoneyMoon />} /> 
          <Route path="/KashmirHoneyMoon" element={<KashmirHoneyMoon />} />  

          <Route path="/InternationalTourPackages" element={<InternationalTourPackages />} />
          <Route path="/InternationalHoneyMoonPackages" element={<InternationalHoneyMoonPackages />} />
          <Route path="/FamilyPackage" element={<FamilyPackage />} />
          <Route path="/BudgetPackages" element={<BudgetPackages />} />     
          <Route path="/LuxuryPackages" element={<LuxuryPackages />} />   

          <Route path="/ThailandTourPackages" element={<ThailandTourPackages />} />
          <Route path="/DubaiTourPackages" element={<DubaiTourPackages />} />
          <Route path="/MalaysiaTourPackages" element={<MalaysiaTourPackages />} />
          <Route path="/SingaporeTourPackages" element={<SingaporeTourPackages />} />
          <Route path="/KashmirTourPackages" element={<KashmirTourPackages />} />

          <Route path="/ThailandTourPackagesPlan1" element={<ThailandTourPackagesPlan1 />} />
          <Route path="/ThailandTourPackagesPlan2" element={<ThailandTourPackagesPlan2 />} />
          <Route path="/ThailandTourPackagesPlan3" element={<ThailandTourPackagesPlan3 />} />

          <Route path="/SingaporeTourPackagesPlan1" element={<SingaporeTourPackagesPlan1 />} />
          <Route path="/SingaporeTourPackagesPlan2" element={<SingaporeTourPackagesPlan2 />} />
          <Route path="/SingaporeTourPackagesPlan3" element={<SingaporeTourPackagesPlan3 />} />

          <Route path="/DubaiTourPackagesPlan1" element={<DubaiTourPackagesPlan1 />} />
          <Route path="/DubaiTourPackagesPlan2" element={<DubaiTourPackagesPlan2 />} />
          <Route path="/DubaiTourPackagesPlan3" element={<DubaiTourPackagesPlan3 />} />
          <Route path="/DubaiTourPackagesPlan4" element={<DubaiTourPackagesPlan4 />} />
          <Route path="/DubaiTourPackagesPlan5" element={<DubaiTourPackagesPlan5 />} />

          <Route path="/MalaysiaTourPackagesPlan1" element={<MalaysiaTourPackagesPlan1 />} />
          <Route path="/MalaysiaTourPackagesPlan2" element={<MalaysiaTourPackagesPlan2 />} />
          <Route path="/MalaysiaTourPackagesPlan3" element={<MalaysiaTourPackagesPlan3 />} />
          <Route path="/MalaysiaTourPackagesPlan4" element={<MalaysiaTourPackagesPlan4 />} />
          <Route path="/MalaysiaTourPackagesPlan5" element={<MalaysiaTourPackagesPlan5 />} />

          <Route path="/ThailandHoneyMoonPlan1" element={<ThailandHoneyMoonPlan1 />} />
          <Route path="/ThailandHoneyMoonPlan2" element={<ThailandHoneyMoonPlan2 />} />
          <Route path="/ThailandHoneyMoonPlan3" element={<ThailandHoneyMoonPlan3 />} />
          <Route path="/ThailandHoneyMoonPlan4" element={<ThailandHoneyMoonPlan4 />} />
          <Route path="/ThailandHoneyMoonPlan5" element={<ThailandHoneyMoonPlan5 />} />
          <Route path="/ThailandHoneyMoonPlan6" element={<ThailandHoneyMoonPlan6 />} />

          <Route path="/KashmirTourPackagesPlan1" element={<KashmirTourPackagesPlan1 />} />
          <Route path="/KashmirTourPackagesPlan2" element={<KashmirTourPackagesPlan2 />} />
          <Route path="/KashmirTourPackagesPlan3" element={<KashmirTourPackagesPlan3 />} />
          <Route path="/KashmirTourPackagesPlan4" element={<KashmirTourPackagesPlan4 />} />

          <Route path="/DubaiHoneymoonPlan1" element={<DubaiHoneymoonPlan1 />} />
          <Route path="/DubaiHoneymoonPlan2" element={<DubaiHoneymoonPlan2 />} />
          <Route path="/DubaiHoneymoonPlan3" element={<DubaiHoneymoonPlan3 />} />
          <Route path="/DubaiHoneymoonPlan4" element={<DubaiHoneymoonPlan4 />} /> 
          
          <Route path="/MalaysiaHoneymoonPlan1" element={<MalaysiaHoneymoonPlan1 />} /> 
          <Route path="/MalaysiaHoneymoonPlan2" element={<MalaysiaHoneymoonPlan2 />} /> 
          <Route path="/MalaysiaHoneymoonPlan3" element={<MalaysiaHoneymoonPlan3 />} /> 
          <Route path="/MalaysiaHoneymoonPlan4" element={<MalaysiaHoneymoonPlan4 />} /> 

        </Routes>
      </HashRouter>
    </div>
  );
}
