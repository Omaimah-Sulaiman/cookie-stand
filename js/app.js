let totalPerHour=[]

let continer=document.getElementById('continer')
let tableEl=document.createElement('table')
continer.appendChild(tableEl);
let  hour=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];
let locaiton=['seattel','Tokyo','Paris','Lima','Dubai']


//  the heading of table 
function getHeaderRow(){
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
}
// add last row in the table total per hour
  function tfoot(){
        
           let thirdRow=document.createElement('tr')
           tableEl.appendChild(thirdRow)
           let tdLast=document.createElement('td')
           thirdRow.appendChild(tdLast)
           tdLast.textContent='Total'

            totalTotaly=0
            let sum =0
            for(let i=0 ; i<hour.length;i++){
               sum=0;
                for(let x=0;x<totalPerHour.length;x++){
                    sum += totalPerHour[x].cookies[i]
                    console.log(sum)
                }
                
                let tdEl=document.createElement('td')
                thirdRow.appendChild(tdEl)
                tdEl.textContent= sum 
                totalTotaly +=sum[i]
                console.log('sum',sum)
            }
            let tLastEl=document.createElement('td')
            thirdRow.appendChild(tLastEl)
            tLastEl.textContent= totalTotaly
            
            
            
     } 
  





function SalmonCookie(cityName,min,max,avr){
    this.cityName=cityName;
    this.min=min;
    this.max=max;
    this.avr=avr;
    this.cookies=[];
    this.customer=[];
    this.sum=0;
    totalPerHour.push(this);
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
// function to render the result
SalmonCookie.prototype.render=function(){
    
    let seconedRow=document.createElement('tr')
    tableEl.appendChild(seconedRow)
    let tdEl=document.createElement('td')
    seconedRow.appendChild(tdEl)

    for (let i=0;i<=locaiton.length;i++){
        if (this.cityName===locaiton[i]){
        tdEl.textContent=locaiton[i]
        // console.log(locaiton[i])
    }
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
getHeaderRow();


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



tfoot()




