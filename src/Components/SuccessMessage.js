import React, { Component } from "react"
import { connect } from "react-redux";

class SuccessMessage extends Component{
  constructor(props){
    super(props);
    this.state = {
      isShow: true
    }
  }

  handleShow = () => {
    setTimeout(() => {
      this.setState({
        isShow: false
      })
    }, 5000);
  }
   
  render() {
    let message = null;
    let isShow = (this.state.isShow && this.props.isShowMessage) ? true : false;
    if (isShow) {
      message = <div onClick={this.handleShow()} className="alert alert-success" role="alert" id="mnotification">
                  Updated Successfully<b>ivysaur</b>
                </div>;
    }

		return message;
	}
  
}

const mapStateToProps = state => {
  return {
    isShowMessage: state.isShowMessage
  }
}

export default connect(mapStateToProps, null)(SuccessMessage);