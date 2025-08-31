import * as React from "react";
import { FaSearch } from "react-icons/fa";

const Search = () => {
    return (
        <>
            {/* search */}
            <FaSearch className="text-secondary" />|{" "}
            <span className="">Search</span>
        </>
    );
};

export default Search;
