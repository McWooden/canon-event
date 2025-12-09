import Image from "next/image"

export default function MyIcon({ 
  path, 
  width = 42, 
  height = 42, 
  alt = "icon"
}: {
    path: string;
    width?: number;
    height?: number;
    alt?: string;
}) {
    return (
        <Image
            src={path} 
            alt={alt}
            width={width}   
            height={height} 
        />
    )
}