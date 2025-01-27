import propTypes from "prop-types";

function Student(Props){

    return(
        <div className="Student">
            <p>Name: {Props.name}</p>
            <p>Age: {Props.Age}</p>
            <p>IsStudent: {Props.IsStudent ? "YES" : "NO"}</p>
        </div>
    );

}

Student.propTypes = {
    name: propTypes.string,
    age: propTypes.number,
    IsStudent: propTypes.bool,
}
Student.defaultProps = {
    name: 'Person',
    Age: 0,
    IsStudent: false,
}

export default Student