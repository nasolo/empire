import React, {Component} from 'react';
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBody, Label, Input} from 'reactstrap';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as postAction from '../../actions/postAction';
import PropTypes from 'prop-types'


class Postlist extends Component {
    componentWillMount() { // HERE WE ARE TRIGGERING THE ACTION
       this.props.postAction.getPosts()
    }

    getData(){
        return <div> {this.props.posts}</div>
    }

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardHeader>
                Test Data
              </CardHeader>
              <CardBody>
                
               {this.getData()}

              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>

    )
  }
}

Postlist.propTypes = {
    postAction: PropTypes.object,
    posts: PropTypes.array
}

function mapStateToProps(state) {
    console.log(state)
    return {
      posts: state.postList
    };
  }

  function mapDispatchToProps(dispatch) {
    return {
        postAction: bindActionCreators(postAction, dispatch)
    };
  }
  

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Postlist);
