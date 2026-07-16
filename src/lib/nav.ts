export interface NavChild {
  label: string
  to: string
}

export interface NavItem {
  label: string
  to?: string
  href?: string
  children?: NavChild[]
}

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', to: '/' },
  {
    label: 'About Us',
    to: '/about',
    children: [
      { label: 'What We Do', to: '/what-we-do' },
      { label: 'Our Experts', to: '/about/experts' },
    ],
  },
  {
    label: 'Services',
    to: '/services',
    children: [
      { label: 'Discover', to: '/services/discover' },
      { label: 'Adapt', to: '/services/adapt' },
      { label: 'Evolve', to: '/services/evolve' },
    ],
  },
  { label: 'Capabilities', to: '/capabilities' },
  {
    label: 'Solutions',
    to: '/solutions',
    children: [
      { label: 'SOC as a Service', to: '/solutions/soc' },
      { label: 'CISO as a Service', to: '/solutions/ciso' },
    ],
  },
  { label: 'Insights', to: '/insights' },
]

export const SOCIALS = [
  { label: 'Facebook', href: 'https://www.facebook.com/188219831034107' },
  { label: 'X', href: 'https://twitter.com/Rothian_Cyber' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/rothian-cyber' },
  { label: 'Instagram', href: 'https://www.instagram.com/rothian_cyber' },
  { label: 'YouTube', href: 'https://www.youtube.com/@RothianCyber' },
] as const

export const CONTACT = {
  email: 'info@rothian.com',
  phone: '+44 07379 506 159',
  phoneHref: 'tel:+4407379506159',
  whatsapp: 'https://api.whatsapp.com/send?phone=971585862377',
} as const
