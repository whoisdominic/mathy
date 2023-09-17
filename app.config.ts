import { ExpoConfig, ConfigContext } from "expo/config";

const buildNumber = "3";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,

  name: "mathy",
  slug: "mathy",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/icon.png",
  userInterfaceStyle: "light",
  splash: {
    image: "./assets/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff",
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    buildNumber,
    supportsTablet: true,
    requireFullScreen: true,
    bundleIdentifier: "com.tokul.mathy",
  },
  android: {
    package: "com.tokul.mathy",
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#ffffff",
    },
  },
  web: {
    favicon: "./assets/favicon.png",
  },
  plugins: [
    "@config-plugins/detox",
    [
      "expo-screen-orientation",
      {
        initialOrientation: "DEFAULT",
      },
    ],
  ],
  extra: {
    eas: {
      projectId: "54ccb498-3cd9-4f6c-9e72-7f1aefebfe94",
    },
  },
});
