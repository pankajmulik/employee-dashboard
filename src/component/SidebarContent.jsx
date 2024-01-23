import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'


const SidebarContent = (menu) => {
  
console.log(menu.menu.title)

  return (
      <div>
        
      <Container>
        <Row xs={2} md={4} lg={6}>
          <Col>
      {
        menu.menu.title
            }
            
          </Col>
        </Row>
        </Container>
        
        
        



          
      </div>
  )
}

export default SidebarContent