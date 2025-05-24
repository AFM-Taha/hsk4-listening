import { Geist, Geist_Mono } from "next/font/google";
import data from "@/data/data";
import { useState } from "react";
import FastPart from "@/component/FastPart";
import { AppBar, Button, Container, Grid, IconButton, Toolbar, Typography } from "@mui/material";
import { ArrowForward, ArrowBack } from "@mui/icons-material";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
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
          <IconButton onClick={handlePrevious} edge="start" color="inherit" aria-label="previous" sx={{ mr: 2 }}>
            <ArrowBack />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Lesson {currentLesson > 9 ? currentLesson : "0" + currentLesson}
          </Typography>
          <IconButton onClick={handleNext} edge="end" color="inherit" aria-label="next">
            <ArrowForward />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ marginTop: 10, paddingTop: 6 }}>
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
    </div>
  );
}
