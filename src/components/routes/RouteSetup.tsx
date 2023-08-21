import {BrowserRouter,Route,Routes} from "react-router-dom";
import Home from "@/pages/homes/Home";
import Counter from "../Counter";
import Lazy from "@/utils/lazies/Lazy";
import RouteProduct from "./RouteProduct";

export default function RouteSetup() {
  return (
    <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}>
                  <Route path="about" element={<>About</>}></Route>
                  <Route path="infor" element={<>Thông Tin</>}></Route>
                  <Route path="404" element={Lazy(() => import("@components/Page404"))()}></Route>
                  <Route path="counter" element={<Counter/>}></Route>
                  {RouteProduct}
              </Route>
            
        </Routes>
            
    </BrowserRouter>
  )
}
