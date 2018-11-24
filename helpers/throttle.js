function throttle(func, threshhold = 250, scope) {
  let last, deferTimer

  return function() {
    let context = scope || this

    let now = Date.now(),
      args = arguments

    if (last && now < last + threshhold) {
      // hold on to it
      clearTimeout(deferTimer)
      deferTimer = setTimeout(function() {
        last = now
        func.apply(context, args)
      }, threshhold)
    } else {
      last = now
      func.apply(context, args)
    }
  }
}

export default throttle
