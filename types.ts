
export interface LessonTopic {
  id: string;
  title: string;
}

export interface LessonCategory {
  title: string;
  topics: LessonTopic[];
}

export interface LessonContent {
  explanation: string;
  example: {
    html: string;
    css: string;
  };
}

export interface QuizQuestion {
  question: string;
  options: string[];
  answer: string;
}
