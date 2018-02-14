import React from 'react'

import ErrorMessage from './ErrorMessage'
import LoadSubreddit from './LoadSubreddit'
import SubredditList from './SubredditList'
import WaitIndicator from './WaitIndicator'
import LoadComic from './LoadComic'

const App = () => (
  <div className='app'>
  <h1>Search Reddit</h1>
    <ErrorMessage />
    <LoadSubreddit />
    <WaitIndicator />
    <SubredditList />
    <h1>XKCD</h1>
    <LoadComic />
  </div>
)

export default App
