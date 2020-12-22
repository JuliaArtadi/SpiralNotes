import firebase from "../js/firebase";

export class NotesService {
    getNotes = (successCallback, errorCallback) => {
        const fetchData = async () => {
            firebase.firestore()
                .collection("notes").get()
                .then(querySnapshot => {
                    const data = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id, date: doc.data().date.toDate()}))
                    successCallback(data);
                })
                .catch(err => errorCallback(err))
        }
        fetchData()
    }

    getNote = (id, successCallback, errorCallback) => {
        const fetchData = async () => {
            firebase.firestore()
                .collection("notes").doc(id).get()
                .then(data => {
                    successCallback({...data.data(), id: id});
                })
                .catch(err => errorCallback(err))
        }
        fetchData()
    }

    addNote = (note, successCallback, errorCallback) => {
        const postData = async () => {
            firebase.firestore()
                .collection("notes").add(note)
                .then(docRef => {
                    console.log(docRef.id);
                    const data = {...note, id: docRef.id}
                    successCallback(data);
                })
                .catch(err => errorCallback(err))
        }
        postData()
    }

    deleteNote = (id, errorCallback) => {
        const deleteData = async () => {
            console.log(id)
            firebase.firestore()
                .collection("notes").doc(id).delete()
                .catch(err => errorCallback(err))
        }
        deleteData()
    }

    editNote = (note, successCallback, errorCallback) => {
        const editData = async () => {
            firebase.firestore()
                .collection("notes").doc(note.id).set(note)
                .then(successCallback(note))
                .catch(err => errorCallback(err))
        }
        editData()
    }
}
