import { useState, useEffect } from 'react'
import root from 'window-or-global'
import json2mq from 'json2mq'

function useMedia(query, defaultMatches = true) {
  const [matches, setMatches] = useState(defaultMatches)

  useEffect(
    () => {
      const mediaQueryList = root.matchMedia(
        typeof query === 'string' ? query : json2mq(query)
      )
      let active = true

      const listener = () => {
        if (!active) {
          return
        }

        if (mediaQueryList.matches) {
          setMatches(true)
        } else {
          setMatches(false)
        }
      }

      mediaQueryList.addListener(listener)
      setMatches(mediaQueryList.matches)

      return () => {
        active = false
        mediaQueryList.removeListener(listener)
      }
    },
    [query]
  )

  return matches
}

export default useMedia
