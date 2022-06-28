import { HttpService } from './httpService'
export class AuthService {
	constructor() {
		this.authEndpoint = `${process.env.apiEndpoint}/authnz`
		this.tokenKey = 'token'
		this.httpService = new HttpService()
	}

	async login(email, password) {
		const { data: jwt } = this.httpService.post(
			this.authEndpoint + '/login_email',
			{ email, password }
		)
		localStorage.setItem(this.tokenKey, jwt)
	}

	loginWithJWT(jwt) {
		localStorage.setItem(this.tokenKey, jwt)
	}

	logout() {
		localStorage.removeItem(this.tokenKey)
	}

	currentUser() {
		return localStorage.getItem(this.tokenKey)
			? localStorage.getItem(this.tokenKey)
			: null
	}

	getJWT() {
		return localStorage.getItem(this.tokenKey)
	}
}
