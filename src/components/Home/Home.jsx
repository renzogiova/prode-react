import Navbar from '../Navbar/Navbar';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';

function Home() {
  return (
    <div>
      <Navbar/>
      <Sidebar/>
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