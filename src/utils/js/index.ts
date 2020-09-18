class Utils {
  format = (data: any, label: string) => {
    const result = data.map((data: { name: string; id?: string }) => ({
      value: data.name,
      label: data.name,
      id: data.id,
    }));
    return [{ options: result, label }];
  };
  choices = (questions: any, index: any) => {
    const currentQuestion = questions[index];
    const organise = new Set();
    const correct = currentQuestion.correct_answer;
    const allAnswers = currentQuestion.incorrect_answers.concat(correct);

    for (let x = 0; x <= allAnswers.length * 30; x++) {
      let random = Math.floor(Math.random() * Math.floor(allAnswers.length));
      organise.add(random);
    }

    const organised = Array.from(organise);
    //@ts-ignore
    const shuffled = organised.map((index: number): any => allAnswers[index]);
    return shuffled;
  };
}

export default new Utils();
