import { create } from "zustand";

export interface Problem {
  first: number;
  second: number;
  operator: "+" | "-";
}

interface Actions {
  increaseScore: (by: number) => void;
  start: () => void;
  next: () => void;
  quit: () => void;
  setMin: (min: number) => void;
  setMax: (max: number) => void;
  setCount: (count: number) => void;
  setSubtraction: (subtraction: boolean) => void;
}

interface State extends Actions {
  score: number;
  questions: Problem[];
  activeQuestion: number;
  quizInProgress: boolean;
  backgroundColor: string;
  max: number;
  min: number;
  questionCount: number;
  subtraction: boolean;
}

export const useLessonStore = create<State>()((set, get) => ({
  score: 0,
  questions: [],
  activeQuestion: 0,
  quizInProgress: false,
  subtraction: true,
  backgroundColor: "#2b8dd7",
  max: 50,
  min: 10,
  questionCount: 10,
  next: () => {
    const state = get();
    if (state.activeQuestion !== state.questions.length - 1) {
      set((state) => ({ activeQuestion: state.activeQuestion + 1 }));
    } else {
      set({ quizInProgress: false });
    }
  },
  quit: () => set({ quizInProgress: false }),
  start: () =>
    set(({ min, max, questionCount }) => ({
      score: 0,
      questions: generateQuestions(questionCount, min, max),
      activeQuestion: 0,
      quizInProgress: true,
    })),
  increaseScore: (by) => set((state) => ({ score: state.score + by })),
  setMin: (min) => set({ min }),
  setMax: (max) => set({ max }),
  setCount: (questionCount) => set({ questionCount }),
  setSubtraction: (subtraction) => set({ subtraction }),
}));

function generateRandomNumber(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min; // The maximum is inclusive and the minimum is inclusive
}

function generateLesson(min: number, max: number) {
  function generate(): Problem {
    return {
      first: generateRandomNumber(min, max),
      second: generateRandomNumber(min, max),
      operator: generateOperator(),
    };
  }
  return generate;
}

function generateOperator() {
  useLessonStore.getState().subtraction;

  if (!useLessonStore.getState().subtraction) {
    return "+";
  }

  return Math.random() > 0.5 ? "+" : "-";
}

function generateQuestions(amount: number = 10, min: number, max: number) {
  return Array.from({ length: amount }, generateLesson(min, max));
}
