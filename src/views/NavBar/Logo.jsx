import * as React from "react";
import LogoImg from "../../assets/logo-movie.png";

const Logo = () => {
    return (
        <>
            <img src={LogoImg} alt="Logo" className="logo w-14 h-14 " />
            <div className="text-h2">Savannah</div>
        </>
    );
};

export default Logo;
