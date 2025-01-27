
function Profile_pic(){

    const profile = './src/assets/pic.jpg';

    const clickHundler = (e) => e.target.style.display = 'none';

    return(
        <img onDoubleClick={(e) => clickHundler(e)} width={80} height={100} src={profile}></img>
    );

}export default Profile_pic