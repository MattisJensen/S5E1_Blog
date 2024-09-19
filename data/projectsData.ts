interface Project {
  title: string,
  description: string,
  href?: string,
  imgSrc?: string,
}

const projectsData: Project[] = [
  {
    title: 'Google Cloud Compute Engine Blog',
    description: `I deployed this blog on Google Cloud Compute Engine.`,
    imgSrc: '/static/images/google-cloud-logo.png',
    href: 'https://www.google.com',
  },
  {
    title: 'Google Cloud App Engine Blog',
    description: `I deployed this blog on Google Cloud App Engine.`,
    imgSrc: '/static/images/google-cloud-logo.png',
    href: '/blog/the-time-machine',
  },
]

export default projectsData
