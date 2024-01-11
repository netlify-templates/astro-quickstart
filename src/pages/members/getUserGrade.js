function getUserGrade(gradYear) {
    gradYear += 2000
    let currentYear = new Date().getFullYear()
    let yearsLeft = gradYear - currentYear
  
    let currentMonth = new Date().getMonth()+1
    if (currentMonth < 6) {
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
    else {
        grade = 'Unknown'
    }
    return grade
}

export default getUserGrade