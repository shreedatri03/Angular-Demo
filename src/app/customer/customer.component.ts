import {Component, ViewChild} from '@angular/core';
import { NgForm } from '@angular/forms';
import {Customer} from "../model/customer";
@Component({
    selector:'customer',
    templateUrl:'./customer.component.html'
})

export class customerComponent{
    Customers:Array<Customer>;
    IsAddNew:boolean;
    FirstName:string;
    LastName:string;
    @ViewChild('myForm')
    CustomerForm!: NgForm;
    constructor(){
        this.IsAddNew=false;
        this.FirstName='';
        this.LastName='';
        this.Customers=new Array<Customer>();
        this.Customers.push(new Customer("Shreedatri","Banerjee"));
        this.Customers.push(new Customer("Arijit","Das"));
    }
    Reset(){
        this.CustomerForm.reset();
    }
    Save(){
        this.Customers.push(new Customer(this.FirstName,this.LastName));
        this.IsAddNew=false;
    }
    Cancel(){
        this.IsAddNew=false;
        this.Reset();
    }
    AddNew(){
        this.IsAddNew=true;
    }
}