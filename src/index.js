const core = require('@actions/core');
const github = require('@actions/github');
const { getInputs } = require('./inputs');
const { createCheckRun } = require('./checks');

async function run() {
  try {
    core.debug(`Parsing inputs`);
    const inputs = getInputs(core.getInput);

    core.debug(`Setting up OctoKit`);
    const octokit = github.getOctokit(inputs.token);

    const ownership = {
      owner: github.context.repo.owner,
      repo: github.context.repo.repo,
    };

    if (inputs.repo) {
      const repo = inputs.repo.split('/');
      ownership.owner = repo[0];
      ownership.repo = repo[1];
    }

    core.debug(`Creating a new Run on ${ownership.owner}/${ownership.repo}@${sha}`);
    const id = await createCheckRun(octokit, inputs, ownership);
    core.setOutput('check_id', id);
  } catch (error) {
    console.error(error);
  }
}

run();