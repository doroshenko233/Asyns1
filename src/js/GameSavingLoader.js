import json from "./parser";
import read from "./reader";

export default class GameSavingLoader {
    static load() {
      return new Promise((resolve) => {
        read().then((buffer) => json(buffer)).then((string) => {
          return resolve(JSON.parse(string));
        })
      });
    }
  }