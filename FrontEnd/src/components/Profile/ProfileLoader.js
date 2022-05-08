import React from "react"
import ContentLoader from "react-content-loader"

const ProfileLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={900}
    height={400}
    viewBox="0 0 900 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="228" y="12" rx="3" ry="3" width="291" height="20" /> 
    <rect x="226" y="44" rx="3" ry="3" width="215" height="12" /> 
    <rect x="103" y="134" rx="3" ry="3" width="422" height="25" /> 
    <rect x="103" y="170" rx="0" ry="0" width="419" height="34" /> 
    <rect x="226" y="71" rx="3" ry="3" width="178" height="15" /> 
    <circle cx="159" cy="56" r="57" /> 
    <rect x="107" y="232" rx="0" ry="0" width="418" height="187" />
  </ContentLoader>
)

export default ProfileLoader

