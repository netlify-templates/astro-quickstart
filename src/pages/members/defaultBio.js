function defaultBio(w1, w2, role) {
    if (!!w1 === false) {
      w1 = 'a'
    }
    if (!!w2 === false) {
      w2 = 'of'
    }
    if (!!user) {
      if (!!mname === false) {
        mname = ''
      }
      var uName = mname
      if (uName.includes(' <span id="tag">') || !!role) {
        if (!!role === false) {
          role = uName.split(' <span id="tag">(')[1].split(')</span>')[0].replace(',', '')
        }
        return `${uName.split(' <span id="tag">')[0].split(' ')[0]}{pronouciation} is ${w1} ${role} ${w2} the Graphics for Good club at <a href="https://dtechhs.org">Design Tech High School</a> in Redwood City.`
      }
      else {
        if (uName.includes('(') && uName.includes(')')) {
          uName = uName.split('(')[1].split(')')[0]
        }
        role = 'Member'
        return `${uName.split(' ')[0]}{pronouciation} is ${w1} ${role} ${w2} the Graphics for Good club at <a href="https://dtechhs.org">Design Tech High School</a> in Redwood City.`
      }
    }
    else {
      return ''
    }
  }
  
export default defaultBio  