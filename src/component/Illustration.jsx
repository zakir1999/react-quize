import signupimag from "../assets/Images/signup.svg";
import classes from "../Styles/Illustration.module.css";
export default function Illustration() {
  return (
    <div className={classes.illustration}>
      <img src={signupimag} alt="Signup" />
    </div>
  );
}
