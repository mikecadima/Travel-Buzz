export const createProject = project => {
  return (dispatch, getState, { getFirestore }) => {
  const firestore = getFirestore();
  const profile = getState().firebase.profile;
  const authorId = getState().firebase.auth.uid;
  console.log(profile)
  firestore
  .collection("projects")
  .add({
  ...project,
  // firstName: getState().firebase.auth.authorFirstName,
  // lastName: getState().firebase.auth.authorLastName,
  email: getState().firebase.auth.email,
  authorId: authorId,
  createdAt: new Date()
  })
  .then(() => {
  dispatch({ type: "CREATE_PROJECT_SUCCESS" });
  })
  .catch(err => {
  dispatch({ type: "CREATE_PROJECT_ERROR" }, err);
  });
  };
 };