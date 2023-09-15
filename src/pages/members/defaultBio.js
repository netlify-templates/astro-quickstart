function defaultBio(name, w1, w2, role) {
  if (!!w1 === false) {
    w1 = 'a'
  }
  if (!!w2 === false) {
    w2 = 'of'
  }
  if (!!name === false) {
    name = ''
  }
  if (!!name) {
    if (name.includes(' <span id="tag">') || !!role) {
      if (!!role === false) {
        role = name.split(' <span id="tag">(')[1].split(')</span>')[0].replace(',', '')
      }
      return `${name.split(' <span id="tag">')[0].split(' ')[0]}{pronunciation} is ${w1} ${role} ${w2} the Graphics for Good club at <a href="https://dtechhs.org">Design Tech High School</a> in Redwood City.`
    }
    else {
      if (name.includes('(') && name.includes(')')) {
        name = name.split('(')[1].split(')')[0]
      }
      role = 'Member'
      return `${name.split(' ')[0]}{pronunciation} is ${w1} ${role} ${w2} the Graphics for Good club at <a href="https://dtechhs.org">Design Tech High School</a> in Redwood City.`
    }
  }
  else {
    if (!!name) {
      if (name.includes('(') && name.includes(')')) {
        name = name.split('(')[1].split(')')[0]
      }
    }
    role = 'Member'
    return `${name.split(' ')[0]}{pronunciation} is ${w1} ${role} ${w2} the Graphics for Good club at <a href="https://dtechhs.org">Design Tech High School</a> in Redwood City.`
  }
}
  
export default defaultBio  