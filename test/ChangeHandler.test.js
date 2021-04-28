const ChangeHandler = require("../src/js/ChangeHandler");

describe("ChangeHandler", function() {
  test("class is defined", function() {
    // Remember, you can arrange, act, and assert...start small
    expect(ChangeHandler).toBeDefined();
  });

  // TODO: Add additional tests below...
  //CONSTRUCTOR
  test("amountDue set with argument", function() {
    const ch = new ChangeHandler(5)
    expect(ch.amountDue).toBe(5);
  });

  test("different amountDue set with argument", function() {
    const ch = new ChangeHandler(165)
    expect(ch.amountDue).toBe(165);
  });

  test("0 amountDue set with argument", function() {
    const ch = new ChangeHandler(0);
    expect(ch.amountDue).toBe(0);
  });

  test("cashTendered set to zero", function() {
    const ch = new ChangeHandler(7);
    expect(ch.cashTendered).toBe(0);  
  });

  //INSERTCOIN
  test("insert quarter", function() {
    const ch = new ChangeHandler(100);
    ch.insertCoin("quarter");
    expect(ch.cashTendered).toBe(25);  
  });

  test("insert dime", function() {
    const ch = new ChangeHandler(20);
    ch.insertCoin("dime");
    expect(ch.cashTendered).toBe(10);  
  });

  test("insert nickel", function() {
    const ch = new ChangeHandler(50);
    ch.insertCoin("nickel");
    expect(ch.cashTendered).toBe(5);  
  });

  test("insert penny", function() {
    const ch = new ChangeHandler(100);
    ch.insertCoin("penny");
    expect(ch.cashTendered).toBe(1);  
  });

  test("insert two", function() {
    const ch = new ChangeHandler(7);
    ch.insertCoin("penny");
    ch.insertCoin("penny");
    expect(ch.cashTendered).toBe(2);  
  });

  test("insert multiple", function() {
    const ch = new ChangeHandler(1000);
    ch.insertCoin("penny");
    ch.insertCoin("nickel");
    ch.insertCoin("dime");
    ch.insertCoin("quarter");
    ch.insertCoin("penny");
    expect(ch.cashTendered).toBe(42);  
  });

  //PAYMENT
  test("cashTendered > amountDue -> true", function() {
    const ch = new ChangeHandler(15);
    ch.insertCoin("dime");
    ch.insertCoin("dime");
    let result = ch.isPaymentSufficient();
    expect(result).toEqual(true);  
  });

  test("cashTendered = amountDue -> true", function() {
    const ch = new ChangeHandler(15);
    ch.insertCoin("dime");
    ch.insertCoin("nickel");
    let result = ch.isPaymentSufficient();
    expect(result).toEqual(true);  
  });

  test("cashTendered < amountDue -> false", function() {
    const ch = new ChangeHandler(100);
    ch.insertCoin("dime");
    ch.insertCoin("quarter");
    let result = ch.isPaymentSufficient();
    expect(result).toEqual(false);  
  });



  
  
  

  

   



});