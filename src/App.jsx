import ResponsiveAppBar from "./components/Applayout/ResponsiveAppBar.jsx";
import SideBar from "./components/Applayout/SideBar.jsx";
import HeaderDetails from "./components/HeaderDetails/HeaderDetails.jsx";
import AttachmentTable from "./components/AttachmentModel/AttachmentEvent.jsx";
import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(0);
  return (
    <div>
      <ResponsiveAppBar />
      <SideBar />
      
      {step === 0 && <HeaderDetails setStep={setStep} />}
      {step === 1 && <AttachmentTable />}
    </div>
  );
}
