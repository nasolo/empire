import React, {Component} from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as installerAction from '../../actions/installerAction'
import Promise from 'promise'
import randomstring from 'randomstring'
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




class Installers extends Component {

    constructor(props) {
      super(props);
     
      this.toggle = this.toggle.bind(this);
      this.addInstaller = this.addInstaller.bind(this);
      this.handleInputChange = this.handleInputChange.bind(this);
      this.togglePrimary = this.togglePrimary.bind(this);
     // this.loadinstallers = this.loadinstallers.bind(this)
      this.loadInstallerTable = this.loadInstallerTable.bind(this)
      this.loadInsertNewInsertallerForm = this.loadInsertNewInsertallerForm.bind(this)
     // this.InsertNewInsertallerForm = this.InsertNewInsertallerForm.bind(this)
      this.state = { 
        collapse: true,
        primary: false,
          id: "",
          type:"",
          fname: "",
          lname: "",
          status: "",
          phone: ""
       };

     

       
    }

    componentWillMount() { // HERE WE ARE TRIGGERING THE ACTION
      this.props.installerAction.fetchInstallers()
      
   }

   loadInsertNewInsertallerForm(){


  return <Row>
      <Col xs="12" md="12" lg="12">
        <Card>
          <CardBody>
            <form onSubmit={this.addInstaller} className="form-horizontal">
          
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="id">ID</Label>
                </Col>
                <Col xs="12" md="9">
             
                  <Input type="number" id="id" name="id" value={this.state.id} onChange={this.handleInputChange} placeholder="Installer id required"/>
                  <FormText color="muted">Please enter installer id</FormText>
                  
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="type">Select Installer Type</Label>
                </Col>
                <Col xs="12" md="9" size="lg">
                  <Input type="select" name="type" id="type" value={this.state.type} onChange={this.handleInputChange}>
                    <option value="Carpet">Carpet</option>
                    <option value="Hard Surface">Hard Surface</option>
                    <option value="Windows Treatment">Windows Treatment</option>
                    
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="fname">Firstname</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="input" id="fname" name="fname" placeholder="Firstname" value={this.state.fname} onChange={this.handleInputChange}/>
                  <FormText className="help-block">Please enter installer firstname</FormText>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="lname">Lastname</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="input" id="lname" name="lname" placeholder="lastname" value={this.state.lname} onChange={this.handleInputChange}/>
                  <FormText className="help-block">Please enter installer lastname</FormText>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="status">Status</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="select" name="status" id="status" value={this.state.lname} onChange={this.handleInputChange}>
                    <option value="Active">Active</option>
                    <option value="Inactive">Inactive</option>
                    <option value="Banned">Banned</option>
                    <option value="Pending">Pending</option>
                  </Input>
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col md="3">
                  <Label htmlFor="Phone">Phone #</Label>
                </Col>
                <Col xs="12" md="9">
                  <Input type="number" min="10" max="11" id="phone" name="phone" placeholder="Phone Number" value={this.state.phone} onChange={this.handleInputChange}/>
                  <FormText className="help-block">Please enter installer Phone number</FormText>
                </Col>
              </FormGroup>                
            </form>
          </CardBody>
          <CardFooter>
            <Button type="submit" size="sm" color="primary" onClick={this.addInstaller}><i className="fa fa-dot-circle-o"></i> Submit</Button>
            <Button type="reset" size="sm" color="danger"><i className="fa fa-ban"></i> Reset</Button>
          </CardFooter>
        </Card>
      
      </Col>
    </Row>
}

loadInstallerTable () {
  
  const listOfInstallers = this.props.fetchedInstallersData.payload
  var tableOfInstallers = []
  
  for(var obj in listOfInstallers){
    var list = listOfInstallers[obj]

      tableOfInstallers.push(
  
        <tr key={randomstring.generate()}>
          <td>{list.id}</td>
          <td>{list.fname + " " + list.lname}</td>
          <td>{list.type}</td>
          <td>{list.phoneNumber}</td>
          <td>
            <Badge color="success">{list.status}</Badge>
          </td>
        </tr>
      )
    }

  return <CardBody>
    <Table responsive>
      <thead>
      <tr>
        <th>Username</th>
        <th>Date registered</th>
        <th>Role</th>
        <th>Status</th>
      </tr>
      </thead>
      <tbody>
      {tableOfInstallers}
      </tbody>
    </Table>
   
  </CardBody>



}

    toggle() {
      this.setState({ collapse: !this.state.collapse });2
    }
    togglePrimary() {
      this.setState({
        primary: !this.state.primary
      });
    }
    addInstaller(event){

       const installerData = {
        id: !isNaN(this.state.id) ? parseInt(this.state.id) : this.state.id,
        type: this.state.type,
        fname: this.state.fname,
        lname: this.state.lname,
        status: this.state.status,
        phone: !isNaN(this.state.phone) ? parseInt(this.state.phone) : this.state.phone
       }

        this.props.installerAction.createInstaller(installerData)
       
    }

    handleInputChange(event) {
      const target = event.target
      const name = target.name
      
        this.setState( {[name]: target.value})

      event.preventDefault();
      
        console.log(this.state)
    }
  
  render() {
    return (
      
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" lg="12">
            <Card>
              <CardHeader>
              <Form className="form-vertical">
                  <FormGroup row>
                    <Col md="6" lg="6">
                      <InputGroup>
                        <div className="input-group-prepend">
                          <ButtonDropdown isOpen={this.state.first}
                                          toggle={() => { this.setState({ first: !this.state.first }); }}>
                            <DropdownToggle caret color="primary">
                              Dropdown
                            </DropdownToggle>
                            <DropdownMenu className={this.state.first ? "show" : ""}>
                              <DropdownItem>Action</DropdownItem>
                              <DropdownItem>Another Action</DropdownItem>
                              <DropdownItem>Something else here</DropdownItem>
                              <DropdownItem divider/>
                              <DropdownItem>Separated link</DropdownItem>
                            </DropdownMenu>
                          </ButtonDropdown>
                        </div>
                        <Input type="text" id="input1-group3" name="input1-group3" placeholder="Username"/>
                      </InputGroup>
                    </Col>
                    <Col md="6" lg="6" className="float-right">
                  
                    <Button color="primary" onClick={this.togglePrimary}><i className="fa fa-plus" style={{paddingRight:"5px"}}></i>Add Installer</Button>
                <Modal isOpen={this.state.primary} toggle={this.togglePrimary}
                       className={'modal-primary ' + this.props.className}>
                  <ModalHeader toggle={this.togglePrimary}>Add Installer</ModalHeader>
                  <ModalBody>
                   
                    {this.loadInsertNewInsertallerForm()}
      
                  </ModalBody>
                  <ModalFooter>
                    <Button color="primary" onClick={this.togglePrimary}>Do Something</Button>{' '}
                    <Button color="secondary" onClick={this.togglePrimary}>Cancel</Button>
                  </ModalFooter>
                </Modal>

                    
                    </Col>
                  </FormGroup>    
            
                </Form>
              
                
              </CardHeader>
                {this.props.isFetching ? "loading..." : this.loadInstallerTable()}
            </Card>
          </Col>

        </Row>
      </div>


    )
  }
}

Installers.propTypes = {

  installerAction: PropTypes.object

}

function mapStateToProps(state) {
  return {
    
    fetchedInstallersData: state.fetchInstallersReducer.installers,
    addInstallerPostResponse: state.addInstallerReducer.postData.entities
  };
}

function mapDispatchToProps(dispatch) {
  return {
    installerAction: bindActionCreators(installerAction, dispatch)
  };
}


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Installers);
