import React from 'react'
import TagStyles from './style.module.css'

export const TagPreview = props => (
  <ul className={TagStyles.tags}>
    {props.value.map((value, index) => (
      <li className={TagStyles.tag} key={index}>{value}</li>
    ))}
  </ul>
)

export default TagPreview