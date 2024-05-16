import { cpw } from './core'
import { measureSpeed, speed } from './speed'

function findById(id: string) {
  let input = document.getElementById(id)
  if (!input) throw new Error('Element not found by id: ' + id)
  return input as HTMLInputElement
}

let password_input = findById('password_input')
let length_e = findById('length')
let size_e = findById('size')
let entropy_e = findById('entropy')
let difficulty_e = findById('difficulty')
let speed_e = findById('speed')
let time_e = findById('time')
let not_supported_e = findById('not_supported')

let last_text: string | undefined

password_input.onchange = check

function check() {
  let text = password_input.value
  if (text == last_text) return
  update(text)
}

speed_e.innerText = speed.toExponential()

function updateSpeed() {
  measureSpeed()
  speed_e.innerText = speed.toExponential()
  let text = password_input.value
  if (text) {
    update(text)
  }
}

function update(text: string) {
  last_text = text
  let result = cpw(text)
  length_e.innerText = result.length.toString()
  size_e.innerText = result.setSize.toString()
  entropy_e.innerText = result.entropy.toLocaleString() + ' bits'
  difficulty_e.innerText = result.difficulty.toString()
  time_e.innerText = result.timeText
}

Object.assign(window, { check, updateSpeed })

not_supported_e.style.display = 'none'
not_supported_e.remove()
