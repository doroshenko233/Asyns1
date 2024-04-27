import GameSavingLoader from "./GameSavingLoader";

GameSavingLoader.load().then((saving) => {
      return saving;
  }).catch((error) => {
      return error;
  });