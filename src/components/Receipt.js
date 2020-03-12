import React from 'react';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import check_mark from '../img/check.svg'

class Receipt extends React.Component {
    render() {
        return (
            <Container fluid={true}>
                <Card style={{ width: '100%', height: '100%' }}>
                    <Card.Img variant="top" src={check_mark} width="200" height="200" />
                    <Card.Body>
                        <Card.Title> <h3 style={{ color: "#5D9BEB" }}> {this.props.detalle} </h3></Card.Title>
                        <Card.Text>
                            <Container fluid={true} id="recibo">
                                <Row>
                                    <Col xs={12} md={12} ls={12}>
                                        <h4 style={{ color: "#4A5A67" }}>Total: Bs {new Intl.NumberFormat('es-ES', { maximumSignificantDigits: 3 }).format(this.props.total)}</h4>
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
                                        <h5 style={{ color: "#4A5A67" }}>{this.props.fecha}</h5>
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