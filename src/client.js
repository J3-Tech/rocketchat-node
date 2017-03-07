import axios from 'axios'

export class Client {

	_instance = null;
	_scheme = 'http://';
	_hostname = 'localhost';
	_port = 3000;
	_client = null;

	constructor() {
		this.create();
	}

	get scheme() {
		return this._scheme;
	}

	set scheme(scheme) {
		this._scheme = scheme;

		return this.create();
	}

	get hostname() {
		return this._hostname;
	}

	set hostname(hostname) {
		this._hostname = hostname;

		return this.create();
	}

	get port() {
		return this._port;
	}

	set port(port) {
		this._port = port;

		return this.create();
	}

	get instance() {
		return this._instance;
	}

	set instance(instance) {
		this._instance = instance;

		return this;
	}

	create() {
		this._instance = axios.create({
  		baseURL: this.getApiUrl()
		});

		return this;
	}

	getApiUrl() {
		return `${this._scheme}${this._hostname}:${this._port}/api/v1/`;
	}
}
