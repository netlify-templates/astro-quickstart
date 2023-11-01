function getUserGrade(gradYear) {
    gradYear = parseInt(`20${gradYear}`)
    let currentYear = new Date().getFullYear()
    let yearsLeft = gradYear - currentYear
  
    let currentMonth = new Date().getMonth()
    currentMonth++
    if (currentMonth === 1 || currentMonth === 2 || currentMonth === 3 || currentMonth === 4 || currentMonth === 5) {
        yearsLeft--
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
  
}

export default getUserGrade