import * as ScreenOrientation from "expo-screen-orientation";
import { useEffect } from "react";

export function useConfig() {
  async function changeScreenOrientation() {
    await ScreenOrientation.lockAsync(
      ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
    );
  }

  useEffect(() => {
    changeScreenOrientation();
  }, []);
}
