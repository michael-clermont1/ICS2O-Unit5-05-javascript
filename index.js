function weekdaydroplist()
{
    var mylist=document.getElementById("day");
    document.getElementById("day").value=mylist.options(mylist.selectedIndex).text;
}

function myWeekday() {
      var age, day;

      age = document.getElementById("age").value;
      day = document.getElementById("day").value;
        
        if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
            if (age >= 4 && age <= 18) {
                age = "Today (" + day + ") is a weekday and you are " + age + " years old and you should be in school";  
            } else {
                age = "You are too young or old too attend school";
            }
        } else {
            age = "Enjoy the weekend there is no school";
        }
        document.getElementById("demo").innerHTML = age;
}