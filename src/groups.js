import { Request } from './request';

export class Groups extends Request {

	addModerator(payload) {
		return super.doRequest('post', 'groups.addModerator', payload);
	}

	addOwner(payload) {
		return super.doRequest('post', 'groups.addOwner', payload);
	}

	archive(payload) {
		return super.doRequest('post', 'groups.archive', payload);
	}

	close(payload) {
		return super.doRequest('post', 'groups.close', payload);
	}

	create(payload) {
		return super.doRequest('post', 'groups.create', payload);
	}

	getIntegrations(payload) {
		return super.doRequest('get', 'groups.getIntegrations', payload);
	}

	history(payload) {
		return super.doRequest('get', 'groups.history', payload);
	}

	info(payload) {
		return super.doRequest('get', 'groups.info', payload);
	}

	invite(payload) {
		return super.doRequest('post', 'groups.invite', payload);
	}

	kick(payload) {
		return super.doRequest('post', 'groups.kick', payload);
	}

	leave(payload) {
		return super.doRequest('post', 'groups.leave', payload);
	}

	list() {
		return super.doRequest('post', 'groups.list');
	}

	open(payload) {
		return super.doRequest('get', 'groups.open', payload);
	}

	removeModerator(payload) {
		return super.doRequest('post', 'groups.removeModerator', payload);
	}

	removeOwner(payload) {
		return super.doRequest('post', 'groups.removeOwner', payload);
	}

	rename(payload) {
		return super.doRequest('post', 'groups.rename', payload);
	}

	setDescription(payload) {
		return super.doRequest('post', 'groups.setDescription', payload);
	}

	setPurpose(payload) {
		return super.doRequest('post', 'groups.setPurpose', payload);
	}

	setReadOnly(payload) {
		return super.doRequest('post', 'groups.setReadOnly', payload);
	}

	setTopic(payload) {
		return super.doRequest('post', 'groups.setTopic', payload);
	}

	setType(payload) {
		return super.doRequest('post', 'groups.setType', payload);
	}

	unarchive() {
		return super.doRequest('post', 'groups.unarchive', payload);
	}
}
