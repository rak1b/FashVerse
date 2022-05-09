import React from "react"
import ContentLoader from "react-content-loader"

const ProfileLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1000}
    height={1000}
    viewBox="0 0 1000 1000"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="402" y="27" rx="3" ry="3" width="200" height="14" /> 
    <rect x="406" y="59" rx="3" ry="3" width="187" height="14" /> 
    <rect x="245" y="312" rx="3" ry="3" width="387" height="152" /> 
    <rect x="246" y="175" rx="3" ry="3" width="395" height="117" /> 
    <rect x="403" y="91" rx="3" ry="3" width="185" height="12" /> 
    <circle cx="314" cy="65" r="67" /> 
    <rect x="249" y="502" rx="0" ry="0" width="387" height="210" /> 
    <rect x="251" y="745" rx="0" ry="0" width="404" height="222" />
  </ContentLoader>
)

export default ProfileLoader

