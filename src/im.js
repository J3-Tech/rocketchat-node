import { Request } from './request';

export class IM extends Request {

	close(payload) {
		return super.doRequest('post', 'im.close', payload);
	}

	history(payload) {
		return super.doRequest('post', 'im.history', payload);
	}

	listEveryone() {
		return super.doRequest('get', 'im.list.everyone');
	}

	list() {
		return super.doRequest('get', 'im.list');
	}

	messageOthers(payload) {
		return super.doRequest('get', 'im.messages.others', payload);
	}

	open(payload) {
		return super.doRequest('post', 'im.open', payload);
	}

	setTopic(payload) {
		return super.doRequest('post', 'im.setTopic', payload);
	}

}
