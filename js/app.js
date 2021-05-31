


let continer=document.getElementById('continer')
let Seattle={
    min:23,
    max:65,
    avr:6.3,
    cookies:[],
    customer:[],
    sum:null,
    hour:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    getNumCookies: function(){
        let cookies=0;
        for(let i=0;i<this.hour.length;i++){
            cookies=Math.floor(this.customer[i]*this.avr)
            console.log(cookies)
            this.cookies.push(cookies)
           this.sum=cookies+this.sum
           
        }
        console.log('sum',this.sum)
    },
    getNumOfCustomer: function(){
        let customers=0;
        for(let i=0;i<this.hour.length;i++){
            customers=Math.floor(Math.random() * (this.max - this.min)) + this.min;
            console.log(customers)
            this.customer.push(customers)
        }
        console.log(this.customer)
    },
    render:function(){
        let hEl=document.createElement('h1');
        continer.appendChild(hEl);
        hEl.textContent='Seattle';
        let ulEl=document.createElement('ul');
        continer.appendChild(ulEl)
        for(let i=0;i<this.hour.length;i++){
            let liEl=document.createElement('li')
            ulEl.appendChild(liEl)
            liEl.textContent=`${this.hour[i]} : ${this.cookies[i]} Cookies`
        }
        let liEl=document.createElement('li')
        ulEl.appendChild(liEl)
        liEl.textContent=`Total : ${this.sum} Cookies`

    }
}
Seattle.getNumOfCustomer()
Seattle.getNumCookies()
Seattle.render()




let Tokyo={
    min:3,
    max:24,
    avr:1.2,
    cookies:[],
    customer:[],
    sum:null,
    hour:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    getNumCookies: function(){
        let cookies=0;
        for(let i=0;i<this.hour.length;i++){
            cookies=Math.floor(this.customer[i]*this.avr)
            console.log(cookies)
            this.cookies.push(cookies)
            this.sum=cookies+this.sum
        }
    },
    getNumOfCustomer: function(){
        let customers=0;
        for(let i=0;i<this.hour.length;i++){
            customers=Math.floor(Math.random() * (this.max - this.min)) + this.min;
            console.log(customers)
            this.customer.push(customers)
        }
        console.log(this.customer)
    },
    render:function(){
        let hEl=document.createElement('h1');
        continer.appendChild(hEl);
        hEl.textContent='Tokyo';
        let ulEl=document.createElement('ul');
        continer.appendChild(ulEl)
        for(let i=0;i<this.hour.length;i++){
            let liEl=document.createElement('li')
            ulEl.appendChild(liEl)
            liEl.textContent=`${this.hour[i]} : ${this.cookies[i]} Cookies`
        }
        let liEl=document.createElement('li')
        ulEl.appendChild(liEl)
        liEl.textContent=`Total : ${this.sum} Cookies`

    }
}
Tokyo.getNumOfCustomer()
Tokyo.getNumCookies()
Tokyo.render()


let Dubai={
    min:11,
    max:38,
    avr:6.3,
    cookies:[],
    customer:[],
    sum:null,
    hour:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    getNumCookies: function(){
        let cookies=0;
        for(let i=0;i<this.hour.length;i++){
            cookies=Math.floor(this.customer[i]*this.avr)
            console.log(cookies)
            this.cookies.push(cookies)
            this.sum=cookies+this.sum
        }
    },
    getNumOfCustomer: function(){
        let customers=0;
        for(let i=0;i<this.hour.length;i++){
            customers=Math.floor(Math.random() * (this.max - this.min)) + this.min;
            console.log(customers)
            this.customer.push(customers)
        }
        console.log(this.customer)
    },
    render:function(){
        let hEl=document.createElement('h1');
        continer.appendChild(hEl);
        hEl.textContent='Dubai';
        let ulEl=document.createElement('ul');
        continer.appendChild(ulEl)
        for(let i=0;i<this.hour.length;i++){
            let liEl=document.createElement('li')
            ulEl.appendChild(liEl)
            liEl.textContent=`${this.hour[i]} : ${this.cookies[i]} Cookies`
        }
        let liEl=document.createElement('li')
        ulEl.appendChild(liEl)
        liEl.textContent=`Total : ${this.sum} Cookies`

    }
}
Dubai.getNumOfCustomer()
Dubai.getNumCookies()
Dubai.render()


let Paris={
    min:20,
    max:38,
    avr:2.3,
    cookies:[],
    customer:[],
    sum:null,
    hour:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    getNumCookies: function(){
        let cookies=0;
        for(let i=0;i<this.hour.length;i++){
            cookies=Math.floor(this.customer[i]*this.avr)
            console.log(cookies)
            this.cookies.push(cookies)
            this.sum=cookies+this.sum
        }
    },
    getNumOfCustomer: function(){
        let customers=0;
        for(let i=0;i<this.hour.length;i++){
            customers=Math.floor(Math.random() * (this.max - this.min)) + this.min;
            console.log(customers)
            this.customer.push(customers)
        }
        console.log(this.customer)
    },
    render:function(){
        let hEl=document.createElement('h1');
        continer.appendChild(hEl);
        hEl.textContent='Paris';
        let ulEl=document.createElement('ul');
        continer.appendChild(ulEl)
        for(let i=0;i<this.hour.length;i++){
            let liEl=document.createElement('li')
            ulEl.appendChild(liEl)
            liEl.textContent=`${this.hour[i]} : ${this.cookies[i]} Cookies`
        }
        let liEl=document.createElement('li')
        ulEl.appendChild(liEl)
        liEl.textContent=`Total : ${this.sum} Cookies`

    }
}
Paris.getNumOfCustomer()
Paris.getNumCookies()
Paris.render()


let Lima={
    min:2,
    max:16,
    avr:4.6,
    cookies:[],
    customer:[],
    sum:null,
    hour:['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'],
    getNumCookies: function(){
        let cookies=0;
        for(let i=0;i<this.hour.length;i++){
            console.log('i',i)
            cookies=Math.floor(this.customer[i]*this.avr)
            console.log('customers',this.customer[i])
            console.log('cookies',cookies)
            this.cookies.push(cookies)
            this.sum=cookies+this.sum
        }
    },
    getNumOfCustomer: function(){
        let customers=0;
        for(let i=0;i<this.hour.length;i++){
            customers=Math.floor(Math.random() * (this.max - this.min)) + this.min;
            this.customer.push(customers)
        }
        console.log('customer',this.customer)
    },
    render:function(){
        let hEl=document.createElement('h1');
        continer.appendChild(hEl);
        hEl.textContent='Lima';
        let ulEl=document.createElement('ul');
        continer.appendChild(ulEl)
        for(let i=0;i<this.hour.length;i++){
            let liEl=document.createElement('li')
            ulEl.appendChild(liEl)
            liEl.textContent=`${this.hour[i]} : ${this.cookies[i]} Cookies`
        }
        let liEl=document.createElement('li')
        ulEl.appendChild(liEl)
        liEl.textContent=`Total : ${this.sum} Cookies`

    }
}
Lima.getNumOfCustomer()
Lima.getNumCookies()
Lima.render()


