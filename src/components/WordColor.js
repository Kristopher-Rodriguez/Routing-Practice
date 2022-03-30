import { useParams } from "react-router-dom";

const WordColor = () => {
  const { word, fontColor, backgroundColor } = useParams();
  if (isNaN(word) === true) {
    return (
      <div>
        <h1 style={{ color: fontColor, backgroundColor: backgroundColor }}>
          The word is: {word}
        </h1>
      </div>
    );
  }
};

export default WordColor;
