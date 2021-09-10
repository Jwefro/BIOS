import React from 'react'
import "./home.css";
import "animate.css";
import servicios1 from "../assets/imagenes/servicios1.jpg";
import productos1 from "../assets/imagenes/productos1.jpg";
import DS1 from "../assets/imagenes/DS1.jpg";

const Home = () => {
    return (
        <div className="">

            <div className="contain">
                
                <div className="con">
                    
                    <span className="present1  animate__fadeIn">SERVICIOS INFORMATICOS</span>

                </div>
               
             
           
            </div>
           



            
        <div className="separador">

        <p>ESPECIALIZADOS EN SERVICIO TECNICO</p>

        </div>
        <div className="container " >


      


        <div className="container1">

            <div className="card">
                <img src={servicios1} alt="" />
                <h4>Servicios</h4>
                <p>Lista de servicios que la empresa ofrece para el mantenimiento y reparacion de equipos</p>
            </div>

            <div className="card">
                <img src={productos1} alt="" />
                <h4>Productos</h4>
                <p>Lista de servicios que la empresa ofrece para el mantenimiento y reparacion de equipos</p>
            </div>

            <div className="card">
                <img src={DS1} alt="" />
                <h4>Desarrollo de Software</h4>
                <p>Lista de servicios que la empresa ofrece para el mantenimiento y reparacion de equipos</p>
            </div>
            
        </div>






     {/*    <div className="container  ">
        <div className="row  pb-5" >
            <div className="row pb-5">
        <div className="colum col-4 m1-0 shadow">
            <img className="servicios" src={servicios1} alt="Servicios" />
        </div>
        <div className="colum1 col-4 shadow"></div>
        <div className="colum col-4 shadow"></div>

            </div>
            </div>
    
        </div> */}







        </div>
        


















        <div className="piePagina bg-dark m-0 p-0">
        <div className="container">
<div className="row">
    <div className="pie col-4">
        <p className="p1">SIGUE CONECTADO</p>


        </div>
    <div className=" pie col-4">
        <p className="p1">ESCRIBENOS</p>
    <input type="text" className="input" placeholder="  Escribe tu Email aqui" />
    <button className="btn btn-lit">Enviar</button>
    
        </div>
    <div className="pie col-4 p-0 m-0">
        <p className="p1">¿NECESITAS AYUDA?</p>
        <p>914-123-456</p>
        <p>info@misitio.com</p>
        </div>
        <p className="p2 bg-dark">©2021 desarrollado por Caceres Jeffrey, Luna Arturo</p>
    </div>
  
</div>




</div>
   
        </div>

        

    )
};

export default Home;
