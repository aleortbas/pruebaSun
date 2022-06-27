import React from 'react';
import { Link } from 'react-router-dom';
 
function Footer(props) {
    return(
        <div className="footer">
        <div className="container">
            <div className="row justify-content-center">             
                <div className="col-4 offset-1 col-sm-2">
                    <h5>Links</h5>
                    <ul className="list-unstyled">
                        <li><Link to="/">Inicio</Link></li>
                        <li><Link to="/registro">Login</Link></li>
                    </ul>
                </div>
                <div className="col-7 col-sm-5">
                    <h5>Ubicacion</h5>
                    <address>
                    Calle 22 Norte # 5ª 75<br />
                    Edf. Vìa Veneto Ofc. 304<br />
                    Cali Colombia<br />
		              <i className="fa fa-phone fa-lg"></i>: (57-602) 387 6240<br />
                    </address>
                </div>
                <div className="col-12 col-sm-4 align-self-center">
                    <div className="text-center">
                        <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                        <a className="btn btn-social-icon btn-linkedin" href="http://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                        <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                        <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                        <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>© Copyright 2022 Alejandro Ortiz Bastidas</p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Footer;