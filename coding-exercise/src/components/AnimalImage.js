import ProgressiveImage from "react-progressive-graceful-image";

export const AnimalImage = ({ placeholderSrc, src, ...props }) => {

    return (
    <ProgressiveImage src={src} placeholder={placeholderSrc}>
        {(src, loading) => (
            <img
                className={`image${loading ? '-loading' : '-loaded'}`}
                src={src}
                alt={props.name}
                width="700"
                height="465"
            />
        )}
        </ProgressiveImage>
       
    )};