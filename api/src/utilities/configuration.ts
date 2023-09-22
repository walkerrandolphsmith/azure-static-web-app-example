const getValue = (
  key: "APP_CONFIGURATION_CONNECTION_STRING" | "APPSETTING_WEBSITE_SLOT_NAME"
) => process.env[key];

export default getValue;
