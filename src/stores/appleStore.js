import { observable, computed, action, runInAction } from "mobx";

class AppStore {
  @observable appleList = [];

  @observable isPicking = false;

  @computed get currentApples() {
    return this.appleList.filter((item) => item.eated === false);
  }

  @computed get currentEatedApples() {
    return this.appleList.filter((item) => item.eated === true);
  }

  @computed get currentApplesWeight() {
    return this.currentApples.reduce((prev, current) => {
      return prev + current.weight;
    }, 0);
  }

  @computed get currentEatedApplesWeight() {
    return this.currentEatedApples.reduce((prev, current) => {
      return prev + current.weight;
    }, 0);
  }

  @action.bound eatApple = (appleId) => {
    const apple = this.appleList.find((item) => item.id === appleId);
    apple.eated = true;
  };

  @action.bound pickApple = () => {
    runInAction(() => {
      this.isPicking = true;
    });
    let weight = Math.floor(200 + Math.random() * 50);
    const time = new Date();
    runInAction(() => {
      this.isPicking = false;
      this.appleList.push({
        id: time.getTime(),
        weight,
        eated: false,
      });
    });
  };
}

const store = new AppStore();

export default store;
