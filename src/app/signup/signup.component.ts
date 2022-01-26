import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserForm } from '../forms/userForm';
import { User } from '../models/user';
import { UsersService } from '../services/users.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  userForm!: FormGroup
  userModel!: User

  constructor(private userService: UsersService,
    private fb: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.userForm = this.fb.group(new UserForm());
  }

  submit() {
    this.userModel = this.userForm.value;

    if (this.userForm.status != 'INVALID')
      this.userService.create(this.userModel).subscribe({
        next: () => this.router.navigate(['/mapping']),
        error: (e) => console.log(e)
      })
      else this.swalResponse('Formulário mal preenchido', 'error')
  }

  swalResponse(text: any, icon: any) {
    return Swal.fire({
      text: text,
      icon: icon,
      showConfirmButton: false,
      background: '#141B2D',
      color: '#ccc'
    })
  }
}
