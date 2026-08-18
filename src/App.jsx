import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/redux/appStore";

export const App = () => {
  return (
    <Provider store={appStore}>
      <Body/>
    </Provider>
  );
}