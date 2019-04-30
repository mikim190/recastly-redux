import Redux from 'redux';

//state is an array of videos
var videoListReducer = (state = [], action) => {
  if (action.type === 'CHANGE_VIDEO_LIST') {
    return action.videos;
  } else {
    return state;
  }
};

export default videoListReducer;
