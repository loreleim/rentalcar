class Database {
  constructor() {
    this.appData = {
      Airports: [
        {
          name: "HNL",
          lng: "",
          lat: "",
        },
        {
          name: "KHL",
          lng: "",
          lat: "",
        },
      ],
      Cars: [
        {
          make: "toyota",
          model: "corolla",
        },
      ],
    };
  }
}

const store = new Database();
export default store;
