import * as React from "react";
import { FaBars, FaSearch, FaTimes } from "react-icons/fa";
import Search from "./Search";
import { handleSearchNav } from "../../services/GeneralLogic";
import { useNavigate } from "react-router-dom";

const Tabs = () => {
    const list = ["Adults", "Kids", "Trend", "My List"];
    const [isOpen, setIsOpen] = React.useState(false);
    const navigate = useNavigate();
    return (
        <div className="relative">
            {/*visible only on small screens */}
            <div
                className="md:hidden text-secondary text-2xl cursor-pointer"
                onClick={() => setIsOpen(!isOpen)}
            >
                {isOpen ? <FaTimes /> : <FaBars />}
            </div>

            {/* Tabs - hidden on small screens*/}
            <div className="hidden md:flex gap-6">
                {list.map((item, index) => (
                    <div
                        key={index}
                        className="cursor-pointer text-secondary hover:text-primary hover:border-b-secondary hover:border-b-[2px] text-h3"
                    >
                        {item}
                    </div>
                ))}
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="absolute top-10 -left-20 shadow-lg bg-secondaryLight ] w-[30vw] xs:w-[25vw]  border-dashed border-[1px] border-primaryLight rounded flex flex-col items-center gap-4 p-4 md:hidden">
                    {list.map((item, index) => (
                        <div
                            key={index}
                            className="cursor-pointer text-secondary hover:text-primary text-h3"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </div>
                    ))}
                    <div
                        onClick={() => handleSearchNav(navigate)}
                        className="xs:hidden flex items-center text-secondary"
                    >
                        <Search />
                    </div>
                </div>
            )}
        </div>
    );
};

export default Tabs;
