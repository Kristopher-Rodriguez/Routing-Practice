import { useParams } from "react-router-dom";

const NumOrWord = (props) => {
  const { numWord } = useParams();
  if (isNaN(numWord) === false) {
    return <h1>The number is: {numWord} </h1>;
  } else {
    console.log(numWord);
    return <h1>The word is: {numWord} </h1>;
  }
};

export default NumOrWord;
