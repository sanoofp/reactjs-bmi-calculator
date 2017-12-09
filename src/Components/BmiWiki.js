import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const BmiWiki = (props) => {
    const DialogActions = [
        <FlatButton 
            label="Cancel"
            onClick={props.close}
        />,
        <FlatButton 
            label="More on Wiki"
            primary={true}
            onClick={props.close}
        />
    ];
    return(
        <div>
            <Dialog 
                open={props.open}
                actions={DialogActions}
                onRequestClose={props.close}
                model={true}
                autoScrollBodyContent={true}                    
            >
                h1 TEST....
            </Dialog>
        </div>
    );
}


export default BmiWiki;