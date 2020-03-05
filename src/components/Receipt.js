import React from 'react';
import { Container, Row, Col, Image, Button, Card } from 'react-bootstrap';
import check_mark from '../img/check.svg'

class Receipt extends React.Component {
    render() {
        return (
        <Container fluid={true}>
            <Card style={{ width: '450px' }}>
                <Card.Img variant="top" src={check_mark} width="200" height="200" />
                <Card.Body>
                    <Card.Title> <h3> Pago realizado con éxito </h3></Card.Title>
                    <Card.Text>
                        <Row className="justify-content-md-center">
                            <Col ls={12}>
                                <h4>Total: Bs {this.props.total}</h4>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col ls={12}>
                                <h5>Referencia: #00001</h5>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col ls={12}>
                                <h5>12/12/2020</h5>
                            </Col>
                        </Row>
                        <Row className="justify-content-md-center">
                            <Col ls={12}>
                                <Button>imprimir</Button>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>
    );
    }
}

export default Receipt;