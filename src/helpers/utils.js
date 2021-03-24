export const convertDateString = (s) => {
    let date = new Date(s)
    return date.toLocaleDateString('de-DE', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  }