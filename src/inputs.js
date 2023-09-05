async function getInputs (getInput) {
  const repo = getInput('repo');
  const sha = getInput('sha');
  const token = getInput('token', { required: true });
  const name = getInput('name');
  const status = getInput('status', { required: true });
  const detailsURL = getInput('details_url');

  return {
    repo,
    sha,
    name,
    token,
    status,
    detailsURL,
  };
}

module.exports = {
  getInputs
}