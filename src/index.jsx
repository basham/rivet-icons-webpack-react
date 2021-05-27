import 'react/umd/react.production.min.js?asset'
import 'react-dom/umd/react-dom.production.min.js?asset'
import 'rivet-core/css/rivet.min.css?asset'
import 'rivet-icons/dist/rivet-icon-element.js?asset'
import 'rivet-icons/dist/rivet-icons.css?asset'
import '../build/rivet-icons.js?asset'
import './index.html?root'
import './styles.css?root'

import React from 'react'
import { render } from 'react-dom'
import { App } from './components/App.jsx'

render(
  <App />,
  document.getElementById('app')
)
