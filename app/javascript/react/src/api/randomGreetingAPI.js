class RandomGreetingApi {
  static baseURL = '/random_greeting';

  static getRandomGreeting = async () => fetch(this.baseURL, {
    method: 'GET',
  }).then(async (response) => {
    if (response.status === 200) {
      const data = await response.json();
      return data['message'];
    }
    return null;
  });
}

export default RandomGreetingApi;
