import React from 'react';
import Navbar from '../navbar.js';
import Sidebar from '../sidebar.js';
import Checkbox from './createproject-checkbox.js';
import CreateProjectTagSection from './createproject-tag-section.js';
import CreateProjectPositionSection from './createproject-position-list.js';


export default class CreateProject extends React.Component {

  createCheckbox() {
    <Checkbox handleCheckboxChange={this.toggleCheckbox } key='inprogress' />
  }

  render() {
    return (


      <div>





        <Navbar
          self_name = "Jane"
          ></Navbar>

        <div>
          <Sidebar
            first_active = "Project 1"
            second_active = "Project 2"
            third_active = "Project 3"
            fourth_active = "Project 4"
            ></Sidebar>
        </div>


        <div className="col-md-4 leftmain">
         <div id = "create-project-title" className= "attribute-box attribute">Create Project</div>
         <div className= "attribute-box">
         <div className= "attribute">Project Name:</div>
         <input />
        </div>
        <div className= "attribute-box">
         <div className= "attribute">Description:</div>
         <input />
        </div>

        <div className ="tag-section">
          <CreateProjectTagSection />
        </div>

        <img id="logo" alt="OSTF Logo" src="img/logo_notext.png" height="auto" width="auto" />
        </div>




        <div className="col-md-4 rightmain">

        <CreateProjectPositionSection />

          <div className = "attribute-box date">
          <div className = "attribute">Start Date:
          <input type="date" />
          </div>
        </div>
        <div className = "attribute-box date">
          <div className = "attribute">End Date:
          <input type="date" />
          </div>
        </div>

          <div className = "progress attribute-box">
          <div>In Progress:
           <form onSubmit={this.handleFormSubmit}>
              {this.createCheckbox()} </form>
          </div>
        </div>

          <button type="button" id="create" className="btn btn-default">
          Create
          </button>

        </div>

      </div>

    )
  }
}