import React from 'react'
import PropTypes from 'prop-types';

const Header = ({titulo,edad}) => {
  return (
    <div>
      <p>{titulo}</p>
      <p>{edad}</p>
    </div>
  )
}

export default Header


Header.propTypes = {
  titulo: PropTypes.string.isRequired,
  edad: PropTypes.number.isRequired
}

Header.defaultProps = {
  edad: 70
}