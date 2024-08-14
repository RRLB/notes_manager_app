import axios from "axios";

const BASE_URL = "http://localhost:3200/notes"; // Ensure the protocol is correct

export class NoteAPI {
  static async create(note) {
    return this.formatId((await axios.post(`${BASE_URL}`, note)).data);
  }

  static async fetchAll() {
    //map(this.formatId) will itterate through each array value and apply formatId
    return (await axios.get(`${BASE_URL}`)).data.map(this.formatId);
  }

  static async fetchById(noteId) {
    return this.formatId((await axios.get(`${BASE_URL}/${noteId}`)).data);
  }

  static async deleteById(noteId) {
    return (await axios.delete(`${BASE_URL}/${noteId}`)).data;
  }

  static async updatePatch(note) {
    return this.formatId(
      (await axios.patch(`${BASE_URL}/${note.id}`, note)).data
    );
  }

  static async updatePut(note) {
    return this.formatId(
      (await axios.put(`${BASE_URL}/${note.id}`, note)).data
    );
  }

  static formatId(note) {
    return {
      ...note,
      id: note.id.toString(),
    };
  }
}
