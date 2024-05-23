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
      <Container fluid style={{height: '100vh', padding: 0}}>
        <Row style={{height: '100%', width: '100%', margin:0}}>
          {/* Sidebar COL */}
          <Col xs={2} style={{padding:0}}>
            <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar}/>          
          </Col>
          {/* PAGE CONTENT COL */}
          <Col xs={10} style={{padding:0}}>
            <NavbarBasic toggleSidebar={toggleSidebar}/>
            <main>
              <div>
                <div>
                  <p>
                    No tienes torneos disponibles. 
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, illum! 
                  </p>
                  <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta aliquam expedita earum saepe, omnis, eos aperiam suscipit at laboriosam qui ipsa commodi amet tenetur cum dolores aliquid quia mollitia facere nisi incidunt excepturi vero molestias. In, a repellendus! Quia, officiis. Ipsa illo corporis doloremque adipisci explicabo, ipsam sapiente nulla exercitationem.
                  </p>
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veritatis perspiciatis soluta, asperiores provident earum natus eveniet possimus ab tempora tempore eligendi, quo distinctio et! Placeat repudiandae nostrum natus deleniti ea qui vel iure explicabo quaerat, eaque ad dolores aspernatur pariatur cum veritatis nisi animi quisquam! Sapiente sit exercitationem quod? Sunt laudantium atque corrupti voluptates nisi eos, dolores nobis vel corporis, iste cumque quae rerum voluptate, tempore sit sequi saepe labore quidem rem dolorum magni minus. Itaque nostrum iste autem ipsum exercitationem. Dolorum, numquam! Cumque non doloremque voluptas asperiores ipsa quis omnis! Nisi nesciunt commodi consequuntur. Odit cumque natus sapiente obcaecati minus expedita doloribus laborum qui suscipit nam delectus iusto, eius aliquid labore animi sequi, facilis veniam blanditiis ea dolores!</p>
                </div>
                <div>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia veritatis perspiciatis soluta, asperiores provident earum natus eveniet possimus ab tempora tempore eligendi, quo distinctio et! Placeat repudiandae nostrum natus deleniti ea qui vel iure explicabo quaerat, eaque ad dolores aspernatur pariatur cum veritatis nisi animi quisquam! Sapiente sit exercitationem quod? Sunt laudantium atque corrupti voluptates nisi eos, dolores nobis vel corporis, iste cumque quae rerum voluptate, tempore sit sequi saepe labore quidem rem dolorum magni minus. Itaque nostrum iste autem ipsum exercitationem. Dolorum, numquam! Cumque non doloremque voluptas asperiores ipsa quis omnis! Nisi nesciunt commodi consequuntur. Odit cumque natus sapiente obcaecati minus expedita doloribus laborum qui suscipit nam delectus iusto, eius aliquid labore animi sequi, facilis veniam blanditiis ea dolores!</p>
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