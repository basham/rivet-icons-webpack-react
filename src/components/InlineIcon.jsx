import React from 'react'
import lightning from 'rivet-icons/dist/rvt-icon-lightning.html'

export function InlineIcon (props) {
  const { exampleNumber } = props
  return (
    <>
      <h2 class="rvt-ts-sm rvt-m-top-md">
        <span class="rvt-text-bold">Example {exampleNumber}:</span> Inline icon
      </h2>
      <p>Render inline an icon from a <code>rvt-icon-*.html</code> file, without SVG symbols.</p>
      <Icon html={lightning} />
    </>
  )
}

function Icon (props) {
  const { html } = props
  return (
    <span
      className='rvt-icon'
      dangerouslySetInnerHTML={{ __html: html }} />
  )
}
