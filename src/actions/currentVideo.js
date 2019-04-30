// input: a video object 
//output: an action object 
var changeVideo = (video) => (
  {
    type: 'CHANGE_VIDEO',
    video: video
  }
)

export default changeVideo;
