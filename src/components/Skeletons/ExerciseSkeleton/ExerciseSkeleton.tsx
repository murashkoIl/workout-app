import React from "react"
import ContentLoader from "react-content-loader"

const ExerciseSkeleton: React.FC = (props) => (
  <ContentLoader 
    speed={2}
    width={344}
    height={124}
    viewBox="0 0 344 124"
    backgroundColor="#ededed"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="7" y="6" rx="10" ry="10" width="110" height="110" /> 
    <rect x="136" y="7" rx="10" ry="10" width="203" height="60" /> 
    <rect x="137" y="75" rx="10" ry="10" width="202" height="20" />
  </ContentLoader>
)

export default ExerciseSkeleton;