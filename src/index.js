import 'react/umd/react.production.min.js?asset'
import 'react-dom/umd/react-dom.production.min.js?asset'
import 'rivet-core/css/rivet.min.css?asset'
import 'rivet-icons/dist/rivet-icon-element.js?asset'
import 'rivet-icons/dist/rivet-icons.css?asset'
import '../build/rivet-icons.js?asset'
import './index.html?root'

import React from 'react'
import { render } from 'react-dom'
import heart from 'rivet-icons/dist/rvt-icon-heart.html'

function HeartIcon () {
  return (
    <span
      className='rvt-icon'
      dangerouslySetInnerHTML={{ __html: heart }} />
  )
}

function App () {
  return (
    <>
      <rvt-icon name='arrow-down' />
      <HeartIcon />
    </>
  )
}

render(
  <App />,
  document.getElementById('app')
)
