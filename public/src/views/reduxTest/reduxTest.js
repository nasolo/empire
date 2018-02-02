import React, {Component} from 'react';
import {Badge, Row, Col, Card, CardHeader, CardFooter, CardBody, Label, Input} from 'reactstrap';
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux';
import * as postAction from '../../actions/postAction';
import PropTypes from 'prop-types'

class Carddisplay extends Component {

  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
            <Card>
              <CardHeader>
                {this.props.title}
              </CardHeader>
              <CardBody>
                
              {this.props.body}

              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}


class Postlist extends Component {
    componentWillMount() { // HERE WE ARE TRIGGERING THE ACTION
      
       this.props.postAction.getPosts()
    }

    getData(){
      const posts = this.props.posts
      var carData = []
      var obj
      
      for(obj in posts){

        carData.push(<Carddisplay key={obj} title={posts[obj].title} body={posts[obj].body}/>)


      }

      return carData


    }

  render() {
    return (
      
        <div>{this.getData()}</div>
    
    )
  }
}

Postlist.propTypes = {
    postAction: PropTypes.object
}

function mapStateToProps(state) {
   
    return {
      posts: state.postList.posts
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
