import { useState } from "react";

function QuickLinkForm ({links,setLinks, added,setAdded}){

   const [input, setInput] = useState({
     name : "",
     url : ""
   })

    const [error, setError] = useState(false)
 
    function addShortcut(e){
       e.preventDefault();
      if(input.name !== "" && input.url !==""){
            setError(false);
            setLinks((prev)=>{
            return [...prev, {id:Date.now(), name : input.name , url : input.url}]
            
        });
        setAdded(false)
    
      }else{
        setError(true)
      
      }
        // setInput({name: "", url : ""});   
    }


    function handleInput(e){
        const {name , value} = e.target;
        setError(false)
        setInput((prev)=>{
            return {...prev, [name]: value}
        })
    }



   console.log(input)
    return (

        <form  onSubmit={addShortcut}  className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="w-[90%] max-w-160 h-95 min-h-72 bg-gray-400 rounded-2xl flex flex-col items-center justify-center gap-5">
                
                <span className="w-[90%] grid  h-10 pt-3">
                    <label className="text-2xl font-bold">Add Shortcut</label>
                </span>
                <div className="w-full flex flex-col items-center  justify-center">
                    
                    <div className="w-[90%] mb-3 h-5  text-red-700  font-bold"> 
                        {`${error ? "This field is Required" : ""}`} 
                    </div>
                    
                    <input type="text" onChange={handleInput} name="name" value={input.name} placeholder="Name"
                       className="w-[90%] h-14 rounded-t-2xl border-b-2 px-4 text-xl bg-amber-50 mb-3" />
                       <div className="w-[90%] mb-3 h-5  text-red-700  font-bold"> 
                        {`${error ? "This field is Required" : ""}`} 
                    </div>
                    <input type="url" name="url" onChange={handleInput} value={input.url}  placeholder="Url" 
                        className="w-[90%] h-14 rounded-t-2xl border-b-2 px-4 text-xl bg-amber-50" />
                </div>
                <div className="flex gap-5 justify-end w-[90%] pb-5">
                     <button type="submit" onClick ={()=>{setAdded(false)}} className="w-32 rounded-xl h-16 bg-amber-50 font-bold hover:cursor-pointer">Cancel</button>
                     <button type="submit"   className="w-32 rounded-xl h-16 bg-amber-50 font-bold hover:cursor-pointer">Done</button>
                </div>
            
            </div>
        </form>
    )
}
export default QuickLinkForm;