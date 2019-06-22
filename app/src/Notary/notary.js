import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import {withStyles} from '@material-ui/core/styles';
import {Container, Row, Col} from 'react-bootstrap';
import classNames from 'classnames';
import data from '../localData/notaryData';

import CardComponent from '../CardComponent/notarycard.js';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/ViewComfy';
import Axios from 'axios';
import restUrl from '../restUrl';

// import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';


import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';

function Transition(props) {
  return <Slide direction="up" {...props} />;
}


class Home extends Component {

    state={open:false, respdata:{}}

    onboarding=()=>{
       Axios({
    method:'get',
    url:restUrl+'/api/v1/bootstrapping'
  })
  .then((data) => {
   console.log(data)
    
    if(data.data.status==200){
      alert(data.data.msg);     
    }else{
      alert('onboarding Failed');
    }

  })
  .catch((error) => {
    alert('Network Error, Try Again');
    console.log(error);
    console.log(error+"error in onboarding for get");
});

  }

  showSchema=()=>{
    Axios({
        method:'get',
        url:restUrl+'/api/v1/getSchema'
      })
      .then((data) => {
       console.log(data)
        
        if(data.data.status==200){
          this.setState({open:true, respdata:data.data})  
             
        }else{
          alert('getSchema Failed');
        }
    
      })
      .catch((error) => {
        alert('Network Error, Try Again');
        console.log(error);
        console.log(error+"error in schema for get");
    });
    
    // this.setState({open:true})
}

    handleClose=()=>{
        this.setState({open:false})
      }

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
      <BottomNavigationAction label="Onboarding" icon={<RestoreIcon />} onClick={this.onboarding}/>
      <BottomNavigationAction label="Recent Tx" icon={<FavoriteIcon />} />
      <BottomNavigationAction label="View Schemas" icon={<LocationOnIcon />} onClick={this.showSchema} />
    </BottomNavigation>
    </div>
</Container>
            </div>
            <Dialog
          fullScreen
          open={this.state.open}
          onClose={this.handleClose}
          TransitionComponent={Transition}
        >

        <AppBar className={classes.appBar} style={{backgroundColor:"#0038A9"}}>
            <Toolbar>
              <IconButton color="inherit" onClick={this.handleClose} aria-label="Close">
                <CloseIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" className={classes.flex}>
                Schema Response from Indy Network
              </Typography>
              {/* <Button color="inherit" onClick={this.handleClose}>
                save
              </Button> */}
            </Toolbar>
          </AppBar>
          <Container style={{width:"100%",height:"100%"}}>
       
          <Paper style={{marginTop:"50px",marginLeft:"10px",marginRight:"10px",width:"100%",height:"50%"}}>
          <div style={{marginTop:"100px"}}>
          {  JSON.stringify(this.state.respdata)}
            </div>
          </Paper>
          </Container>
</Dialog>
            </div>
        );
    }
}

Home.propTypes = {
    classes: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
 
};

export default withStyles()(Home);