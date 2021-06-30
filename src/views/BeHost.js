import React from "react";
import Hostform from "../components/BehostForm";
import axios from "axios";

class BeHost extends React.Component {
  state = {
    loading: false,
    error: "",
  };
  beHost = async (userData) => {
    try {
      this.setState({ loading: true });

      const { data } = await axios({
        method: "POST",
        baseURL: "http://localhost:8000",
        url: "/host/signup",
        data: userData,
      });
      this.setState({ loading: false });
      localStorage.setItem("token", data.token);

      this.props.history.push("/advertisements");
    } catch (error) {
      this.setState({
        error: error.response.data.message,
        loading: false,
      });
    }
  };
  render() {
    return (
      <div>
        <h1>Host Form Register</h1>
        <Hostform
          buttonText="Submit"
          handleSubmit={this.beHost}
          disabled={this.state.loading}
        />
      </div>
    );
  }
}

export default BeHost;
