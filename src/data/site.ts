export const site = {
  name: 'Pacific Spirit Electrical',
  domain: 'https://pacificspiritelectrical.ca',
  email: 'harry@pacificspiritelectrical.ca',
  tagline: 'Reliable. Safe. Professional.',
  city: 'Vancouver',
  region: 'British Columbia',
  country: 'Canada',
  serviceArea: 'Vancouver and Greater Vancouver',
} as const;

export const services = [
  { title: 'Residential Electrical', description: 'Practical electrical work for the systems, spaces, and everyday needs of your home.', id: undefined },
  { title: 'Electrical Panel Upgrades', description: 'Panel-focused work to support the changing electrical needs of your home.', id: undefined },
  { title: 'EV Charger Installation', description: 'Home charging electrical work planned around your vehicle and space.', id: 'ev-heat-pumps' },
  { title: 'Heat Pump Electrical', description: 'Electrical preparation and connections for residential heat pump projects.', id: undefined },
  { title: 'Renovation & Rewiring', description: 'Electrical work that fits cleanly into renovation plans and updates to existing wiring.', id: undefined },
  { title: 'Lighting Installation', description: 'Thoughtful lighting installation for everyday comfort, function, and atmosphere.', id: undefined },
  { title: 'Electrical Troubleshooting & Repairs', description: 'Clear, methodical help with electrical issues and practical repairs around your home.', id: undefined },
  { title: 'Electrical Permit & Inspection Support', description: 'Electrical project support that considers permit and inspection requirements.', id: undefined },
  { title: 'Older Home Electrical Upgrades', description: 'Careful electrical upgrades for Vancouver homes with older systems.', id: 'older-homes' },
] as const;
