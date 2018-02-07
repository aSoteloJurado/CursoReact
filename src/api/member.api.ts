import {MemberEntity} from '../model/member';
import {MembersMockData} from './member.mock.data';

// Sync mock data API, inspired from:
// https://gist.github.com/coryhouse/fd6232f95f9d601158e4
class MemberAPI {
    
  // Just return a copy of the mock data
  getAllMembers() : Promise<MemberEntity[]> {
    const gitHubMembersUrl : string = 'https://api.github.com/orgs/lemoncode/members';
  
    return fetch(gitHubMembersUrl)
      .then((response) => this.checkStatus(response))
      .then((response) => this.parseJSON(response))
      .then((data) => this.resolveMembers(data))
      ;
  }
  
  private checkStatus(response : Response) : Promise<Response> {
    if (response.status >= 200 && response.status <300) {
      return Promise.resolve(response);
    } else {
      let error = new Error(response.statusText);
      throw error;
    }
  }

  private parseJSON (response ) {
    return response.json();
  }

  private resolveMembers(data : any) : Promise<MemberEntity[]> {
    const members = data.map((gitHubMember)  => ({
      id: gitHubMember.id,
      login: gitHubMember.login,
      avatar_url: gitHubMember.avatar_url,
    }));

    return members;
  }
}

export const memberAPI = new MemberAPI();