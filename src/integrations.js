import { Request } from './request';

export class Integrations extends Request {

	create(payload) {
		return super.doRequest('post', 'integrations.create', payload);
	}

	list() {
		return super.doRequest('get', 'integrations.list');
	}

	remove(payload) {
		return super.doRequest('post', 'integrations.remove', payload)
	}

}
