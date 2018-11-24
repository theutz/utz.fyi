import React from 'react'
import throttle from '../helpers/throttle'

const useWindowScrollPosition = ({ throttleMs = 100 } = {}) => {
  let window = window ||
    global.window || {
      pageXOffset: 0,
      pageYOffset: 0,
      addEventListener: () => {},
      removeEventListener: () => {},
    }

  const [scroll, setScroll] = React.useState({
    x: window.pageXOffset,
    y: window.pageYOffset,
  })

  const handle = throttle(() => {
    setScroll({
      x: window.pageXOffset,
      y: window.pageYOffset,
    })
  }, throttleMs)

  React.useEffect(() => {
    window.addEventListener('scroll', handle)

    return () => {
      window.removeEventListener('scroll', handle)
    }
  }, [])

  return scroll
}

export default useWindowScrollPosition
