import React, { Component } from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class BmiWiki extends Component {
    constructor(props){
        super(props);
        this.state = {

        }
    }
    componentDidMount(){
    }
    componentWillMount(){
        this.setState({open: this.props.open});
    }
    render(){
        const DialogActions = [
            <FlatButton 
                label="Cancel"
                onClick={() => this.setState({open: false})}
            />,
            <FlatButton 
                label="More on Wiki"
                primary={true}
                onClick={() => this.setState({open: false})}
            />
        ];
        return(
            <div>
                <Dialog 
                    open={this.state.open}
                    actions={DialogActions}
                    onRequestClose={() => this.setState({open: false})}
                    model={true}
                    autoScrollBodyContent={true}                    
                >
                    <h1 className="dialog-h1">Body Mass Index (BMI) for Adults</h1>
                    <p className="dialog-p">A BMI of 18.5 to 24.9 (green) is considered healthy. A BMI of 25 to 29.9 (yellow) is considered overweight. A BMI of 30 or higher (red) is considered obese. A person who has a large change in BMI, even if he or she is not overweight or underweight, should be evaluated to find the cause.A BMI of 18.5 to 24.9 (green) is considered healthy. A BMI of 25 to 29.9 (yellow) is considered overweight. A BMI of 30 or higher (red) is considered obese. A person who has a large change in BMI, even if he or she is not overweight or underweight, should be evaluated to find the cause.A BMI of 18.5 to 24.9 (green) is considered healthy. A BMI of 25 to 29.9 (yellow) is considered overweight. A BMI of 30 or higher (red) is considered obese. A person who has a large change in BMI, even if he or she is not overweight or underweight, should be evaluated to find the cause.</p>
                    <h1 className="dialog-h1">BMI Calculations</h1>
                    <p className="dialog-p">A BMI of 18.5 to 24.9 (green) is considered healthy. A BMI of 25 to 29.9 (yellow) is considered overweight. A BMI of 30 or higher (red) is considered obese. A person who has a large change in BMI, even if he or she is not overweight or underweight, should be evaluated to find the cause.A BMI of 18.5 to 24.9 (green) is considered healthy. A BMI of 25 to 29.9 (yellow) is considered overweight. A BMI of 30 or higher (red) is considered obese. A person who has a large change in BMI, even if he or she is not overweight or underweight, should be evaluated to find the cause.A BMI of 18.5 to 24.9 (green) is considered healthy. A BMI of 25 to 29.9 (yellow) is considered overweight. A BMI of 30 or higher (red) is considered obese. A person who has a large change in BMI, even if he or she is not overweight or underweight, should be evaluated to find the cause.</p>
                    <h1 className="dialog-h1">BMI Calculations</h1>
                    <p className="dialog-p">A BMI of 18.5 to 24.9 (green) is considered healthy. A BMI of 25 to 29.9 (yellow) is considered overweight. A BMI of 30 or higher (red) is considered obese. A person who has a large change in BMI, even if he or she is not overweight or underweight, should be evaluated to find the cause.A BMI of 18.5 to 24.9 (green) is considered healthy. A BMI of 25 to 29.9 (yellow) is considered overweight. A BMI of 30 or higher (red) is considered obese. A person who has a large change in BMI, even if he or she is not overweight or underweight, should be evaluated to find the cause.A BMI of 18.5 to 24.9 (green) is considered healthy. A BMI of 25 to 29.9 (yellow) is considered overweight. A BMI of 30 or higher (red) is considered obese. A person who has a large change in BMI, even if he or she is not overweight or underweight, should be evaluated to find the cause.</p>
                    <h1 className="dialog-h1">BMI Calculations</h1>
                </Dialog>
            </div>
        );
    }
}

export default BmiWiki;