function Login(){
    return(
        <main className='main-sinup' >
            <form  id="login-container">
                <h1>login</h1>
                <input type="email"  id="email" placeholder="exemple@exemple.con"/>
                <br />
                <input type="password" id="password" placeholder="Password" required="" minlength="8"/>
                <br />
                <button type="submit">Login</button>

            </form>
        </main>
    );
}
export default Login;