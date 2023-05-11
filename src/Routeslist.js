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

import ThailandTourPackagesPlan from "./components/Components-5.js/ThailandTourPackagesPlan";

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

          <Route path="/ThailandTourPackagesPlan" element={<ThailandTourPackagesPlan />} />
          

        </Routes>
      </HashRouter>
    </div>
  );
}
