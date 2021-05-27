import React, { useState } from 'react'

export function ToggleIconReact (props) {
  const { exampleNumber } = props
  const [pressed, updatePressed] = useState(false)
  const iconName = pressed ? 'heart-solid' : 'heart'
  return (
    <>
      <h2 class="rvt-ts-sm rvt-m-top-md">
        <span class="rvt-text-bold">Example {exampleNumber}:</span> Toggle icon with React
      </h2>
      <p>Toggle the value of <code>aria-pressed</code>. Use React to change the icon.</p>
      <button
        aria-pressed={pressed}
        class='rvt-button rvt-button--secondary'
        onClick={() => updatePressed(!pressed)}>
        <rvt-icon
          class='rvt-m-right-xs'
          name={iconName} />
        Favorite
      </button>
    </>
  )
}
