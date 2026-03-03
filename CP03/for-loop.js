function Driving(age,hasLicense,people) {
  people = [Bob,Mary,Sam]
  for (i=0;i<people.length-1;i++){
      console.log(people(i))
  }
  let age = 20
  let hasLicense = true
  if (age >= 20 && hasLicense == true){ console.log('You can be the driver') }else {
    console.log('You cant be the driver')
  }
}
Driving()

