import 'react/umd/react.production.min.js?asset'
import 'react-dom/umd/react-dom.production.min.js?asset'
import 'rivet-core/css/rivet.min.css?asset'
// import 'rivet-icons/dist/rivet-icons.css?asset'
// import 'rivet-icons/dist/rivet-icons.js?asset'
// import 'rivet-icons/dist/rivet-icon-element.js?asset'
import './index.html?public'

import React from 'react'
import { render } from 'react-dom'

function App () {
  return (
    <>
      <rvt-icon name="star" />
    </>
  )
}

render(
  <App />,
  document.getElementById('app')
)
