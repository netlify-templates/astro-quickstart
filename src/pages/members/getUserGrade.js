function getUserGrade(gradYear) {
    gradYear += 2000
    let currentYear = new Date().getFullYear()
    let yearsLeft = gradYear - currentYear
  
    let currentMonth = new Date().getMonth()+1
    if (currentMonth < 6) {
        yearsLeft++
    }
  
    let grade = ''
    if (yearsLeft === 1) {
        grade = 'Senior'
    }
    else if (yearsLeft === 2) {
        grade = 'Junior'
    }
    else if (yearsLeft === 3) {
        grade = 'Sophmore'
    }
    else if (yearsLeft === 4) {
        grade = 'Freshman'
    }
    return grade
}

export default getUserGrade