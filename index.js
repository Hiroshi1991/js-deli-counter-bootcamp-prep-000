function takeANumber (line, name) {
  if (!line.length) {
    console.log("There is nobody waiting to be served!")
    return "There is nobodt waiting to be served!"
  } else {
    return "Currently serving" + line.shift
  }
}