import React from "react"

class UserClass extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            userInfo:{
                name:"Dummy",
                location:'Default',
                avatar_url:"https://dummy-photo.com"

            },
            
        }
    }
    async componentDidMount(){
        // Api calls 
        const data = await fetch("https://api.github.com/users/saikiran030996");
        const json = await data.json();

        console.log(json)
        this.setState({
            userInfo:json,
        })
    }

    componentDidUpdate() {
        console.log("Component Did Update")
    };

    componentWillUnmount(){
        console.log("Component will Unmount")
    }
    

    render () {
        const {name,location,avatar_url} = this.state.userInfo;
        return (<div className="user-card">
        
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>contact: +4917655734467</h4>
        <img src={avatar_url}></img>
    </div>

        );
    }

} 

export default UserClass;



