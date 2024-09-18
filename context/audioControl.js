import { useState, useEffect } from "react";
import { useAudio } from "./audio";

export const useAudioControl = (navigation) => {
  const { sound } = useAudio();
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    const stopAudio = async () => {
      if (sound) {
        await sound.stopAsync();
      }
    };
    stopAudio();
  }, [sound]);

  const toggleAudio = async () => {
    if (isPlaying && sound) {
      await sound.stopAsync();
    } else if (sound) {
      await sound.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  const onStateChange = (state) => {
    if (state === "ended" && sound) {
      sound
        .playAsync()
        .catch((error) => console.warn("Sound play error:", error));
    }
  };

  return { isPlaying, toggleAudio, onStateChange };
};
