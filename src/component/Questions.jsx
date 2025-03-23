import classes from "../Styles/Question.module.css";
import Answers from "./Answers";
export default function Questions({ answers = [] }) {
  const safeAnswers = Array.isArray(answers) ? answers : [];

  return safeAnswers.map((answer, index) => (
    <div className={classes.question} key={index}>
      <div className={classes.qtitle}>
        <span className="material-icons-outlined"> help_outline </span>
        {answer.title}
      </div>
      <Answers input={false} options={answer.options} />
    </div>
  ));
}
