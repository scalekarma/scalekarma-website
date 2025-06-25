'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

// Extend Material UI theme types
declare module '@mui/material/styles' {
	interface TypographyVariants {
		highlight: React.CSSProperties;
	}

	interface TypographyVariantsOptions {
		highlight?: React.CSSProperties;
	}
}

declare module '@mui/material/Typography' {
	interface TypographyPropsVariantOverrides {
		highlight: true;
	}
}

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
		fontFamily: 'UncutSans, Helvetica, Arial, sans-serif',
		h2: { fontWeight: 600 },
		button: {
			textTransform: 'none',
		},
		highlight: {
			color: '#cafd73',
			fontFamily: 'TT Nooks, Helvetica, Arial, sans-serif',
			fontWeight: 400,
			fontSize: '110%',
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
