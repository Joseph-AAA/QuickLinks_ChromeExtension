import {useState, useEffect} from "react";
import SearchBox from "./components/SearchBox";
import WeatherWidget from "./components/WeatherWidget";
import QuickLink from "./components/QuickLink";
import QuickLinkForm from "./components/QuickLinkForm";
function App(){
          const [img, setImg] = useState(null);
    useEffect(()=>{
        const fetchImg = async()=>{
             const response = await fetch("https://api.unsplash.com/photos/random?query=spiderman,wallpaper&orientation=landscape&client_id=1fZPXB6LSZFjeOSDMm3fi8n0qCWqTMAZ91qO0VwKaHI")
             const data = await response.json();
             console.log(data);
             setImg(data);
        }
        fetchImg();
    },[])
    
  return(
    <div className="flex flex-col justify-center items-center h-screen "  style={{ backgroundImage: `url(${img?.urls.full})` }}>
      
       <div className="absolute right-5 top-5">
          <WeatherWidget />
        </div>
      <main className="w-full  flex flex-col justify-center items-center mt-45 md:mt-0 gap-7">
          <h1 className="text-center text-white drop-shadow-[0_3px_8px_rgba(0,0,0,1)] text-5xl md:text-6xl lg:text-7xl font-bold">
            Good {new Date().getHours() > 12 ? "Evening" : "Morning" }, Developer</h1>
            <div className="w-full mt-7">
              <SearchBox />
            </div>
            <QuickLink />

      </main>
   
     
    </div>
  )

} 
export default App;