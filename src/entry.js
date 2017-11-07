import React from 'react'
import ReactDOM from 'react-dom'
import cloudinary from 'cloudinary-core'

import App from 'App'

window.cl = cloudinary.Cloudinary.new()
window.cl.config( "cloud_name", "dp5su6sfg")

// if(document.body != null){
//   const element = document.createElement('MAIN')
//   element.setAttribute('id', 'root')
//   document.body.appendChild(element);
// }
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
