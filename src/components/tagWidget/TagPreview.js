import React from "react"
import TagStyles from "./style.module.css"

export const TagPreview = ({ value }) => (
  <ul className={TagStyles.tags}>
    {value.map((content, index) => (
      <li key={index} className={TagStyles.tag}>
        {content}
      </li>
    ))}
  </ul>
)

export default TagPreview
