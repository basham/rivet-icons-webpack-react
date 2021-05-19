import 'react/umd/react.production.min.js?asset'
import 'react-dom/umd/react-dom.production.min.js?asset'
import 'rivet-core/css/rivet.min.css?asset'
import '../build/rivet-icons.css?asset'
import '../build/rivet-icons.js?asset'
import '../build/rivet-icon-element.js?asset'
import './index.html?root'

import React from 'react'
import { render } from 'react-dom'

function App () {
  return (
    <>
      <rvt-icon name="arrow-down" />
    </>
  )
}

render(
  <App />,
  document.getElementById('app')
)
