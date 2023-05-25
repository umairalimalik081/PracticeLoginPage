import "./LoginForm.css";

function LoginForm() {
  return (
    <div>
      <form className="login__form">
        <div className="card">
          <div className="title__description">
            <h1>Sign in</h1>
            <small>Stay Updated on your Professional World</small>
          </div>
          <div className="input__fields">
            <input
              type="text"
              name="email"
              placeholder="Email or Phone"
            ></input>
            <input type="password" name="email" placeholder="Password"></input>
          </div>
          <div className="forgot__password">
            <small>
              <b>Forgot password?</b>
            </small>
          </div>
          <div className="login__button">
            <button type="button" className="btn1">
              <b>Sign in</b>
            </button>
          </div>
          <hr></hr>
          <div className="login__alt">
            <button type="button" className="btn2">
              <b>Sign in with google</b>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default LoginForm;
