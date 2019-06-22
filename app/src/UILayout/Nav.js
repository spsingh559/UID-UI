import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MoreIcon from '@material-ui/icons/MoreVert';
import Badge from '@material-ui/core/Badge';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import Home from '@material-ui/icons/Home';
import Profile from '@material-ui/icons/Face'
import POIcon from '@material-ui/icons/Assignment';
import Logout from '@material-ui/icons/PowerSettingsNew'
import {Link} from 'react-router';

import logo from '../images/logo.jpg';
import userIcon from '../images/notary.png'



const styles = theme => ({
  root: {
    width: '100%',
  },
  grow: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

class Nav extends React.Component {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
    open: false,
  };

  handleProfileMenuOpen = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ anchorEl: null });
    this.handleMobileMenuClose();
  };

  handleMobileMenuOpen = event => {
    this.setState({ mobileMoreAnchorEl: event.currentTarget });
  };

  handleMobileMenuClose = () => {
    this.setState({ mobileMoreAnchorEl: null });
  };

 
  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  handleLogout=()=>{
    sessionStorage.removeItem('userLoginDetails');
  }

  render() {
     // sessionStorage.removeItem('userLoginDetails');
     let loginData=JSON.parse(sessionStorage.getItem("userLoginDetails"));
     console.log(loginData);
    const { anchorEl, mobileMoreAnchorEl } = this.state;
    const { classes } = this.props;
    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const renderMenu = (
      <Menu
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        open={isMenuOpen}
        onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>Profile</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>My account</MenuItem>
      </Menu>
    );

       console.log('inside ', loginData.userName);
    const sideList = (
    
        <div> 
          <br/> 
            <center>
        <img src={userIcon} height="50px" width="50px" />
        <br />
        {"Hello " +" " + loginData.userName}
        </center>
         <div  className={classes.list}>
         
               <List>
               <ListItem onClick={this.handleClose}>
               <ListItemIcon><Home />
               </ListItemIcon>
               <Link to=""> Home </Link>
             </ListItem>
     
            
             <ListItem  >
               <ListItemIcon><Profile />
               </ListItemIcon>
               <Link to="/"> Profile </Link>
             </ListItem>
     
             <ListItem onClick={this.handleClose}>
               <ListItemIcon><POIcon />
               </ListItemIcon>
               <Link to="/"> Pending Item </Link>
             </ListItem>

             <ListItem onClick={this.handleClose}>
               <ListItemIcon><POIcon />
               </ListItemIcon>
               <Link to="/"> Approved Item </Link>
             </ListItem>

             <ListItem onClick={this.handleClose}>
               <ListItemIcon><POIcon />
               </ListItemIcon>
               <Link to="/"> Rejected Item </Link>
             </ListItem>
     
           
             <Divider />
             <ListItem onClick={this.handleLogout}>
               <ListItemIcon><Logout />
               </ListItemIcon>
               <Link to="/login"> Logout </Link>
             </ListItem>
     
            </List>
         }
        </div>
        </div>
      );


    


    return (
      <div className={classes.root}>
        <AppBar position="static" style={{backgroundColor:"#0038A9"}}>
          <Toolbar>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Open drawer"  onClick={this.handleDrawerOpen}>
              <MenuIcon />
            </IconButton>
            <a class="navbar-brand"><img src={logo} alt="react-bootstrap" height="30"></img></a>

                  
            <Typography className={classes.title} variant="h6" color="inherit" noWrap>
            Universal Identity -UID App
            </Typography>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <div className={classes.grow} />
            <div className={classes.sectionDesktop}>
              {/* <p style={{paddingTop:"10px",paddingBottom:"10px"}}>Hello {loginData.userName}</p> */}
               <IconButton color="inherit">
                <Badge badgeContent={3} color="secondary">
                  <NotificationsIcon />
                </Badge>
              </IconButton> 
              {/* <img src={userIcon} height="50px" width="50px" />
               */}
              {/* <IconButton
                aria-owns={isMenuOpen ? 'material-appbar' : undefined}
                aria-haspopup="true"
                onClick={this.handleProfileMenuOpen}
                color="inherit"
              >
                <AccountCircle />
              </IconButton> */}
            </div>
            <div className={classes.sectionMobile}>
              {/* <IconButton aria-haspopup="true" onClick={this.handleMobileMenuOpen} color="inherit">
                <MoreIcon />
              </IconButton> */}
            </div>
          </Toolbar>
        </AppBar>
        <Drawer open={this.state.open} onClose={this.handleDrawerClose}>
          <div
            tabIndex={0}
            role="button"
          >
            {sideList}
          </div>
        </Drawer>
        {renderMenu}

      </div>
    );
  }
}

Nav.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Nav);