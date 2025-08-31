import React from "react";
import Logo from "./Logo";
import Tabs from "./Tabs";
import Search from "./Search";
import { handleSearchNav } from "../../services/GeneralLogic";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
    return (
        <div className="h-[10%] flex justify-between items-center">
            <div onClick={()=>navigate("/")} className=" cursor-pointer text-secondary flex items-center font-[Lato] gap-2 ">
                {/* logoo */}
                <Logo />
            </div>
            <div className="flex  gap-4 font-[Lato]">
                {/* tabs */}
                <Tabs />
            </div>
            {/* search */}
            <div onClick={()=>handleSearchNav(navigate)} className="cursor-pointer w-[25%] hidden xs:flex items-center gap-2 text-secondary border-primaryLight/0 border-[10px] border-b-secondary border-b-[2px]">
                <Search />
            </div>
        </div>
    );
};

export default Navbar;
