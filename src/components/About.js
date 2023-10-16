import User from "./User";
import UserClass from "./UserClass";
import {Component} from "react";

class About extends Component {
  constructor(props) {
    super(props);
    
    console.log("Parent Constructor")

  }
  // This will be called after the child lifecycle methods are trigerred and mounted
  componentDidMount() {
    //console.log("Parent Component Did Mount");
  }

  render() {
    //console.log("Parent Render")
    return (
      <div>
        <h1>About</h1>
        <h2>This is the about page of FoodApp</h2>
        <UserClass name={"Parth Saxena (class)"} location={"Lucknow (class)"} contact= {"@parthhsaxena (class)"} />
      </div>
    );
  }
}

export default About;