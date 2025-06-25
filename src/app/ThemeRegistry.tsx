'use client';

import * as React from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		background: {
			default: '#180427',
		},
		primary: {
			main: '#cafd73',
		},
	},
	typography: {
		fontFamily: 'Uncut Sans, Arial, Helvetica, sans-serif',
	},
	components: {
		MuiButton: {
			styleOverrides: {
				root: {
					textTransform: 'none',
				},
			},
		},
	},
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	);
}
