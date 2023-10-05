export enum PresenterComponent {
    LoadingGame,
    StartGame,
    CreateAssignment,
    FirstGuess,
    SecondGuess,
    Results
  }

  export enum PlayerComponentEnum {
    JoinGame,
    CreateAssignmentDoodle,
    WaitingForOtherPlayers,
    PlayersFirstGuess,
    PlayersSecondGuess
  }

  export enum MessageType {
    GameId,
    AddPlayer,
    SubmitAssignmentDoodle,
    SubmitFirstGuess,
    SubmitSecondGuess,
    PlayerId,
    CreateDoodle,
    WaitingForOtherPlayers,
    MakeAGuess,
    ChooseYourAnswer
  }