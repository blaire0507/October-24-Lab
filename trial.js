//promise
var pentp = d3.json("classData.json")
pentp.then(function(classData)
           {
 fetchpic(classData)   
    console.log (classData) //this calls the data 
},
          function(fail)
          {return console.log(fail, "fail")})
var fetchpic = function(penguin)
{
   var row = d3.select("tbody")
    .selectAll("tr")
    .data(penguin)
    .enter()
    .append("tr")
    row.append ("img")
    .attr("src", function(d)
          {return d.picture})}
var anygrade = function(subject)
    {
        return subject.grade;
    }
var Getdata = function(classData)
{
   var data = {}
   data.quizmean = d3.mean(classData.quizes, anygrade)
    data.hwmean = d3.mean(classData.homework, anygrade)
    data.testmean = d3.mean(classData.test, anygrade)
    {return data
}
var alldata = d3.map(Getdata)
}