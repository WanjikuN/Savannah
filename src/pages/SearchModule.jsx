
const SearchModule = () => {
    return (
        <div className="w-screen h-screen  bg-cover bg-center relative flex items-center justify-center">
            {/* Overlay */}
            <div className="absolute inset-0 "></div>

            {/* Search */}
            <div className="relative z-10 text-white px-5 xxs:px-12">
                Search
            </div>
        </div>
    );
};

export default SearchModule;
