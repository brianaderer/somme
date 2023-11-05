import {changeMeta} from '../actions/meta';
import {changeId} from '../actions/id';
import {changeVisual} from '../actions/visual';
export const setWine = async ({snapshot, dispatch, id}) => {
  if (snapshot.exists) {
    // Extract the data from the snapshot
    const data = snapshot.data();

    // Assuming the data object has the properties `meta`, `id`, and `visual` at the top level
    const meta = {
      ...data,
      firestoreID: id,
    };
    async function querySubCol() {
      const attrsSnapshot = await snapshot.ref.collection('attr').get();
      let id = {};
      let visual = {};

      // Loop through the documents in the 'attrs' subcollection
      attrsSnapshot.forEach(doc => {
        const attrData = doc.data();
        // Assuming the document IDs in the 'attrs' subcollection
        // are 'id' and 'visual', adjust as necessary.
        if (doc.id === 'id') {
          id = attrData;
        } else if (doc.id === 'visual') {
          visual = attrData;
        }
      });
      return {id, visual};
    }
    querySubCol().then(data => {
      const {id, visual} = data;
      // Now dispatch our actions with the processed data
      dispatch(changeMeta(meta));
      dispatch(changeId(id));
      dispatch(changeVisual(visual));
    });
    // You might need to adjust the structure depending on how your Firestore document is structured
    // For example, if the timestamp is an object, you might need to convert it:
    // if (meta && meta.timestamp && meta.timestamp.toDate) {
    //   meta.timestamp = meta.timestamp.toDate();
    // }
  } else {
    console.log('Snapshot does not exist');
  }
};
