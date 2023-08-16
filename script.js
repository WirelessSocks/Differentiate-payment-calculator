window.onload = function() {
    calc_btn.onclick = function() {
      const tbody = document.getElementsByTagName("tbody")[0];
      tbody.innerHTML  = '';
      let sum = parseInt(credit_sum.value);
      let rate = parseFloat(credit_rate.value);
      rate = rate / 100; // Проценты
      let term = parseInt(credit_term.value); // Месяцы

      let mainPayment = Number((sum / term).toFixed(2)); // Основной платеж
      
      
      console.log(`Main payment - ${mainPayment}`);
      
      
      for (let i = 1; i <= term; i++) {

        let payment = (mainPayment) + (sum * rate / 12); // Дифф.платеж

        let percents = payment - mainPayment; // Проценты банку
        sum -= mainPayment;
        if(i == term){sum = 0;}
        console.log(`Остаток суммы - ${sum}`);
        let body = mainPayment;
        
        sum < 0 ? 0 : sum;
        addRow(i, payment, body, percents, sum);
        
        // console.log("#" + i, "Payment ", Math.floor(payment), "Body ", Math.floor(body), "%", percents);
      }
    };
  
    let addRow = function (i, payment, body, percents, sum){
      let tbody = document.getElementsByTagName("tbody")[0];
      let tr = document.createElement("tr");
      let td = document.createElement("td");
      let td2 = document.createElement("td");
      let td3 = document.createElement("td");
      let td4 = document.createElement("td");
      let td5 = document.createElement("td");
      
      td.appendChild(document.createTextNode(i));
      td2.appendChild(document.createTextNode(payment.toFixed(2)));
      td3.appendChild(document.createTextNode(body.toFixed(2)));
      td4.appendChild(document.createTextNode(percents.toFixed(2)));
      td5.appendChild(document.createTextNode(sum.toFixed(2)));
  
      tr.appendChild(td);
      tr.appendChild(td2);
      tr.appendChild(td3);
      tr.appendChild(td4);
      tr.appendChild(td5);
   
      tbody.appendChild(tr);
    }
  };
  