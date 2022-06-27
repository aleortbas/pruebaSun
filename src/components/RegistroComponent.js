import React, { Component, useState } from "react";
import { Breadcrumb, BreadcrumbItem, Row, Label, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { async } from "@firebase/util";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../fb";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};

const required = (value) => (value ? undefined : "CAMPO OBLIGATORIO");
const mustBeNumber = (value) => (isNaN(value) ? "SOLO NUMEROS " : undefined);
const composeValidators =
  (...validators) =>
  (value) =>
    validators.reduce(
      (error, validator) => error || validator(value),
      undefined
    );

function Registro (){
    const [registerEmail, setRegisterEmail] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const register = async () => {
      try {
        const user = await createUserWithEmailAndPassword(
          auth,
          registerEmail,
          registerPassword
        );
        console.log(user);
      } catch (error) {
        console.log(error.message);
      }
    };

    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/">Inicio</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Registro</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Registro Usuario</h3>
            <hr />
          </div>
        </div>

        <div className="row row-content">
          <div className="col-12 col-md-9">
            <Form
              onSubmit={onSubmit}
              render={({
                handleSubmit,
                form,
                submitting,
                pristine,
                values,
              }) => (
                <form onSubmit={handleSubmit}>
                  <Field name="firstName" validate={required}>
                    {({ input, meta }) => (
                      <div>
                        <Label>Nombre</Label>
                        <input
                          {...input}
                          className="form-control"
                          type="text"
                          placeholder="Nombre"
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field name="lastName" validate={required}>
                    {({ input, meta }) => (
                      <div>
                        <Label>Apellidos</Label>
                        <input
                          {...input}
                          className="form-control"
                          type="text"
                          placeholder="Apellidos"
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <div>
                    <label>Tipo documento</label>
                    <br></br>
                    <Field name="tipoDocumento" component="select">
                      <option />
                      <option value="Cedula de ciudadania">
                        {" "}
                        Cedula de ciudadania
                      </option>
                      <option value="Tarjeta de identidad">
                        {" "}
                        Tarjeta de identidad
                      </option>
                      <option value="Pasaporte"> Pasaporte</option>
                    </Field>
                  </div>
                  <Field
                    name="numeroIdentificacion"
                    validate={composeValidators(required, mustBeNumber)}
                  >
                    {({ input, meta }) => (
                      <div>
                        <Label>Numero de identificacion</Label>
                        <input
                          {...input}
                          className="form-control"
                          type="text"
                          placeholder="Ingrese su numero de identificacion"
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field
                    name="telefono"
                    validate={composeValidators(required, mustBeNumber)}
                  >
                    {({ input, meta }) => (
                      <div>
                        <Label>Numero fijo o movil</Label>
                        <input
                          {...input}
                          className="form-control"
                          type="text"
                          placeholder="Ingrese su numero de fijo o movil"
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field name="email" validate={required}>
                    {({ input, meta }) => (
                      <div>
                        <Label>Correo electronico</Label>
                        <input
                          {...input}
                          className="form-control"
                          type="email"
                          placeholder="Ingrese su correo electronico"
                          onChange={(event) => {
                            setRegisterEmail(event.target.value);
                        }}
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field name="emailConfirmar" validate={required}>
                    {({ input, meta }) => (
                      <div>
                        <Label>Correo electronico</Label>
                        <input
                          {...input}
                          className="form-control"
                          type="email"
                          placeholder="Ingrese nuevamente su correo electronico"
                          onChange={(event) => {
                            setRegisterEmail(event.target.value);
                        }}
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <Field name="contraseña" validate={required}>
                    {({ input, meta }) => (
                      <div>
                        <Label>Contraseña</Label>
                        <input
                          {...input}
                          className="form-control"
                          type="password"
                          placeholder="Ingrese su contraseña"
                          onInput={(event) => {
                            setRegisterPassword(event.target.value);
                        }}
                        />
                        {meta.error && meta.touched && (
                          <span>{meta.error}</span>
                        )}
                      </div>
                    )}
                  </Field>
                  <div className="buttons">
                    <Button onClick={register} disabled={submitting}>
                      Registrar
                    </Button>
                    <Button
                      type="button"
                      onClick={form.reset}
                      disabled={submitting || pristine}
                    >
                      Borrar
                    </Button>
                  </div>
                  <pre>{JSON.stringify(values, 0, 2)}</pre>
                </form>
              )}
            />
          </div>
        </div>
      </div>
    );
  }

export default Registro;
