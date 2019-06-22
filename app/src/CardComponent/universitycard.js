import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
import PropTypes from 'prop-types';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/VerifiedUser';
import ShareIcon from '@material-ui/icons/Clear';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import classNames from 'classnames';
import {withStyles} from '@material-ui/core/styles';
import {Table} from 'react-bootstrap';

import X from '../images/x.jpg';
import SU from '../images/su.png';
import KU from '../images/ku.jpg';

import Axios from 'axios';
import restUrl from '../restUrl';
import {Container} from 'react-bootstrap';

// Dialog

import Paper from '@material-ui/core/Paper';
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


const styles = theme => ({
  card: {
    maxWidth: 400,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class CardComponent extends Component {


state={
    expanded:false,
    open:false,
    respdata:{}
}

handleExpandClick=()=>{
    this.setState({expanded:!this.state.expanded})
}

handleClose=()=>{
  this.setState({open:false})
}
  
issueDegree=()=>{
  Axios({
    method:'get',
    url:restUrl+'/api/v1/issueDegree'
  })
  .then((data) => {
   console.log(data)
    
    if(data.data.status==200){
      this.setState({open:true, respdata:data.data})  
         
    }else{
      alert('Transcript Request Failed');
    }

  })
  .catch((error) => {
    alert('Network Error, Try Again');
    console.log(error);
    console.log(error+"error in Transcript for get");
});

}
render(){
    const { classes } = this.props;

    // let imgComp;
    // if(this.props.data.imageLogo=="X"){
    //     imgComp=[<CardMedia
    //     className={classes.media}
    //     image={X}
    //     title="Paella dish"
    //   />]
    // }else if(this.props.data.imageLogo=="SU"){
    //     imgComp=[<CardMedia
    //         className={classes.media}
    //         image={X}
    //         title="Paella dish"
    //       />]
    // }else if(this.props.data.imageLogo=="KU"){
    //     imgComp=[<CardMedia
    //         className={classes.media}
    //         image={X}
    //         title="Paella dish"
    //       />]
    // }
  return (
    <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            {this.props.data.logoIcon}
          </Avatar>
        }
        action={
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        }
        title={this.props.data.title}
        subheader={this.props.data.timeStamp}
      />
     <CardMedia
        className={classes.media}
        image={X}
        title="Paella dish"
        />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {this.props.data.requestMsg}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites" onClick={this.issueDegree}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
        <IconButton
          onClick={this.handleExpandClick}
          aria-expanded={this.state.expanded}
          aria-label="Show more"
          
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={this.state.expanded} timeout="auto" unmountOnExit>
        <CardContent>
        <Table striped bordered hover responsive className={classes.table}> 
        {/* first_name:"Bob",
        last_name:"Muray",
        degree:"B.Tech",
        status:"N/A",
        year:"2019",
        average:"N/A",
        uid:"10004",
        university_name:"University X",
        grant_status:"Approved" */}
  <tbody>
      <tr>
          <td> Name</td>
          <td>{this.props.data.requestData.first_name + " " + this.props.data.requestData.last_name}</td>
      </tr>

      <tr>
          <td> Degree</td>
          <td>{this.props.data.requestData.degree}</td>
      </tr>

      <tr>
          <td>status</td>
          <td>{this.props.data.requestData.status}</td>
      </tr>

      <tr>
          <td> year</td>
          <td>{this.props.data.requestData.year}</td>
      </tr>

      <tr>
          <td> average</td>
          <td>{this.props.data.requestData.average}</td>
      </tr>

      <tr>
          <td> uid</td>
          <td>{this.props.data.requestData.uid}</td>
      </tr>

      <tr>
          <td> university_name</td>
          <td>{this.props.data.requestData.university_name}</td>
      </tr>

      <tr>
          <td> grant_status</td>
          <td>{this.props.data.requestData.grant_status}</td>
      </tr>

      </tbody>
  </Table>
</CardContent>
      </Collapse>

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
                Transcript Issuance Response from Indy Network and wallet
              </Typography>
              {/* <Button color="inherit" onClick={this.handleClose}>
                save
              </Button> */}
            </Toolbar>
          </AppBar>
          <Container style={{width:"100%",height:"100%"}}>
       
          <Paper style={{marginTop:"50px",marginLeft:"10px",marginRight:"10px",width:"100%",height:"50%"}}>
          <div style={{marginTop:"20px" ,overflowY:"auto"}} >
          {  JSON.stringify(this.state.respdata)}
            </div>
          </Paper>
          </Container>
</Dialog>

    </Card>
  );
        }
}
CardComponent.propTypes = {
    classes: PropTypes.object.isRequired,
    router: PropTypes.object.isRequired,
 
};

export default withStyles(styles)(CardComponent);