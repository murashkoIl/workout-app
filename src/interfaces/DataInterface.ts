export interface IData {
  data: {
    name: string
    slug: string
    questions: IQuestions[] 
  } 
}

export interface IQuestions {
  title: string
  muscle_group: {
    name: string
    photo: string
  }
  exercises: IExercises[]
}

export interface IExercises {
  description: string
  duration: number
  id: number
  photo: string
  title: string
  video: string
  isDone: boolean
}