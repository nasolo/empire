
 export default function InsertNewInsertallerForm(props){
        return           
        <Row>
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