import React from 'react'
import Panel from './components/Panel'
import { HashRouter as Router, Routes, Route } from 'react-router-dom'

export default function App() {
  return (
    <Router>
      <Panel />
    </Router>
  )
}