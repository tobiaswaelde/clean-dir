import { DistinctQuestion } from 'inquirer';
import { PromptsState } from './types.js';

export const promptConfirmation: DistinctQuestion<PromptsState> = {
	name: 'confirmation',
	type: 'confirm',
	when(answers) {
		return answers.selectedFolders.length > 0;
	},
	message(answers) {
		const count = answers.selectedFolders.length;
		const selectedString = count === 1 ? `${count} folder selected.` : `${count} folders selected.`;
		const confirmString =
			count === 1
				? 'Do you really want to delete this folder?'
				: 'Do you really want to delete these folders?';

		return `${selectedString} ${confirmString}`;
	},
	default: false,
};
