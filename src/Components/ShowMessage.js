import React, { Component } from "react"
import { connect } from "react-redux";

class ShowMessage extends Component{

  render() {

		return <div className="alert alert-success" role="alert" id="mnotification">
             {this.props.message}
          </div>;
	}
  
}

const mapStateToProps = state => {
  return {
    message: state.message
  }
}

export default connect(mapStateToProps, null)(ShowMessage);