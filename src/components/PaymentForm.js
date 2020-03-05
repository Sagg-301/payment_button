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
            mask: '0000-000-0000'
            });
    }
    render() {
        return (
        <Container>
            <Card style={{ width: '450px' }}>
                <Card.Img variant="top" src={logo} />
                <Card.Body>
                    <Card.Title>Total a pagar: Bs {this.props.total}</Card.Title>
                    <Card.Text>
                        <Form>
                            <Row>
                                <Col ls={12}>
                                    <Form.Group controlId="phone">
                                    <Form.Label>Teléfono</Form.Label>
                                    <Form.Control size="sm" type="text" placeholder="0424-111-1111" name="phone" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col ls={4}>
                                    <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Nacionalidad</Form.Label>
                                    <Form.Control size="sm" as="select">
                                        <option>V</option>
                                        <option>I</option>
                                    </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col ls={8}>
                                    <Form.Group controlId="formBasicEmail">
                                    <Form.Label>Documento de identidad</Form.Label>
                                    <Form.Control size="sm" type="number" placeholder="Ej 22556854" name="ci" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col ls={12}>
                                    <Form.Group controlId="formBasicEmail">
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
                                    <Form.Group controlId="formBasicEmail">
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
    window.location.href = './receipt'
}

export default PaymentForm;
