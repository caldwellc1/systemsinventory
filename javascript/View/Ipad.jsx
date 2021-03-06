'use strict'
import React, {Component} from 'react'
import PropTypes from 'prop-types'

export default class Ipad extends Component {
  constructor(props) {
    super(props)
  }

  YesNo(val) {
    return val
      ? <span>Yes</span>
      : <span>No</span>
  }

  render() {
    const {device} = this.props
    return (
      <tbody>
        <tr>
          <th>Model/Generation</th>
          <td>{device.generation}</td>
        </tr>
        <tr>
          <th>Tablet memory</th>
          <td>{device.hd_size}</td>
        </tr>
        <tr>
          <th>
            Protective case
          </th>
          <td>
            {this.YesNo(device.protective_case)}
          </td>
        </tr>
        <tr>
          <th>
            Tablet account
          </th>
          <td>
            {device.apple_id}
          </td>
        </tr>
      </tbody>
    )
  }
}

Ipad.propTypes = {
  device: PropTypes.object.isRequired
}
