import {
  Button,
  Card,
  CardContent,
  Container,
  CssBaseline,
  TextField,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import addWordStyle from "./addWordStyle";

const AddWord = () => {
  return (
    <Container sx={addWordStyle.container}>
      <Card sx={addWordStyle.card}>
        <CardContent>
          <Typography
            sx={addWordStyle.header}
            variant="h2"
            component="div"
          >
            Add Word
          </Typography>
          <TextField
            sx={addWordStyle.textField}
            fullWidth
            label="Word"
            id="word-input"
          />
          <TextField
            sx={addWordStyle.textField}
            fullWidth
            label="Definition"
            id="definition-input"
          />
          <TextField
            id="etymology-input"
            fullWidth
            label="Etymology"
            multiline
            maxRows={4}
          />
          <div>
            <Button component={Link} to="/" variant="contained">
              Back
            </Button>
            <Button variant="contained">Add</Button>
          </div>
        </CardContent>
      </Card>
      <CssBaseline />
    </Container>
  );
};

export default AddWord;