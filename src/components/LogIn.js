import React from "react"
import SignUp from "./SignUp"

class LogIn extends React.Component {

	handleClick = (e) => {
		return(
			<SignUp />
		)
	}

	render(){
		return(
			<div>
				<div>
					<h2>RepoEvents</h2>
				</div>
				<form action="">
					<input type="text" placeholder={"Username"}/>
					<input type="text" placeholder={"Password"}/>
					<button>Sign In</button>
					<button onClick={this.handleClick}>You don't have an account?</button>
				</form>
			</div>
		)
	}
}

export default  LogIn
