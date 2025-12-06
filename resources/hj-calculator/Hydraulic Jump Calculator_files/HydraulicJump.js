        function compute(calc) {
          var D = document.getElementById("calc");
          var g = 9.806;
          var Q = D.Q.value;
          var B = D.B.value;
          var h1 = D.h1.value;
          var h2 = D.h2.value;
          var h2h1 = D.h2h1.value;
          var vel1 = D.v1.value;
          var vel2 = D.v2.value;
          var vel1vel2 = D.v1v2.value;
          var froude1 = D.froude1.value;
          var froude2 = D.froude2.value;
	  var f1f2 = D.f1f2.value;

          if ((D.Q.value == " ") && (D.B.value == " ") && (D.h1.value == " ")) {
            alert ("Must enter at least 3 values!");
          } else if ((D.Q.value != " ") && (D.B.value != " ") && (D.h1.value != " ")) {
	    froude1 = Q/(h1*B*Math.sqrt(g*h1));
            D.froude1.value = froude1.toFixed(3);
	    h2 = 0.5*h1*(Math.sqrt(1+(8*froude1*froude1))-1);
	    D.h2.value = h2.toFixed(3);
	    h2h1 = h2/h1;
	    D.h2h1.value = h2h1.toFixed(3);
	    vel1 = Q/(h1*B);
	    D.v1.value = vel1.toFixed(3);
	    vel2 = Q/(h2*B);
	    D.v2.value = vel2.toFixed(3);
	    vel1vel2 = vel1/vel2;
	    D.v1v2.value = vel1vel2.toFixed(3);
	    froude2 = vel2/Math.sqrt(g*h2);
	    D.froude2.value = froude2.toFixed(3);
	    f1f2 = Math.pow(h2h1,1.5);
	    D.f1f2.value = f1f2.toFixed(3);

          if (froude1 < 1.0) {D.type1[0].checked=true;}
	  if (froude1 == 1.0) {D.type1[1].checked=true;}
          if ((froude1 > 1.0) && (froude1 < 1.7)) {D.type1[2].checked=true;}
          if ((froude1 >= 1.7) && (froude1 < 2.5)) {D.type1[3].checked=true;}
          if ((froude1 >= 2.5) && (froude1 < 4.5)) {D.type1[4].checked=true;}
          if ((froude1 >= 4.5) && (froude1 < 9.0)) {D.type1[5].checked=true;}
          if (froude1 >= 9.0) {D.type1[6].checked=true;}
          if (froude2 < 1.0) {D.type2[0].checked=true;}
	  if (froude2 == 1.0) {D.type2[1].checked=true;}
          if ((froude2 > 1.0) && (froude2 < 1.7)) {D.type2[2].checked=true;}
          if ((froude2 >= 1.7) && (froude2 < 2.5)) {D.type2[3].checked=true;}
          if ((froude2 >= 2.5) && (froude2 < 4.5)) {D.type2[4].checked=true;}
          if ((froude2 >= 4.5) && (froude2 < 9.0)) {D.type2[5].checked=true;}
          if (froude2 >= 9.0) {D.type2[6].checked=true;}
	  }
        }
	
        function erase(calc) {
          var D = document.getElementById("calc");	
          D.Q.value = "0.1";
          D.B.value = "0.4";
          D.h1.value = "0.05";
          D.h2.value = "";
          D.h2h1.value = "";
          D.v1.value = "";
          D.v2.value = "";
          D.v1v2.value = "";          
	  D.froude1.value = "";
          D.froude2.value = "";
	  D.f1f2.value = "";
          D.type1[0].checked=false;
          D.type1[1].checked=false;
          D.type1[2].checked=false;
          D.type1[3].checked=false;
          D.type1[4].checked=false;
          D.type1[5].checked=false;
          D.type1[6].checked=false;
	  D.type2[0].checked=false;
          D.type2[1].checked=false;
          D.type2[2].checked=false;
          D.type2[3].checked=false;
          D.type2[4].checked=false;
          D.type2[5].checked=false;
          D.type2[6].checked=false;
        }

        function Round(num,precision) { 
          //convert num to string 
          num = "" + num;
          precision = parseInt(precision); 

          //convert desired result to integer
          //unwanted digits will be after the decimal point
          var fullNum = "" + Math.round(num* Math.pow(10, precision)); 

          //find decimal point should go 
          var decPoint = fullNum.length - precision; 

          if (decPoint != 0) { 
            //concatenate left and right part of the decimal together 
            result = fullNum.substring(0, decPoint); 
            result += "."; 
            result += fullNum.substring(decPoint, fullNum.length); 
          } else { 
            result = "0."+fullNum; 
          } 
          return result; 
        }
