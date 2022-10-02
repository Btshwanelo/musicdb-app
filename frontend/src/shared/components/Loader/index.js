import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const Loader = props => {
  return (
    <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
  )
}

Loader.propTypes = {}

export default Loader