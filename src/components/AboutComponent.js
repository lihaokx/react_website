import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, CardBody, CardHeader, Media } from 'reactstrap';
import { Link } from 'react-router-dom';
 
const RenderLeader = (props) => {
    return (     
    <div key={props.leader.id} className="col-12 mt-5"> 
        <Media className="row">
            <Media left middle href="#" className="col-12 col-md-2">
                <Media object  src={process.env.PUBLIC_URL +"/"+props.leader.image} className="w-100 h-auto"  alt="props.leader.name" />
            </Media>
            <Media body  className="col-12 col-md-10">
                <Media heading  >
                {props.leader.name}
                </Media>
                <h6>{props.leader.designation}</h6>
                <p>{props.leader.description}    </p>
            </Media>
        </Media>
    </div>
    );
}  

function About(props) {

    const leaders = props.leaders.map((leader) => {
        return (
        <div key={leader.id} className="col-12 mt-5"> 
            <RenderLeader leader ={leader}/>
        </div>
        );
    }) ;

    return(
        <div className="container">
            <div className="row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem active>About Us</BreadcrumbItem>
                </Breadcrumb>
                <div className="col-12">
                    <h3>About Us</h3>
                    <hr />
                </div>                
            </div>
            <div className="row row-content">
                <div className="col-12 col-md-6">
                    <h2>Our History</h2>
                    <p>The brand Haolao was founded in 2011. With over 10 years of development, Haolao International Holding Ltd. has become a world-renowned catering enterprise.
                        By the end of June 30, 2020 ,Haolao has opened 20 chain restaurants all over the world. 
                        Over the years, Haolao has withstood the challenges of the market as well as customers, and has successfully forged a quality hot pot brand which has earned a reputation for itself. 
                        Haolao combines kinds of characteristics of hot pot in many places of China. 
                        It gives the highest priority to continuously improving the quality and safety of its food products, providing more thoughtful services to its customers while delivering healthier, safer and more nutritious food.</p>
                    <p>The restaurant traces its humble beginnings to <em>Hao Li</em>, who featured for the first time the world's best cuisines in a pan.</p>
                </div>
                <div className="col-12 col-md-5">
                    <Card>
                        <CardHeader className="bg-primary text-white">Facts At a Glance</CardHeader>
                        <CardBody>
                            <dl className="row p-1">
                                <dt className="col-6">Started</dt>
                                <dd className="col-6">3 Mar. 2015</dd>
                                <dt className="col-6">Major Stake Holder</dt>
                                <dd className="col-6">HK Fine Foods Inc.</dd>
                                <dt className="col-6">Last Year's Turnover</dt>
                                <dd className="col-6">$1,250,375,000</dd>
                                <dt className="col-6">Employees</dt>
                                <dd className="col-6">1000</dd>
                            </dl>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12">
                    <Card>
                        <CardBody >
                            <blockquote className="blockquote">
                                <p className="mb-0">The best hotpot I have ever had!</p>
                                    <br />
                                <footer className="blockquote-footer">Tony Ma  
                                <cite title="Source Title">   June, 2016</cite>
                                </footer>
                            </blockquote>
                        </CardBody>
                    </Card>
                </div>
            </div>
            <div className="row row-content">
                <div className="col-12">
                    <h2>Corporate Leadership</h2>
                </div>
                <div className="col-12">
                {/* <Example/> */}
                     <Media list>
                        {leaders} 
  
                    </Media> 
                </div>
            </div>
        </div>
    );
}

export default About;    