import SearchInput from "./SearchInput"


function Header() {

    return (
        <div className="h-1/3 w-screen bg-[#424874] z-50 fixed flex flex-col text-center">
            <div className="h-[70%] flex justify-center items-center">
                <h1 className="text-[#F4EEFF] text-[60px]">MovieSite7</h1>
            </div>
            <SearchInput />
        </div>
    )
}

export default Header