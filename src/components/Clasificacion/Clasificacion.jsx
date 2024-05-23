/* eslint-disable react/jsx-key */
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

import Sidebar from '../Sidebar/Sidebar';
import NavbarBasic from '../NavbarBasic/NavbarBasic';
import Footer from '../Footer/Footer';

import clasificacion from '../../mock/clasificacion';


function Clasificacion() {
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
            <h1>Clasificacion</h1>
            <div style={{display:'flex', justifyContent: 'space-around', flexWrap:'wrap'}}>
              {
                Object.keys(clasificacion).map(grupo => {
                  return (
                    <div style={{width: '360px'}}>
                      <h2> {grupo} </h2>
                      <Table striped bordered size='sm' style={{width:'360px'}}>
                        <thead>
                          <tr>
                            <th>#</th>
                            <th>Selección</th>
                            <th>Pts</th>
                            <th>PJ</th>
                            <th>PG</th>
                            <th>PE</th>
                            <th>PP</th>
                            <th>GF</th>
                            <th>GC</th>
                            <th>DIF</th>
                          </tr>
                        </thead>
                        <tbody>
                          {
                            clasificacion[grupo].map(equipo => {
                              console.log(equipo)
                              return (
                                <tr>
                                  <td>{equipo.posicion}</td>
                                  <td>{equipo.nombre}</td>
                                  <td>{equipo.puntos}</td>
                                  <td>{equipo.partidosJugados}</td>
                                  <td>{equipo.partidosGanados}</td>
                                  <td>{equipo.partidosEmpatados}</td>
                                  <td>{equipo.partidosPerdidos}</td>
                                  <td>{equipo.golesAFavor}</td>
                                  <td>{equipo.golesEnContra}</td>
                                  <td>{equipo.diferenciaDeGol}</td>
                                </tr>
                              )
                            })
                          }
                        </tbody>
                      </Table>
                    </div>
                  )
                })
              }
            </div>
          </main>
          {/* <Footer/>           */}
        </Col>
      </Row>
    </Container>
  )
}

export default Clasificacion