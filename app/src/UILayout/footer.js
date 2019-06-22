import React from 'react';
import Copyright from '@material-ui/icons/Copyright';

const style = {
    backgroundColor: '#0038A9',
    borderTop: "1px solid #E7E7E7",
    textAlign: "center",
    padding: "5px",
    position: "fixed",
    left: "0",
    bottom: "0",
    height: "30px",
    width: "100%",
    color: "white"
};

const phantom = {
  display: 'block',
  padding: '20px',
  height: '100%',
  width: '100%',
}
export default class Footer extends React.Component{

	render(){

		return(

			<div>
                <div style={phantom} />
                <div style={style}>
                    <p><Copyright/> 2019 Crafted by Shyam P Singh - UID</p>
                </div>
            </div>
			);
	}
}