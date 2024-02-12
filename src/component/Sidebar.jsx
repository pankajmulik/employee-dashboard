import React, { useState } from 'react'
import menus from './sidebarmenu'
import SidebarContent from './SidebarContent'
import {Col,Container,Row} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


const Sidebar = ({ children }) => {

    const [isOpen,setisopen]=useState("true")

    return (
        

        <div className='container' style={{margin:'0'}}>
            <div className='row d-flex '>
                <div className='col-2  d.flex' style={isOpen?{width:'200px'}:{width:'0px'}}>
                   
                   
                   
                    <img src="images/numetry_technologies_logo.jpg" alt="no found" className='img-thumbnail' style={{ width: '50px', height: '50px', objectFit: 'fill' }} />

               
                    
                </div>
                <div style={{backgroundColor:"blue"}}> <FontAwesomeIcon icon={faBars} /></div>
            
            </div>
      </div>




    )
}

export default Sidebar