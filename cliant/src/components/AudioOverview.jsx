import React, { useEffect, useRef, useState } from "react";

// Simple audio overview player. If /assets/overview.mp3 exists, plays it.
// Otherwise falls back to Web Speech API (TTS) to read an overview text.

const defaultText = `このサイトは、Yuto Takagi のポートフォリオです。機械学習とWebアプリケーションを中心に、
プロジェクト、スキル、タイムラインを掲載しています。代表作やGitHub・PyPIの公開物も紹介しています。`;

export const AudioOverview = ({ text = defaultText }) => {
  const audioRef = useRef(null);
  const [mode, setMode] = useState("checking"); // checking | file | tts | unsupported
  const [isPlaying, setIsPlaying] = useState(false);
  const [error, setError] = useState("");

  // Try to load mp3; if it fails, try m4a; else fallback to TTS/unsupported
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    let triedM4A = false;
    const onLoaded = () => setMode("file");
    const onError = () => {
      if (!triedM4A) {
        triedM4A = true;
        audio.src = "/assets/overview.m4a";
        audio.load();
      } else {
        if (typeof window !== "undefined" && "speechSynthesis" in window) setMode("tts");
        else setMode("unsupported");
      }
    };
    audio.addEventListener("loadedmetadata", onLoaded);
    audio.addEventListener("error", onError);
    // start with mp3
    audio.src = "/assets/overview.mp3";
    audio.load();
    return () => {
      audio.removeEventListener("loadedmetadata", onLoaded);
      audio.removeEventListener("error", onError);
    };
  }, []);

  // TTS helpers
  const speak = () => {
    try {
      const synth = window.speechSynthesis;
      const utter = new SpeechSynthesisUtterance(text);
      // Prefer Japanese voice if available
      const voices = synth.getVoices();
      const jp = voices.find(v => /ja|Japanese/i.test(v.lang));
      if (jp) utter.voice = jp;
      utter.rate = 1.0;
      utter.pitch = 1.0;
      utter.onend = () => setIsPlaying(false);
      synth.cancel();
      synth.speak(utter);
      setIsPlaying(true);
    } catch (e) {
      setError("音声の再生に失敗しました");
      setIsPlaying(false);
    }
  };

  const pauseTTS = () => {
    try {
      const synth = window.speechSynthesis;
      if (synth.speaking && !synth.paused) synth.pause();
    } catch {}
  };

  const resumeTTS = () => {
    try {
      const synth = window.speechSynthesis;
      if (synth.paused) synth.resume();
    } catch {}
  };

  const stopTTS = () => {
    try {
      const synth = window.speechSynthesis;
      synth.cancel();
      setIsPlaying(false);
    } catch {}
  };

  const toggle = async () => {
    if (mode === "file") {
      const audio = audioRef.current;
      if (!audio) return;
      if (audio.paused) {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch (e) {
          setError("音声の再生に失敗しました");
        }
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } else if (mode === "tts") {
      const synth = window.speechSynthesis;
      if (!isPlaying && !synth.paused) {
        speak();
      } else if (synth.paused) {
        resumeTTS();
        setIsPlaying(true);
      } else {
        pauseTTS();
        setIsPlaying(false);
      }
    }
  };

  return (
    <div className="inline-flex items-center gap-3">
      <audio ref={audioRef} preload="metadata" onEnded={() => setIsPlaying(false)} />
      <button
        type="button"
        onClick={toggle}
        disabled={mode === "checking" || mode === "unsupported"}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-600 hover:border-blue-400 hover:text-blue-400 transition focus:outline-none focus:ring-2 focus:ring-blue-400"
        aria-label="サイトの説明を再生"
      >
        <span className="text-sm">{isPlaying ? "一時停止" : "再生"}</span>
        <span aria-hidden>{isPlaying ? "⏸" : "▶"}</span>
      </button>
      {mode === "unsupported" && (
        <span className="text-xs text-gray-500">このブラウザは音声再生に対応していません</span>
      )}
      {error && <span className="text-xs text-red-400">{error}</span>}
    </div>
  );
};

export default AudioOverview;
