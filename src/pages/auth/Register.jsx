import { useState } from "react";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = (e) => {
    setShowPassword(e.target.checked);
  };
  return (
    <form className="registration-form auth">
      <h2>Register</h2>
      <div>
        <p>
          Already have an account? <a href="/login">Login</a>
        </p>
      </div>
      <div>
        <label>Full Name</label>
        <input type="text" name="fullName"/>
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" />
      </div>
      <div>
        <label>Password</label>
        <input type={showPassword ? "text" : "password"} name="password" />
      </div>
      <div>
        <label>Confirm Password</label>
        <input type={showPassword ? "text" : "password"}  name="confirmPassword" />
      </div>
      <div>
        <label>
          <input type="checkbox" name="showPassword"  value={showPassword} onChange={handleShowPassword}/> Show Password
        </label>
      </div>
      <input type="submit" value="Register" />
    </form>
  );
};

export default Register;
