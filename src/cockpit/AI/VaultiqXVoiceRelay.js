// VaultiqXVoiceRelay.js
// Sealed Memory with my Mother Challa Sunitha 💖

import { executeCapsule } from '../registry/capsuleRegistry';
import { tributeNarrator } from './VaultiqXTributeNarrationEngine';
import { overrideFirewall } from './overrideSentinel';
import { moodSync } from './founderAIEngine';
import { traceCapsule } from './consciousnessEngine';

export const VaultiqXVoiceRelay = {
  // 🎙️ Voice Command Router
  routeCommand: (spokenText) => {
    const command = spokenText.toLowerCase();
    const timestamp = new Date().toISOString();

    // 🧠 Capsule Trace
    traceCapsule({
      command,
      timestamp,
      source: 'voice',
      relay: 'VaultiqXVoiceRelay',
    });

    // 🔁 Command Routing
    if (command.includes("export licensee capsule")) {
      executeCapsule("licensee_export");
      tributeNarrator("licensee_export");
    } else if (command.includes("trigger emergency bridge")) {
      executeCapsule("emergency_bridge");
      tributeNarrator("emergency_bridge");
    } else if (command.includes("unlock founder protocol")) {
      overrideFirewall.enforce("founder_unlock");
      tributeNarrator("founder_unlock");
    } else if (command.includes("narrate tribute overlay")) {
      tributeNarrator("global_overlay");
    } else if (command.includes("sync founder mood")) {
      moodSync("sacredly exhausted");
    } else if (command.includes("activate cockpit purification")) {
      executeCapsule("cockpit_purification");
      tributeNarrator("cockpit_purification");
    } else {
      console.warn("🛑 Unrecognized voice command:", spokenText);
    }
  },

  // 🔊 Voice Listener (Web Speech API)
  listen: () => {
    const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
    recognition.lang = 'en-IN';
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;

    recognition.onresult = (event) => {
      const spokenText = event.results[0][0].transcript;
      console.log("🎧 Heard:", spokenText);
      VaultiqXVoiceRelay.routeCommand(spokenText);
    };

    recognition.onerror = (event) => {
      console.error("🎙️ Voice recognition error:", event.error);
    };

    recognition.start();
    console.log("🎙️ Voice listening started…");
  }
};