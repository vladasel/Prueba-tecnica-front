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

  form: any = {
    username: null,
    password: null
  };

  constructor(private tokenStorageService: TokenStorageService, private authService: AuthService, public router: Router) { }

  ngOnInit(): void {
    this.isLoggedIn = !!this.tokenStorageService.getToken();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      const token = this.tokenStorageService.getToken();
      this.usernameView = JSON.stringify(user).replace(/['"]+/g, ''); // faig un regex per treure-li les cometes



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
        this.usernameView = this.form.username;
        this.isLoggedInView = true;

        this.tokenStorageService.saveToken(data["token"]);
        this.tokenStorageService.saveUser(this.form.username);
        console.log(this.tokenStorageService.saveUser(this.form.username));



        this.usernameView = this.form.username;


        this.isLoginFailed = false;
        this.isLoggedIn = true;

        window.location.reload();


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

