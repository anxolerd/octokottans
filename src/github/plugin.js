function VueGithub() {
  const BASE_URL = 'https://api.github.com';
  const DEFAULT_HEADERS = {
    Accept: 'application/vnd.github.v3+json',
  };

  this.user = function user(username, cb) {
    const url = new URL(`${BASE_URL}/users/${username}`);
    fetch(url, { headers: DEFAULT_HEADERS })
      .then(resp => resp.json())
      .then(json => cb(json, null))
      .catch(err => cb(null, err));
  };

  this.userRepos = function userRepos(username, page, cb) {
    const queryParams = { page };
    const url = new URL(`${BASE_URL}/users/${username}/repos`);
    Object.keys(queryParams)
      .forEach((key) => { url.searchParams.append(key, queryParams[key]); });
    fetch(url, { headers: DEFAULT_HEADERS })
      .then(resp => resp.json())
      .then(json => cb(json, null))
      .catch(err => cb(null, err));
  };

  this.repo = function repo(username, reponame, cb) {
    const url = new URL(`${BASE_URL}/repos/${username}/${reponame}`);
    fetch(url, { headers: DEFAULT_HEADERS })
      .then(resp => resp.json())
      .then(json => cb(json, null))
      .catch(err => cb(null, err));
  };
}


VueGithub.install = function install(Vue) {
  Object.defineProperty(Vue.prototype, '$github', {
    get() {
      /* eslint-disable no-underscore-dangle */
      if (!this._github) {
        this._github = new VueGithub();
      }
      return this._github;
      /* eslint-enable no-underscore-dangle */
    },
  });
};

export default VueGithub;
