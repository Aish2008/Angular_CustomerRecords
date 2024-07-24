import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent {

  CustomerArray : any[] = [];
  isResultLoaded = false;
  isUpdateFormActive = false;

  
  customername: string ="";
  customeraddress: string ="";
  mobile: Number =0;

  currentCustomerID = "";

  constructor(private http: HttpClient ) 
  {
    this.getAllCustomers();

  }
  getAllCustomers()
  { 
    
    this.http.get("http://localhost:8084/api/v1/customer/getAllCustomers")
  
    .subscribe((resultData: any)=>
    {
        this.isResultLoaded = true;
        console.log(resultData);
        this.CustomerArray = resultData;
    });
  }

  register()
  {
   
    let bodyData = {
      "customername" : this.customername,
      "customeraddress" : this.customeraddress,
      "mobile" : this.mobile
    };

    this.http.post("http://localhost:8084/api/v1/customer/save",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Customer Record saved Successfully")
        this.getAllCustomers();
        this.customername = '';
        this.customeraddress = '';
        this.mobile  = 0;
    });
  }

  setUpdate(data: any) 
  {
   this.customername = data.name;
   this.customeraddress = data.address;
   this.mobile = data.mobile;
   this.currentCustomerID = data.id;
  }

  UpdateRecords()
  {
    let bodyData = {
      "customerid" : this.currentCustomerID,
      "customername" : this.customername,
      "customeraddress" : this.customeraddress,
      "mobile" : this.mobile,
    };
    
    this.http.put("http://localhost:8084/api/v1/customer/update",bodyData,{responseType: 'text'}).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Customer Record Updated")
        this.getAllCustomers();
        this.customername = '';
        this.customeraddress = '';
        this.mobile  = 0;
    });
  }



  save()
  {
    if(this.currentCustomerID == '')
    {
        this.register();
    }
      else
      {
       this.UpdateRecords();
      }       

  }


  setDelete(data: any)
  {
    
    
    this.http.delete("http://localhost:8084/api/v1/customer/deleteCustomer"+ "/"+ data.id).subscribe((resultData: any)=>
    {
        console.log(resultData);
        alert("Customer Record Deleted")
        this.getAllCustomers();
   
    });

  }
}

