// eslint-disable-next-line no-unused-vars
import React from 'react';
//import { Link } from "react-router-dom";
import './HomeStyle.css'


export const HomePage = () => {
  return (
    <>
<body>
    

    <div className="container-fluid d-none d-lg-block">
        <div className="row align-items-center py-4 px-xl-5">
            <div className="col-lg-3">
                <a href="" className="text-decoration-none">
                    <h1 className="m-0"><span className="text-primary">Banco</span>BaqReq400</h1>
                </a>
            </div>
            <div className="col-lg-3 text-right">
                <div className="d-inline-flex align-items-center">
                    <i className="fa fa-2x fa-map-marker-alt text-primary mr-3"></i>
                    <div className="text-left">
                        <h6 className="font-weight-semi-bold mb-1">Ubicacion</h6>
                        <small></small>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 text-right">
                <div className="d-inline-flex align-items-center">
                    <i className="fa fa-2x fa-envelope text-primary mr-3"></i>
                    <div className="text-left">
                        <h6 className="font-weight-semi-bold mb-1">Email</h6>
                        <small>BaqReq400@gmail.com</small>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 text-right">
                <div className="d-inline-flex align-items-center">
                    <i className="fa fa-2x fa-phone text-primary mr-3"></i>
                    <div className="text-left">
                        <h6 className="font-weight-semi-bold mb-1">Telefono</h6>
                        <small>+502 1489-3463</small>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div className="container-fluid">
      <div className="row border-top px-xl-5">
        <div className="col-lg-3 d-none d-lg-block">
          <a className="d-flex align-items-center justify-content-between bg-secondary w-100 text-decoration-none" data-toggle="collapse" href="#navbar-vertical" style={{height: "67px", padding: "0 30px"}}>
          <h5 className="text-primary m-0"><i className="fa fa-book-open mr-2"></i>Subjects</h5>
            <i className="fa fa-angle-down text-primary"></i>
            </a>  
          <nav className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 border border-top-0 border-bottom-0 bg-light" id="navbar-vertical">
            <div className="navbar-nav w-100">
                <div className="nav-item dropdown">
                    <a href="#" className="nav-link" data-toggle="dropdown">Web Design<i className="fa fa-angle-down float-right mt-1"></i></a>
                    <div className="dropdown-menu position-absolute bg-secondary border-0 rounded-0 w-100 m-0">
                        <a href="" className="dropdown-item">HTML</a>
                        <a href="" className="dropdown-item">CSS</a>
                        <a href="" className="dropdown-item">jQuery</a>
                    </div>
                </div>
                        <a href="" className="nav-item nav-link">Apps Design</a>
                        <a href="" className="nav-item nav-link">Marketing</a>
                        <a href="" className="nav-item nav-link">Research</a>
                        <a href="" className="nav-item nav-link">SEO</a>
            </div>
            </nav>  
        </div>
        <div className="col-lg-9">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                    <a href="" className="text-decoration-none d-block d-lg-none">
                        <h1 className="m-0"><span className="text-primary">BAQ</span>REQ400</h1>
                    </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                        <div className="navbar-nav py-0">
                            <a  className="nav-item nav-link active">Home</a>
                            <a  className="nav-item nav-link">Banco Virtual</a>
                            <a  className="nav-item nav-link">Pagos en Linea</a>
                            <a  className="nav-item nav-link">Remesas</a>
                            <div className="nav-item dropdown">
                                <a href="#" className="nav-link dropdown-toggle" data-toggle="dropdown">Blog</a>
                                <div className="dropdown-menu rounded-0 m-0">
                                    <a  className="dropdown-item">Blog List</a>
                                    <a  className="dropdown-item">Blog Detail</a>
                                </div>
                            </div>
                            <a  className="nav-item nav-link">Contact</a>
                        </div>
                        <a className="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block" href="">Join Now</a>
                    </div>
                </nav>
            </div>
        </div>
    </div>
  
    <div className="container-fluid p-0 pb-5 mb-5">
        <div id="header-carousel" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active" style={{minHeight: "300px"}}>
                    <img className="position-relative w-100" src="img/carousel-1.jpg" style={{minHeight: "300px", objectFit: 'cover'}}/>
                    <div className="carousel-caption d-flex align-items-center justify-content-center">
                        <div className="p-5" style={{width:"100%", maxWidth: "900px"}}>
                            <h5 className="text-white text-uppercase mb-md-3">Best Online Courses</h5>
                            <h1 className="display-3 text-white mb-md-4">Bienvenido al Banco BaqReq400</h1>
                            <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" style={{minHeight: "300px"}}>
                    <img className="position-relative w-100" src="img/carousel-2.jpg" style={{minHeight: "300px", objectFit: 'cover'}}/>
                    <div className="carousel-caption d-flex align-items-center justify-content-center">
                        <div className="p-5" style={{width:"100%", maxWidth: "900px"}}>
                            <h5 className="text-white text-uppercase mb-md-3">Best Online Courses</h5>
                            <h1 className="display-3 text-white mb-md-4">Best Online Learning Platform</h1>
                            <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="carousel-item" style={{minHeight: "300px"}}>
                    <img className="position-relative w-100" src="img/carousel-3.jpg" style={{minHeight: "300px", objectFit: 'cover'}}/>
                    <div className="carousel-caption d-flex align-items-center justify-content-center">
                        <div className="p-5" style={{width:"100%", maxWidth: "900px"}}>
                            <h5 className="text-white text-uppercase mb-md-3">Best Online Courses</h5>
                            <h1 className="display-3 text-white mb-md-4">New Way To Learn From Home</h1>
                            <a href="" className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="container-fluid py-5">
        <div class="container py-5">
            <div class="row align-items-center">
                <div class="col-lg-5">
                    <img class="img-fluid rounded mb-4 mb-lg-0" src="" alt=""/>
                </div>
                <div class="col-lg-7">
                    <div class="text-left mb-4">
                        <h5 class="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>sss sss</h5>
                        <h1>ksldkjgshl</h1>
                    </div>
                    <p>khsldfkjha</p>
                    <a href="" class="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold mt-2">asdfasdf</a>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid py-5">
        <div class="container pt-5 pb-3">
            <div class="text-center mb-5">
                <h5 class="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>Sasdfasdf</h5>
                <h1>123</h1>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="cat-item position-relative overflow-hidden rounded mb-2">
                        <img class="img-fluid" src="" alt=""/>
                        <a class="cat-overlay text-white text-decoration-none" href="">
                            <h4 class="text-white font-weight-medium">asdfasdf</h4>
                            <span>123</span>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="cat-item position-relative overflow-hidden rounded mb-2">
                        <img class="img-fluid" src="" alt=""/>
                        <a class="cat-overlay text-white text-decoration-none" href="">
                            <h4 class="text-white font-weight-medium">fasdfasdf</h4>
                            <span>123</span>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="cat-item position-relative overflow-hidden rounded mb-2">
                        <img class="img-fluid" src="" alt=""/>
                        <a class="cat-overlay text-white text-decoration-none" href="">
                            <h4 class="text-white font-weight-medium">asfdasdf</h4>
                            <span>123</span>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="cat-item position-relative overflow-hidden rounded mb-2">
                        <img class="img-fluid" src="" alt=""/>
                        <a class="cat-overlay text-white text-decoration-none" href="">
                            <h4 class="text-white font-weight-medium">asdf</h4>
                            <span>123</span>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="cat-item position-relative overflow-hidden rounded mb-2">
                        <img class="img-fluid" src="" alt=""/>
                        <a class="cat-overlay text-white text-decoration-none" href="">
                            <h4 class="text-white font-weight-medium">asdf</h4>
                            <span>123</span>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="cat-item position-relative overflow-hidden rounded mb-2">
                        <img class="img-fluid" src="" alt=""/>
                        <a class="cat-overlay text-white text-decoration-none" href="">
                            <h4 class="text-white font-weight-medium">asdf</h4>
                            <span>123</span>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="cat-item position-relative overflow-hidden rounded mb-2">
                        <img class="img-fluid" src="" alt=""/>
                        <a class="cat-overlay text-white text-decoration-none" href="">
                            <h4 class="text-white font-weight-medium">afasdf</h4>
                            <span>123</span>
                        </a>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 mb-4">
                    <div class="cat-item position-relative overflow-hidden rounded mb-2">
                        <img class="img-fluid" src="" alt=""/>
                        <a class="cat-overlay text-white text-decoration-none" href="">
                            <h4 class="text-white font-weight-medium">asdf</h4>
                            <span>123</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid bg-registration py-5" style={{margin: "90px 0"}}>
        <div class="container py-5">
            <div class="row align-items-center">
                <div class="col-lg-7 mb-5 mb-lg-0">
                    <div class="mb-4">
                        <h5 class="text-primary text-uppercase mb-3" style={{letterSpacing: "5px"}}>kdjasfhkashd</h5>
                        <h1 class="text-white">.....</h1>
                    </div>
                    <p class="text-white">123</p>
                    <ul class="list-inline text-white m-0">
                        <li class="py-2"><i class="fa fa-check text-primary mr-3"></i>123</li>
                        <li class="py-2"><i class="fa fa-check text-primary mr-3"></i>123</li>
                        <li class="py-2"><i class="fa fa-check text-primary mr-3"></i>123.</li>
                    </ul>
                </div>
                <div class="col-lg-5">
                    <div class="card border-0">
                        <div class="card-header bg-light text-center p-4">
                            <h1 class="m-0">Sign Up Now</h1>
                        </div>
                        <div class="card-body rounded-bottom bg-primary p-5">
                            <form>
                                <div class="form-group">
                                    <input type="text" class="form-control border-0 p-4" placeholder="Your name" required="required" />
                                </div>
                                <div class="form-group">
                                    <input type="email" class="form-control border-0 p-4" placeholder="Your email" required="required" />
                                </div>
                                <div class="form-group">
                                    <select class="custom-select border-0 px-4" style={{height:"47px"}}>
                                        <option selected>seleccionar</option>
                                        <option value="1"> 1</option>
                                        <option value="2"> 1</option>
                                        <option value="3"> 1</option>
                                    </select>
                                </div>
                                <div>
                                    <button class="btn btn-dark btn-block border-0 py-3" type="submit">Sign Up Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid bg-dark text-white py-5 px-sm-3 px-lg-5" style={{marginTop:"90px"}}>
        <div class="row pt-5">
            <div class="col-lg-7 col-md-12">
                <div class="row">
                    <div class="col-md-6 mb-5">
                        <h5 class="text-primary text-uppercase mb-4" style={{letterSpacing:"5px"}}>Contacto</h5>
                        <p><i class="fa fa-map-marker-alt mr-2"></i>Pendiente</p>
                        <p><i class="fa fa-phone-alt mr-2"></i>Pendiente</p>
                        <p><i class="fa fa-envelope mr-2"></i>Pendiente</p>
                    </div>
                    <div class="col-md-6 mb-5">
                        <h5 class="text-primary text-uppercase mb-4" style={{letterSpacing:"5px"}}>Pendiente</h5>
                        <div class="d-flex flex-column justify-content-start">
                            <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Banco Virtual</a>
                            <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Pagos en linea</a>
                            <a class="text-white mb-2" href="#"><i class="fa fa-angle-right mr-2"></i>Remesa</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 col-md-12 mb-5">
                <h5 class="text-primary text-uppercase mb-4" style={{letterSpacing:"5px"}}>Pendiente</h5>
                <p>pendiente</p>
                <div class="w-100">
                    <div class="input-group">
                        <input type="text" class="form-control border-light" style={{padding:"30px"}} placeholder="Your Email Address"/>
                        <div class="input-group-append">
                            <button class="btn btn-primary px-4">Pendiente</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
   
    </body>
   </>
  )
}
