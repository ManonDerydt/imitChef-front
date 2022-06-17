import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { StorageService } from './storage.service';

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(public storageService: StorageService, public router: Router) {}
  async canActivate(): Promise<boolean> {
    const user = await this.storageService.get("user");
    if (user) {
      return true;
    } else {
      this.router.navigate(["home/sign_in"])
      return false;
    }
  }
}