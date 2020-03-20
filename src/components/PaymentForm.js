import React from 'react';
import ReactDOM from 'react-dom';
import Receipt from './Receipt'
import { Button, Form, Container, Row, Col, Card, Alert } from 'react-bootstrap';
import IMask from 'imask';
import logo from '../img/logos/itss_trans.png';
import $ from 'jquery';
import { number_format } from 'phpjs/build/npm';

class PaymentForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            bancos: null,
            monedas: {
                'VEF':'BsS',
                'USD':'$',
                'EUR':'€',
                'PTR':'PTR',
                'BTC':'BTC',
            },
            precio:0};
      }

    componentWillMount(){
        fetch(`http://c2p.itssca.net:8085/WsSamfGtwRest-1.1/WsSamfmovilGtwRest/resource/GTWC2P/2/U0xEQjtVMHhFUWp0allXcGxjbTh3TVR0SGIyOW5iR1ZEYUhKdmJXVTdWbVZ5YzJsdmJqZ3dMakF1TXprNE55NHhNakk3TVRreUxqRTJPQzQ0TWk0eE1UVT0=/192.168.1.1`)
        .then(res => res.json())
        .then((data) => {
            //Create bank list
            console.log(data.mensaje);
            var lista_bancos = JSON.parse(data.mensaje);
            lista_bancos = lista_bancos.listabancos.lista
            let options = lista_bancos.map( (data) =>
                    <option 
                        key={data.cod}
                        value={data.cod}
                        selected={ data.nombre == "BANCO PLAZA"? "selected":"" }
                    >
                        {data.nombre}
                    </option>
                );
            this.setState({
                bancos: options
                });
        })
        .catch(console.log)

        var urlParams = new URLSearchParams(window.location.search);
        this.setState({
            precio: urlParams.get('price'),
            moneda: urlParams.get('currency')
            });
    }

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
        <Container fluid={true} style={{ marginTop: '15px' }}>
            <div id="alert"></div>
            <Card style={{ width: '100%', height: '100%'}}>
                <Card.Img variant="top" src={logo} style={{ width: '320px', height: '80px', marginRight: 'auto', marginLeft: 'auto', marginTop: '20px' }}/>
                <Card.Body>
                    <Card.Title style={{ color: "#4A5A67", paddingTop: "20px"}}><h2>Total a pagar: {this.state.monedas[this.state.moneda]} {this.state.moneda !== 'BTC'? number_format(this.state.precio,2,',','.') : number_format(this.state.precio,5,',','.')}</h2></Card.Title>
                    <Card.Text>
                        <Form noValidate>
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
                                        {this.state.bancos}
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
                            <Row>
                                <Button variant="primary" onClick={this.pay.bind(this, this.state.precio, this.state.monedas[this.state.moneda])} style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                                Pagar Ahora
                                </Button>
                            </Row>
                        </Form>
                    </Card.Text>
                </Card.Body>
            </Card>
            {/* <Row style={{ marginBottom: '0px' }}>
                <Col xs={12} ms={12} ls={12}>
                    <p style={{ color:'gray' }}>
                        Hola
                    </p>
                </Col>
            </Row> */}
        </Container>
    );
    }

    pay(precio, moneda) {
        //Construct Endpoint String
        var params = `SC2P;${$('#prefijo').val()+'-'+$('#telefono').val()};${$('#tipoci').val()+$('#numeroci').val()};${$('#banco').val()};${precio};${$('#concepto').val()};${'J0000000'};${'0426-8205166'};${'0134'};${'cajero01'};${'GoogleChrome'};${'Versión80.0.3987.122'};${'192.168.82.115'}`;
        // var params = `SC2P;${$('#prefijo').val()+'-'+$('#telefono').val()};${$('#tipoci').val()+$('#numeroci').val()};${$('#banco').val()};${moneda};${precio};${$('#concepto').val()};${'J0000000'};${'0426-8205166'};${'0134'};${'cajero01'};${'GoogleChrome'};${'Versión80.0.3987.122'};${'192.168.82.115'}`;
        var b64_params = btoa(`SC2P;${btoa(params)}`);
    
        //Api call 
        // ReactDOM.render(<Alert variant="danger" onClose={() => setShow(false)} dismissible>
        //     Error
        // </Alert>, document.getElementById('alert'))
        fetch(`http://c2p.itssca.net:8085/WsSamfGtwRest-1.1/WsSamfmovilGtwRest/resource/GTWC2P/2/${b64_params}/192.168.82.115`)
            .then(res => res.json())
            .then((data) => {
    
                var mensaje = JSON.parse(data.mensaje)
                console.log(moneda)

                if (this.validate()){
                    ReactDOM.render(<Receipt total={precio} referencia={mensaje.nroReferencia} banco={$('#banco').find('option:selected').text()} detalle={data.detalle.replace("detalle: ", "")}
                    tel={$('#prefijo').val()+'-'+$('#telefono').val()} descripcion={$('#concepto').val()} fecha={mensaje.fecha.replace(/-/g,'/') + ' ' + mensaje.hora} moneda={this.state.monedas[this.state.moneda]}/>, document.getElementById('root'));
                }

            })
            .catch(this.alert('Error en conexión','danger'))
    }
    

    validate(){
        if ($('#telefono').val() == '' || $('#numeroci').val() == '' || $('#concepto').val() == '' || $('#otp').val() == ''){
            this.alert("Todos los datos son obligatorios","danger")
            return false
        }

        return true
    }
    alert(message, variant){
        ReactDOM.render(<Alert variant={variant} dismissible>
                            {message}
                        </Alert>, document.getElementById('alert'))   
    }
}

export default PaymentForm;
