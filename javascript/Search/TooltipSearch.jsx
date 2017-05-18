'use strict'
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Tooltip from 'rc-tooltip'
import 'rc-tooltip/assets/bootstrap_white.css'

export default class TooltipSearch extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  update(e) {
    this.props.change(e.target.value)
  }

  render() {
    const tooltip = (
      <div className="input-group" style={{width:'200px'}}>
        <input
          type="text"
          className="form-control"
          name="search"
          placeholder={"Search..."}
          value={this.props.value}
          onChange={this.update.bind(this)}/>
        <span className="input-group-btn">
          <button className="btn btn-danger" type="button" onClick={this.props.change.bind(null, '')}><i className="fa fa-times"></i></button>
        </span>
      </div>
    )

    return (
      <Tooltip placement="top" trigger={['click']} overlay={tooltip}>
        <a href="#">
          <i className="fa fa-search"></i>
        </a>
      </Tooltip>
    )
  }
}

TooltipSearch.propTypes = {
  change: PropTypes.func,
  value: PropTypes.string
}
