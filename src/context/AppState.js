import AppContext from "./appContext";

const AppState = () => {
  return (
    <AppContext.Provider
      value={{
        loggedIn: false,
        userData: {},
      }}
    ></AppContext.Provider>
  );
};

export default AppState;
