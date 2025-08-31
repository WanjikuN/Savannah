import { Suspense, lazy } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import bgImage from "./assets/bg.png";
import Footer from "./views/Footer/Footer";
import Navbar from "./views/NavBar/Navbar";

const HomePage = lazy(() => import("./pages/HomePage"));
const SearchModule = lazy(() => import("./pages/SearchModule"));

function App() {
    const location = useLocation();
    const isSearchPage = location.pathname === "/search";

    return (
        <div className="h-[100vh] w-[100vw] flex flex-col relative overflow-hidden">
            {/* Background Layer (behind everything) */}
            {isSearchPage ? (
                <div
                    className="absolute inset-0 bg-cover bg-center filter blur-sm scale-105"
                    style={{
                        backgroundImage: `url(${bgImage})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                />
            ) : (
                <div className="absolute inset-0 bg-[rgba(255,105,180,0.16)]" />
            )}

            <Suspense
                fallback={
                    <div className="h-screen flex justify-center items-center">
                        <span className="loader"></span>
                    </div>
                }
            >
                {/* Foreground content (keeps its own styles) */}
                <Navbar />

                <div className="flex flex-row h-[80%] overflow-hidden">
                    <Routes>
                        <Route exact path="/" element={<HomePage />} />
                        <Route
                            exact
                            path="/search"
                            element={<SearchModule />}
                        />
                    </Routes>
                </div>

                <Footer />
            </Suspense>
        </div>
    );
}

export default App;
