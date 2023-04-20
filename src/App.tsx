import Navbar from '@/screens/navbar';
import Home from '@/screens/home';
import { useEffect, useState } from 'react';
import {SelectedPage} from '@/shared/types'
import Benefits from '@/screens/Benefits';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home);
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(()=>{
    const handleScroll = () =>{
      if(window.scrollY === 0){ {/* you are in the top of the page*/}
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Home); {/* when go back to the botom to top, it should be in home link in the toggle bar*/}
      }
      if(window.screenY !== 0) 
        setIsTopOfPage(false);      
    }
    // console.log(window.scrollY); 
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  },[]);

  return (
    <div className="App bg-gray-20 ">
      <Navbar 
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage} 
        setSelectedPage={setSelectedPage} 
      />

      <Home setSelectedPage={setSelectedPage} />

      <Benefits />

    </div>
  )
}

export default App
