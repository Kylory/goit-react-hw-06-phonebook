import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { filterContacts } from '../redux/actions';
import styles from './SearchContacts.module.css';

const SearchContacts = ({ filter, filterContacts }) => {
  return (
    <label className={styles.searchContacts}>
      Find contacts by name
      <input
        name="filter"
        type="text"
        value={filter}
        onChange={filterContacts}
      />
    </label>
  );
};

const mapStateToProps = state => {
  return { filter: state.filter };
};

const mapDispatchToProps = dispatch => {
  return {
    filterContacts: e => dispatch(filterContacts(e.target.value)),
  };
};

SearchContacts.propTypes = {
  filter: PropTypes.string.isRequired,
  filterContacts: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchContacts);
