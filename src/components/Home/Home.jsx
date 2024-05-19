import { useState } from 'react';
import NavbarBasic from '../NavbarBasic/NavbarBasic';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';

function Home() {
  const [showSidebar, setShowSidebar] = useState(false);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }
  return (
    <div style={{position: 'relative'}}>
      <NavbarBasic toggleSidebar={toggleSidebar}/>
      <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar}/>
      <main>
        <div>
          <div>
            <input type='search'/>
          </div>
          <div>
            No tienes torneos disponibles. 
          </div>
        </div>
      </main>
      <Footer/>
    </div>
  )
}

export default Home