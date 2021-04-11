/* Utils functions */

/**
 * Bugünün tarihine parametre ile geçilen gün kadar gün ekler ve elde edilen
 * yeni tarih değerini geri verir.
 * 
 * @param {number} days 
 * @returns {date}
 */
export function addDays(days) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    
    let today = new Date();
    return new Date(today.getTime() + days * oneDay);
}

/**
 * Parametre ile geçilen sayısal değeri Türkçe para tutarı yazım kurallarına 
 * göre biçimlendirip geri verir.
 * 
 * @param {number} number 
 * @returns {string}
 */
export function formatNumber(number) {
  if (isNaN(number)) return "0,00"

  // Create our number formatter.
  let formatter = new Intl.NumberFormat('tr-TR', {
    maximumFractionDigits: 2,  
    minimumFractionDigits: 2,
    style: 'decimal',
    currency: 'TRY'
  });

  return formatter.format(number.toFixed(2));
}

/**
 * Parametre ile geçilen tarih bilgisini Türkçe tarih yazım kurallarına göre
 * biçimlendirip geri verir.
 * 
 * @param {date} date 
 * @returns {string}
 */
export function formatDate(date) {
  let formatter = new Intl.DateTimeFormat('tr-TR', {
      dateStyle: 'full',
      timeStyle: 'short'
  });
  return formatter.format(date);
}

/**
 * Başlangıç ve bitiş tarihlerini parametre olarak alır ve bu iki tarih
 * arasındaki gün farkını geri verir.
 * 
 * @param {number} begin 
 * @param {number} end 
 * @returns {number}
 */
export function diffDays(begin, end) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    return Math.round(Math.abs((begin - end) / oneDay));
}

/**
 * Metin olarak alınan bilgiyi sayısal biçime uygun şekilde biçimlendirir ve 
 * geri verir.
 * 
 * @param {string} strNumber 
 * @returns {number}
 */
export function stringToNumber(strNumber) {
  return Number(strNumber.replace(",", "."));
}