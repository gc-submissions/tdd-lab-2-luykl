/**
 * This class handles change for a vending machine.
 * 
 * IMPORTANT: All amounts are in cents. E.g. $1.35 = 135. This will help with rounding errors.
 */
class ChangeHandler {
    
    constructor(amountDue) {
        this.amountDue = amountDue;
        this.cashTendered = 0;
    }

    /**
     * The customer inserts a coin, increasing the cashTendered.
     * @param {string} type either quarter, dime, nickel, or penny
     */
    insertCoin(type) {
      if ( type === "quarter") {
        this.cashTendered += 25;
      } else if (type === "dime") {
        this.cashTendered += 10;
      } else if (type === "nickel") {
        this.cashTendered += 5;
      } else if (type === "penny") {
        this.cashTendered += 1;
      }
    }

    /**
     * Returns true if enough coins have been inserted to at least meet the amountDue
     */
    isPaymentSufficient() {
      if (this.cashTendered >= this.amountDue) {
        return true;
      } else {
        return false;
      }
    }

    giveChange() {
      let totalChange = this.cashTendered - this.amountDue;
      let quartersChange = Math.floor( totalChange / 25 );
      let dimesChange = Math.floor( (totalChange - quartersChange * 25) / 10 );
      let nickelsChange = Math.floor( (totalChange - quartersChange * 25 - dimesChange * 10) / 5 );
      let penniesChange = Math.floor(totalChange - quartersChange * 25 - dimesChange * 10 - nickelsChange * 5);
        return {
            quarters: quartersChange,
            dimes: dimesChange,
            nickels: nickelsChange,
            pennies: penniesChange
        }
    }
}

module.exports = ChangeHandler;