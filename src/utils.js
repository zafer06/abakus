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
    // Create our number formatter.
    let formatter = new Intl.NumberFormat('tr-TR', {
        style: 'decimal',
        currency: 'TRY',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
        // These options are needed to round to whole numbers if that's what you want.
        //minimumFractionDigits: 0, // (this suffices for whole numbers, but will print 2500.10 as $2,500.1)
        //maximumFractionDigits: 0, // (causes 2500.99 to be printed as $2,501)
    });
  
    return formatter.format(number);
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
 * @returns number
 */
export function diffDays(begin, end) {
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    return Math.round(Math.abs((begin - end) / oneDay));
}