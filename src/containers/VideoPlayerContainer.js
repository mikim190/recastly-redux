import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';
import changeVideo from '../actions/currentVideo.js'

// var VideoPlayerContainer = () => {



//   // const mapDispatchToProps = (dispatch) => {
//   //   return {
//   //     getVideo: (video) => dispatch(changeVideo(video)) //{type:'change_video', video: {}}
//   //   }
//   // }

// };

const mapStateToProps = (state) => {
  // const newVideo = state.video;
  return VideoPlayer({ newVideo });
};

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default connect(mapStateToProps)(VideoPlayer)

