import './LoginTitle.scss';

export const LoginTitle = (img, alt) => {
    return (
        <>        
        <img src={img} alt={alt} className="title-back"></img>
        <h2 className="title">{alt}</h2>
        </>
    )
}   