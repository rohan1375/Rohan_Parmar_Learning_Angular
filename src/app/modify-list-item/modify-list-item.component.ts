import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from "@angular/forms";
import {User} from "../Shared/Model/User";
import {UserService} from "../Services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {HighlightOnFocusDirective} from "../directives/highlight-on-focus.directive";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {MatTooltipModule} from "@angular/material/tooltip";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HighlightOnFocusDirective,
    MatInputModule,
    MatButtonModule,
    MatTooltipModule
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent implements OnInit {
  userForm: FormGroup;
  userList: User | undefined;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router:Router,
    private route: ActivatedRoute
  ) {
    this.userForm = this.fb.group({
      id:['',Validators.required],
      CharacterName:['',Validators.required],
      power: ['',Validators.required],
      weapons: [''],
      age: [''],
      photos: [''], iscanfly:[false]
    });
  }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getUserById(+id).subscribe (student => {
        if(student) {
          this.userList = student;

          this.userForm.patchValue(student);
        }
      });
    }
  }
  onSubmit(): void {
    const user: User = this.userForm.value;
    if (user.id) {
      this.userService.updateUser(user);
    } else {
      const newId = this.userService.generateNewId();
      user.id = newId;
      this.userService.addUser(user);
    }
    this.router.navigate(['/MarvelComics']);
  }
   navigateToStudentList(): void {
    this.router.navigate(['/MarvelComics']);
    }

}
