import React from 'react';
import Navbar from '../navbar.js';
import Sidebar from '../sidebar.js';
import Profile_Banner from './profile_banner.js';
import Profile_About from './profile_about.js';
import Profile_Skills from './profile_skills';
import Profile_Teams from './profile_teams.js';
import {getProfileData} from '../../server.js'


export default class Profile extends React.Component {
    constructor(props) {
       super(props);
       this.state = {
          contents : []
        };
     }

     refresh() {
       getProfileData("000000000000000000000001", (profileData) => {
        this.setState(profileData);
      });

     }

     componentDidMount() {
       this.refresh();
     }

    render() {
        return(
            <div>
                <Navbar
                    ></Navbar>
                <div className="row">
                    <Sidebar
                    ></Sidebar>
                <div className = "col-md-2"></div>
                    <div className="profile-zone col-md-10">
                     <Profile_Banner
                          user_banner = {this.state.banner}
                          user_img = {this.state.image}
                      ></Profile_Banner>

                      <div className="profile-container row">
                          <Profile_About
                              about = {this.state.bio}
                              email = {this.state.contact}
                          ></Profile_About>

                          <Profile_Skills
                                  name = {this.state.name}
                                  skills = {this.state.skills}
                                  interests = {this.state.interests}
                            ></Profile_Skills>

                            <Profile_Teams
                                  teams = {this.state.projects}
                            ></Profile_Teams>
                      </div>

                    </div>
                </div>
            </div>
        )
    }
}
