import React, { Component } from 'react';
import Myinfo from './Myinfo';
import Workexp from './Workexp';
import Education from './Education';
class Profile extends Component {
    render(){
      return (
        <div class="container">
            <div className="row">
                <div className="col">
                <div className="accordion" id="accordionExample">
                    <div className="card">
                        <div className="card-header" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <h5 className="mb-0" >
                            My Info
                        </h5>
                        </div>

                        <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card-body">
                            <Myinfo />
                        </div>
                        </div>
                    </div>
                    
                    <div className="card">
                        <div className="card-header" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseThree">
                        <h5 className="mb-0" >
                            Work Experience
                        </h5>
                        </div>
                        <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
                        <div className="card-body">
                            <Workexp />
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <h5 className="mb-0" >
                            Education
                        </h5>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div className="card-body">
                            <Education />
                        </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header" id="headingThree" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <h5 className="mb-0" >
                            Licenses / Certifications
                        </h5>
                        </div>
                        <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
                        <div className="card-body">
                            <Workexp />
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
            
        
      )
        
    }
}
export default Profile;