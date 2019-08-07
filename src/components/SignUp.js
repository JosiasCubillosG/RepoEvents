import React from "react"

class SignUp extends  React.Component {

	handleClick = (e) => {
		console.log("Hola")
	}

	render() {
		return(
			<div>
				<div>
					<h2>RepoEvents</h2>
				</div>
				<form action="">
					<input type="text" placeholder={"Name"}/>
					<input type="text" placeholder={"Email"}/>
					<input type="text" placeholder={"Username"}/>
					<input type="text" placeholder={"Password"}/>
					<button>Sign Up</button>
					<button onClick={this.handleClick}>You have an account?</button>
				</form>
			</div>
		)
	}
}

export default SignUp
