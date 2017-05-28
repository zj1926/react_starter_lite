import React from 'react';
import PropTypes from 'prop-types';
import { createAction } from 'redux-actions';
import { connect } from 'react-redux';

const Hello = ({ click }) => <div>
  <h1>
    Hello World
  </h1>
  <br />
  <br />
  <button onClick={click}>
    click
  </button>


</div>;

Hello.propTypes = {
  click: PropTypes.func.isRequired,
};

function mapStateToProps() {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    click: () => {
      const actcr = createAction('hello/get');
      dispatch(actcr());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Hello);
