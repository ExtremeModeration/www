import React from 'react'

export class TagControl extends React.Component {
  handleChange = (e) => {
    const separator = this.props.field.get('seperator', ', ')
    this.props.onChange(e.target.value.split(separator).map((e) => e.trim()))
  }

  render() {
    const { props, handleChange } = this
    const seperator = props.field.get('seperator', ', ')
    let value = props.value
    return (
      <input
        id={props.forID}
        className={props.classNameWrapper}
        type="text"
        value={value ? value.join(seperator) : ''}
        onChange={handleChange}
      />
    )
  }
}

export default TagControl
