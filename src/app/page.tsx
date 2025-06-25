'use client';

import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';

export default function Home() {
  return (
    <Container maxWidth="md" sx={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <Box
        width="100%"
        sx={{
          textAlign: { xs: 'left', sm: 'center' },
          wordBreak: 'break-word',
          overflowWrap: 'break-word',
        }}
      >
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
      </Box>
    </Container>
  );
}
