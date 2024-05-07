import React from 'react';
import PropTypes from 'prop-types';

//  Presentational component, renders All, Active and Completed buttons
//  which filter the displayed tasks
function Link(props) {
  if (props.active) {
    return <span>{props.children}</span>;
  }
  const handleClick = (e) => {
    e.preventDefault();
    props.onClick();
  };

  return (
    <a
      href="#"
      onClick={handleClick}
    >
      {props.children}
    </a>
  );
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Link;
