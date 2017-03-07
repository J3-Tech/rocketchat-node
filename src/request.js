import axios from 'axios'

export class Request {

	_client = null;

	constructor(client) {
		this._client = client;
	}

	doRequest(type, resource, parameters) {
		if(type.toLowerCase() === 'post'){
			return this._client.instance.post(resource, parameters);
		}
		return this._client.instance.get(resource, parameters);
	}
}
