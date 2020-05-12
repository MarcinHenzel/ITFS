import { InitDataService } from './../../services/init-data.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-deleg-form',
  templateUrl: './add-deleg-form.component.html',
  styleUrls: ['./add-deleg-form.component.scss']
})
export class AddDelegFormComponent implements OnInit {
  regList$;
  isBusinessTransport = false;
  addDelegForm: FormGroup = this.formBuilder.group({
    firstName: '',
    lastName: '',
    from: '',
    to: '',
    delegationNumber: '',
    destination: '',
    delegationPlace: '',
    companyName: '',
    costs: '',
    currency: '',
    advancePayment: '',
    transport: '',
    registration: '',
  })

  constructor(private formBuilder: FormBuilder, private initService: InitDataService) {

  }
  ngOnInit() {
    this.regList$ = this.initService.getRegs();
    //GET DATA TO REGISTRATIONS
    /*     this.categoryserv.senddata(this.form.value.categoryname).subscribe(data=>{
          console.log(data);
        } */
    /* @Injectable()
    export class CategoryService {
        private urlcategory = "http://localhost:8080/create-category";
        constructor(private http: Http){
       senddata(data : any)
         var body = JSON.stringify(data);
                var headers = new Headers();
                headers.append('Content-Type', 'application/json');
                return this.http.post(this.urlcategory, body, { headers: headers }).map((data: Response) => data.json()).catch(this.handleError);
     }

    } */
  }
  onSubmit() {
    console.log(this.addDelegForm.value)
  }
  change(ev) {
    if (ev === 'business') {
      this.isBusinessTransport = true;
    } else {
      this.isBusinessTransport = false;
    }
  }
}
