import React from 'react'
import root from 'window-or-global'
import throttle from '../helpers/throttle'

const useWindowScrollPosition = ({ throttleMs = 100 } = {}) => {
  const [scroll, setScroll] = React.useState({
    x: root.pageXOffset || 0,
    y: root.pageYOffset || 0,
  })

  const handle = throttle(() => {
    setScroll({
      x: root.pageXOffset || 0,
      y: root.pageYOffset || 0,
    })
  }, throttleMs)

  React.useEffect(() => {
    root.addEventListener('scroll', handle)

    return () => {
      root.removeEventListener('scroll', handle)
    }
  }, [])

  return scroll
}

export default useWindowScrollPosition
