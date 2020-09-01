const initState = {
    projects: [
      {id: '1', title: 'this is some text', content: 'blah blah blah'},
      {id: '2', title: 'this is some different text', content: 'blah blah blah'},
      {id: '3', title: 'as usual some more text', content: 'blah blah blah'}
    ]
  }
  
  const projectReducer = (state = initState, action) => {
    switch (action.type) {
      case 'CREATE_PROJECT_SUCCESS':
        console.log('create project success');
        return state;
      case 'CREATE_PROJECT_ERROR':
        console.log('create project error');
        return state;
      default:
        return state;
    }
  };
  
  export default projectReducer;