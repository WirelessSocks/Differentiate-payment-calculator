window.onload = function() {
    calc_btn.onclick = function() {
      const tbody = document.getElementsByTagName("tbody")[0];
      tbody.innerHTML  = '';
      var sum = parseInt(credit_sum.value);
      var rate = parseFloat(credit_rate.value);
      rate = rate / 100; // Проценты
      var term = parseInt(credit_term.value); // Месяцы

      let mainPayment = Number((sum / term).toFixed(2)); // Основной платеж
      
      
      console.log(`Main payment - ${mainPayment}`);
      
      
      for (var i = 1; i <= term; i++) {

        var payment = (mainPayment) + (sum * rate / 12); // Дифф.платеж

        var percents = payment - mainPayment; // Проценты банку
        sum -= mainPayment;
        if(i == term){sum = 0;}
        console.log(`Остаток суммы - ${sum}`);
        var body = mainPayment;
        
        sum < 0 ? 0 : sum;
        addRow(i, payment, body, percents, sum);
        
        // console.log("#" + i, "Payment ", Math.floor(payment), "Body ", Math.floor(body), "%", percents);
      }
    };
  
    var addRow = function (i, payment, body, percents, sum){
      var tbody = document.getElementsByTagName("tbody")[0];
      var tr = document.createElement("tr");
      var td = document.createElement("td");
      var td2 = document.createElement("td");
      var td3 = document.createElement("td");
      var td4 = document.createElement("td");
      var td5 = document.createElement("td");
      
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
  