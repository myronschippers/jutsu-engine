/**
 * We are making the entire redux state available on component props.
 * @param {object} state
 */
const mapStateToProps = state => ({
    reduxState: state,
});

export default mapStateToProps;
