export const BASE_URL = 'https://16.ecmascript.pages.academy/big-trip/';

const Paths = {
  points: 'points/',
};

const Methods = {
  GET:'GET',
};

const ContentTypes = {
  JSON: 'application/json',
};

export class ApiProvider{
  #baseUrl = null;
  #authorization = `${Math.random()}-${Math.random()}`;
  constructor(baseUrl){
    this.#baseUrl=baseUrl;
  }

  #request = async (url, headers=new Headers(), method=Methods.GET, body=undefined)=>{
    headers.append('authorization',`Basic ${this.#authorization}`);
    const response = await fetch(url,{headers,body, method});
    if( !response.ok){
      throw new Error(`${response.status} - ${response.statusText}`);
    }
    return await response.json();
  }

  #getUrl = (path)=>`${this.#baseUrl}${path}`;

  getPoints = async ()=>await this.#request(this.#getUrl(Paths.points));

  postPoint = async (localPoint)=>await this.#request(this.#getUrl(Paths.points),new Headers({'content-type':ContentTypes.JSON}, JSON.stringify(localPoint)));

  putPoint = async (point)=>{
    throw new Error(JSON.stringify(point));
  }

  deletePoint = async (point)=>{
    throw new Error(JSON.stringify(point));
  }

  getDestinations = async ()=>{
    throw new Error();
  }

  getOffers = async()=>{
    throw new Error();
  }
}
