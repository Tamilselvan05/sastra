import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../api.service';

@Component({
	selector: 'app-logout',
	templateUrl: './logout.component.html',
	styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {
	// router: any;
	admin = {
		userName: "",
		password: "",
	};
	constructor(public api: ApiService, private router: Router) { }

	ngOnInit(): void {
		console.log(this.admin, 'adminloginchk')
	}
	loginSave() {
		this.api.adminLogin(this.admin).subscribe((data: any) => {
			if (data.data.isUserFound) {
				this.router.navigate(['/card'])
				this.api.isAdminLOgin = true;
			} else {
				this.api.isAdminLOgin = false;
				alert("Admin not found");
			}
		})

	}

	register() {
		// console.log(this.admin,'adminloginchk')
		this.router.navigate(['/register'])
		// console.log('regcomponent')
	}
}
