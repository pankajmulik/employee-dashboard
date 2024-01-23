import React from 'react'
import menus from './sidebarmenu'
import SidebarContent from './SidebarContent'
import {Col,Container,Row} from 'react-bootstrap'


const Sidebar = ({ children }) => {

    return (
        

            <Container  >
              
                <Row className="justify-content-md-left">
                    <Col className='xs' lg="2">
                        1 of 3
                    </Col>
                  
                
                </Row>

</Container>




    )
}

export default Sidebar