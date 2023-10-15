import { DistinctQuestion } from 'inquirer';
import { PromptsState } from './types.js';

import path from 'node:path';
import { checkFolder, checkPathExists } from '../util/fs.js';

export const promptInputRootDir: DistinctQuestion<PromptsState> = {
	name: 'rootDir',
	type: 'input',
	message: 'Enter folder to clean up:',
	default: path.resolve(process.cwd()),
	validate(input) {
		if (!checkPathExists(input)) {
			return 'The folder does not exist.';
		}
		if (!checkFolder(input)) {
			return 'The path is not a folder.';
		}
		return true;
	},
};
