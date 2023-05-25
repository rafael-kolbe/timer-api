import { EventEmitter } from "events";

class Timer extends EventEmitter {
  constructor() {
    if (Timer.instance) return Timer.instance;
    super();
    this.seconds = 0;
    this.minutes = 0;
    this.interval = null;
    Timer.instance = this;
  }

  #clock = () => {
    this.seconds = (this.seconds + 1) % 60;
    if (this.seconds === 0) {
      this.minutes = (this.minutes + 1) % 60;
    }
    this.emit("tick", this.getTime());
  };

  #formatPad(number) {
    return String(number).padStart(2, "0");
  }

  #resetClock() {
    this.seconds = 0;
    this.minutes = 0;
  }

  getTime() {
    return [this.#formatPad(this.minutes), this.#formatPad(this.seconds)];
  }

  start() {
    this.#resetClock();
    clearInterval(this.interval);
    this.interval = setInterval(this.#clock, 1000);
  }

  stop() {
    clearInterval(this.interval);
    this.interval = null;
  }

  resume() {
    clearInterval(this.interval);
    this.interval = setInterval(this.#clock, 1000);
  }

  reset() {
    clearInterval(this.interval);
    this.interval = null;
    this.#resetClock();
    this.emit("reset", this.getTime());
  }
}

export const timer = new Timer();
