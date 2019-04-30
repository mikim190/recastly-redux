import Redux from 'redux';

//state: is an video object
var currentVideoReducer = (state = null, action) => {
  // if (state === null) {
  //   return console.log('Your state is null!');
  // }
  if (action.type === 'CHANGE_VIDEO') {
    state.video = action.video;
    return state;
  } else {
    return state;
  }
};

export default currentVideoReducer;
