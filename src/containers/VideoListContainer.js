import { connect } from 'react-redux';
import VideoList from './../components/VideoList.js';
import changeVideoList from './../actions/currentVideo.js';

// var handleVideoListEntryTitleClick = (video) => {
//   VideoListContainer();
// }

// var VideoListContainer = () => {

// }

const mapStateToProps = (state) => {
  const newVideoList = state.videos;
  return VideoList({ newVideoList, handleVideoListEntryTitleClick });
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeVideo: (video) => dispatch(changeVideo(video))
  }
}

//TODO: define a VideoListContainer component which will hook up your action
// dispatchers with your VideoList component props.

export default connect(mapStateToProps, mapDispatchToProps)(VideoList)

