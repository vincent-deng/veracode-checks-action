async function createCheckRun(octokit, inputs, ownership) {
  const { data } = await octokit.checks.create({
    ...ownership,
    head_sha: inputs.sha,
    name: inputs.name,
    status: inputs.status,
    details_url: inputs.detailsURL,
  });

  return data.id;
}

module.exports = {
  createCheckRun
}