'use client';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import SmallLogo from './SmallLogo';
import Logo from './Logo';

export default function Home() {
	return (
		<Stack spacing={2} sx={{ padding: { xs: 2, sm: 4 } }}>
			<Stack direction={'row'} sx={{ justifyContent: { sm: 'center' } }}>
				<Box
					sx={{
						display: { xs: 'none', md: 'block' },
						width: { xs: '30px', md: '50px' },
						height: { xs: '30px', md: '50px' },
					}}
				>
					<SmallLogo />
				</Box>
				<Box
					sx={{
						height: { xs: '30px', md: '50px' },
						flexGrow: { xs: 0, md: 1 },
						marginLeft: { md: '-50px' },
					}}
				>
					<Logo />
				</Box>
			</Stack>
			<Stack
				sx={{
					flexGrow: 1,
					justifyContent: 'center',
					alignItems: { sm: 'center' },
					textAlign: { sm: 'center' },
					py: { xs: 2, sm: 4, md: 8 },
				}}
			>
				<Typography variant="h2" component="h1" gutterBottom>
					Streamline your shift to AI search
				</Typography>
				<Typography variant="subtitle1" component="p" color="text.secondary" sx={{ maxWidth: '700px' }}>
					We're an independent research team building open solutions to help Content and SEO teams navigate the shift from conventional
					search to AI-generated answers.
				</Typography>
				<Button component={Link} href="#" variant="contained" size="large" sx={{ mt: 3 }}>
					Chat with us
				</Button>
			</Stack>
		</Stack>
	);
}
