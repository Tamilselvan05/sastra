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
		if (this.admin.userName !== '' && this.admin.password !== '') {
			console.log("admin ", this.admin);

			this.api.adminLogin(this.admin).subscribe((data: any) => {
				console.log("data", data);
				if (data.passStudDocs && data.passStudDocs.passedOutStudent && data.passStudDocs.passedOutStudent === 'passedOutStudent') {
					console.log("------------", data.passStudDocs.name);
					this.api.isAdminLOgin = true
					this.router.navigate(['/pststudpost']);
					localStorage.setItem('isPassedout', 'true');
					localStorage.setItem('isCurrent', 'false');

				} else if (data.currentStuDocs && data.currentStuDocs.currentStudent && data.currentStuDocs.currentStudent === "currentStudent") {
					this.api.isAdminLOgin = true;
					this.router.navigate(['/card']);
					localStorage.setItem('isCurrent', 'true');
					localStorage.setItem('isPassedout', 'false');


				} else if (data.data.isUserFound) {
					console.log("elseee");

					this.api.isAdminLOgin = true;
					localStorage.setItem('isCurrent', 'false');
					localStorage.setItem('isPassedout', 'false');

					this.router.navigate(['/card']);
				} else {
					console.log("elseeeeee");

					alert("User not found");
				}
			});
		} else {
			alert("Please enter username and password")
		}

	}

	register() {
		// console.log(this.admin,'adminloginchk')
		this.router.navigate(['/register']);
		this.api.isAdminLOgin = true;
		// console.log('regcomponent')

		/// admin

		// if (data.data.isUserFound) {
		// 	// return
		// 	this.api.isAdminLOgin = true;
		// } else {
		// 	this.api.isAdminLOgin = false;
		// 	alert("Admin not found");
		// }
	}
}
