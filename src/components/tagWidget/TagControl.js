// src/components/tagWidget/TagControl.js

import React from "react"

export const TagControl = ({
  field,
  value,
  forID,
  classNameWrapper,
  onChange,
}) => {
  const separator = field.get("separator", ", ")

  const handleChange = e => {
    onChange(e.target.value.split(separator).map(e => e.trim()))
  }

  return (
    <input
      id={forID}
      className={classNameWrapper}
      type="text"
      value={value ? value.join(separator) : ""}
      onChange={handleChange}
    />
  )
}

export default TagControl
