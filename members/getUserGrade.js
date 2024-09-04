function getUserGrade(gradYear) {
    gradYear += 2000
    let currentYear = new Date().getFullYear()
    let yearsLeft = gradYear - currentYear
  
    let currentMonth = new Date().getMonth()+1
    if (currentMonth < 6) {
      yearsLeft++
    }
    
    let currentDate = new Date().getDate()
    if (currentMonth === 6 && currentDate <= 30/2) {
      yearsLeft++
    }
  
    let gradesObj = [
      'Senior', 
      'Junior', 
      'Sophmore', 
      'Freshman'
    ]
    let grade = ''
    yearsLeft--
    if (yearsLeft >=0 && yearsLeft < 5) {
      grade = gradesObj[yearsLeft]
    }
    else if (yearsLeft < 1) {
      grade = 'Graduated'
    }
    else {
      grade = 'Unknown'
    }
    return grade
  }
  
  export default getUserGrade