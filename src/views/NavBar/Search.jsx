import * as React from "react";
import { FaSearch } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const Search = () => {
    const location = useLocation();
    const isSearchPage = location.pathname === "/search";
    return (
        <>
            {/* search */}
            <FaSearch
                className={`${
                    isSearchPage ? "text-primary" : "text-secondary"
                }`}
            />
            |{" "}
            <span
                className={`${
                    isSearchPage ? "text-bodyColor" : "text-secondary"
                }`}
            >
                Search
            </span>
        </>
    );
};

export default Search;
