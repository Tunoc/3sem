/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dto;

import entities.BankCustomer;

/**
 *
 * @author rando
 */
public class CustomerDTO {

    private Integer customerID;
    private String fullName;
    private String accountNumber;
    private double balance;

    //Constructor(s)
    public CustomerDTO(BankCustomer bk) {
        this.customerID = bk.getId();
        this.fullName = bk.getFirstName() + " " + bk.getLastName();
        this.accountNumber = bk.getAccountNumber();
        this.balance = bk.getBalance();
    }

    public CustomerDTO() {
    }

    //Getters & Setters
    public int getCustomerID() {
        return customerID;
    }

    public void setCustomerID(int customerID) {
        this.customerID = customerID;
    }

    public String getFullName() {
        return fullName;
    }

    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    public String getAccountNumber() {
        return accountNumber;
    }

    public void setAccountNumber(String accountNumber) {
        this.accountNumber = accountNumber;
    }

    public double getBalance() {
        return balance;
    }

    public void setBalance(double balance) {
        this.balance = balance;
    }

    @Override
    public String toString() {
        return "CustomerDTO{" + "customerID=" + customerID + ", fullName=" + fullName + ", accountNumber=" + accountNumber + ", balance=" + balance + '}';
    }

}
