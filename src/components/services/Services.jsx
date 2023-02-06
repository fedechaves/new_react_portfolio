import React, {useState} from 'react';
import './services.css';


const Services = () => { 
    const [toggleState, setToggleState] = useState(0);

    const toggleTab = (index) => {
        setToggleState(index)
    }

  return (
    <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">I am here to bring your idea to life</span>

        <div className="services__container container grid">
            <div className="services__content">
                <div>
                    <i className="uil uil-arrow services__icon"></i>
                    <h3 className="services__title">
                        Web App <br /> Development</h3>
                </div>

                <span className="services__button" onClick = {() => toggleTab(1)}>
                    View More <i 
                className="uil uil-arrow-right services__button-icon"></i></span>
            
                <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Web App Development</h3>
                        <p className="services__modal-description"> From developing a simple single static page of plain text to complex web applications, 
                        I focus on the methodologies, techniques, and tools needed to make responsive and accessible products</p>
                        
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-web-grid services__icon"></i>
                    <h3 className="services__title">Business <br/> Strategy</h3>
                </div>

                <span className="services__button"onClick = {() => toggleTab(2)}>View More<i 
                className="uil uil-arrow-right services__button-icon"></i></span>
            
                <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">Business Strategy</h3>
                        <p className="services__modal-description"> With your business's goals in mind, 
                        I build web applications using strategic web development (like search engine optimization). 
                        The plan is to target ideal clients for your highest priority services, 
                        enhance user experience (UX), and increase your online presence</p>
                    </div>
                </div>
            </div>

            <div className="services__content">
                <div>
                    <i className="uil uil-edit services__icon"></i>
                    <h3 className="services__title">
                        UI/UX <br /> Design</h3>
                </div>

                <span className="services__button" onClick = {() => toggleTab(3)}>View More <i 
                className="uil uil-arrow-right services__button-icon"></i></span>
            
                <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
                    <div className="services__modal-content">
                        <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>

                        <h3 className="services__modal-title">UI/UX Design</h3>
                        <p className="services__modal-description"> Customized approach to all design decisions so that your 
                        web page offers a pleasant and unique experience 
                        for the target audience and is easy to navigate</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Services
