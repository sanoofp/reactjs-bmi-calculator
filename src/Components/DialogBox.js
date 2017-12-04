import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import RaisedButton from 'material-ui/RaisedButton';

class DialogBox extends Component {
    constructor(props){
        super(props);
        this.state = {
            dialogOpen: false
        }
    }
    handleOpen = () => {
        this.setState({dialogOpen: true});
    }
    handleClose = () => {
        this.setState({dialogOpen: false});
    }
    render(){
        const dialogActions = [
            <FlatButton 
                label="Cancel"
                onClick={this.handleClose}
            />,
            <FlatButton 
                label="More"
                primary={true}
            />
        ];
        const styles = {
            borderTop: '8px solid #FF9800',
        }        
        return(
            <div>
                <RaisedButton 
                    label="Need help ?"
                    onClick={this.handleOpen}
                    backgroundColor={this.props.btnBGColor}
                    fullWidth={true}
                />
                <Dialog 
                    open={this.state.dialogOpen}
                    actions={dialogActions}
                    title="Test"
                    contentStyle={styles}
                    model={true}
                />
            </div>
        );
    }

} 

export default DialogBox;