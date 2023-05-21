import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";
import FormMain from "./Pages/FormMain";
import Nav from "./Components/Nav";
import Shorts from "./Pages/Shorts";
import { uploadNewStudentData } from "./action/main/uploadNewStudentData";
import { uploadNewStudentDataR } from "./action/result/uploadNewStudentData";
import { getAllStudentData } from "./action/main/getAllStudentData";
import { deleteStudentData } from "./action/main/deleteStudentData";
import { getAllStudentDataR } from "./action/result/getAllStudentData";
import { deleteStudentDataR } from "./action/result/deleteStudentData";
import { uploadShots } from "./action/shots/uploadShots";
import { getAllShots } from "./action/shots/getAllShots";
import { deleteShots } from "./action/shots/deleteShots";
function App() {
  return (
    <>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <FormMain
                source={uploadNewStudentData}
                delFun={deleteStudentData}
                getFun={getAllStudentData}
                heading={"Main"}
              />
            }
          ></Route>

          <Route
            path="/result"
            element={
              <FormMain
                source={uploadNewStudentDataR}
                delFun={deleteStudentDataR}
                getFun={getAllStudentDataR}
                heading={"Result"}
              />
            }
          ></Route>

          <Route
            path="/shots"
            element={
              <Shorts
                source={uploadShots}
                delFun={deleteShots}
                getFun={getAllShots}
                heading={"Youtube Shot Links"}
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
