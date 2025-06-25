import Image from 'next/image';

const SmallLogo = () => {
	return (
		<Image src="/small-logo.min.svg" alt="" width={60} height={60} unoptimized loading="eager" style={{ width: '100%', height: '100%' }} />
	);
};

export default SmallLogo;
