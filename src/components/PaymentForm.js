import React from 'react';
import { Button, Form, Container, Row, Col, Card } from 'react-bootstrap';
import IMask from 'imask';
import logo from '../img/logos/itss_trans.png';
import $ from 'jquery';

class PaymentForm extends React.Component {

    componentDidMount(){
        var otp_mask = IMask(document.getElementById('otp'),{
            mask: '0000-0000'
            });

        var phone_mask = IMask(document.getElementById('telefono'),{
            mask: '0000000'
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
                                    <Form.Group controlId="prefijo">
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
                                    <Form.Group controlId="telefono">
                                    <Form.Label>Teléfono</Form.Label>
                                    <Form.Control size="sm" type="text" placeholder="*******" name="phone" />
                                    </Form.Group>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs={4} md={4} ls={4}>
                                    <Form.Group controlId="tipoci">
                                    <Form.Label>Cédula o Rif</Form.Label>
                                    <Form.Control size="sm" as="select">
                                        <option>V</option>
                                        <option>E</option>
                                        <option>J</option>
                                        <option>G</option>
                                    </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col xs={8} md={8} ls={8}>
                                    <Form.Group controlId="numeroci">
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
                                        <option value="0138">BANCO PLAZA</option>
                                        <option value="0156">100%BANCO</option>
                                        <option value="0196">ABN AMRO BANK</option>
                                        <option value="0172">BANCAMIGA BANCO MICROFINANCIERO, C.A.</option>
                                        <option value="0171">BANCO ACTIVO BANCO COMERCIAL, C.A.</option>
                                        <option value="0166">BANCO AGRICOLA</option>
                                        <option value="0175">BANCO BICENTENARIO</option>
                                        <option value="0128">BANCO CARONI, C.A. BANCO UNIVERSAL</option>
                                        <option value="0164">BANCO DE DESARROLLO DEL MICROEMPRESARIO</option>
                                        <option value="0102">BANCO DE VENEZUELA S.A.I.C.A.</option>
                                        <option value="0114">BANCO DEL CARIBE C.A.</option>
                                        <option value="0149">BANCO DEL PUEBLO SOBERANO C.A.</option>
                                        <option value="0163">BANCO DEL TESORO</option>
                                        <option value="0176">BANCO ESPIRITO SANTO, S.A.</option>
                                        <option value="0115">BANCO EXTERIOR C.A.</option>
                                        <option value="0003">BANCO INDUSTRIAL DE VENEZUELA.</option>
                                        <option value="0173">BANCO INTERNACIONAL DE DESARROLLO, C.A.</option>
                                        <option value="0105">BANCO MERCANTIL C.A.</option>
                                        <option value="0191">BANCO NACIONAL DE CREDITO</option>
                                        <option value="0116">BANCO OCCIDENTAL DE DESCUENTO.</option>
                                        <option value="0108">BANCO PROVINCIAL BBVA</option>
                                        <option value="0104">BANCO VENEZOLANO DE CREDITO S.A.</option>
                                        <option value="0168">BANCRECER S.A. BANCO DE DESARROLLO</option>
                                        <option value="0134">BANESCO BANCO UNIVERSAL</option>  
                                        <option value="0177">BANFANB</option>
                                        <option value="0146">BANGENTE</option>
                                        <option value="0174">BANPLUS BANCO COMERCIAL C.A</option>
                                        <option value="0190">CITIBANK.</option>
                                        <option value="0121">CORP BANCA.</option>
                                        <option value="0157">DELSUR BANCO UNIVERSAL</option>
                                        <option value="0151">FONDO COMUN</option>
                                        <option value="0601">INSTITUTO MUNICIPAL DE CR&#201;DITO POPULAR</option>
                                        <option value="0169">MIBANCO BANCO DE DESARROLLO, C.A.</option>
                                        <option value="0137">SOFITASA</option>
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

    //Construct Endpoint String
    var params = `SC2P;${$('#prefijo').val()+'-'+$('#telefono').val()};${$('#tipoci').val()+$('#numeroci').val()};${$('#banco').val()};${"5000.00"};${$('#concepto').val()};${'J0000000'};${'0426-8205166'};${'0134'};${'cajero01'};${'GoogleChrome'};${'Versión80.0.3987.122'};${'192.168.82.115'}`;
    console.log(params)
    var b64_params = btoa(`SC2p;${btoa(params)}`);

    //Api call
    fetch(`http://192.168.137.248:8080/WsSamfGtwRest-1.1/WsSamfmovilGtwRest/resource/GTWC2P/2/${b64_params}/192.168.82.115`)
        .then(res => res.json())
        .then((data) => {
          console.log(data)
          window.location.href ='./receipt'
        })
        .catch(console.log)
}

export default PaymentForm;
