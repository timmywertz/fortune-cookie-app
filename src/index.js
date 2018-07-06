import React from 'react'
import ReactDom from 'react-dom'
import './index.css'

import Component from './component'
import App from './app'

const state = {
	fortune: null
}

ReactDom.render(
	<Component initialState={state}>{App}</Component>,
	document.getElementById('app')
)
