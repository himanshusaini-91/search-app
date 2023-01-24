import { Injectable } from '@angular/core';
import { Octokit } from "octokit";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { 

    
  }
  async getUsers(searchValue: string) {
    const octokit = new Octokit({
      auth: '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'
    })
    const data = await octokit.request(`GET /search/users`, {q:searchValue})
    return  data
  }
}
