import { connect } from 'react-redux';
import Template from '../components/Template';
import { trashTemplate, saveTemplate, toggleEditing, toggleAdding, toggleStatus } from '../actions/template';

const mapStateToProps = (state) => ({ templateBuilder: state.templateBuilder });
const mapDispatchToProps = (dispatch) => ({
  trashTemplate: () => {
    dispatch(trashTemplate());
  },
  saveTemplate: () => {
    dispatch(saveTemplate());
  },
  toggleEditing: (index) => {
    dispatch(toggleEditing(index));
  }, 
  toggleAdding: (index) => {
    dispatch(toggleAdding(index));
  },
  toggleStatus: () => {
    dispatch(toggleStatus());
  }
});

const TemplateContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Template);

export default TemplateContainer;
