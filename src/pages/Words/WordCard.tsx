import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Word from "../../data/models/Word";

const WordCard = ({
  record,
  unique,
}: {
  record: Word;
  unique: string;
}) => {
  console.log(unique);
  return (
    <div key={unique}>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography variant="h5" component="div">
            {record.word}
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            {record?.partOfSpeech?.partOfSpeech || ""}
          </Typography>
          <Typography variant="body2">
            {record.definitions[0].definition}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </div>
  );
};

export default WordCard;