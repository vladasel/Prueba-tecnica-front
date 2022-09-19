import { Component } from '@angular/core';
import { TokenStorageService } from './_services/token-storage.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'prueba-tecnica-front';

  isLoginFailed = false;
  isLoggedInView = false;
  errorMessage = '';

  isLoggedIn = false;
  showUserBoard = false;
  usernameView?: string;



  constructor(private tokenStorageService: TokenStorageService, private authService: AuthService, public router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const token = this.tokenStorageService.getToken();
    }
  }

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.href = "";
    this.isLoggedIn = false;


  }

  onSubmit(): void {

    this.authService.login().subscribe(
      data => {
        this.isLoggedInView = true;
        this.tokenStorageService.saveToken(data["token"]);

        this.isLoginFailed = false;
        this.isLoggedIn = true;




      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }
}

