import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { useLocation } from "react-router-dom";

const socialLinks = [
    { href: "https://facebook.com", icon: <FaFacebook />, label: "Facebook" },
    {
        href: "https://instagram.com",
        icon: <FaInstagram />,
        label: "Instagram",
    },
    { href: "https://tiktok.com", icon: <FaTiktok />, label: "TikTok" },
];

const Footer = () => {
    const location = useLocation();
    const isSearchPage = location.pathname === "/search";

    return (
        <footer
            className={`z-10 shadow-lg px-5 xxs:px-12 xxs:h-[10%] flex flex-col-reverse gap-1 xs:flex-row items-center justify-between px-6 py-4 ${
                isSearchPage ? "textTheme" : "text-secondary"
            }`}
        >
            {/* Copyright */}
            <div className="xxs:text-h5 text-h6">
                &copy; {new Date().getFullYear()} Savannah. All rights reserved.
            </div>

            {/* Social Icons */}
            <div className="flex space-x-4 text-xl">
                {socialLinks.map(({ href, icon, label }) => (
                    <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noreferrer"
                        aria-label={label}
                        className="hover:text-primary transition-colors duration-200"
                    >
                        {icon}
                    </a>
                ))}
            </div>
        </footer>
    );
};

export default Footer;
