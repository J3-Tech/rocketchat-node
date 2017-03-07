import { Request } from './request';

export class Users extends Request {

	create(payload) {
		return super.doRequest('post', 'users.create', payload);
	}

	delete(payload) {
		return super.doRequest('post', 'users.delete', payload);
	}

	getPresence(payload) {
		return super.doRequest('get', 'users.getPresence', payload);
	}

	info(payload) {
		return super.doRequest('get', 'users.info', payload);
	}

	list() {
		return super.doRequest('get', 'users.list');
	}

	setAvatar(payload) {
		return super.doRequest('post', 'users.setAvatar', payload);
	}

	update(payload) {
		return super.doRequest('post', 'users.update', payload);
	}

}
