import { Request } from './request';

export class Channels extends Request {

	addAll(payload) {
		return super.doRequest('post', 'channels.addAll', payload);
	}

	addModerator() {
		return super.doRequest('post', 'channels.addModerator', payload);
	}

	addOwner(payload) {
		return super.doRequest('post', 'channels.addOwner', payload);
	}

	archive(payload) {
		return super.doRequest('post', 'channels.archive', payload);
	}

	cleanHistory(payload) {
		return super.doRequest('post', 'channels.cleanHistory', payload);
	}

	close(payload) {
		return super.doRequest('post', 'channels.close', payload);
	}

	create(payload) {
		return super.doRequest('post', 'channels.create', payload);
	}

	getIntegrations(payload) {
		return super.doRequest('get', 'channels.getIntegrations', payload);
	}

	history(payload) {
		return super.doRequest('get', 'channels.history', payload);
	}

	info(payload) {
		return super.doRequest('post', 'channels.info', payload);
	}

	invite(payload) {
		return super.doRequest('post', 'channels.invite', payload);
	}

	kick(payload) {
		return super.doRequest('post', 'channels.kick', payload);
	}

	leave(payload) {
		return super.doRequest('post', 'channels.leave', payload);
	}

	list() {
		return super.doRequest('post', 'channels.list');
	}

	listJoined() {
		return super.doRequest('get', 'channels.list.joined');
	}

	open(payload) {
		return super.doRequest('post', 'channels.open', payload);
	}

	removeModerator(payload) {
		return super.doRequest('post', 'channels.removeModerator', payload);
	}

	removeOwner(payload) {
		return super.doRequest('post', 'channels.removeOwner', payload);
	}

	rename(payload) {
		return super.doRequest('post', 'channels.rename', payload);
	}

	setDescription(payload) {
		return super.doRequest('post', 'channels.setDescription', payload);
	}

	setJoinCode(payload) {
		return super.doRequest('post', 'channels.setJoinCode', payload);
	}

	setPurpose(payload){
		return super.doRequest('post', 'channels.setPurpose', payload);
	}

	setReadOnly(payload){
		return super.doRequest('post', 'channels.setReadOnly', payload);
	}

	setTopic(payload){
		return super.doRequest('post', 'channels.setTopic', payload);
	}

	setType(payload) {
		return super.doRequest('post', 'channels.setType', payload);
	}

	unarchive(payload) {
		return super.doRequest('post', 'channels.unarchive', payload);
	}
}
