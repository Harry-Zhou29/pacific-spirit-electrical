export const site = {
  name: 'Pacific Spirit Electrical',
  domain: 'https://pacificspiritelectrical.ca',
  email: 'harry@pacificspiritelectrical.ca',
  phone: '778-879-8210',
  telephone: '+17788798210',
  tagline: 'Reliable. Safe. Professional.',
  city: 'Vancouver',
  region: 'British Columbia',
  country: 'Canada',
  serviceArea: 'Greater Vancouver, BC',
  qualification: 'Red Seal Electrician',
  businessType: 'Residential & Commercial',
  emergencyService: true,
  freeEstimates: true,
} as const;

export const services = [
  { title: 'Residential Electrical', description: 'Practical electrical work for the systems, spaces, and everyday needs of your home.', id: undefined, icon: 'home' },
  { title: 'Electrical Panel Upgrades', description: 'Panel-focused work to support the changing electrical needs of your home.', id: undefined, icon: 'panel' },
  { title: 'EV Charger Installation', description: 'Home charging electrical work planned around your vehicle and space.', id: 'ev-heat-pumps', icon: 'plug' },
  { title: 'Heat Pump Electrical', description: 'Electrical preparation and connections for residential heat pump projects.', id: undefined, icon: 'heat-pump' },
  { title: 'Renovation & Rewiring', description: 'Electrical work that fits cleanly into renovation plans and updates to existing wiring.', id: undefined, icon: 'rewire' },
  { title: 'Lighting Installation', description: 'Thoughtful lighting installation for everyday comfort, function, and atmosphere.', id: undefined, icon: 'bulb' },
  { title: 'Electrical Troubleshooting & Repairs', description: 'Clear, methodical help with electrical issues and practical repairs around your home.', id: undefined, icon: 'troubleshoot' },
  { title: 'Electrical Permit & Inspection Support', description: 'Electrical project support that considers permit and inspection requirements.', id: undefined, icon: 'clipboard-check' },
  { title: 'Older Home Electrical Upgrades', description: 'Careful electrical upgrades for Vancouver homes with older systems.', id: 'older-homes', icon: 'older-home' },
] as const;
