import { Request } from './request';

export class Authentication extends Request {

	login(credentials = {}) {
		return new Promise((resolve, reject) => {
			super.doRequest('post', 'login', credentials).then(({data}) => {
				var token = data.data;
				this._client.instance.defaults.headers.common['X-Auth-Token'] = token.authToken;
				this._client.instance.defaults.headers.common['X-User-Id'] = token.userId;
				resolve(token);
			}).catch(err => console.log(err));
		});

	}

	logout() {
		return super.doRequest('get', 'logout');
	}

	me() {
		return super.doRequest('get', 'me');
	}
}
