const Welcome = () =>
{
    const fullDivStyle = {
        backgroundImage: './welcome.png',
        position:"absolute",
        right:"0px",
        left:"0px"
    }

    const imageStyle = {
        width:"100%",
        position:"absolute"
    }

    return (
        <div style={fullDivStyle}>
        <img src="./welcome.png" style={imageStyle}></img>
        </div>
    )
}

export default Welcome;