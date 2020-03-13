import React from 'react';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import check_mark from '../img/check.svg'
import logo from '../img/logos/itss_trans.png';
import { number_format } from 'phpjs/build/npm';

class Receipt extends React.Component {
    render() {
        return (
            <Container fluid={true} style={{ marginTop: '15px' }} >
                <Card style={{ width: '100%', height: '100%'}}>
                    <Card.Img variant="top" src={logo} style={{ width: '320px', height: '80px', marginRight: 'auto', marginLeft: 'auto', marginTop: '20px' }} />
                    <Card.Body>
                        <Card.Title> 
                            <Row>
                                <Col> <h3><Image src={check_mark} style={{ width: '25px', height: '25px'}}></Image> Pago éxitoso</h3> </Col>
                            </Row> 
                        </Card.Title>
                        <Card.Text>
                            <Container fluid={true} id="recibo">
                                <Row>
                                    <Col xs={12} md={12} ls={12}>
                                        <h4 style={{ color: "#4A5A67" }}>Total: {this.props.moneda} {number_format(this.props.total, 2, ',', '.')}</h4>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Col xs={12} md={12} ls={12}>
                                        <h5 style={{ color: "#4A5A67"}}>Referencia: #{this.props.referencia}</h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} md={12} ls={12}>
                                        <h5 style={{ color: "#4A5A67"}}>Secuencia: #{Math.floor(Math.random() * 10)}</h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} md={12} ls={12}>
                                        <h5 style={{ color: "#4A5A67" }}>Fecha: {this.props.fecha}</h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} md={12} ls={12}>
                                        <h5 style={{ color: "#4A5A67" }}>Teléfono del cliente: {this.props.tel}</h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} md={12} ls={12}>
                                        <h5 style={{ color: "#4A5A67" }}>Banco del cliente: {this.props.banco}</h5>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xs={12} md={12} ls={12}>
                                        <h5 style={{ color: "#4A5A67" }}>Descripción: {this.props.descripcion}</h5>
                                    </Col>
                                </Row>
                                <br/>
                                <Row>
                                    <Button onClick={print_page} style={{ marginLeft: 'auto', marginRight: 'auto' }}>Imprimir</Button>
                                </Row>
                            </Container>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Container>
        );

        function print_page() {
            window.print();
        }
    }
}

export default Receipt;