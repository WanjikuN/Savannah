import { useLocation, useNavigate } from "react-router-dom";
import { handleSearchNav } from "../../services/GeneralLogic";
import Logo from "./Logo";
import Search from "./Search";
import Tabs from "./Tabs";

const Navbar = () => {
    const location = useLocation();
    const isSearchPage = location.pathname === "/search";

    const navigate = useNavigate();
    return (
        <div className="z-10 px-5 xxs:px-12 h-[10%] flex justify-between items-center">
            <div
                onClick={() => navigate("/")}
                className={` cursor-pointer ${
                    isSearchPage ? "textTheme" : "text-secondary"
                } flex items-center font-[Lato] gap-2 `}
            >
                {/* logoo */}
                <Logo />
            </div>
            <div className="flex  gap-4 font-[Lato]">
                {/* tabs */}
                <Tabs />
            </div>
            {/* search */}
            <div
                onClick={() => handleSearchNav(navigate)}
                className={`cursor-pointer w-[25%] hidden xs:flex items-center gap-2 text-secondary border-primaryLight/0 border-[10px]   ${
                    isSearchPage ? "border-b-primary" : "border-b-secondary"
                } border-b-[2px]`}
            >
                <Search />
            </div>
        </div>
    );
};

export default Navbar;
