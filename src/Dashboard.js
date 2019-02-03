import React, { Component } from 'react'
import firebase from 'firebase'
import { WarningOutlined, ErrorOutline, DoneOutlineOutlined } from '@material-ui/icons'
import { ExpansionPanel, ExpansionPanelSummary, Avatar, ExpansionPanelDetails, Chip } from '@material-ui/core';
import './Dashboard.css'
import { Amber } from '@material-ui/core/colors';

class Dashboard extends Component {
  render() {
		return(
			<div>
				<h1>Volunteers</h1>
        <div className='panel-container'>
        <ExpansionPanel>
          <ExpansionPanelSummary>
          <Avatar alt='profile image' src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/afro_man_male_avatar-128.png' />
            <p>Ryan Chase</p>
            <Chip label='PTSD Certified' />
            <Chip label='Child Safety Certified' />
            <Chip label='CPR/First Aid Certified' />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className='status warning'>
              <WarningOutlined />
              <span className='message'>Application Status</span>
            </div>
            <div className='status error'>
              <ErrorOutline />
              <span className='message'>Background Check</span>
            </div>
            <div className='status good'>
              <DoneOutlineOutlined/>
              <span className='message'>References</span>
            </div>
          </ExpansionPanelDetails>
          {/* <ExpansionPanelDetails>
            <h1>Training</h1>
            <Chip label='PTSD Certified' />
          </ExpansionPanelDetails> */}
        </ExpansionPanel>
        </div>
        <div className='panel-container'>
        <ExpansionPanel>
          <ExpansionPanelSummary>
          <Avatar alt='profile image' src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_avatar_child_kid-128.png' />
            <p>Rachel Vasquez</p>
            <Chip label='CPR/First Aid Certified' />
          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className='status error'>
              <ErrorOutline />
              <span className='message'>Application Status</span>
            </div>
            <div className='status error'>
              <ErrorOutline />
              <span className='message'>Background Check</span>
            </div>
            <div className='status error'>
              <ErrorOutline />
              <span className='message'>References</span>
            </div>
          </ExpansionPanelDetails>
          {/* <ExpansionPanelDetails>
            <h1>Training</h1>
            <Chip label='PTSD Certified' />
          </ExpansionPanelDetails> */}
        </ExpansionPanel>
        </div>
        <div className='panel-container'>
        <ExpansionPanel>
          <ExpansionPanelSummary>
          <Avatar alt='profile image' src='https://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/girl_female_woman_avatar-128.png' />
            <p>Victoria Smith</p>
            <Chip label='PTSD Certified' />
            <Chip label='Child Safety Certified' />
            <Chip label='CPR/First Aid Certified' />
            <Chip label='International Law' />
            <Chip label='Social Service' />

          </ExpansionPanelSummary>
          <ExpansionPanelDetails>
            <div className='status good'>
              <DoneOutlineOutlined />
              <span className='message'>Application Status</span>
            </div>
            <div className='status good'>
            <DoneOutlineOutlined />
              <span className='message'>Background Check</span>
            </div>
            <div className='status good'>
              <DoneOutlineOutlined/>
              <span className='message'>References</span>
            </div>
          </ExpansionPanelDetails>
          {/* <ExpansionPanelDetails>
            <h1>Training</h1>
            <Chip label='PTSD Certified' />
          </ExpansionPanelDetails> */}
        </ExpansionPanel>
        </div>
			</div>
		)
  }
}

export default Dashboard