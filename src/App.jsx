import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./views/NavBar/Navbar";
import Footer from "./views/Footer/Footer";
const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
    return (
        <div className=" bg-bodyColor h-screen w-screen flex flex-col">
            <Suspense
                fallback={
                    <div className="h-screen flex justify-center items-center">
                        <span className="loader "></span>
                    </div>
                }
            >
                <Navbar />
                <div className="border-solid border-[1px] flex flex-row  h-[80%] overflow-hidden">
                    <>
                        <Routes>
                            <Route exact path="/" element={<HomePage />} />
                        </Routes>
                    </>
                </div>
                <Footer /> 
            </Suspense>
        </div>
    );
}

export default App;
