import React from "react";
 class UserClass extends React.Component{
    constructor(props){
        super(props);
        this.state={
                userInfo:{
                    name:"Dummy Name",
                    location:"Dummy Location",
                }
            }
    }
    async componentDidMount(){
        // console.log("Component Did Mount");
    const data=await fetch("https://api.github.com/users/PMDhanya");
    const json=await data.json();
    this.setState({userInfo:json});
    console.log(json);
    }
    render(){
        const {name,location}=this.state.userInfo;
        
        return(
            <div className="user-card">
                <h2>{name}</h2>
                <h2>{location}</h2>
            </div>
        );
    }
}
export default UserClass;