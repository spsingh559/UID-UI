import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import {Container, Row, Col} from 'react-bootstrap';
import classNames from 'classnames';
import data from '../localData/universityData';

import CardComponent from '../CardComponent/universitycard.js';
  
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/ViewComfy';

class University extends Component {

  

    render() {
        const { classes } = this.props;
        let newData = data.map((data,i)=>{
            return(
                <Col xs={4}>
                <CardComponent
                key={i}
                data={data}
                />
                </Col>
            )
        })


      return(
          <div style={{ position: "absolute",
          width: "100%",
          height: "100%",
          zIndex: "-10",
          backgroundColor:"#eeeeee",}}>
      <div style={{marginTop:"20px"
      }}>
<Container>
<Row>
    {newData}
</Row>
<div style={{position:"bottom", marginTop:"20px"}}>
<BottomNavigation
      
      showLabels
      className={classes.root}
    >
      <BottomNavigationAction label="Onboarding" icon={<RestoreIcon />} />
      <BottomNavigationAction label="Recent Tx" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="View Schemas" icon={<LocationOnIcon />} />
    </BottomNavigation>
    </div>
</Container>
            </div>
            </div>
        );
    }
}

University.propTypes = {
    classes: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
 
};

export default withStyles()(University);