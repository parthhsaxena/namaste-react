import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    // one big object that will contain all the state variables
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Default",
        avatar_url: "dummyphoto",
      },
    };
  }

  async componentDidMount() {

    // API call
    const data = await fetch("https://api.github.com/users/parthhsaxena");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });
  }

  componentDidUpdate() {
    console.log("Component Did Update");
  }

  // this will be called when we go to another page an dthe component is unmounted from the page
  componentWillUnmount() {
    console.log("Component Will Unmount")
  }

  render() {
    //console.log(this.props.name + "Child Render");

    const { name, location, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: @parthhsaxena </h4>
      </div>
    );
  }
}

export default UserClass;
