import React from 'react'
import { CustomIcon } from './CustomIcon.jsx'
import { InlineIcon } from './InlineIcon.jsx'
import { ToggleIconCSS } from './ToggleIconCSS.jsx'
import { ToggleIconReact } from './ToggleIconReact.jsx'

export function App () {
  return (
    <>
      <ToggleIconCSS exampleNumber='1' />
      <ToggleIconReact exampleNumber='2' />
      <InlineIcon exampleNumber='3' />
      <CustomIcon exampleNumber='4' />
    </>
  )
}
