import React, { useRef } from "react";
import { auth } from "../firebase";
import "./SignIn.css";

const Signin = () => {
	const emailRef = useRef(null);
	const passwordRef = useRef(null);
	const signUp = (e) => {
		e.preventDefault();
		auth
			.createUserWithEmailAndPassword(
				emailRef.current.value,
				passwordRef.current.value
			)
			.then((user) => {
				console.log(user);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const signIn = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(
				emailRef.current.value,
				passwordRef.current.value
			)
			.then((user) => {
				console.log(user);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	return (
		<div className='signin'>
			<form>
				<h1>Sign in</h1>
				<input ref={emailRef} type='email' />
				<input ref={passwordRef} type='password' />
				<button onClick={signIn}>Sign In</button>
				<h6>
					Not yey register?
					<span onClick={signUp} className='singin__link'>
						Sign Up
					</span>
				</h6>
			</form>
		</div>
	);
};

export default Signin;
