import './main.css';


const Main = () => {
    return ( 
        <section className="main">
            <form action="#" id="form">
                <span id="form__close">X</span>
                <h2 className="form__title">Registration</h2>
                <label htmlFor="name" >
                    {/* Username */}
                    <span  className="input-name">Username:</span>
                    <input type="text" id="name"/>
                    {/* <span></span> */}
                </label> <br />

                <label htmlFor="email" >
                    <span  className="input-name"> Email:</span>
                    <input  type="text" id="email"/>
                    {/* <span></span> */}
                </label> <br />

                <label htmlFor="password" >
                    <span  className="input-name"> Password:</span>
                    <input  type="text" id="password"/>
                    {/* <span></span> */}
                </label> <br />

                <p>
                    <span><input type="checkbox" /></span>
                    I agree to the terms & conditions
                </p>

                <button id="register"className="btn">Register</button>

                <p>Already have an account ? <a href="#login">Login</a></p>

            </form>
        </section>
     );
}
 
export default Main;