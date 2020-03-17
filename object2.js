/* Make student report */

function makeStudentReport (data) {
  const result = []
  for (let i = 0; i < data.length; i++) {
    const item = data[i]
    result.push(`${item.name}: ${item.grade}`)
  }
  return result
}

const scratchData = [
  { id: 22, foo: 'bar' },
  { id: 28, foo: 'bizz' },
  { id: 19, foo: 'bazz' }
]
/* Find by id */

function findById (items, idNum) {
  for (let i = 0; i < items.length; i++) {
    if (items[i].id === idNum) {
      return items[i]
    }
  }
}

console.log(findById(scratchData, 80))
