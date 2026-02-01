const currentIp = document.getElementById("current-ip")
const totalIp = document.getElementById("total-ip")
const submitBtn = document.getElementById("submit-btn")
const resultPg = document.getElementById("result-pg")



function totalSeconds(arr){
  let sumAll = Number(arr[0])*60*60 + Number(arr[1])*60 + Number(arr[2])
  return sumAll
}


//console.log(percent.toFixed(2) + "% of tutorial completed")

submitBtn.addEventListener("click", function(){
  const currentTime = currentIp.value
  const totalTime = totalIp.value
  let cur = currentTime.split(":")
  let tot = totalTime.split(":")
  const perc = (totalSeconds(cur) / totalSeconds(tot)) * 100
  resultPg.innerText = perc.toFixed(2) + "% of tutorial completed"
})
