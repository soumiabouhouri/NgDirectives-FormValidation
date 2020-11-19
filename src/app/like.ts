export class Like {
  nbrOfLikes: number;
  btnStatus: boolean;

  constructor(InitialNbrOfLikes: number) {
    this.nbrOfLikes = InitialNbrOfLikes;
  }

  IncreaseNbrOfLikes() {
    this.nbrOfLikes++;
  }

  DecreaseNbrOfLikes() {
    this.nbrOfLikes--;
  }

  UpdatebtnStatus() {
    this.btnStatus != this.btnStatus;
  }
}
