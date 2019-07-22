import Redux from 'redux';

//state: is an video object
var currentVideoReducer = (state = null, action) => {
  if (action.type === 'CHANGE_VIDEO') {
  return action.video;
  } else {
    return state;
  }
};

export default currentVideoReducer;
