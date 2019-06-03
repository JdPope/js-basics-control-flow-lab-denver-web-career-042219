function scuberGreetingForFeet(feet){
  let response
  switch(true){
    case feet <= 400:
      response = 'This one is on me!';
      break
      case feet > 2500:
        response = 'No can do.'
        break
    case feet > 2000:
      response = 'I will gladly take your thirty bucks.'
  }
  return response
  }

function ternaryCheckCity(city){
  const response =
    city === 'NYC' ? 'Ok, sounds good.':'No go.'
  return response
}

function switchOnCharmFromTip(tip){
  let response
  switch(tip){
    case 'generous':
      response = 'Thank you so much.'
      break
    case 'not as generous':
      response = 'Thank you.'
      break
    default:
      response = 'Bye.'

  }
  return response

}
