import { Request } from './request';

export class Settings extends Request {

	set(id) {
		return super.doRequest('get', `settings/${id}`);
	}

	update(id, payload) {
		return super.doRequest('get', `settings/${id}`, payload);
	}

}
