'use client';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';

export default function Home() {
  return (
    <Stack sx={{ minHeight: '100vh' }}>
        <Box>
          <svg width="60px" height="60px" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="30" cy="30" r="30" fill="#000" />
          </svg>
        </Box>
        <Stack sx={{ flexGrow: 1, justifyContent: 'center', alignItems: 'start' }}>
        <Typography
          variant="h2"
          component="h1"
          gutterBottom
        >
          Welcome to ScaleKarma
        </Typography>
        <Typography
          variant="subtitle1"
          component="p"
          color="text.secondary"
        >
          Accelerate your business growth with AI-powered solutions.
        </Typography>
        <Button
          component={Link}
          href="/get-started"
          variant="contained"
          size="large"
          sx={{ mt: 3 }}
        >
          Get Started
        </Button>
        </Stack>
    </Stack>
  );
}
