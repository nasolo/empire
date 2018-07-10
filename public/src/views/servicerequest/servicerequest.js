import React, {Component} from 'react';
import { Link } from 'react-router-dom';

import {
  Badge,
  Row,
  Col,
  Card,
  CardHeader,
  CardBody,
  Table,
  Pagination,
  PaginationItem,
  PaginationLink,
  Button,
  Label, 
  Input,
  FormGroup,
  InputGroup,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Modal,
  ModalHeader, 
  ModalBody,
  ModalFooter,
  Form,
  FormText,
  CardFooter ,
  InputGroupAddon,
  InputGroupButton
} from 'reactstrap';




class Servicerequest extends Component {

    constructor(props) {
      super(props);
  
      
       
    }


  render() {
    console.log(this.props)
    return (
      <div>
        {this.props.match.params.id}
        <Row>
          <Col>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Combined All Table
              </CardHeader>
              <CardBody>
                <Table hover bordered striped responsive size="sm">
                  <thead>
                  <tr>
                    <th>Sr number</th>
                    <th>Description</th>
                    <th>Opened</th>
                    <th>Account Number</th>
                    <th>Order Link</th>
                  </tr>
                  </thead>
                  <tbody>

                      {this.props.location.data.map(srData =>{

    
    return <tr key={srData.id}>
    <td>{srData.srnumber}</td>
    <td>{srData.description}</td>
    <td>{srData.opened}</td>
    <td>{srData.accountnumber}</td>
      <td><a href={`${srData.ordernumberlink}`} target="_blank"><Badge color="success">View Order</Badge></a></td>
  </tr>
})
}
                  
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>


    )
  }
}


export default Servicerequest
