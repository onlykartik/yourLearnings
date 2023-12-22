import "./App.css";
import { Route, Routes } from "react-router-dom";
import Wellcome from "./compoenets/Wellcome";
import Nickname from "./compoenets/Nickname";
import Warmup from "./compoenets/Warmup";
import WhoisyourBf from "./compoenets/WhoisyourBf";
import PersonImages from "./compoenets/PersonImages";
import FalseSanta from "./compoenets/FalseSanta";
import ImageUpload from "./compoenets/ImageUpload";
import ClueForTheGift from "./compoenets/ClueForTheGift";
import YourSanta from "./compoenets/YourSanta";
import NumOfCharInPara from "./compoenets/NumOfCharInPara";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Wellcome />}></Route>
        <Route path="/1" element={<Nickname />}></Route>
        <Route path="/2" element={<Warmup />}></Route>
        <Route path="/3" element={<WhoisyourBf />}></Route>
        <Route path="/4" element={<PersonImages />}></Route>
        <Route path="/5" element={<FalseSanta />}></Route>
        <Route path="/6" element={<ImageUpload />}></Route>
        <Route path="/7" element={<ClueForTheGift />}></Route>
        <Route path="/8" element={<NumOfCharInPara />}></Route>
        <Route path="/9" element={<YourSanta />}></Route>
      </Routes>
    </>
  );
}

export default App;
