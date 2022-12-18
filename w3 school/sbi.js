class saving_account {
  minimum_balance = 500;
  acc_bal = 1000;
  acc_Id;
  acc_Name;
  acc_Amount;
  constructor(Id, Name, Amount) {
    this.acc_Id = Id;
    this.acc_Name = Name;
    this.acc_Amount = Amount;
  }

  open_account() {
    console.log("succesfully completd open accout");
  }

  diposite_Amount(Amount) {
    this.acc_bal = this.acc_bal + Amount;
  }
  withdraw() {}
  getstatemremt() {}
  getBal() {}
  close_account() {
    console.log("succeesfully close account");
  }
}
let user1 = new saving_account(101, "srinu", 21000);
let user2 = new saving_account(102, "vasu", 2900);
console.log(user1);
console.log(user2);
