import React, { Component } from 'react';
// import logo from './logo.svg';
import './Login.css';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Footer from '../UILayout/footer'
import {Container,Row,Col} from 'react-bootstrap';
import logo from '../images/logo.jpg';
import Axios from 'axios';
import restUrl from '../restUrl';
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing.unit,
  },
  withoutLabel: {
    marginTop: theme.spacing.unit * 3,
  },
  textField: {
    flexBasis: 200,
  },
  dense: {
    marginTop: 19,
  },
});

const obj={};
class Login extends Component {

  state={
    userId: '',
    password :""
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  // componentDidMount=()=>{
  //   let loginData=JSON.parse(sessionStorage.getItem("userLoginDetails"));
  //   console.log('loginData in login page', loginData);
  // }

  
  submit=()=>{
    const { router } = this.props;
    // router.push('/')
    let obj={
      _id:parseInt(this.state.userId),
      pwd:this.state.password
    }

     Axios({
      method:'post',
      url:restUrl+'/api/v1/login',
      data:obj
    })
    .then((data) => {
     console.log(data)
      let dept=data.data.dept;
      if(data.data.statusCode==200){
        
        sessionStorage.setItem('userLoginDetails',JSON.stringify({userId:data.data._id,userName:data.data.name,dept:data.data.dept}));
            if(dept=="Government"){
        router.push('/notary')
        }else if(dept=="University"){ 
          router.push('/university')
        }else if(dept=="Student"){
          router.push("/student")
        }
       
      }else{
        alert('login Failed');
      }
  
    })
    .catch((error) => {
      alert('Network Error, Try Again');
      console.log(error);
      console.log(error+"error in Login data for post");
});

    

  }

  handleChangePassword =(event)=>{
    this.setState({password:event.target.value});
  }

  handleChangeUserId =(event)=>{
    this.setState({userId:event.target.value});
  }

  

  render() {
    const { classes } = this.props;
console.log(this.state.userId);

    return (
      <div className="Loginbackground">
 
         <AppBar position="static">
        
        <Toolbar>
        <a href="/" class="navbar-brand"><img src={logo} alt="react-bootstrap" height="30"></img></a>
          <Typography variant="h6" color="inherit">
            UID - Authentiation System
          </Typography>
        </Toolbar>
      </AppBar>

     
     
    
  
     <center>
       

   
    <Paper elevation={5} style={{height:"400px", width:"500px", marginTop:"100px"}}>
      <br/>
    <h4>LOGIN</h4>
    <center>
    <form className={classes.container} noValidate autoComplete="off" >
    <TextField
          id="standard-dense"
          label="User Id"
          value={this.state.userId}
          onChange={this.handleChangeUserId}
          className={classNames(classes.textField, classes.dense)}
          margin="dense"
          style={{marginTop:"50px"}}
        />
<br />
<br />
<TextField
          id="standard-password-input"
          label="Password"
          value={this.state.password}
          onChange={this.handleChangePassword}
          className={classes.textField}
          type="password"
          autoComplete="current-password"
          margin="normal"
        />
<br />
<br/>
<Container>
<Row>
  <Col>
  <div>
<Button variant="contained" color="primary" Layoutsize="lg" disabled block style={{"min-width":"200px"}}>
       Forgot Password?
      </Button>
      </div>
      </Col>
      <Col>
      <div>
<Button variant="contained" color="primary"  Layoutsize="lg" block  onClick={this.submit} style={{"min-width":"200px"}}>
       Login
      </Button>
      </div>
      </Col>
      </Row>
      </Container>
      <br />
      <br />
      <br />
        </form>
        </center>
        </Paper>
    
    </center>
  <Footer/>
  </div>   
  
      
    );
  }
}

Login.propTypes = {
  classes: PropTypes.object.isRequired,
  router: PropTypes.object.isRequired
};

export default withStyles(styles)(Login);
