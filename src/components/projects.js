import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, Button, CardActions, CardMenu, IconButton } from 'react-mdl';
import Collapsible from 'react-collapsible';

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {
    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '800', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '210px', background: 'url(https://res.cloudinary.com/dxieulu0p/image/upload/v1565472471/Rust_wqedec.png) center / cover'}} ></CardTitle>
            <CardText>
              Snake & Ladder terminal based game
            </CardText>

            <Collapsible trigger="Click on View Description">
            <p>Written in Rust Programming. The board consists of blocks from 1 to 100 with several snakes and ladders. Players are supposed to climb the ladder to further their moves. If a snake is encountered then player has to slide down the snake to move backward in the board. There can be 2 to 4 players playing this game. Player has to roll dice on their turn. The player to first land on block 100 wins. The board gets displayed each time the player's roll their dice along with their position in the board. </p>
            </Collapsible>
            <CardActions border className="button-bootstrap">
                <a href="https://github.com/saraswathidatar/Rust2019_SnakeAndLadderGame" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
                <a href="https://res.cloudinary.com/dxieulu0p/image/upload/v1565471467/Screenshot3_bgoieh.png" rel="noopener noreferrer" target="_blank"><Button colored>Screenshot</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '800', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '210px', background: 'url() center / cover'}} ></CardTitle>
            <CardText>
              FTP Client application in C#
            </CardText>
              <Collapsible trigger="Click on View Description">
              <p>FTP Client app designed by a team of five to transfer files between client and server. App allows to get file,put file,lists all files,create directory,delete file,rename file, list all files on local, copy directory to remote server,change file permissions and also has a client installer.</p>
              </Collapsible>
              <CardActions border className="button-bootstrap">
                <a href="https://github.com/pdx-cs-lbryan/ftpclient" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '800', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '210px', background: 'url() center / cover'}} ></CardTitle>
            <CardText>
              Internet Relay Chat application in Python
            </CardText>
              <Collapsible trigger="Click on View Description">
              <p>Basic IRC app that allows to create a room, join a room, list all rooms, list members of a room, send messages to a room, leave a room, join multiple rooms and send messages to multiple rooms.</p>
              </Collapsible>
              <CardActions border className="button-bootstrap">
                <a href="https://github.com/saraswathidatar/InternetRelayChat" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 4 */}
          <Card shadow={5} style={{minWidth: '800', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '210px', background: 'url() center / cover'}} ></CardTitle>
            <CardText>
              How to Play Board Games in Android
            </CardText>
              <Collapsible trigger="Click on View Description">
              <p>Developed a mobile application for learning rules of various board games with visual and textual elements to help different learning styles. Started with rules for chess game consisting of setting up the board,pieces of chess and text to speech to read out the rules.</p>
              </Collapsible>
              <CardActions border className="button-bootstrap">
                <a href="https://github.com/saraswathidatar/Howtoplayboardgames" rel="noopener noreferrer" target="_blank"><Button colored>Github</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '800', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '210px', background: 'url(https://res.cloudinary.com/dxieulu0p/image/upload/v1565483363/Curriculum-design_izkycz.png) center / cover'}} ></CardTitle>
            <CardText>
              Digitization of Curriculum Design using WAMP
            </CardText>

            <Collapsible trigger="Click on View Description">
            <p>Developed  an online tool ‘Curriculum Design’ to simplify curriculum course structures and program approval process.Implemented the design in Code Igniter framework on a WAMP server and used Bootstrap & jQuery for front end web development. </p>
            </Collapsible>
            <CardActions border className="button-bootstrap">
                <a href="https://res.cloudinary.com/dxieulu0p/image/upload/v1565483363/Curriculum-design_izkycz.png" rel="noopener noreferrer" target="_blank"><Button colored>Screenshot</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '800', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '210px', background: 'url("https://res.cloudinary.com/dxieulu0p/image/upload/v1565484082/PacketLoss_enxwsa.png") center / cover'}} ></CardTitle>
            <CardText>
              Performance Analysis of Routing Protocols in Adhoc Networks using ns2
            </CardText>
              <Collapsible trigger="Click on View Description">
              <p>Compared the performance of AODV, DSDV & DSR routing protocols based on parameters such as packet loss, throughput & delay and obtained simulation results using ns-2</p>
              </Collapsible>
              <CardActions border className="button-bootstrap">
                <a href="https://res.cloudinary.com/dxieulu0p/image/upload/v1565484082/PacketLoss_enxwsa.png" rel="noopener noreferrer" target="_blank"><Button colored>Screenshot</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '800', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '210px', background: 'url("https://res.cloudinary.com/dxieulu0p/image/upload/v1565484507/HIMS_qregyf.png") center / cover'}} ></CardTitle>
            <CardText>
              HIMS-Hospital Information Management System
            </CardText>
              <Collapsible trigger="Click on View Description">
              <p>Hospital Information Management System includes registration of patients, storing their details into the system, and also computerized billing in the pharmacy, and labs. Our application has the facility to give a unique id for every patient and stores the details of every patient and the staff automatically. It includes a search facility to know the treatment of each patient. User can search availability of a doctor and the details of a patient using the id.</p>
              </Collapsible>
              <CardActions border className="button-bootstrap">
                <a href="https://res.cloudinary.com/dxieulu0p/image/upload/v1565484507/HIMS_qregyf.png" rel="noopener noreferrer" target="_blank"><Button colored>Screenshot</Button></a>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
          </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
        {/* Project 1 */}
        <Card shadow={5} style={{minWidth: '800', margin: 'auto'}}>
          <CardTitle style={{color: '#fff', height: '210px', background: 'url("https://res.cloudinary.com/dxieulu0p/image/upload/v1565487982/desktopemailalert_xicmj3.png") center / cover'}} ></CardTitle>
          <CardText>
            Desktop Email Alert Using POP3 - Internet Mailing Made easier for blinds
          </CardText>
            <Collapsible trigger="Click on View Description">
            <p>Designed a cutting-edge email solution by integrating speech technology. Incorporated a voice recognition to notify the user of the newly arrived mail, and a TTS engine that converted the given text to speech and read out the corresponding mail being sent.</p>
            </Collapsible>
            <CardActions border className="button-bootstrap">
              <a href="https://res.cloudinary.com/dxieulu0p/image/upload/v1565487982/desktopemailalert_xicmj3.png" rel="noopener noreferrer" target="_blank"><Button colored>Screenshot</Button></a>
          </CardActions>
          <CardMenu style={{color: '#fff'}}>
            <IconButton name="share" />
          </CardMenu>
        </Card>
        </div>
      )
    }
  }
  render() {
    return(
      <div>
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>MS Projects</Tab>
          <Tab>Mtech Projects</Tab>
          <Tab>BE Projects</Tab>
        </Tabs>
          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>
      </div>
    )
  }
}
export default Projects;
