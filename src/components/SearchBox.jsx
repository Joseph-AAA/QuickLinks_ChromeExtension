function SearchBox() {
    return(
        <form action="https://www.google.com/search" 
                 className="flex flex-col gap-4 justify-center items-center w-full ">
            <input  
                    autoComplete="off"
                    name="q"
                    autoFocus type="text" 
                    placeholder="Search anything" 
                    className=" rounded-4xl p-5 shadow-[0_4px_10px_rgba(0,0,0,1)] text:md md:text-xl w-[90%] md:w-3xl lg:w-full max-w-5xl
                     text-white border-2 border-amber-300 bg-[rgba(255,255,255,0.2)] h-16 " />
        </form>
    )
}

export default SearchBox;