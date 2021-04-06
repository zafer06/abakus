import { calculate } from "./Deposit"

const expected = true
const actual = true

test("it works", () => {
  expect(actual).toBe(expected)
})

test("Basit faiz hesaplama", () => {
  let form = {
    amount: "100",
    ratio: "10",
    expiry: "32",
    taxRate: "15",
    freeAmount: "0",
  }

  let report = calculate(form)

  expect(report.amount).toBe("100,00 TL")
  expect(report.tax).toBe("0,13 TL")
})