import axios from 'axios';

export default axios.create({
	baseURL: 'https://api.unsplash.com',
	headers: {
		Authorization: 'Client-ID 7b68244e1f2d16551fa2ad9f80232af133e49947d2912768b65b87cc2259251e'
	}
});