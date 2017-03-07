import { Request } from './request';

export class Chat extends Request {

	delete(payload) {
		return super.doRequest('post', 'chat.delete', payload);
	}

	postMessage(payload) {
		return super.doRequest('post', 'chat.postMessage', payload);
	}

	update(payload) {
		return super.doRequest('post', 'chat.update', payload);
	}

}
