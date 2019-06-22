import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import {Container, Row, Col} from 'react-bootstrap';
import classNames from 'classnames';


  

class Home extends Component {

  

    render() {
      return(
      <div>

<h1> Student</h1>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
 
};

export default withStyles()(Home);