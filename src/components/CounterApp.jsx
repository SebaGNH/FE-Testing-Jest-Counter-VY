import React, { useState } from 'react'
import PropTypes from 'prop-types'

const CounterApp = ({value}) => {
  const [contador, setContador] = useState(value);

  return (
    <div>
      <p>Counter App</p>
      <p>{value}</p>
      <h2>Contador: {contador}</h2>


      <button
        onClick={() => setContador( contador + 1)}
      >+1 </button>
      <button
        onClick={() => setContador( contador - 1)}
      >-1</button>
      <button
        onClick={() => setContador( 0 )}
      >Reset 0 </button>
    </div>
  )
}

export default CounterApp

CounterApp.propTypes = {
  value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
  value: 13
}
