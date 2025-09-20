import { img_path } from "../../../environment";

interface Image {
  className?: string;
  src: string;
  alt?: string;
  height?: number | string;
  width?: number | string;
  id?: string;
  style?: React.CSSProperties; // <-- add style prop
}

const ImageWithBasePath = (props: Image) => {
  // Check if src is external
  const isExternal =
    props.src.startsWith("http://") || props.src.startsWith("https://");
  const fullSrc = isExternal ? props.src : `${img_path}${props.src}`;

  return (
    <img
      className={props.className}
      src={fullSrc}
      height={props.height}
      alt={props.alt}
      width={props.width}
      id={props.id}
      style={props.style} // <-- forward it
    />
  );
};

export default ImageWithBasePath;
