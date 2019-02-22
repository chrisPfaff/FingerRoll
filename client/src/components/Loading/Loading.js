import React from 'react'
import Basketball from '../.././img/basketball.png'
import '../../styles/loading.css'

const Loading = () => {
  return (
    <div className="loadingScreen">
      <img className="loadingBasketball" src={Basketball} alt="basketball" />
      <h1 className="loadingTitle">Loading.....</h1>
    </div>
  )
}
export default Loading
