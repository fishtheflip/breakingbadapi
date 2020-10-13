
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

const bbapi = new ServiceApi();

// bbapi.getAllPeople().then((obj)=>{
//   obj.forEach((c)=>{console.log(c.appearance.join(' '));})
// });

// bbapi.getCharacter(11).then((body)=>{
//   console.log( body[0].appearance);
// });
// bbapi.getRandomQuote().then((body)=>{
//   console.log(body[0].quote);
// })

// .appearance.join(' ')




// const getResource = async (url) =>{
//     const res = await fetch(url);
//     if(!res.ok){
//       throw new Error('Error');
//     }
//     const body = await res.json();
//     return body;
// }

// getResource('https://www.breakingbadapi.com/api/characters/8')
//     .then((body)=>{
      
//       console.log(body);
//     })
//     .catch((err)=>{

//     })


// fetch('https://www.breakingbadapi.com/api/characters/')
//   .then((res)=>{
//   return res.json();
// })
//   .then((body)=>{
//     console.log(body);
//   });