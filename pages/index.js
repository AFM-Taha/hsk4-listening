import { Geist, Geist_Mono } from "next/font/google";
import { useState } from "react";
import { AppBar, Box, Container, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { ArrowForward, ArrowBack } from "@mui/icons-material";
import FastPart from "@/component/FastPart";
import data from "@/data/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"]
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"]
});

export default function Home() {
  const [currentLesson, setCurrentLesson] = useState(1);
  const totalLessons = data.length;

  const handlePrevious = () => {
    setCurrentLesson((prev) => (prev > 1 ? prev - 1 : totalLessons));
  };

  const handleNext = () => {
    setCurrentLesson((prev) => (prev < totalLessons ? prev + 1 : 1));
  };

  return (
    <div className={`${geistSans.variable} ${geistMono.variable} font-[family-name:var(--font-geist-sans)]`}>
      {/* Navbar */}
      <AppBar position="fixed" sx={{ top: 0, left: 0, right: 0, zIndex: 50 }}>

        <Toolbar>
          <IconButton
            onClick={handlePrevious}
            edge="start"
            color="inherit"
            aria-label="previous"
            sx={{ mr: 2 }}
          >
            <ArrowBack />
          </IconButton>
          <Typography
            variant="h6"
            sx={{
              flexGrow: 1,
              textAlign: 'center'
            }}
          >
            Lesson {currentLesson > 9 ? currentLesson : "0" + currentLesson}
          </Typography>
          <IconButton
            onClick={handleNext}
            edge="end"
            color="inherit"
            aria-label="next"
          >
            <ArrowForward />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ marginTop: 10, paddingY: 2 }}>
        <Grid container spacing={4} direction="column" alignItems="center">
          {/* Fast_Part */}
          {data
            .filter((item) => item.lesson === currentLesson)
            .map((item) => {
              const { lesson, fastPart } = item;
              return (
                <Grid item key={lesson} xs={12} width="100%">
                  {fastPart.map((list) => (
                    <FastPart key={list.no} list={list} />
                  ))}
                </Grid>
              );
            })}
        </Grid>
      </Container>


      <Box
        sx={{
          bgcolor: 'red',
          width: '100%',
          textAlign: 'center',
          fontSize: 12,
          position: 'fixed',
          bottom: 0,
          left: 0,
          py: 1,
          borderTopLeftRadius: '50%',
          borderTopRightRadius: '50%',
          display: 'flex',
          justifyContent: 'center'
        }}
      >
        <Box sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: '80%',
          maxWidth: '1200px'
        }}>
          <span>
            Powered by - <a
              href="https://bluex.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                color: '#1976D2',
                textDecoration: 'none',
                fontWeight: 'bold'
              }}
            >
              BlueX
            </a>
          </span>

          <Box>
            Author - Taha
          </Box>
        </Box>
      </Box>
    </div>
  );
}