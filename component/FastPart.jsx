import { Box, Typography, Card, CardContent, IconButton } from "@mui/material";
import { CheckCircle, Cancel } from "@mui/icons-material";

export default function FastPart({ list }) {
  const { no, context, question, ans, audio } = list;

  return (
    <Box key={no} mb={8}>
      {/* Question Number */}
      <Typography variant="h5" mb={2}>
        Question No: {"0" + no}
      </Typography>

      {/* Audio Player */}
      <Box mb={4} sx={{ maxWidth: 300, width: "100%" }}>
        <audio controls style={{ width: "100%" }}>
          <source src={audio} />
        </audio>
      </Box>

      {/* Context, Question, and Answer */}
      <Card>
        <CardContent>
          {/* Context Section */}
          <Box mb={4}>
            <Typography 
              sx={{
                fontSize: {
                  xs: '14px',
                  md: '16px',
                  lg: '18px'
                },
              }} variant="body2" mb={1}>
                   Context:
              </Typography>
            <Typography 
              sx={{
                fontSize: {
                  xs: '14px',
                  md: '16px',
                  lg: '18px'
                },
              }} color="error.main" variant="body2" mb={1}>
              CN: {context?.cn}
            </Typography>
            <Typography 
              sx={{
                fontSize: {
                  xs: '14px',
                  md: '16px',
                  lg: '18px'
                },
              }} color="success.main" variant="body2" mb={1}>
              PY: {context?.py}
            </Typography>
            <Typography 
              sx={{
                fontSize: {
                  xs: '14px',
                  md: '16px',
                  lg: '18px'
                },
              }} color="warning.main" variant="body2" mb={1}>
              EN: {context?.en}
            </Typography>
          </Box>

          {/* Question Section */}
          <Box mb={4}>
            <Typography 
              sx={{
                fontSize: {
                  xs: '14px',
                  md: '16px',
                  lg: '18px'
                },
              }} variant="body2" mb={1}>Question:</Typography>
            <Typography 
              sx={{
                fontSize: {
                  xs: '14px',
                  md: '16px',
                  lg: '18px'
                },
              }} variant="body2" >
              {question?.cn} 
            </Typography>
            <Typography 
              sx={{
                fontSize: {
                  xs: '14px',
                  md: '16px',
                  lg: '18px'
                },
              }} variant="body2">{question?.py}</Typography>
            <Typography 
              sx={{
                fontSize: {
                  xs: '14px',
                  md: '16px',
                  lg: '18px'
                },
              }} variant="body2">{question?.en}</Typography>
          </Box>

          {/* Answer Section */}
          <Box>
            <Typography variant="body2" display="flex" alignItems="center">
              Answer:
              {ans?.isCorrect ? (
                <CheckCircle color="success" sx={{ ml: 1 }} />
              ) : (
                <Cancel color="error" sx={{ ml: 1 }} />
              )}
            </Typography>
            {/* <Typography variant="body2" mb={1}>
              {ans?.cn} ({ans?.py}) / {ans?.en}
            </Typography> */}
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
}
