
export default class ServiceApi{
   _apiBase = 'https://www.breakingbadapi.com/api/';


  async getResource(url) {
    const res = await fetch(`${url}`);
    if(!res.ok){
      throw new Error('Error');
    }
    const body = await res.json();
    return body;
  }

  getAllPeople(){
    return this.getResource(`${this._apiBase}characters/`);
  }
  getCharacter(id){
    return this.getResource(`${this._apiBase}characters/${id}/`);
  }
  getRandomQuote(){
    return this.getResource(`${this._apiBase}quote/random`);
  }

}
