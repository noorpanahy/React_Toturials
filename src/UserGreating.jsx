import PropTypes from "prop-types"
function UserGreating(Props){
    const WelcomeMessage =  <h2 className="Welcome-Message">
                                Welcome {Props.username}
                            </h2>
    const LoginPropmpt =     <h2 className="Login-Prompt">
                                Please Login To Continue
                            </h2>
    return(
        Props.IsloggedIn ? WelcomeMessage : LoginPropmpt
    );
}

UserGreating.prototypes = {
    IsloggedIn: PropTypes.bool,
    username: PropTypes.string,
}
UserGreating.defaultProps = {
    IsloggedIn: false,
    username: "Guest",
}

export default UserGreating