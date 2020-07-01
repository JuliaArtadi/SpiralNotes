export class NotesService {
   API_URL = "http://localhost:3000";

    getNotes = (successCallback, errorCallback) => {
        fetch(`${this.API_URL}/notes`, {
            method: "GET",
        })
            .then(resp => resp.json())
            .then(data => successCallback(data))
            .catch(err => errorCallback(err));
    }

    getNote = (id, successCallback, errorCallback) => {
        fetch(`${this.API_URL}/notes/${id}`, {
            method: "GET",
        })
            .then(resp => resp.json())
            .then(data => successCallback(data))
            .catch(err => errorCallback(err));
    }

    addNote = (note, successCallback, errorCallback) => {
        fetch(`${this.API_URL}/notes`, {
            method: "POST",
            body:JSON.stringify(note),
            headers:{
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(data => successCallback(data))
            .catch(err => errorCallback(err));
    }

    deleteNote = (id, errorCallback) => {
        fetch(`${this.API_URL}/notes/${id}`, {
            method: "DELETE",
        })
            .then(resp => console.log(resp.ok))
            .catch(err => errorCallback(err));
    }

    editNote = (note, successCallback, errorCallback) => {
        fetch(`${this.API_URL}/notes/${note.id}`, {
            method: "PUT",
            body:JSON.stringify(note),
            headers:{
                "Content-Type": "application/json"
            }
        })
            .then(resp => resp.json())
            .then(data => successCallback(data))
            .catch(err => errorCallback(err));
    }

}