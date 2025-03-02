import { Box, Card, CardContent, Typography } from "@mui/material";
import { useState } from "react";

const FlashCard = ({ content }) => {
  const [showContent, setShowContent] = useState(false);

  return (
    <>
      <Card
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          cursor: "pointer",
          position: "relative",
        }}
        variant="outlined"
        onClick={() => {
          setShowContent(!showContent);
        }}
      >
        <Box sx={{ position: "absolute", bottom: "50%" }}>
          <CardContent>
            <Typography variant="h1" component="div">
              {content.letter}
            </Typography>
          </CardContent>
          <CardContent>
            <Typography variant="h5" component="div">
              is for...
              {showContent &&
                content.content[
                  Math.floor(Math.random() * content.content.length)
                ]}
            </Typography>
          </CardContent>
        </Box>
      </Card>

      {/* <div
        onClick={() => {
          setShowContent(!showContent);
          console.log(
            // content.content[Math.floor(Math.random() * content.content.length)],
            Math.floor(Math.random() * content.content.length)
          );
        }}
      >
        {!showContent && <p>{content.letter}</p>}
        {showContent && (
          <p>
            {
              content.content[
                Math.floor(Math.random() * content.content.length)
              ]
            }
          </p>
        )}
      </div> */}
    </>
  );
};

export default FlashCard;
