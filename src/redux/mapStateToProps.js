/**
 * We are making the entire redux state available on component props.
 * @param {object} state
 */
const mapStateToProps = state => ({
    store: state,
});

export default mapStateToProps;
