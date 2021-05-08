

const withAuth = (Component) => {
    return props => {
        return <Component {...props}></Component>
    }
}

export default withAuth;