function Login() {
    return (
        <form id="main-box">

            <h2>Sign In</h2>

            <div className="input-group">
                <label htmlFor="email">Email</label>

                <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                />
            </div>

            <div className="input-group">
                <label htmlFor="password">Password</label>

                <input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                />
            </div>

            <div className="submit-box">
                <button type="submit">
                    Submit
                </button>
            </div>

            <p>or Sign in with</p>

        </form>
    );
}

export default Login;