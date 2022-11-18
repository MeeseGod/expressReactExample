import { Component } from "react";
import { Link } from "react-router-dom";

class Test extends Component {

    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }

    componentDidMount(){
        fetch('/api/test')
        .then(res => res.json())
        .then(users => {
            this.setState({users: users});
        })
    }

    render(){
        return (
            <div>
                <h1>
                    Test Component
                </h1>
                <Link to={"/"}>Users</Link>
                <ul>
                    {
                        this.state.users.map(user => (
                            <li>Username: {user.username}, Age: {user.age}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }
}

export default Test;