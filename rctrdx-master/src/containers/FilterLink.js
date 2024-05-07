import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions/index';
import Link from '../components/Link';

//  returns object with state to be passed as a prop
//  sets 'active' prop to have an ownProps.filter value which equals state.visiblityFilter ?
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter,
});

//  wraps setVisibilityFilter action in a dispatch and passes it as an onClick
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(setVisibilityFilter(ownProps.filter));
  },
});


//  returns a new Link component connected to redux store
//  with toggleTodo action wrapped in a dispatch passed as a onTodoClick
//  and filtered todos list passed as a todos
const FilterLink = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Link);

export default FilterLink;
