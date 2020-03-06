import React from 'react';
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap';
import IMask from 'imask';
import logo from '../img/logos/itss_trans.png';

class PaymentForm extends React.Component {

    componentDidMount(){
        var otp_mask = IMask(document.getElementById('otp'),{
            mask: '0000-0000'
            });

        var phone_mask = IMask(document.getElementById('phone'),{
            mask: '000-0000'
            });
    }
    render() {
        return (
        <Container>
            <Card style={{ width: '470px' }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>Total a pagar: Bs {this.props.total}</Card.Title>
                    <Card.Text>
                        <Form>
                            <Row>
                                <Col xs={4} md={4} ls={4}>
                                    <Form.Group controlId="prefix">
                                    <Form.Label>Prefijo</Form.Label>
                                    <Form.Control size="sm" as="select">
                                        <option>0424</option>
                                        <option>0414</option>
                                        <option>0426</option>
                                        <option>0416</option>
                                        <option>0412</option>
                                    </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col xs={8} md={8} ls={8}>
                                    <Form.Group controlId="phone">
                                    <Form.Label>Teléfono</Form.Label>
                                    <Form.Control size="sm" type="text" placeholder="***-****" name="phone" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={4} md={4} ls={4}>
                                    <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Cédula o Rif</Form.Label>
                                    <Form.Control size="sm" as="select">
                                        <option>V</option>
                                        <option>Rif</option>
                                    </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col xs={8} md={8} ls={8}>
                                    <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Documento de identidad</Form.Label>
                                    <Form.Control size="sm" type="number" placeholder="Ej 22556854" name="ci" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col ls={12}>
                                    <Form.Group controlId="banco">
                                    <Form.Label>Banco</Form.Label>
                                    <Form.Control size="sm" as="select">
                                        <option>Banco Plaza</option>
                                        <option>Bancaribe</option>
                                        <option>Banesco</option>
                                        <option>Banco de Venezuela</option>
                                        <option>Mercantil</option>
                                    </Form.Control>
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col ls={12}>
                                    <Form.Group controlId="concepto">
                                    <Form.Label>Descripción</Form.Label>
                                    <Form.Control size="sm" type="text" placeholder="Descripción Aquí" name="description" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col ls={12}>
                                    <Form.Group controlId="otp">
                                    <Form.Label>Clave Dinámica</Form.Label>
                                    <Form.Control size="sm" type="text" placeholder="0000-0000" name="otp" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Button variant="primary" onClick={pay}>
                            Pagar Ahora
                            </Button>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
    }
}

function pay() {
    fetch('http://192.168.137.248:8080/WsSamfGtwRest-1.1/WsSamfmovilGtwRest/resource/GTWC2P/2/U0MyUDtVME15VURzd05ERXlMVFUwT0RVek5UYzdWakl3TVRNeU9EVTVPekF4TURVN05UQXdNQzR3TURzd05ESTJMVGd5TURVeE5qWTdNREV6TkR0SGIyOW5iR1VnUTJoeWIyMWxPMVpsY25OcHc3TnVJRGd3TGpBdU16azROeTR4TWpJN01Ua3lMakUyT0M0NE1pNHhNVFU9/192.168.82.115')
        .then(res => res.json())
        .then((data) => {
          console.log(data)
        })
        .catch(console.log)
}

export default PaymentForm;
