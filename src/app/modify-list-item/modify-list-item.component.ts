import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {User} from "../Shared/Model/User";
import {UserService} from "../Services/user.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-modify-list-item',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgIf
  ],
  templateUrl: './modify-list-item.component.html',
  styleUrl: './modify-list-item.component.css'
})
export class ModifyListItemComponent implements OnInit {
  userForm: FormGroup;
  user: User | undefined;
  error: string | null = null;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private router:Router,
    private route: ActivatedRoute
  ) {
    this.userForm = this.fb.group({
      id:[userService.generateNewId()],
      CharacterName:['',Validators.required],
      power: ['',Validators.required],
      weapons: ['',Validators.required],
      age: ['',Validators.required],
      photos: ['',Validators.required],
      iscanfly:[false]
    });
  }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.userService.getUserById(id).subscribe({
        next: student =>{
        if(student) {
          this.userForm.patchValue(student);
        }
      },
        error: err => {
        this.error = 'Error fetching user.';
        console.error('Error fetching user.',err);
        }
      });
    }
  }

  onSubmit(): void {
    if (this.userForm.valid
    ) {
      const user: User = this.userForm.value;
      if (user.id) {
        this.userService.updateUser(user).subscribe(() => this.router.navigate(['/MarvelComics']));
      } else {
        user.id = this.userService.generateNewId();
        this.userService.addUser(user).subscribe(() => this.router.navigate(['/MarvelComics']));
      }
    }
  }
   navigateToStudentList(): void {
    this.router.navigate(['/MarvelComics']);
    }

}
