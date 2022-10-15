import React from "react";
import "./navbar.css"; 

export const NavBar = () => {
    return(
     <div className="slider vh-100 align-items-center">
      <div className="container-fluid">
        <nav className="navbar navbar-expand-lg navbar-light" id="nav">
          <div className="container-fluid">
            <a className="navbar-brand" href="#">
              <img src="C:\Users\HP\TP_final_foodtalk\src\assets\imagenes\Food_talk_logo.png" alt="Logo Food Talk"
              width="auto" height="120px" max-height="120px"></img>
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#nav">Inicio</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#about_us">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#rece_titulo">Recetas</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#rece-dia-t">Receta del día</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#shop">Shop</a></li>
                <li className="nav-item">
                  <a className="nav-link" href="#contact_us">Contact us</a>
                </li>
                
              </ul>

              <button className="btn btn-outline-secondary ms-lg-3"><i className="fa-solid fa-user"> </i> Mi Cuenta</button>
            </div>
          </div>
        </nav>
      </div>
      </div>
      )
}
