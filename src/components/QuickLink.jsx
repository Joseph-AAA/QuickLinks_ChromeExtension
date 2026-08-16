import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa";
import QuickLinkForm from "./QuickLinkForm";
import { IoCloseCircleOutline } from "react-icons/io5";
function QuickLink() {
    
    const [added, setAdded] = useState(false);
    const DEFAULT_LINKS = [
  { id: 1, name: "GitHub", url: "https://github.com" },
  { id: 2, name: "YouTube", url: "https://youtube.com" }
];

const getLinks = () => {
  try {
    const savedLinks = localStorage.getItem("quick_links");

    if (savedLinks) {
      return JSON.parse(savedLinks);
    }

    return DEFAULT_LINKS;
  } catch (error) {
    console.error("Fetching from local storage failed!");
    return DEFAULT_LINKS;
  }
};

const [links, setLinks] = useState(getLinks);

useEffect(() => {
  localStorage.setItem("quick_links", JSON.stringify(links));
}, [links]);
     
    function deleteButton(id){
             
            setLinks((prev)=>{
                return prev.filter((link)=> link.id !== id)
            })
    }
  
    return(
        <div className="w-[90%]  flex flex-wrap justify-center mt-7 gap-5">
           
            {
                links.map((link)=>{
                    return(
                        <a href={link.url}  key={link.id} className="group relative w-32 h-32 rounded-2xl hover:bg-gray-400
                                                            justify-center items-center flex flex-col ">
                               
                                <IoCloseCircleOutline 
                                  
                                    onClick={(e)=> { e.preventDefault();
                                                    e.stopPropagation();
                                                    deleteButton(link.id)}} 
                                        className="hidden bg-red-400 rounded-full group-hover:block  w-8 h-8 hover:cursor-pointer  absolute -right-3 -top-3 text-white" />
                               
                                <div className="overflow-hidden w-15 h-15 text-4xl bg-gray-100  shadow-[0_4px_10px_rgba(0,0,0,0.5)]
                                                    grid justify-center items-center
                                                    hover:cursor-pointer rounded-full">
                                    <img  src={`https://www.google.com/s2/favicons?domain=${link.url}`} 
                                         alt = {link.name}
                                         className = "w-8 rounded-xl hover:cursor-pointer"/>
                                </div>
                            <span className="font-bold mt-2 text-center truncate w-[95%] text-white drop-shadow-[0_3px_8px_rgba(0,0,0,1)]">{link.name}</span>
                        </a>
                        
                )
               
            })
        }

            <a onClick={() => setAdded(true)} className="w-32 h-32 rounded-2xl hover:bg-gray-400 justify-center items-center 
                        flex flex-col hover:cursor-pointer">
                    <div className="w-15 h-15 text-4xl grid justify-center items-center shadow-[0_4px_10px_rgba(0,0,0,0.5)]
                                        hover:cursor-pointer bg-gray-100  rounded-full">
                        <FaPlus className="text-gray-400  w-8 h-8 hover:cursor-pointer"/>
                    </div>
                    <span className="font-bold mt-2 text-white drop-shadow-[0_3px_8px_rgba(0,0,0,1)]">Add Shortcut</span>
                    
            </a>
                   
             { added ?  <QuickLinkForm links={links} setLinks={setLinks} added={added} setAdded={setAdded}/> : <></>}
        </div>
    )
}

export default QuickLink;