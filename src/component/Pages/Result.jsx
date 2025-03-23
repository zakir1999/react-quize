import _ from "lodash";
import { useLocation, useParams } from "react-router-dom";
import useAnswers from "../../hooks/useAnswers";
import Analysis from "../Analysis";
import Summary from "../Summary";
export default function Result() {
  const { id } = useParams();
  const location = useLocation();
  const { state } = location || {};
  const { qna = [] } = state || {};
  const { loading, error, answers } = useAnswers(id);
  console.log(answers);

  function calculate() {
    let score = 0;

    if (!qna || qna.length === 0) {
      console.error("qna is undefined or empty");
      return score;
    }
    answers.forEach((question, index1) => {
      let correctindex = [],
        checkedindex = [];
      question.options.forEach((option, index2) => {
        if (option.correct) {
          correctindex.push(index2);
        }
        if (
          qna[index1] &&
          qna[index1].options &&
          qna[index1].options[index2] &&
          typeof qna[index1].options[index2].checked !== "undefined"
        ) {
          if (qna[index1].options[index2].checked) {
            checkedindex.push(index2);
            option.checked = true;
          }
        }
      });
      if (_.isEqual(correctindex, checkedindex)) {
        score = score + 5;
      }
    });
    return score;
  }
  const userscore = calculate();
  return (
    <>
      {loading && <div>Loading...</div>}
      {error && <div>There was an error</div>}

      {answers && answers.length > 0 && (
        <>
          <Summary score={userscore} noq={answers.length} />
          <Analysis answers={answers} />
        </>
      )}
    </>
  );
}
