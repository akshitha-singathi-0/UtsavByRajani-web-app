import React from "react";
import {c1} from '../styles/color-scheme';

const Footer = () => {
    return (
    <div>
        <footer class="text-center text-lg-start text-muted" style={{backgroundColor:c1}}>
        
        <section class="">
            <div class="container text-center text-md-start mt-5">
            
            <div class="row mt-3">
                
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                
                
                <h6 class="text-uppercase fw-bold mb-4">
                    <i class="fas fa-gem me-3"></i>UTSAV BY RAJANI
                </h6>
                <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum
                    dolor sit amet, consectetur adipisicing elit.
                </p>
                </div>
                
                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                
                <h6 class="text-uppercase fw-bold mb-4">
                    Products
                </h6>
                <p>
                    <a href="#!" class="text-reset">Angular</a>
                </p>
                <p>
                    <a href="#!" class="text-reset">React</a>
                </p>
                <p>
                    <a href="#!" class="text-reset">Vue</a>
                </p>
                <p>
                    <a href="#!" class="text-reset">Laravel</a>
                </p>
                </div>
                
                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                
                
                <h6 class="text-uppercase fw-bold mb-4">
                    Social Media
                </h6>         
            <div class="me-5 d-none d-lg-block">
            <span>Get connected with us on social networks:</span>
            </div>
            
            <div>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-facebook-f"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-twitter"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-google"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-instagram"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-linkedin"></i>
            </a>
            <a href="" class="me-4 text-reset">
                <i class="fab fa-github"></i>
            </a>
            </div>
            
                </div>
                
                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                
                <h6 class="text-uppercase fw-bold mb-4">Contact</h6>
                <p><i class="fas fa-home me-3"></i> 17 Kady Ln, Kendall Park, NJ USA</p>
                <p>
                    <i class="fas fa-envelope me-3"></i>
                    utsavbyrajani@gmail.com
                </p>
                <p><i class="fas fa-phone me-3"></i> (732)-397-2400</p>
                </div>
                
            </div>
            
            </div>
        </section>
        
        <div class="text-center p-4">
            © 2024 Copyright:
            <a class="text-reset fw-bold"> Akshitha Singathi</a>
        </div>
        
        </footer>
        
    </div>
    );
}

export default Footer;