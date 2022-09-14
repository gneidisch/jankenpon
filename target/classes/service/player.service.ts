import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MyPlayer } from '../model/my-player';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class PlayerService {

  private playersUrl: string;

  constructor(private http: HttpClient) {
    this.playersUrl = 'http://localhost:8080/players';
  }

  public findAll(): Observable<MyPlayer[]> {
    return this.http.get<MyPlayer[]>(this.playersUrl);
  }

  public findByNameOrCreate(player: MyPlayer) {
    return this.http.get<MyPlayer>('http://localhost:8080/player/' + player.name + '');
  }

  public findByName(playerName: String) {
    return this.http.get<MyPlayer>('http://localhost:8080/player/' + playerName + '');
  }

  public save(player: MyPlayer) {
    return this.http.post<MyPlayer>(this.playersUrl, player);
  }

  public update(player: MyPlayer) {
    return this.http.put<MyPlayer>(this.playersUrl, player);
  }
}
