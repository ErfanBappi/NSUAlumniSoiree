import React, { useState, useEffect, useRef } from 'react';
import { Volume2, VolumeX, Music } from 'lucide-react';

export default function AudioAmbience() {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const timerRef = useRef<number | null>(null);
  const synthNodesRef = useRef<AudioNode[]>([]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      stopJazz();
    };
  }, []);

  const stopJazz = () => {
    if (timerRef.current) {
      window.clearInterval(timerRef.current);
      timerRef.current = null;
    }
    // Stop all active audio nodes safely
    synthNodesRef.current.forEach((node) => {
      try {
        (node as any).stop?.();
      } catch (e) {}
    });
    synthNodesRef.current = [];
  };

  const startJazz = () => {
    // 1. Initialize Audio Context lazily
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;

    if (!audioCtxRef.current) {
      audioCtxRef.current = new AudioCtx();
    }

    const ctx = audioCtxRef.current;
    if (ctx.state === 'suspended') {
      ctx.resume();
    }

    // 2. Play cozy deluxe 4/4 Jazz Ballad (Tempo: 84 BPM)
    // Beat length = 60 / 84 = 0.714 seconds.
    const beatLen = 0.714;
    let step = 0;

    // Rich jazz chord progression:
    // Dm9 -> G13 -> Cmaj9 -> A7(#9) -> Dm9 -> G13 -> Cmaj9 -> Em9
    const jazzChords = [
      {
        bass: [73.42, 110.00, 146.83], // D2, A2, D3 walking steps
        chords: [174.61, 220.00, 261.63, 329.63] // F3, A3, C4, E4 (Dm9 voicings)
      },
      {
        bass: [98.00, 146.83, 196.00], // G2, D3, G3
        chords: [164.81, 246.94, 293.66, 440.00] // E3, B3, D4, A4 (G13 voicings)
      },
      {
        bass: [65.41, 98.00, 130.81], // C2, G2, C3
        chords: [164.81, 196.00, 246.94, 293.66] // E3, G3, B3, D4 (Cmaj9 voicings)
      },
      {
        bass: [55.00, 110.00, 164.81], // A1, A2, E3
        chords: [174.61, 220.00, 277.18, 311.13] // F3, A3, C#4, D#4 (A7#9 voicings)
      },
      {
        bass: [73.42, 110.00, 146.83], // Dm9
        chords: [174.61, 220.00, 261.63, 329.63]
      },
      {
        bass: [98.00, 146.83, 196.00], // G13
        chords: [164.81, 246.94, 293.66, 440.00]
      },
      {
        bass: [65.41, 98.00, 130.81], // Cmaj9
        chords: [164.81, 196.00, 246.94, 293.66]
      },
      {
        bass: [82.41, 123.47, 164.81], // E2, B2, E3 (Em9)
        chords: [196.00, 246.94, 293.66, 349.23] // G3, B3, D4, F4
      }
    ];

    // Elegant jazz melody licks (improvised over chords)
    const melodyNotes = [
      [329.63, 349.23, 392.00, 440.00], // over Dm9: E4, F4, G4, A4
      [440.00, 493.88, 523.25, 587.33], // over G13: A4, B4, C5, D5
      [493.88, 523.25, 587.33, 659.25], // over Cmaj9: B4, C5, D5, E5
      [587.33, 622.25, 698.46, 783.99], // over A7#9: D5, D#5, F5, G5
      [440.00, 392.00, 349.23, 329.63], // over Dm9 down
      [392.00, 349.23, 329.63, 293.66], // over G13 down
      [329.63, 293.66, 261.63, 220.00], // over Cmaj9 down
      [293.66, 329.63, 392.00, 493.88]  // over Em9 up
    ];

    const playTone = (freq: number, startTime: number, duration: number, volume: number, type: OscillatorType = 'triangle') => {
      if (!ctx) return;
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      const filter = ctx.createBiquadFilter();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, startTime);

      // Add delicate jazz sax/guitar LFO vibrato
      if (type === 'triangle' && freq > 250) {
        osc.frequency.setValueAtTime(freq, startTime);
        osc.frequency.linearRampToValueAtTime(freq * 1.003, startTime + duration * 0.4);
        osc.frequency.linearRampToValueAtTime(freq * 0.997, startTime + duration * 0.8);
        osc.frequency.linearRampToValueAtTime(freq, startTime + duration);
      }

      // Filter settings for warm jazz tone
      filter.type = 'lowpass';
      if (type === 'sine') {
        filter.frequency.setValueAtTime(300, startTime); // deep warm jazz bass
      } else {
        filter.frequency.setValueAtTime(950, startTime); // soft round chords/lead
      }
      filter.Q.setValueAtTime(1.2, startTime);

      // Attack / Decay / Release volume envelope
      gainNode.gain.setValueAtTime(0, startTime);
      gainNode.gain.linearRampToValueAtTime(volume, startTime + 0.12); // slow soft jazz attack
      gainNode.gain.exponentialRampToValueAtTime(0.001, startTime + duration); // natural release

      osc.connect(filter);
      filter.connect(gainNode);
      gainNode.connect(ctx.destination);

      osc.start(startTime);
      osc.stop(startTime + duration);

      synthNodesRef.current.push(osc);
    };

    const scheduler = () => {
      const now = ctx.currentTime;
      const barIndex = Math.floor(step / 4) % jazzChords.length;
      const beatInBar = step % 4;

      const currentSec = jazzChords[barIndex];

      // 1. Walking Jazz Bass (every beat)
      let bassFreq = currentSec.bass[0];
      if (beatInBar === 1) bassFreq = currentSec.bass[1] || currentSec.bass[0];
      if (beatInBar === 2) bassFreq = currentSec.bass[2] || currentSec.bass[0];
      if (beatInBar === 3) bassFreq = currentSec.bass[0] * 1.5; // step up for resolution
      
      playTone(bassFreq, now, beatLen * 0.9, 0.12, 'sine');

      // 2. Jazz Piano / Guitar chords (Soft accompaniment on beat 1 and swung 3-and)
      if (beatInBar === 0) {
        currentSec.chords.forEach((f) => {
          playTone(f, now, beatLen * 2.5, 0.035, 'triangle');
        });
      } else if (beatInBar === 2) {
        // Offbeat swing chord
        currentSec.chords.forEach((f, idx) => {
          playTone(f, now + beatLen * 0.4, beatLen * 1.2, 0.025, 'triangle');
        });
      }

      // 3. Silky Soft Jazz Melody / Sax Lick (improvises on beat 1 & 3 of some bars)
      if (step % 2 === 0 && Math.random() > 0.3) {
        const melodies = melodyNotes[barIndex];
        const randomNote = melodies[Math.floor(Math.random() * melodies.length)];
        
        // Slightly delayed to sound humanized
        const delay = Math.random() * 0.1;
        playTone(randomNote, now + delay, beatLen * 1.8, 0.032, 'triangle');
      }

      // 4. Brushed Snare / Cymbal accent (Beat 2 and 4)
      if (beatInBar === 1 || beatInBar === 3) {
        // Simulating a soft brush slap using a high pitched fast decaying tone
        playTone(12000, now, 0.08, 0.005, 'sine');
      }

      step++;
    };

    // Run scheduler immediately and set interval
    scheduler();
    timerRef.current = window.setInterval(scheduler, beatLen * 1000);
  };

  const handleToggle = () => {
    if (isPlaying) {
      stopJazz();
      setIsPlaying(false);
    } else {
      startJazz();
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      <button
        onClick={handleToggle}
        className={`group flex items-center gap-2.5 px-4 py-2.5 rounded-full border shadow-xl backdrop-blur-md transition-all duration-300 cursor-pointer ${
          isPlaying
            ? 'bg-gold-500/10 border-gold-400 text-gold-300 shadow-gold-500/5'
            : 'bg-burgundy-950/80 border-gold-500/20 text-ivory/70 hover:text-gold-400 hover:border-gold-500/40'
        }`}
        title={isPlaying ? 'Mute Jazz instrumental' : 'Play soft jazz lounge instrumental'}
      >
        {isPlaying ? (
          <>
            {/* Soft soundwave bars animating */}
            <div className="flex gap-0.5 items-end h-3 w-4">
              <span className="w-0.5 h-full bg-gold-400 rounded-full animate-[soundWave_1s_infinite_ease-in-out]" style={{ animationDelay: '0.1s' }} />
              <span className="w-0.5 h-3 bg-gold-400 rounded-full animate-[soundWave_1.3s_infinite_ease-in-out]" style={{ animationDelay: '0.3s' }} />
              <span className="w-0.5 h-2 bg-gold-400 rounded-full animate-[soundWave_0.9s_infinite_ease-in-out]" style={{ animationDelay: '0.5s' }} />
            </div>
            <span className="font-btn text-[9px] tracking-[0.2em] uppercase font-bold text-gold-300">
              Soft Jazz Playing
            </span>
          </>
        ) : (
          <>
            <VolumeX className="w-4 h-4 text-ivory/60 group-hover:text-gold-400" />
            <span className="font-btn text-[9px] tracking-[0.2em] uppercase font-bold">
              Ambiance Off
            </span>
          </>
        )}
      </button>
    </div>
  );
}
