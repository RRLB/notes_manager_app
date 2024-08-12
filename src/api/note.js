import axios from "axios";

const BASE_URL = "http://localhost:3200/notes"; // Ensure the protocol is correct

export class NoteAPI {
  static async create(note) {
    const response = await axios.post(`${BASE_URL}`, note);
    return response.data;
  }

  static async fetchAll() {
    const response = await axios.get(`${BASE_URL}`);
    return response.data;
  }

  static async fetchById(noteId) {
    const response = await axios.get(`${BASE_URL}/${noteId}`);
    return response.data;
  }

  static async deleteById(noteId) {
    const response = await axios.delete(`${BASE_URL}/${noteId}`);
    return response.data;
  }

  static async updatePatch(note, noteId) {
    const response = await axios.patch(`${BASE_URL}/${noteId}`, note);
    return response.data;
  }

  static async updatePut(note, noteId) {
    const response = await axios.put(`${BASE_URL}/${noteId}`, note);
    return response.data;
  }
}
