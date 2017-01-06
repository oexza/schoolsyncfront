import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MdCardModule } from '@angular/material';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-school-home',
  templateUrl: './school-home.component.html',
  styleUrls: ['./school-home.component.css']
})
export class SchoolHomeComponent implements OnInit {

  staffLoginForm: FormGroup;
  //sub: Subscription

  constructor(private auth: AuthService, private activatedRoute: ActivatedRoute, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.staffLoginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  staffLogin() {
    console.log(this.staffLoginForm.value)
    const userPass = this.staffLoginForm.value
    const schoolId = this.activatedRoute.parent.snapshot.params['schoolId']
    //alert(schoolId)

    this.auth.login({ username: userPass.email, passsword: userPass.password, schoolId: schoolId }).subscribe((data) => {
      alert(JSON.stringify(data))
      if (data.staff) {
        if (this.auth.redirectUrl)
          this.router.navigateByUrl(this.auth.redirectUrl)
        else
          this.router.navigate(['/', schoolId, 'staff'])
      }
    })
  }
}
