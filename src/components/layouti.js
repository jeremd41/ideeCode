import React, { Component } from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import Logo from "../images/logo.png";

import ModalEmailling from "./modalEmailling"

class Layouti extends Component {
    state = {
        modalScrap:false
    }

    handleShowModal = () => {
        this.setState({ modalScrap: !this.state.modalScrap});
    };

     

    componentDidMount() {
       let visited = sessionStorage["alreadyVisited"];
        if(visited){
            this.setState({ modalScrap: false })
        }else{
            sessionStorage["alreadyVisited"] = true;
            setTimeout(()=>{
                this.handleShowModal()
             },10000);
        }
       
    }

  render() {
    const {children} = this.props

    let modal

    if(this.state.modalScrap){
        modal= <ModalEmailling cache={this.handleShowModal}/>
    }
    
    return (
        <div>
            <header className="header">
                <Link to="/" className="logo">
                    <img src={Logo} alt="ideecode"/>
                </Link>
                <input className="menu-btn" type="checkbox" id="menu-btn" />
                <label className="menu-icon" for="menu-btn">
                    <span className="navicon" />
                </label>
                <ul className="menu">
                    <li>
                        <Link to="/solutions/">Solutions</Link>
                    </li>
                    <li>
                        <Link to="/formation/">Formation</Link>
                    </li>
                    <li>
                        <Link to="/blog/">Blog</Link>
                    </li>
                    <li>
                        <Link to="/contact/">Contact</Link>
                    </li>
                    <li>
                        <Link className="btn-grey" to="/login/">Se connecter</Link>
                    </li>
                </ul>
            </header>
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