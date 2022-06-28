import React, { Component, useState } from "react";
import { Breadcrumb, BreadcrumbItem, Row, Label, Button } from "reactstrap";
import { Link } from "react-router-dom";
import { Form, Field } from "react-final-form";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { auth, db } from "../fb";

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

function Registro() {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerNombre, setRegisterNombre] = useState("");
  const [registerApellido, setRegisterApellido] = useState("");
  const [registerTipoDoc, setTipoDoc] = useState("");
  const [registerNumDoc, setNumDoc] = useState("");
  const [registerNumCel, setNumCel] = useState("");

  const register = async () => {
    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        registerEmail,
        registerPassword
      );
      const infoUser = await addDoc(collection(db, "usersInfo"), {
        firstName: registerNombre,
        lastName: registerApellido,
        document: registerTipoDoc,
        documentId: registerNumDoc,
        phoneNumber: registerNumCel,
        completed: false,
        created: Timestamp.now(),
      });
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
            render={({ handleSubmit, form, submitting, pristine, values }) => (
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
                        onInput={(event) => {
                          setRegisterNombre(event.target.value);
                        }}
                      />
                      {meta.error && meta.touched && <span style={{color:"red", textDecoration:"underline"}}>{meta.error}</span>}
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
                        onInput={(event) => {
                          setRegisterApellido(event.target.value);
                        }}
                      />
                      {meta.error && meta.touched && <span style={{color:"red", textDecoration:"underline"}}>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <div>
                  <label>Tipo documento</label>
                  <br></br>
                  <div>
                    <select
                      id="documents"
                      onInput={(event) => setTipoDoc(event.target.value)}
                    >
                      <option value="Cedula de cuidadania">
                        Cedula de cuidadania
                      </option>
                      <option value="Tarjeta de identidad">
                        Tarjeta de identidad
                      </option>
                      <option value="Pasaporte">Pasaporte</option>
                    </select>
                  </div>
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
                        onInput={(event) => {
                          setNumDoc(event.target.value);
                        }}
                      />
                      {meta.error && meta.touched && <span style={{color:"red", textDecoration:"underline"}}>{meta.error}</span>}
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
                        onInput={(event) => {
                          setNumCel(event.target.value);
                        }}
                      />
                      {meta.error && meta.touched && <span style={{color:"red", textDecoration:"underline"}}>{meta.error}</span>}
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
                        type="text"
                        placeholder="Ingrese su correo"
                        onInput={(event) => {
                          setRegisterEmail(event.target.value);
                        }}
                      />
                      {meta.error && meta.touched && <span style={{color:"red", textDecoration:"underline"}}>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <Field name="correo" validate={required}>
                  {({ input, meta }) => (
                    <div>
                      <Label>Confirmar correo</Label>
                      <input
                        {...input}
                        className="form-control"
                        type="text"
                        placeholder="Confirme su correo"
                        onInput={(event) => {
                          setRegisterEmail(event.target.value);
                        }}
                      />
                      {meta.error && meta.touched && <span style={{color:"red", textDecoration:"underline"}}>{meta.error}</span>}
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
                      {meta.error && meta.touched && <span style={{color:"red", textDecoration:"underline"}}>{meta.error}</span>}
                    </div>
                  )}
                </Field>
                <div className="buttons">
                  <Button onClick={register} disabled={submitting} style={{marginRight:"5%", marginTop:"3%"}}>
                    Registrar
                  </Button>
                  <Button
                    type="button"
                    onClick={form.reset}
                    disabled={submitting || pristine}
                    style={{marginTop:"3%"}}
                  >
                    Borrar
                  </Button>
                </div>
              </form>
            )}
          />
        </div>
      </div>
    </div>
  );
}

export default Registro;
