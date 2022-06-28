import { useState, useEffect } from "react";
import {
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  Breadcrumb,
  BreadcrumbItem,
  Label,
  Button,
  Card,
  CardTitle,
  CardBody,
} from "reactstrap";
import { Link, Navigate } from "react-router-dom";
import { Form, Field } from "react-final-form";
import "../App";
import { auth } from "../fb";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
  await sleep(300);
  window.alert(JSON.stringify(values, 0, 2));
};
const required = (value) => (value ? undefined : "CAMPO OBLIGATORIO");

function App() {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const [user, setUser] = useState({});

  const login = async () => {
    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
    } catch (error) {
      console.log(error.message);
    }
  };

  const logout = async () => {
    try {
      const user = await signOut(auth);
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div className="row">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to="/">Inicio</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Login</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>Iniciar sesion</h3>
          <hr />
        </div>
      </div>

      <div className="row-content centerCard">
        <div className="col-12 col-md-4">
          <Card className="card">
            <CardTitle>
              <div className="item-container">
                <h2 className="log-in">Inicio De Sesion</h2>
              </div>
            </CardTitle>
            <CardBody>
              <div className="item-container-inner">
                <Form
                  onSubmit={onSubmit}
                  render={({ handleSubmit, form, submitting, pristine }) => (
                    <form onSubmit={handleSubmit}>
                      <Field name="email" validate={required}>
                        {({ input ,meta }) => (
                          <div>
                            <Label>Correo electronico</Label>
                            <input
                              {...input}
                              className="form-control"
                              type="email"
                              placeholder="Ingrese su correo electronico"
                              style={{marginTop: "2%"}}
                              onInput={(event) => {
                                setLoginEmail(event.target.value);
                              }}
                            />
                            {meta.error && meta.touched && (
                              <span style={{color:"red", textDecoration:"underline"}}>{meta.error}</span>
                            )}
                          </div>
                        )}
                      </Field>
                      <Field name="contraseña" validate={required}>
                        {({ input, meta }) => (
                          <div>
                            <Label style={{marginTop: "5%"}}>Contraseña</Label>
                            <input
                              {...input}                            
                              className="form-control"
                              type="password"
                              placeholder="Ingrese su contraseña"
                              style={{marginTop: "2%"}}
                              onInput={(event) => {
                                setLoginPassword(event.target.value);
                              }}
                            />
                            {meta.error && meta.touched && (
                              <span style={{color:"red", textDecoration:"underline"}}>{meta.error}</span>
                            )}
                          </div>
                        )}
                      </Field>
                      <div className="buttons">
                        <Button style={{marginRight: "5%", marginTop: "5%"}} onClick={login} disabled={submitting}>
                          Registrar
                        </Button>
                        <Button
                          type="button"
                          onClick={logout}
                          disabled={submitting}
                          style={{marginLeft: "5%", marginTop: "5%"}}
                        >
                          Cerrar sesion
                        </Button>
                      </div>
                    </form>
                  )}
                />
              </div>
            </CardBody>
          </Card>
          <h4> User Logged In: {user ? user.email : "Not Loggen In"}</h4>
        </div>
      </div>
    </div>
  );
}

export default App;
