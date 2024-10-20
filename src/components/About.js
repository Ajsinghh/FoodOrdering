import User from "./User"
import UserClass from "./UserClass"
import {Component} from "react"

class About extends Component {
  constructor(props){
    super(props);

    this.state = {
        userInfo:{
          name: "Dummy",
          location: "Default",
        },
    }
  }

  async componentDidMount(){
    const data = await fetch("https://api.github.com/users/ajsinghh");
    const json = await data.json();
    this.setState({
      userInfo: json,
    })
  }

  render(){
    const {name , location} = this.state.userInfo;
    return (
      <div>
        <h1>This is about me</h1>
        <User name={name} />
        <UserClass name={"Ajay"} />
      </div>
    );
  }
}

export default About

/**
 -parent constructor
 -parent render
    
     -First child Constructor
     -First child render

     -Second child Constructor
     -Second child render

     <DOM UPDATED - IN SINGLE BATCH>
       
       -First child ComponentDidMount
       -Second child ComponentDidMount

  -Parent ComponentDidMount
  -Parent ComponentDidUpdate
  -Parent componentWillUnmount
 */
//
// For more information google react class componenet life cycle