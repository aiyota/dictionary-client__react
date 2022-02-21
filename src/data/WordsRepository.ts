import axios from "axios";
import CreateWordDto from "./dto/CreateWordDto";
import EditWordDto from "./dto/EditWordDto";
import IWordsRepository from "./IWordsRepository";
import Word from "./models/Word";

export default class WordsRepository implements IWordsRepository {
  constructor(private apiUrl: string) {}

  async getWords(): Promise<Word[]> {
    try {
      const response = await axios.get(`${this.apiUrl}/words`);
      return response.data;
    } catch (error) {
      return [];
    }
  }

  async getWordById(wordId: string): Promise<Word | null> {
    try {
      const response = await axios.get(`${this.apiUrl}/words/${wordId}`);
      return response.data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  createWord(word: CreateWordDto): Promise<Word> {
    throw new Error("Method not implemented.");
  }
  deleteWord(id: string): Promise<Word> {
    throw new Error("Method not implemented.");
  }
  searchWord(search: string): Promise<Word[]> {
    throw new Error("Method not implemented.");
  }
  editWord(word: EditWordDto): Promise<Word> {
    throw new Error("Method not implemented.");
  }
}
