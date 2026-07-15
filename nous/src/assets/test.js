import { makeBadge, ValidationError } from 'badge-maker'
const format = {
  label: "drake said",
  message: 'me and hendrix are back by popular demand',
  color: 'brightgreen',
}

// const svg = makeBadge(format)
// console.log(svg) // <svg...

try {
  console.log(makeBadge({
    label: 'build',
    message: "me and hendrix are back by popular demand",
    color: "brightgreen"
  }))
} catch (e) {
  console.log(e) // ValidationError: Field `message` is required
}