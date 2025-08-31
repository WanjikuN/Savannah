import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./views/NavBar/Navbar";
import Footer from "./views/Footer/Footer";
const HomePage = lazy(() => import("./pages/HomePage"));
const SearchModule = lazy(() => import("./pages/SearchModule"));

function App() {
    return (
        <div className="px-5 xxs:px-12 bg-primaryLight h-[100vh] w-[100vw] flex flex-col">
            <Suspense
                fallback={
                    <div className="h-screen flex justify-center items-center">
                        <span className="loader "></span>
                    </div>
                }
            >
                <Navbar />
                <div className="flex flex-row  h-[80%] overflow-hidden">
                    <>
                        <Routes>
                            <Route exact path="/" element={<HomePage />} />
                            <Route
                                exact
                                path="/search"
                                element={<SearchModule />}
                            />
                        </Routes>
                    </>
                </div>
                <Footer />
            </Suspense>
        </div>
    );
}

export default App;
