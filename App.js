import { ApolloClient, ApolloProvider } from "@apollo/client";
import RootNavigator from "./src/navigation/RootNavigator";
import { AppRegistry } from "react-native";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

const App = () => {
  <ApolloProvider client={client}>
    <RootNavigator />
  </ApolloProvider>;
};

AppRegistry.registerComponent("MyApplication", () => App);
