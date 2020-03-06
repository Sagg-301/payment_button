import React from 'react';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import check_mark from '../img/check.svg'

class Receipt extends React.Component {
    render() {
        return (
        <Container fluid={true}>
            <Card style={{ width: '470px', height: '600px' }}>
                <Card.Img variant="top" src={check_mark} width="200" height="200" />
                <Card.Body>
                    <Card.Title> <h3 style={{ color: "#5D9BEB" }}> Pago realizado con éxito </h3></Card.Title>
                    <Card.Text>
                        <Container fluid={true}>
                            <Row>
                                <Col xs={12} md={12} ls={12}>
                                    <h4 style={{ color: "#4A5A67" }}>Total: Bs {this.props.total}</h4>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col xs={12} md={12} ls={12}>
                                    <h5 style={{ color: "#4A5A67"}}>Referencia: #00001</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={12} ls={12}>
                                    <h5 style={{ color: "#4A5A67" }}>12/12/2020 00:00:00</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={12} ls={12}>
                                    <h5 style={{ color: "#4A5A67" }}>Teléfono del cliente: 04**-***5695</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={12} ls={12}>
                                    <h5 style={{ color: "#4A5A67" }}>Banco del cliente: Banco de Venezuela</h5>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={12} md={12} ls={12}>
                                    <h5 style={{ color: "#4A5A67" }}>Descripción: Articulos Varios</h5>
                                </Col>
                            </Row>
                            <br/>
                            <Row>
                                <Col xs={12} md={12} ls={12}>
                                    <Button>imprimir</Button>
                                </Col>
                            </Row>
                        </Container>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
    }
}

export default Receipt;