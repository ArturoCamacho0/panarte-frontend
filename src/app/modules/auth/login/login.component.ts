import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  email = '';
  password = '';
  status = '';
  loading = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    if(localStorage.getItem('token') != null){
      this.router.navigate(['/']);
    }
  }

  login() {
    this.loading = true;

    this.userService.login(this.email, this.password).subscribe({
      next: (response) => {
        const res = JSON.parse(JSON.stringify(response));

        if (res.token && res.user) {
          localStorage.setItem('token', res.token);
          localStorage.setItem('user', JSON.stringify(res.user));
          this.router.navigate(['/']);
          this.status = 'success';
        }else{
          this.status = 'error';

          setTimeout(() => {
            this.status = '';
          }, 5000);
        }

        this.loading = false;
      },
      error: (error) => {
        console.log(error);
        this.status = 'error';
        this.loading = false;

        setTimeout(() => {
          this.status = '';
        }, 5000);
      }
    });
  }

}
