import fs from 'node:fs/promises';
import { runInSequence } from 'run-in-sequence';
import cliProgress from 'cli-progress';

const progressBar = new cliProgress.Bar({}, cliProgress.Presets.shades_grey);

const deleteFolderFn = (folder: string) => {
	return async () => {
		await fs.rm(folder, { recursive: true });
	};
};

export async function deleteFolders(folders: string[]) {
	progressBar.start(folders.length, 0);

	await runInSequence(
		folders.map((folder) => deleteFolderFn(folder)),
		({ index }) => progressBar.update(index)
	);

	progressBar.stop();

	return folders.length;
}
