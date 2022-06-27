import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
  CardBody,
  CardText,
  CardSubtitle,
} from "reactstrap";

class Home extends Component {
    render() {
      return (
        <div className="container">
          <div className="row">
            <Breadcrumb>
              <BreadcrumbItem></BreadcrumbItem>
            </Breadcrumb>
            <div className="col-md-4">
              <Card>
                <CardImg src="images/Outsourcing.png"height="220" />
                <CardBody>
                  <CardTitle>
                    <b>Outsourcing</b>
                  </CardTitle>
                  <CardText>
                    Participamos de la industria de Tercerizacion de procesos de
                    negocio, que consiste en la subcontratación de funciones, y
                    procesos de negocios por parte de Empresas u organizaciones
                    publicas
                  </CardText>
                </CardBody>
              </Card>
            </div>
            <div className="col-md-4">
              <Card>
              <CardImg src="images/support.png"height="220" />
                <CardBody>
                  <CardTitle>
                    <b>Soluciones Tecnológicas</b>
                  </CardTitle>
                  <CardText>
                    SUNTIC cuenta con un sistema de gestión en procesos de
                    creación, desarrollo y transferencia tecnológica, llevando
                    nuestros conocimientos y prácticas en materia de tecnología a
                    toda la región pacífica.
                  </CardText>
                </CardBody>
              </Card>
              <br />
            </div>
            <div className="col-md-4">
              <Card>
              <CardImg src="images/contactPhone.png"height="220" />
                <CardBody>
                  <CardTitle>
                    <b>Contactanos</b>
                  </CardTitle>
                  <CardSubtitle>Escríbenos o llama</CardSubtitle>
                  <hr />
                  <CardText>
                    Calle 22 Norte # 5ª 75 Edf. Vìa Veneto Ofc. 304 línea
                    telefónica: 57-602 387 6240.
                  </CardText>
                </CardBody>
              </Card>
              <br />
            </div>
          </div>
        </div>
      );
    }
  }

export default Home;
