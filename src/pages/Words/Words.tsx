import * as React from "react";
import {
  Button,
  CircularProgress,
  Container,
  Typography,
} from "@mui/material";
import { WordsContext } from "../../context/words/WordsContext";
import WordCard from "./WordCard";
import wordsStyle from "./wordsStyle";
import { Link } from "react-router-dom";

const Words = () => {
  const wordsContext = React.useContext(WordsContext);
  const { words, loadingPage } = wordsContext;

  React.useEffect(() => {
    wordsContext.loadWords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const makePageContent = () => {
    if (loadingPage)
      return (
        <Container style={wordsStyle.loadingSpinnerContainer}>
          <CircularProgress />
        </Container>
      );

    if (!loadingPage && words.length > 0)
      return (
        <Container>
          <Typography sx={wordsStyle.header} variant="h1">
            Words
          </Typography>
          {words.map((w, i) => (
            <WordCard record={w} key={w.id} />
          ))}
          <Button component={Link} to="add-word" variant="contained">
            Add
          </Button>
        </Container>
      );

    return (
      <Container>
        <Typography sx={wordsStyle.header} variant="h4">
          No words found...
        </Typography>
      </Container>
    );
  };

  return (
    <Container sx={wordsStyle.container} maxWidth="sm">
      {makePageContent()}
    </Container>
  );
};

export default Words;
