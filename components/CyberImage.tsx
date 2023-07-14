import Image from 'next/image';

type CyberImageType = {
    src: string,
    alt: string,
    containerClassName?: string,
    imageClassName?: string
    priority?: boolean
}
const CyberImage = ({ src, alt, containerClassName, imageClassName, priority }: CyberImageType) => (
    <div className={`aspect-auto relative ${containerClassName}`}>
        <Image src={src} alt={alt} layout="fill" objectFit="cover" className={imageClassName} priority={priority} />
    </div>
);

export default CyberImage;