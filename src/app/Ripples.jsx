import Box from '@mui/material/Box';

const Ripples = () => {
	return (
		<Box
			sx={{
				position: 'absolute',
				top: 0,
				zIndex: -1,
				width: '100%',
				height: '100%',
				overflow: 'hidden',
				backgroundImage: 'url(/ripples.min.svg)',
				backgroundSize: {
					xs: '1000px',
					lg: '1500px',
				},
				backgroundPosition: {
					xs: '-500px 0',
					sm: 'center -530px',
					lg: 'center -750px',
				},
				backgroundRepeat: 'no-repeat',
			}}
		></Box>
	);
};

export default Ripples;
