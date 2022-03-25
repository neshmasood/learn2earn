const User = (props) => {
    return (
        <div>
            <h1>{props.user.firstName} {props.user.lastName}</h1>
        </div>
    )
}

export default User;