import { useState } from 'react';
import NavbarBasic from '../NavbarBasic/NavbarBasic';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';

function Home() {
  const [showSidebar, setShowSidebar] = useState(true);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }
  return (
      <Container style={{height: '100vh'}}>
        <Row style={{height: '100%'}}>
          {/* Sidebar COL */}
          <Col xs={2}>
            <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar}/>          
          </Col>
          {/* PAGE CONTENT COL */}
          <Col>
            <NavbarBasic toggleSidebar={toggleSidebar}/>
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
          </Col>
        </Row>
      </Container>
    // </div>
  )
}

export default Home