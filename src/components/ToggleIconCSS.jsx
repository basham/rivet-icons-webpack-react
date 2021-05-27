import React, { useState } from 'react'

export function ToggleIconCSS (props) {
  const { exampleNumber } = props
  const [pressed, updatePressed] = useState(false)
  return (
    <>
      <h2 class="rvt-ts-sm rvt-m-top-md">
        <span class="rvt-text-bold">Example {exampleNumber}:</span> Toggle icon with CSS
      </h2>
      <p>Toggle the value of <code>aria-pressed</code>. Use CSS to change the icon.</p>
      <button
        aria-pressed={pressed}
        class='rvt-button rvt-button--secondary favorite'
        onClick={() => updatePressed(!pressed)}>
        <rvt-icon class='favorite__icon rvt-m-right-xs' />
        Favorite
      </button>
    </>
  )
}
