import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
const HomePage = lazy(() => import("./pages/HomePage"));

function App() {
    return (
        <div className=" bg-bodyColor h-auto  flex flex-col">
            <Suspense
                fallback={
                    <div className="h-screen flex justify-center items-center">
                        <span className="loader "></span>
                    </div>
                }
            >
                <div className=" flex flex-row  h-[92vh] overflow-hidden">
                    <>
                        <Routes>
                            <Route exact path="/" element={<HomePage />} />
                        </Routes>
                    </>
                </div>
            </Suspense>
        </div>
    );
}

export default App;
