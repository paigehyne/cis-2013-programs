 var floatAge, floatDays, intWeeks, floatMonths, intFortnights;
     floatAge = parseFloat(prompt("Enter age"));
     floatDays = floatAge* 365.25;
     floatMonths = floatAge*12;
     intWeeks = floatDays/7;
     intFortnights = floatDays/14;
     alert("Age = " + floatAge);
     alert("Age in days = " + floatDays);
     alert("Age in months = " + floatMonths);
     alert("Age in weeks = " + intWeeks);
     alert("Age in fortnights = " + intFortnights);