import { get, pipe } from 'lodash/fp'

export function getSite(data) {
  return get('site', data)
}

export function getSiteMetadata(data) {
  return pipe(
    getSite,
    get('siteMetadata')
  )(data)
}

export function getTitle(data) {
  return pipe(
    getSiteMetadata,
    get('title')
  )(data)
}
