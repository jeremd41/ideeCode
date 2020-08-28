import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Logo from "../images/logo.png";

import ModalEmailling from "./modalEmailling"

class Layouti extends Component {
    state = {
        modalScrap:true
    }

    handleShowModal = () => {
        this.setState({ modalScrap: !this.state.modalScrap});
    };

     

    componentDidMount() {
       /* let visited = sessionStorage["alreadyVisited"];
        if(visited){
            this.setState({ modalScrap: false })
        }else{
            sessionStorage["alreadyVisited"] = true;
            setTimeout(()=>{
                this.handleShowModal()
             },1000);
        }*/
       
    }

  render() {
    const {children} = this.props

    let modal

    if(this.state.modalScrap){
        modal= <ModalEmailling cache={this.handleShowModal}/>
    }
    
    return (
        <div>
            <nav className={this.props.bgnav}>
                <div className ="container">
                    <div className={this.props.bgnav + " logo"}>
                        <h1>
                            <Link to="/">
                                <img src={Logo} alt="Idée Code" />
                            </Link>
                        </h1>
                    </div>
                    <div className={this.props.bgnav + " menu-ctn"}>
                        <ul className="menu">
                            <li><Link to="/">Accueil</Link></li>
                            <li><Link to="/solutions/">Solutions</Link></li>
                            <li><Link to="/formation/">Formation</Link></li>
                            <li><Link to="/blog/">Blog</Link></li>
                            <li><Link to="/contact/">Contact</Link></li>
                            <li><Link to="/login/" className={this.props.btnnav}>Se Connecter</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <main>
                {modal}
                {children}
            </main>
            <footer>
                <div className={this.props.bgfooter1}>
                    <ul className="nav-footer">
                        <li><Link to="/sitemap/">Plan du Site</Link></li>
                        <li><Link to="/privacy/">Mentions légales</Link></li>
                        <li><Link to="/contact/">Contact</Link></li>
                    </ul>
                    <ul className="social-icon">
                        <li><a href="https://www.linkedin.com/"><i className="fa fa-linkedin-square fa-5x" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.linkedin.com/"><i className="fa fa-youtube-play fa-5x" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.linkedin.com/"><i className="fa fa-facebook-square fa-5x" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.linkedin.com/"><i className="fa fa-instagram fa-5x" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
                <div className={this.props.bgfooter2}>
                    <p>Copyright - Idéecode - Jérémy DIARD - Brandon DIARD</p>
                </div>
            </footer>
        </div>
    )
  }
}

Layouti.propTypes = {
    children: PropTypes.node.isRequired,
  }

export default Layouti