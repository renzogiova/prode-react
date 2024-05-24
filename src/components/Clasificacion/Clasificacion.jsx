/* eslint-disable react/jsx-key */
import { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';

import Sidebar from '../Sidebar/Sidebar';
import NavbarBasic from '../NavbarBasic/NavbarBasic';
import Footer from '../Footer/Footer';

import data from '../../mock/data';


function Clasificacion() {
  const [showSidebar, setShowSidebar] = useState(true);
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  }
  return (
    <Container fluid style={{height: '100%', padding: 0}}>
      <Row style={{height: '100%', width: '100%', margin:0}}>
        <Col xs={2} style={{padding:0}}>
          <Sidebar showSidebar={showSidebar} toggleSidebar={toggleSidebar}/>          
        </Col>
        <Col xs={10} style={{padding:0}}>
          <NavbarBasic toggleSidebar={toggleSidebar}/>
          <main>
            <h1>Clasificacion</h1>
            <div style={{display:'flex', justifyContent: 'space-around', flexWrap:'wrap'}}>
                {
                  Object.keys(data).map(grupo => {
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
                              data[grupo].map(equipo => {
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
        </Col>
      </Row>
      <Row style={{padding: 0, margin:0}}>
        <Footer/>
      </Row>
    </Container>
  )
}

export default Clasificacion