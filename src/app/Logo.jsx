import Image from 'next/image';

const SmallLogo = () => {
	return (
		<Image
			src="/logo.min.svg"
			alt="Scalekarma"
			width={250}
			height={60}
			unoptimized
			loading="eager"
			style={{ width: '100%', height: '100%' }}
		/>
	);
};

export default SmallLogo;
