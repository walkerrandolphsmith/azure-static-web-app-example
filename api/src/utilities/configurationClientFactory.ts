import { AppConfigurationClient } from "@azure/app-configuration";
import getValue from "./configuration";

const configurationClientFactory = () =>
  new AppConfigurationClient(getValue("APP_CONFIGURATION_CONNECTION_STRING"));

export default configurationClientFactory;
