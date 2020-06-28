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
}