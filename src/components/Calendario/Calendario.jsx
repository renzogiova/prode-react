import { useState } from 'react';
import NavbarBasic from '../NavbarBasic/NavbarBasic';
import Sidebar from '../Sidebar/Sidebar';
import Footer from '../Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';

import CalendarioStyles from './Calendario.module.css';

function Calendario() {
  const [showSidebar, setShowSidebar] = useState(true);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }
  return (
    <Container fluid style={{ height: '100%', padding: 0 }}>
      <Row style={{ height: '100%', width: '100%', margin: 0 }}>
        <Col xs={2} style={{ padding: 0 }}>
          <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar} />
        </Col>
        <Col xs={10} style={{ padding: 0 }}>
          <NavbarBasic toggleSidebar={toggleSidebar} />
          <main>
            <div style={{display: 'flex', flexWrap: 'wrap', justifyContent:'space-around'}}>

              {/* card */}
              <div className={`${CalendarioStyles.groupCard} ${CalendarioStyles.groupA}`}>
                <div className={CalendarioStyles.headerCard}>
                  <span className={CalendarioStyles.headerText}>GRUPO A</span>
                </div>
                <div>
                  <div><span>ARGENTINA</span></div>
                  <div><span>PERU</span></div>
                  <div><span>CHILE</span></div>
                  <div><span>CANADA</span></div>
                </div>
              </div>

              <div className={`${CalendarioStyles.groupCard} ${CalendarioStyles.groupB}`}>
                <div className={CalendarioStyles.headerCard}>
                  <span className={CalendarioStyles.headerText}>GRUPO B</span>
                </div>
                <div>
                  <div><span>ARGENTINA</span></div>
                  <div><span>PERU</span></div>
                  <div><span>CHILE</span></div>
                  <div><span>CANADA</span></div>
                </div>
              </div>

              <div className={`${CalendarioStyles.groupCard} ${CalendarioStyles.groupC}`}>
                <div className={CalendarioStyles.headerCard}>
                  <span className={CalendarioStyles.headerText}>GRUPO C</span>
                </div>
                <div>
                  <div><span>ARGENTINA</span></div>
                  <div><span>PERU</span></div>
                  <div><span>CHILE</span></div>
                  <div><span>CANADA</span></div>
                </div>
              </div>

              <div className={`${CalendarioStyles.groupCard} ${CalendarioStyles.groupD}`}>
                <div className={CalendarioStyles.headerCard}>
                  <span className={CalendarioStyles.headerText}>GRUPO D</span>
                </div>
                <div>
                  <div><span>ARGENTINA</span></div>
                  <div><span>PERU</span></div>
                  <div><span>CHILE</span></div>
                  <div><span>CANADA</span></div>
                </div>
              </div>
            </div>
          </main>
        </Col>
      </Row>
      <Row style={{ padding: 0, margin: 0 }}>
        <Footer />
      </Row>
    </Container>
  )
}

export default Calendario