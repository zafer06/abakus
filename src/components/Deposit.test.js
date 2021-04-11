import { calculate } from "./Deposit"
import { formatNumber } from "../utils"

describe("Mevduat faizi hesaplama testleri", () => {

  test("Genel hesaplama testi", () => {
    let form = {
      amount: "1000",
      ratio: "17",
      expiry: "32",
      taxRate: "5",
      freeAmount: "0",
    }

    let report = calculate(form)

    expect(formatNumber(report.netAmount)).toBe("14,16")
  });

  test("Tam sayılarla hesaplama testi", () => {
    let form = {
      amount: "1000",
      ratio: "10",
      expiry: "32",
      taxRate: "15",
      freeAmount: "0",
    }

    let report = calculate(form)

    expect(formatNumber(report.netAmount)).toBe("7,45")
  });

  test("Virgüllü sayılarla hesaplama testi", () => {
    let form = {
      amount: "1000,95",
      ratio: "10,25",
      expiry: "32",
      taxRate: "15",
      freeAmount: "0",
    }

    let report = calculate(form)

    expect(formatNumber(report.netAmount)).toBe("7,65")
  });

});