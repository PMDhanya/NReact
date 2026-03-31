import React from "react";
import UserCLass from "./UserClass";
class About extends React.Component {
    constructor(props) {
        super(props);
        console.log("Parent Constructor");
    }
    componentDidMount() {
        console.log("Parent Component Did Mount");
    }
    render() {
        return(
        <div>
            <h1>About Us</h1>
            <h2>We are a team of passionate developers dedicated to creating amazing web applications.</h2>
            <UserCLass name={"First"} location={"New York"} />
             <UserCLass name={"Second"} location={"US "} />
              <UserCLass name={"Third"} location={"UK"} />
        </div>
    );
};
}
export default About;