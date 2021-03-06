import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Word from "../../data/models/Word";
import wordStyle from "./wordStyle";

const WordEntry = ({ wordRecord }: { wordRecord: Word }) => {
  return (
    <Card sx={wordStyle.wordCard}>
      <CardContent>
        <Typography variant="h3" component="div">
          {wordRecord.word}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {wordRecord.partOfSpeech.partOfSpeech}
        </Typography>
        {wordRecord.definitions.map(d => (
          <Typography key={d.id} variant="body2">
            {d.definition}
          </Typography>
        ))}
      </CardContent>
    </Card>
  );
};

export default WordEntry;
