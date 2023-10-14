import inquirer, { QuestionCollection } from 'inquirer';

export async function singlePrompt<T>(
	questions: QuestionCollection<any>,
	initialAnswers?: Partial<any> | undefined
): Promise<T> {
	const res = await inquirer.prompt<{ value: T }>(
		{
			...questions,
			name: 'value',
		},
		initialAnswers
	);

	return res.value;
}
