import Image from 'next/image';

const SmallLogo = () => {
	return (
		<Image
			src="/logo.min.svg"
			alt="Scalekarma"
			width={125}
			height={30}
			unoptimized
			loading="eager"
			style={{ width: 'auto', height: '100%' }}
		/>
	);
};

export default SmallLogo;
