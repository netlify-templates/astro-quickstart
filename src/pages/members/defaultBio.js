function defaultBio(name, grade, w1, w2, role, removeAnd) {
    if (!w1) {
        w1 = 'a'
    }
    if (!w2) {
        w2 = 'of'
    }
    if (!name) {
        name = ''
    }
    if (removeAnd) {
        removeAnd = ', '
    }
    else {
        removeAnd = ' and '
    }
    if (name.includes('(') && name.includes(')')) {
        name = name.split('(')[1].split(')')[0]
    }
    if (!role) role = 'Member'

    return `${name}{pronunciation} is a ${grade} at <a href="https://dtechhs.org">Design Tech High School</a> in Redwood City${removeAnd}${w1} ${role} ${w2} the Graphics for Good club.`
}
  
export default defaultBio