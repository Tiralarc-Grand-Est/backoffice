import React from "react";
import {
  Admin,
  Resource,
  ListGuesser,
  ShowGuesser,
  EditGuesser,
} from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import polyglotI18nProvider from "ra-i18n-polyglot";
import frenchMessages from "ra-language-french";

const i18nProvider = polyglotI18nProvider(() => frenchMessages, "fr");

const dataProvider = jsonServerProvider("https://jsonplaceholder.typicode.com");
const App = () => (
  <Admin dataProvider={dataProvider} i18nProvider={i18nProvider}>
    <Resource
      name="users"
      list={ListGuesser}
      show={ShowGuesser}
      edit={EditGuesser}
    />
  </Admin>
);

export default App;
