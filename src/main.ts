import * as core from '@actions/core';

export async function run(): Promise<void> {
  try {
    const outFile: string = core.getInput('out-file');

    // Debug logs are only output if the `ACTIONS_STEP_DEBUG` secret is true
    core.debug(`file: ${outFile}`);

    // Set outputs for other workflow steps to use
    core.setOutput('return', new Date().toTimeString());
  } catch (error) {
    // Fail the workflow run if an error occurs
    if (error instanceof Error) core.setFailed(error.message);
  }
}
