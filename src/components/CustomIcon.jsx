import React from 'react'

export function CustomIcon (props) {
  const { exampleNumber } = props
  return (
    <>
      <h2 class="rvt-ts-sm rvt-m-top-md">
        <span class="rvt-text-bold">Example {exampleNumber}:</span> Custom icon
      </h2>
      <p>Build and render a custom icon named <code>dot</code>.</p>
      <rvt-icon name='dot' />
    </>
  )
}
