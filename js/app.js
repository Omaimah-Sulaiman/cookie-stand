

let continer=document.getElementById('continer')
let tableEl=document.createElement('table')
continer.appendChild(tableEl);
let  hour=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let locaiton=['seattel','Tokyo','Paris','Lima','Dubai']
// let stores={
//     seatel:[23,65,6.3],
//     Tokyo:[3,24,2.1],
//     Paris:[11,38,3.7],
//     Lima:[2,16,4.6],
//     Dubai:[11,38,3.7],
// }

//  the heading of table 
let fistRow=document.createElement('tr')
    tableEl.appendChild(fistRow)

    let thEl=document.createElement('th')
    fistRow.appendChild(thEl)
    thEl.textContent='location'

    for(let i=0;i<hour.length;i++){
        let thEl=document.createElement('th')
        fistRow.appendChild(thEl)
        thEl.textContent=hour[i]
    }

    let thLast=document.createElement('th')
    fistRow.appendChild(thLast)
    thLast.textContent='Daily Location Total'


function SalmonCookie(cityName,min,max,avr){
    this.cityName=cityName;
    this.min=min;
    this.max=max;
    this.avr=avr;
    this.cookies=[];
    this.customer=[];
    this.sum=0;
}
// get number of customer per hour
SalmonCookie.prototype.getNumOfCustomer=function(){
            let customers=0;
            for(let i=0;i<hour.length;i++){
                customers=Math.floor(Math.random() * (this.max - this.min)) + this.min;
                // console.log('CUSTOMER',customers)
                this.customer.push(customers)
            }
        }
// funcion to get number of cookie per hour
SalmonCookie.prototype.getNumCookies=function(){
    let cookies=0;
    for(let i=0;i<hour.length;i++){
        cookies=Math.floor(this.customer[i]*this.avr)
        this.cookies.push(cookies)
        // console.log('COOKIES',this.cookies[i])
    
    }
}
// function to sum of cookies per day
SalmonCookie.prototype.getSum=function(){
    for(let i=0;i< this.cookies.length;i++){
        this.sum=this.cookies[i]+this.sum

    }
    // console.log(this.sum)
}
SalmonCookie.prototype.render=function(){
    
    let seconedRow=document.createElement('tr')
    tableEl.appendChild(seconedRow)
    let tdEl=document.createElement('td')
    seconedRow.appendChild(tdEl) 
    for (let i=0;i<locaiton.length;i++){
        if (this.cityName===locaiton[i])
        tdEl.textContent=locaiton[i]
        console.log(locaiton[i])
    }

    for(let i=0;i<hour.length;i++){
        let tdEl=document.createElement('td')
        seconedRow.appendChild(tdEl)
        tdEl.textContent=this.cookies[i]

    }
    let tdLast=document.createElement('td')
    seconedRow.appendChild(tdLast)
    tdLast.textContent=this.sum

}


//create new object for seatel
let seattel=new SalmonCookie('seattel',23,65,6.3)
seattel.getNumOfCustomer()
seattel.getNumCookies()
seattel.getSum()
seattel.render()

//create new object for Tokyo
let Tokyo=new SalmonCookie('Tokyo',3,24,2.1)
Tokyo.getNumOfCustomer()
Tokyo.getNumCookies()
Tokyo.getSum()
Tokyo.render()

//create new object for Dubai
let Dubai=new SalmonCookie('Dubai',11,38,3.7)
Dubai.getNumOfCustomer()
Dubai.getNumCookies()
Dubai.getSum()
Dubai.render()

//create new object for Paris
let Paris=new SalmonCookie('Paris',20,38,2.3)
Paris.getNumOfCustomer()
Paris.getNumCookies()
Paris.getSum()
Paris.render()


//create new object for Lima
let Lima=new SalmonCookie('Lima',2,16,4.6)
Lima.getNumOfCustomer()
Lima.getNumCookies()
Lima.getSum()
Lima.render()



// let Seattle={
//     min:23,
//     max:65,
//     avr:6.3,
//     cookies:[],
//     customer:[],
//     sum:null,
//     hour:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//     getNumCookies: function(){
//         let cookies=0;
//         for(let i=0;i<this.hour.length;i++){
//             cookies=Math.floor(this.customer[i]*this.avr)
//             console.log(cookies)
//             this.cookies.push(cookies)
//            this.sum=cookies+this.sum
           
//         }
//         console.log('sum',this.sum)
//     },
//     getNumOfCustomer: function(){
//         let customers=0;
//         for(let i=0;i<this.hour.length;i++){
//             customers=Math.floor(Math.random() * (this.max - this.min)) + this.min;
//             console.log(customers)
//             this.customer.push(customers)
//         }
//         console.log(this.customer)
//     },
//     render:function(){
//         let hEl=document.createElement('h1');
//         continer.appendChild(hEl);
//         hEl.textContent='Seattle';
//         let ulEl=document.createElement('ul');
//         continer.appendChild(ulEl)
//         for(let i=0;i<this.hour.length;i++){
//             let liEl=document.createElement('li')
//             ulEl.appendChild(liEl)
//             liEl.textContent=`${this.hour[i]} : ${this.cookies[i]} Cookies`
//         }
//         let liEl=document.createElement('li')
//         ulEl.appendChild(liEl)
//         liEl.textContent=`Total : ${this.sum} Cookies`
       

//     }
// }
// Seattle.getNumOfCustomer()
// Seattle.getNumCookies()
// Seattle.render()




// let Tokyo={
//     min:3,
//     max:24,
//     avr:1.2,
//     cookies:[],
//     customer:[],
//     sum:null,
//     hour:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//     getNumCookies: function(){
//         let cookies=0;
//         for(let i=0;i<this.hour.length;i++){
//             cookies=Math.floor(this.customer[i]*this.avr)
//             console.log(cookies)
//             this.cookies.push(cookies)
//             this.sum=cookies+this.sum
//         }
//     },
//     getNumOfCustomer: function(){
//         let customers=0;
//         for(let i=0;i<this.hour.length;i++){
//             customers=Math.floor(Math.random() * (this.max - this.min)) + this.min;
//             console.log(customers)
//             this.customer.push(customers)
//         }
//         console.log(this.customer)
//     },
//     render:function(){
//         let hEl=document.createElement('h1');
//         continer.appendChild(hEl);
//         hEl.textContent='Tokyo';
//         let ulEl=document.createElement('ul');
//         continer.appendChild(ulEl)
//         for(let i=0;i<this.hour.length;i++){
//             let liEl=document.createElement('li')
//             ulEl.appendChild(liEl)
//             liEl.textContent=`${this.hour[i]} : ${this.cookies[i]} Cookies`
//         }
//         let liEl=document.createElement('li')
//         ulEl.appendChild(liEl)
//         liEl.textContent=`Total : ${this.sum} Cookies`

//     }
// }
// Tokyo.getNumOfCustomer()
// Tokyo.getNumCookies()
// Tokyo.render()


// let Dubai={
//     min:11,
//     max:38,
//     avr:6.3,
//     cookies:[],
//     customer:[],
//     sum:null,
//     hour:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//     getNumCookies: function(){
//         let cookies=0;
//         for(let i=0;i<this.hour.length;i++){
//             cookies=Math.floor(this.customer[i]*this.avr)
//             console.log(cookies)
//             this.cookies.push(cookies)
//             this.sum=cookies+this.sum
//         }
//     },
//     getNumOfCustomer: function(){
//         let customers=0;
//         for(let i=0;i<this.hour.length;i++){
//             customers=Math.floor(Math.random() * (this.max - this.min)) + this.min;
//             console.log(customers)
//             this.customer.push(customers)
//         }
//         console.log(this.customer)
//     },
//     render:function(){
//         let hEl=document.createElement('h1');
//         continer.appendChild(hEl);
//         hEl.textContent='Dubai';
//         let ulEl=document.createElement('ul');
//         continer.appendChild(ulEl)
//         for(let i=0;i<this.hour.length;i++){
//             let liEl=document.createElement('li')
//             ulEl.appendChild(liEl)
//             liEl.textContent=`${this.hour[i]} : ${this.cookies[i]} Cookies`
//         }
//         let liEl=document.createElement('li')
//         ulEl.appendChild(liEl)
//         liEl.textContent=`Total : ${this.sum} Cookies`

//     }
// }
// Dubai.getNumOfCustomer()
// Dubai.getNumCookies()
// Dubai.render()


//  

// let Lima={
//     min:2,
//     max:16,
//     avr:4.6,
//     cookies:[],
//     customer:[],
//     sum:null,
//     hour:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
//     getNumCookies: function(){
//         let cookies=0;
//         for(let i=0;i<this.hour.length;i++){
//             console.log('i',i)
//             cookies=Math.floor(this.customer[i]*this.avr)
//             console.log('customers',this.customer[i])
//             console.log('cookies',cookies)
//             this.cookies.push(cookies)
//             this.sum=cookies+this.sum
//         }
//     },
//     getNumOfCustomer: function(){
//         let customers=0;
//         for(let i=0;i<this.hour.length;i++){
//             customers=Math.floor(Math.random() * (this.max - this.min)) + this.min;
//             this.customer.push(customers)
//         }
//         console.log('customer',this.customer)
//     },
//     render:function(){
//         let hEl=document.createElement('h1');
//         continer.appendChild(hEl);
//         hEl.textContent='Lima';
//         let ulEl=document.createElement('ul');
//         continer.appendChild(ulEl)
//         for(let i=0;i<this.hour.length;i++){
//             let liEl=document.createElement('li')
//             ulEl.appendChild(liEl)
//             liEl.textContent=`${this.hour[i]} : ${this.cookies[i]} Cookies`
//         }
//         let liEl=document.createElement('li')
//         ulEl.appendChild(liEl)
//         liEl.textContent=`Total : ${this.sum} Cookies`

//     }
// }
// Lima.getNumOfCustomer()
// Lima.getNumCookies()
// Lima.render()


