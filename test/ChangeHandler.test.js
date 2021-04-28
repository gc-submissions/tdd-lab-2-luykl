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
    const ch = new ChangeHandler(0)
    expect(ch.amountDue).toBe(0);
  });

  test("cashTendered set to zero", function() {
    const ch = new ChangeHandler(7)
    expect(ch.cashTendered).toBe(0);  
  });

  
  
  

  

   



});