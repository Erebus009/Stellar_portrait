import React from 'react'
import Container from 'react-bootstrap/esm/Container'



const Footer = () =>{
    return  (
    <Container className="footer">
    <div className="container">
        <div className="row">
            <div className="col-md-7">
                <h5 className="display-6"><i class="fa fa-copyright"></i> Celestial</h5>
                <div className="row">
                    <div className="col-6">
                        <ul className="list-unstyled">
                            <li><a href="/">Mission</a></li>
                            <li><a href="/">Goal</a></li>
                            <li><a href="/">Partners</a></li>
                            <li><a href="/">Team</a></li>
                        </ul>
                    </div>
                    <div className="col-6">
                        <ul className="list-unstyled">
                            <li><a href="/">Documentation</a></li>
                            <li><a href="/">Support</a></li>
                            <li><a href="/">Legal Terms</a></li>
                            <li><a href="/">About</a></li>
                        </ul>
                    </div>
                </div>
                <ul className="nav">
                    <li class="nav-item"><a href="/" class="nav-link pl-0"><i class="fa fa-facebook fa-lg"></i></a></li>
                    <li class="nav-item"><a href="/" class="nav-link"><i class="fa fa-twitter fa-lg"></i></a></li>
                    <li class="nav-item"><a href="/" class="nav-link"><i class="fa fa-github fa-lg"></i></a></li>
                    <li class="nav-item"><a href="/" class="nav-link"><i class="fa fa-instagram fa-lg"></i></a></li>
                </ul>
                <br></br>
            </div>
           
            <div className="col-md-5">
            <h5 className="text-md-right">Contact Us</h5>
                <form>
                    <fieldset class="form-group">
                        <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email"/>
                    </fieldset>
                    <fieldset class="form-group">
                        <textarea class="form-control" id="exampleMessage" placeholder="Message"></textarea>
                    </fieldset>
                    <fieldset class="form-group text-xs-right">
                        <button type="button" class="btn btn-secondary-outline btn-lg">Send</button>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</Container>
    )
   
}

export default Footer

