export const SITE = {
  name: 'GlobeTrail Travel & Tourism',
  shortName: 'GlobeTrail',
  phone: '+91 98901 23457',
  phoneHref: 'tel:+919890123457',
  email: 'hello@globetrail.com',
  emailHref: 'mailto:hello@globetrail.com',
  address: '12 Explorer Arcade, Sector 18, Noida, Uttar Pradesh 201301',
  hours: [
    { day: 'Monday – Friday', time: '9:00 AM – 8:00 PM' },
    { day: 'Saturday', time: '10:00 AM – 6:00 PM' },
    { day: 'Sunday', time: '11:00 AM – 4:00 PM' },
  ],
  socials: [
    { label: 'Facebook', href: '#' },
    { label: 'Instagram', href: '#' },
    { label: 'Twitter', href: '#' },
    { label: 'YouTube', href: '#' },
  ],
};

export type Destination = {
  slug: string;
  name: string;
  country: string;
  region: 'Domestic' | 'International';
  image: string;
  tagline: string;
  description: string;
  highlights: string[];
  bestTime: string;
  avgCost: string;
  rating: number;
  tours: number;
};

export const destinations: Destination[] = [
  {
    slug: 'kerala-backwaters',
    name: 'Kerala Backwaters',
    country: 'India',
    region: 'Domestic',
    image: 'https://images.pexels.com/photos/17928231/pexels-photo-17928231.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tagline: 'God\'s Own Country, afloat on palm-fringed lagoons',
    description:
      'Drift through a serene network of canals, lakes and rivers aboard a traditional kettuvallam houseboat. Lush paddy fields, coconut groves and sleepy villages line the waterways of Alappuzha and Kumarakom, making Kerala one of the most tranquil getaways in India.',
    highlights: ['Overnight houseboat cruise', 'Ayurvedic wellness spas', 'Kathakali performance', 'Spice plantations of Munnar'],
    bestTime: 'Sep – Mar',
    avgCost: '₹18,000',
    rating: 4.8,
    tours: 6,
  },
  {
    slug: 'goa-beaches',
    name: 'Goa Beaches',
    country: 'India',
    region: 'Domestic',
    image: 'https://images.pexels.com/photos/8037061/pexels-photo-8037061.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tagline: 'Sun-kissed shores, susegado nights and Portuguese charm',
    description:
      'From the lively sands of Baga and Calangute to the quiet coves of Palolem and Agonda, Goa blends golden beaches, whitewashed churches and buzzing shacks. Sunset cruises on the Mandovi and flea markets in Anjuna round out the coast\'s easy rhythm.',
    highlights: ['Beach shacks & water sports', 'Old Goa churches', 'Dudhsagar waterfall', 'Saturday night market'],
    bestTime: 'Nov – Feb',
    avgCost: '₹14,000',
    rating: 4.6,
    tours: 8,
  },
  {
    slug: 'jaipur-rajasthan',
    name: 'Jaipur & Rajasthan',
    country: 'India',
    region: 'Domestic',
    image: 'https://images.pexels.com/photos/32261804/pexels-photo-32261804.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tagline: 'The Pink City and the royal desert frontier',
    description:
      'Amber Fort, the Hawa Mahal and the City Palace frame Jaipur\'s rose-hued old town. Beyond it, Jodhpur\'s blue lanes, Udaipur\'s lake palaces and a camel safari in Jaisalmer tell the story of Rajasthan\'s royal past.',
    highlights: ['Amber Fort elephant ride', 'City Palace & Jantar Mantar', 'Camel safari in Jaisalmer', 'Lake Pichola boat ride'],
    bestTime: 'Oct – Mar',
    avgCost: '₹22,000',
    rating: 4.7,
    tours: 5,
  },
  {
    slug: 'santorini-greece',
    name: 'Santorini',
    country: 'Greece',
    region: 'International',
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tagline: 'Whitewashed cliffs above a flooded volcanic caldera',
    description:
      'Blue-domed churches cascade down the cliffs of Oia and Fira, framing sunsets that draw travellers from every continent. Sip Assyrtiko wine on a terrace, sail to the hot springs of Nea Kameni and lose yourself in the island\'s Cycladic light.',
    highlights: ['Oia sunset viewpoint', 'Caldera catamaran cruise', 'Akrotiri ruins', 'Red & White beaches'],
    bestTime: 'Apr – Oct',
    avgCost: '₹1,20,000',
    rating: 4.9,
    tours: 4,
  },
  {
    slug: 'swiss-alps',
    name: 'Swiss Alps',
    country: 'Switzerland',
    region: 'International',
    image: 'https://images.pexels.com/photos/37713450/pexels-photo-37713450.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tagline: 'Snow peaks, glacier lakes and panoramic rail journeys',
    description:
      'Ride the Glacier Express through dramatic viaducts, ski the slopes of Zermatt beneath the Matterhorn and cruise the turquoise waters of Lake Lucerne. Alpine villages with chalet rooftops and fondue evenings make Switzerland a year-round favourite.',
    highlights: ['Glacier Express rail journey', 'Jungfraujoch – Top of Europe', 'Lake Lucerne cruise', 'Zermatt skiing'],
    bestTime: 'Dec – Mar / Jun – Sep',
    avgCost: '₹1,80,000',
    rating: 4.9,
    tours: 5,
  },
  {
    slug: 'bali-indonesia',
    name: 'Bali',
    country: 'Indonesia',
    region: 'International',
    image: 'https://images.pexels.com/photos/15994332/pexels-photo-15994332.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tagline: 'Island of gods, rice terraces and temple rituals',
    description:
      'Tegallalang\'s emerald rice terraces, the cliffside temple of Uluwatu and the artistic heart of Ubud define Bali\'s soul. Surf in Canggu, dive with manta rays off Nusa Penida and unwind in a jungle villa surrounded by frangipani.',
    highlights: ['Tegallalang rice terraces', 'Uluwatu & Tanah Lot temples', 'Nusa Penida island tour', 'Ubud yoga retreats'],
    bestTime: 'Apr – Oct',
    avgCost: '₹65,000',
    rating: 4.8,
    tours: 7,
  },
  {
    slug: 'dubai-uae',
    name: 'Dubai',
    country: 'UAE',
    region: 'International',
    image: 'https://images.pexels.com/photos/19664340/pexels-photo-19664340.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tagline: 'Desert megacity of skyscrapers, gold and dunes',
    description:
      'Ascend the Burj Khalifa, shop the gold souks and ski indoors at Mall of the Emirates. Beyond the skyline, a desert safari across the red dunes of Lahbab and a dhow cruise along Dubai Marina reveal the city\'s Bedouin roots.',
    highlights: ['Burj Khalifa observation deck', 'Desert safari with BBQ dinner', 'Palm Jumeirah & Atlantis', 'Dhow cruise at Marina'],
    bestTime: 'Nov – Mar',
    avgCost: '₹95,000',
    rating: 4.7,
    tours: 6,
  },
  {
    slug: 'maldives',
    name: 'Maldives',
    country: 'Maldives',
    region: 'International',
    image: 'https://images.pexels.com/photos/1287455/pexels-photo-1287455.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tagline: 'Overwater villas above a luminous Indian Ocean lagoon',
    description:
      'Glass-floor overwater villas, house reefs alive with turtles and manta rays, and sandbanks that vanish at high tide — the Maldives is the blueprint for barefoot luxury. Snorkel, dive or simply watch the horizon from your private plunge pool.',
    highlights: ['Overwater villa stay', 'House-reef snorkeling', 'Bioluminescent beach walk', 'Dolphin cruise'],
    bestTime: 'Nov – Apr',
    avgCost: '₹1,50,000',
    rating: 4.9,
    tours: 5,
  },
  {
    slug: 'paris-france',
    name: 'Paris',
    country: 'France',
    region: 'International',
    image: 'https://images.pexels.com/photos/14681748/pexels-photo-14681748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tagline: 'The city of light, love and timeless boulevards',
    description:
      'From the Eiffel Tower at dusk to the Louvre\'s treasures and Montmartre\'s cobbled lanes, Paris rewards slow wandering. Café terraces, patisseries and a Seine cruise at night make it the eternal romantic favourite.',
    highlights: ['Eiffel Tower & Seine cruise', 'Louvre & Musée d\'Orsay', 'Versailles day trip', 'Montmartre & Sacré-Cœur'],
    bestTime: 'Apr – Jun / Sep – Oct',
    avgCost: '₹1,10,000',
    rating: 4.8,
    tours: 4,
  },
  {
    slug: 'thailand-islands',
    name: 'Thailand Islands',
    country: 'Thailand',
    region: 'International',
    image: 'https://images.pexels.com/photos/35993701/pexels-photo-35993701.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tagline: 'Limestone karsts and longtail boats in the Andaman Sea',
    description:
      'Phi Phi\'s turquoise lagoons, Phuket\'s buzzing beaches and Krabi\'s towering karsts form Thailand\'s island playground. Island-hop by longtail boat, kayak into hidden lagoons and end the day at a Full Moon beach party.',
    highlights: ['Phi Phi island hopping', 'Phang Nga Bay kayaking', 'James Bond Island', 'Phuket old town'],
    bestTime: 'Nov – Apr',
    avgCost: '₹58,000',
    rating: 4.7,
    tours: 6,
  },
  {
    slug: 'new-york-usa',
    name: 'New York City',
    country: 'USA',
    region: 'International',
    image: 'https://images.pexels.com/photos/6108477/pexels-photo-6108477.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tagline: 'The city that never sleeps, skyline to skyline',
    description:
      'Take the ferry to the Statue of Liberty, walk the High Line, catch a Broadway show and lose yourself in Central Park. New York\'s energy, food and skyline views from the Empire State and Edge make every visit electric.',
    highlights: ['Statue of Liberty cruise', 'Central Park & Times Square', 'Empire State observation deck', 'Broadway show'],
    bestTime: 'Apr – Jun / Sep – Nov',
    avgCost: '₹1,40,000',
    rating: 4.7,
    tours: 3,
  },
  {
    slug: 'singapore',
    name: 'Singapore',
    country: 'Singapore',
    region: 'International',
    image: 'https://images.pexels.com/photos/15480459/pexels-photo-15480459.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    tagline: 'Garden city where the future meets the tropics',
    description:
      'Marina Bay Sands, Gardens by the Bay\'s supertrees and a hawker-centre food scene make Singapore a compact marvel. Ride the Singapore Flyer, explore Sentosa Island and savour chili crab by the river.',
    highlights: ['Marina Bay Sands SkyPark', 'Gardens by the Bay', 'Sentosa & Universal Studios', 'Chinatown hawker food'],
    bestTime: 'Feb – Apr',
    avgCost: '₹78,000',
    rating: 4.6,
    tours: 4,
  },
];

export type Package = {
  slug: string;
  title: string;
  destination: string;
  category: 'Domestic' | 'International' | 'Honeymoon' | 'Family' | 'Adventure' | 'Luxury';
  image: string;
  duration: string;
  days: number;
  price: number;
  oldPrice?: number;
  rating: number;
  reviews: number;
  includes: string[];
  blurb: string;
  featured?: boolean;
};

export const packages: Package[] = [
  {
    slug: 'kerala-houseboat-retreat',
    title: 'Kerala Houseboat Retreat',
    destination: 'Alappuzya & Munnar, India',
    category: 'Domestic',
    image: 'https://images.pexels.com/photos/17928231/pexels-photo-17928231.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    duration: '5 Nights / 6 Days',
    days: 6,
    price: 18999,
    oldPrice: 24999,
    rating: 4.8,
    reviews: 214,
    includes: ['Houseboat stay', 'All meals', 'Munnar tea estate tour', 'Private cab'],
    blurb: 'Cruise the backwaters on a luxury houseboat and wake to misty tea gardens in Munnar.',
    featured: true,
  },
  {
    slug: 'goa-beach-bash',
    title: 'Goa Beach Bash',
    destination: 'North & South Goa, India',
    category: 'Domestic',
    image: 'https://images.pexels.com/photos/8037061/pexels-photo-8037061.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    duration: '3 Nights / 4 Days',
    days: 4,
    price: 12999,
    oldPrice: 16999,
    rating: 4.6,
    reviews: 389,
    includes: ['Beach resort stay', 'Daily breakfast', 'River cruise', 'Casino entry'],
    blurb: 'Sunset cruises, beach shacks and a casino night on Goa\'s golden coast.',
  },
  {
    slug: 'royal-rajasthan-heritage',
    title: 'Royal Rajasthan Heritage',
    destination: 'Jaipur, Jodhpur & Udaipur, India',
    category: 'Domestic',
    image: 'https://images.pexels.com/photos/32261804/pexels-photo-32261804.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    duration: '7 Nights / 8 Days',
    days: 8,
    price: 32999,
    oldPrice: 39999,
    rating: 4.7,
    reviews: 176,
    includes: ['Heritage hotel stays', 'All transfers', 'Camel safari', 'Sound & light show'],
    blurb: 'Live like royalty across the forts, palaces and lakes of the Pink City trail.',
    featured: true,
  },
  {
    slug: 'santorini-island-escape',
    title: 'Santorini Island Escape',
    destination: 'Santorini, Greece',
    category: 'International',
    image: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    duration: '4 Nights / 5 Days',
    days: 5,
    price: 119999,
    oldPrice: 139999,
    rating: 4.9,
    reviews: 142,
    includes: ['Cliffside hotel', 'Caldera cruise', 'Wine tasting', 'Airport transfers'],
    blurb: 'Blue domes, caldera sunsets and a catamaran cruise around the Aegean.',
    featured: true,
  },
  {
    slug: 'swiss-alps-panorama',
    title: 'Swiss Alps Panorama',
    destination: 'Lucerne, Interlaken & Zermatt, Switzerland',
    category: 'International',
    image: 'https://images.pexels.com/photos/37713450/pexels-photo-37713450.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    duration: '6 Nights / 7 Days',
    days: 7,
    price: 179999,
    oldPrice: 199999,
    rating: 4.9,
    reviews: 98,
    includes: ['Swiss Travel Pass', 'Glacier Express', 'Jungfraujoch trip', '4-star hotels'],
    blurb: 'Panoramic rail journeys through snow peaks, glacier lakes and alpine villages.',
    featured: true,
  },
  {
    slug: 'bali-island-bliss',
    title: 'Bali Island Bliss',
    destination: 'Ubud & Seminyak, Indonesia',
    category: 'International',
    image: 'https://images.pexels.com/photos/15994332/pexels-photo-15994332.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    duration: '5 Nights / 6 Days',
    days: 6,
    price: 64999,
    oldPrice: 79999,
    rating: 4.8,
    reviews: 261,
    includes: ['Pool villa stay', 'Nusa Penida tour', 'Spa session', 'Daily breakfast'],
    blurb: 'Rice terraces, temple rituals and a pool villa in the heart of Bali.',
    featured: true,
  },
  {
    slug: 'dubai-desert-deluxe',
    title: 'Dubai Desert Deluxe',
    destination: 'Dubai, UAE',
    category: 'Luxury',
    image: 'https://images.pexels.com/photos/19664340/pexels-photo-19664340.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    duration: '4 Nights / 5 Days',
    days: 5,
    price: 94999,
    oldPrice: 114999,
    rating: 4.7,
    reviews: 203,
    includes: ['5-star hotel', 'Burj Khalifa tickets', 'Desert safari', 'Dhow cruise dinner'],
    blurb: 'Sky-high views, gold souks and a desert safari under the stars.',
    featured: true,
  },
  {
    slug: 'maldives-overwater-honeymoon',
    title: 'Maldives Overwater Honeymoon',
    destination: 'South Malé Atoll, Maldives',
    category: 'Honeymoon',
    image: 'https://images.pexels.com/photos/1287455/pexels-photo-1287455.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    duration: '4 Nights / 5 Days',
    days: 5,
    price: 149999,
    oldPrice: 179999,
    rating: 4.9,
    reviews: 187,
    includes: ['Overwater villa', 'Speedboat transfers', 'Candlelight dinner', 'Snorkeling trip'],
    blurb: 'A private overwater villa, candlelight dinner and a house reef full of turtles.',
    featured: true,
  },
  {
    slug: 'paris-romantic-getaway',
    title: 'Paris Romantic Getaway',
    destination: 'Paris, France',
    category: 'Honeymoon',
    image: 'https://images.pexels.com/photos/14681748/pexels-photo-14681748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    duration: '4 Nights / 5 Days',
    days: 5,
    price: 109999,
    oldPrice: 129999,
    rating: 4.8,
    reviews: 134,
    includes: ['Boutique hotel', 'Seine dinner cruise', 'Louvre skip-the-line', 'Eiffel Tower access'],
    blurb: 'Seine sunsets, café terraces and a dinner cruise beneath the Eiffel Tower.',
  },
  {
    slug: 'thailand-family-fun',
    title: 'Thailand Family Fun',
    destination: 'Phuket & Krabi, Thailand',
    category: 'Family',
    image: 'https://images.pexels.com/photos/35993701/pexels-photo-35993701.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    duration: '5 Nights / 6 Days',
    days: 6,
    price: 57999,
    oldPrice: 69999,
    rating: 4.7,
    reviews: 312,
    includes: ['Family resort', 'Phi Phi island tour', 'Phang Nga kayaking', 'All transfers'],
    blurb: 'Island-hopping, sea kayaking and beach days the whole family will love.',
    featured: true,
  },
  {
    slug: 'singapore-family-adventure',
    title: 'Singapore Family Adventure',
    destination: 'Singapore',
    category: 'Family',
    image: 'https://images.pexels.com/photos/15480459/pexels-photo-15480459.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    duration: '4 Nights / 5 Days',
    days: 5,
    price: 77999,
    oldPrice: 89999,
    rating: 4.6,
    reviews: 198,
    includes: ['Sentosa stay', 'Universal Studios tickets', 'Gardens by the Bay', 'Night Safari'],
    blurb: 'Supertrees, Universal Studios and a night safari for the perfect family break.',
  },
  {
    slug: 'himalayan-trek-expedition',
    title: 'Himalayan Trek Expedition',
    destination: 'Annapurna Circuit, Nepal',
    category: 'Adventure',
    image: 'https://images.pexels.com/photos/6808521/pexels-photo-6808521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    duration: '9 Nights / 10 Days',
    days: 10,
    price: 44999,
    oldPrice: 54999,
    rating: 4.8,
    reviews: 76,
    includes: ['Guide & porters', 'Tea-house stays', 'All meals on trek', 'Permits & gear'],
    blurb: 'A high-altitude trek through rhododendron forests and Himalayan passes.',
    featured: true,
  },
  {
    slug: 'cappadocia-balloon-adventure',
    title: 'Cappadocia Balloon Adventure',
    destination: 'Cappadocia, Turkey',
    category: 'Adventure',
    image: 'https://images.pexels.com/photos/27260270/pexels-photo-27260270.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    duration: '3 Nights / 4 Days',
    days: 4,
    price: 69999,
    oldPrice: 84999,
    rating: 4.9,
    reviews: 121,
    includes: ['Cave hotel', 'Hot air balloon ride', 'ATV sunset tour', 'Daily breakfast'],
    blurb: 'Sunrise hot air balloons over fairy chimneys and a cave hotel stay.',
    featured: true,
  },
  {
    slug: 'iceland-aurora-quest',
    title: 'Iceland Aurora Quest',
    destination: 'Reykjavík & South Iceland, Iceland',
    category: 'Adventure',
    image: 'https://images.pexels.com/photos/31291321/pexels-photo-31291321.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    duration: '5 Nights / 6 Days',
    days: 6,
    price: 159999,
    oldPrice: 189999,
    rating: 4.8,
    reviews: 64,
    includes: ['4x4 rental', 'Aurora hunt tour', 'Blue Lagoon entry', 'Golden Circle tour'],
    blurb: 'Chase the northern lights across glaciers, geysers and black-sand beaches.',
  },
  {
    slug: 'machu-picchu-trail',
    title: 'Machu Picchu Trail',
    destination: 'Cusco & Machu Picchu, Peru',
    category: 'Adventure',
    image: 'https://images.pexels.com/photos/37885473/pexels-photo-37885473.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    duration: '6 Nights / 7 Days',
    days: 7,
    price: 169999,
    oldPrice: 199999,
    rating: 4.9,
    reviews: 89,
    includes: ['Sacred Valley tour', 'Machu Picchu entry', 'Train to Aguas Calientes', 'English guide'],
    blurb: 'Walk in the footsteps of the Incas to the lost city in the clouds.',
  },
  {
    slug: 'venice-grand-luxury',
    title: 'Venice Grand Luxury',
    destination: 'Venice, Italy',
    category: 'Luxury',
    image: 'https://images.pexels.com/photos/29487687/pexels-photo-29487687.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    duration: '4 Nights / 5 Days',
    days: 5,
    price: 159999,
    oldPrice: 189999,
    rating: 4.8,
    reviews: 73,
    includes: ['Canal-view suite', 'Private gondola', 'Murano & Burano tour', 'Opera tickets'],
    blurb: 'A canal-view suite, private gondola and an evening at the opera.',
  },
  {
    slug: 'maldives-luxury-resort',
    title: 'Maldives Luxury Resort Stay',
    destination: 'Baa Atoll, Maldives',
    category: 'Luxury',
    image: 'https://images.pexels.com/photos/4973961/pexels-photo-4973961.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
    duration: '5 Nights / 6 Days',
    days: 6,
    price: 249999,
    oldPrice: 299999,
    rating: 4.9,
    reviews: 58,
    includes: ['Seaplane transfer', 'Beach pool villa', 'Spa credit', 'Sunset dolphin cruise'],
    blurb: 'A seaplane arrival, beach pool villa and a spa credit in a UNESCO biosphere reserve.',
  },
];

export type Service = {
  icon: string;
  title: string;
  description: string;
  features: string[];
};

export const services: Service[] = [
  {
    icon: 'Package',
    title: 'Holiday Packages',
    description: 'Curated, all-inclusive itineraries for domestic and international holidays — flights, stays, transfers and sightseeing bundled into one price.',
    features: ['Fixed & custom itineraries', 'Group & solo options', 'All-inclusive pricing'],
  },
  {
    icon: 'Plane',
    title: 'Flight Booking',
    description: 'Best fares across 500+ airlines with flexible dates, fare alerts and end-to-end ticketing support for one-way, round-trip and multi-city trips.',
    features: ['500+ airlines', 'Fare price alerts', 'Multi-city routing'],
  },
  {
    icon: 'Hotel',
    title: 'Hotel Booking',
    description: 'From boutique stays to five-star resorts, compare and book verified hotels with instant confirmation and member-only rates.',
    features: ['Verified reviews', 'Instant confirmation', 'Member-only rates'],
  },
  {
    icon: 'FileText',
    title: 'Visa Assistance',
    description: 'Documentation checklists, application support and embassy appointments for Schengen, US, UK, UAE and 40+ destinations.',
    features: ['40+ countries', 'Document checklist', 'Embassy appointment'],
  },
  {
    icon: 'Heart',
    title: 'Honeymoon Planning',
    description: 'Romantic escapes designed around you — private villas, candlelight dinners and the most breathtaking backdrops for your first trip together.',
    features: ['Private villa stays', 'Candlelight dinners', 'Couple spa sessions'],
  },
  {
    icon: 'Building2',
    title: 'Corporate Tours',
    description: 'Offsites, incentive trips and MICE travel managed end-to-end with negotiated corporate rates and dedicated account managers.',
    features: ['MICE & offsites', 'Corporate rates', 'Dedicated manager'],
  },
  {
    icon: 'Users',
    title: 'Group Tours',
    description: 'Join-in and private group departures with like-minded travellers, expert local guides and a fixed, hassle-free itinerary.',
    features: ['Fixed departures', 'Expert local guides', 'Like-minded groups'],
  },
  {
    icon: 'ShieldCheck',
    title: 'Travel Insurance',
    description: 'Comprehensive cover for medical emergencies, trip cancellations, lost baggage and flight delays — issued instantly at booking.',
    features: ['Medical & evacuation', 'Trip cancellation', 'Baggage & delays'],
  },
];

export type Testimonial = {
  name: string;
  location: string;
  avatar: string;
  rating: number;
  trip: string;
  quote: string;
};

export const testimonials: Testimonial[] = [
  {
    name: 'Aarav & Meera Sharma',
    location: 'New Delhi, India',
    avatar: 'https://images.pexels.com/photos/1890033/pexels-photo-1890033.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
    trip: 'Maldives Overwater Honeymoon',
    quote:
      'Our honeymoon was pure magic. The overwater villa, the candlelight dinner on the beach, the snorkeling with turtles — GlobeTrail handled every detail so we could just be present. Worth every rupee.',
  },
  {
    name: 'Rohan Iyer',
    location: 'Mumbai, India',
    avatar: 'https://images.pexels.com/photos/17910791/pexels-photo-17910791.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
    trip: 'Swiss Alps Panorama',
    quote:
      'The Glacier Express journey was a dream. Everything from the Swiss Travel Pass to the hotel in Zermatt was sorted before we landed. The team called to check in mid-trip — that level of care is rare.',
  },
  {
    name: 'Sunita Reddy',
    location: 'Hyderabad, India',
    avatar: 'https://images.pexels.com/photos/30781748/pexels-photo-30781748.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
    trip: 'Thailand Family Fun',
    quote:
      'Travelling with two kids is never easy, but GlobeTrail made it effortless. The Phi Phi island tour was a highlight and the family resort was perfect. We are already planning our next trip with them.',
  },
  {
    name: 'David & Charlotte',
    location: 'London, UK',
    avatar: 'https://images.pexels.com/photos/30004323/pexels-photo-30004323.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
    trip: 'Royal Rajasthan Heritage',
    quote:
      'From the moment we landed in Jaipur, everything was seamless. The heritage hotels were breathtaking and our guide brought the forts to life. The most authentic India experience we could have asked for.',
  },
  {
    name: 'Vikram Patel',
    location: 'Ahmedabad, India',
    avatar: 'https://images.pexels.com/photos/37159572/pexels-photo-37159572.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
    trip: 'Cappadocia Balloon Adventure',
    quote:
      'The hot air balloon ride at sunrise was the most incredible experience of my life. The cave hotel was so unique and the team thought of every little detail. Highly recommend GlobeTrail.',
  },
  {
    name: 'Mr. Krishnan',
    location: 'Chennai, India',
    avatar: 'https://images.pexels.com/photos/11579595/pexels-photo-11579595.jpeg?auto=compress&cs=tinysrgb&h=200&w=200',
    rating: 5,
    trip: 'Kerala Houseboat Retreat',
    quote:
      'A peaceful, unhurried trip through the backwaters. The houseboat crew cooked the freshest food and the Munnar tea gardens were stunning. Just what we needed to unwind.',
  },
];

export type Expert = {
  name: string;
  role: string;
  image: string;
  bio: string;
  experience: string;
};

export const experts: Expert[] = [
  {
    name: 'Ananya Kapoor',
    role: 'Founder & Lead Planner',
    image: 'https://images.pexels.com/photos/30004321/pexels-photo-30004321.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    bio: 'A decade of crafting bespoke itineraries across 45 countries, Ananya founded GlobeTrail to make travel personal again.',
    experience: '12+ years',
  },
  {
    name: 'Rahul Mehta',
    role: 'Head of International Tours',
    image: 'https://images.pexels.com/photos/37148308/pexels-photo-37148308.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    bio: 'Rahul has personally scouted resorts in 30+ countries and negotiates the rates and upgrades our travellers love.',
    experience: '10+ years',
  },
  {
    name: 'Priya Nair',
    role: 'Honeymoon & Luxury Specialist',
    image: 'https://images.pexels.com/photos/30781748/pexels-photo-30781748.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    bio: 'From private overwater villas to candlelight dinners, Priya designs the romantic escapes couples never forget.',
    experience: '8+ years',
  },
  {
    name: 'Arjun Singh',
    role: 'Adventure & Trekking Lead',
    image: 'https://images.pexels.com/photos/17049771/pexels-photo-17049771.jpeg?auto=compress&cs=tinysrgb&h=400&w=400',
    bio: 'A certified mountaineer, Arjun leads our Himalayan and high-altitude expeditions with safety always first.',
    experience: '9+ years',
  },
];

export const stats = [
  { value: 25000, suffix: '+', label: 'Happy Travellers' },
  { value: 120, suffix: '+', label: 'Destinations Covered' },
  { value: 15, suffix: '+', label: 'Years of Experience' },
  { value: 4.9, suffix: '/5', label: 'Average Rating', decimals: 1 },
];

export const faqs = [
  {
    q: 'Are flights included in your tour packages?',
    a: 'Most of our international packages include round-trip flights, while domestic packages offer them as an optional add-on. Every package page lists exactly what is included — flights, hotels, transfers, meals and sightseeing — so there are no surprises.',
  },
  {
    q: 'Can I customise a package to fit my dates and budget?',
    a: 'Absolutely. Every itinerary on our site is a starting point. Tell us your dates, budget and interests and your travel expert will tailor the package — adding or removing cities, upgrading hotels and adjusting activities to suit you.',
  },
  {
    q: 'Do you help with visa applications?',
    a: 'Yes. Our visa desk provides document checklists, reviews your application, books embassy appointments where required and tracks your passport. We currently assist with Schengen, US, UK, UAE, Thailand, Singapore and 40+ other destinations.',
  },
  {
    q: 'What is your cancellation and refund policy?',
    a: 'Cancellation terms vary by airline and hotel, but we always aim for the most flexible option. We share the exact policy before you pay, and in case of cancellation we process refunds within 7–10 working days of receiving them from suppliers.',
  },
  {
    q: 'How do I make a booking and what are the payment options?',
    a: 'You can request a booking through any package page or the contact form. Our team will share a quote and a secure payment link. We accept all major cards, UPI, net banking and EMI on select packages.',
  },
  {
    q: 'Do you offer travel insurance?',
    a: 'Yes — comprehensive travel insurance covering medical emergencies, trip cancellations, lost baggage and flight delays is available at checkout and can be added to any package in a single click.',
  },
];

export const galleryImages = [
  { src: 'https://images.pexels.com/photos/27651087/pexels-photo-27651087.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Aerial view of a tropical beach with turquoise water', span: 'tall' },
  { src: 'https://images.pexels.com/photos/1010657/pexels-photo-1010657.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Blue-domed churches in Santorini, Greece', span: 'normal' },
  { src: 'https://images.pexels.com/photos/15994332/pexels-photo-15994332.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Bali rice terraces surrounded by greenery', span: 'normal' },
  { src: 'https://images.pexels.com/photos/27260270/pexels-photo-27260270.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Hot air balloons over Cappadocia at sunrise', span: 'wide' },
  { src: 'https://images.pexels.com/photos/17928231/pexels-photo-17928231.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Kerala houseboat on the backwaters', span: 'normal' },
  { src: 'https://images.pexels.com/photos/31291321/pexels-photo-31291321.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Aurora borealis over Iceland', span: 'tall' },
  { src: 'https://images.pexels.com/photos/19664340/pexels-photo-19664340.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Dubai skyline with Burj Khalifa', span: 'normal' },
  { src: 'https://images.pexels.com/photos/1287455/pexels-photo-1287455.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Maldives overwater bungalows', span: 'wide' },
  { src: 'https://images.pexels.com/photos/14681748/pexels-photo-14681748.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Eiffel Tower at sunset in Paris', span: 'normal' },
  { src: 'https://images.pexels.com/photos/6808521/pexels-photo-6808521.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Hiker admiring the Himalayas in Nepal', span: 'tall' },
  { src: 'https://images.pexels.com/photos/35993701/pexels-photo-35993701.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Longtail boat near a Thai island', span: 'normal' },
  { src: 'https://images.pexels.com/photos/37713450/pexels-photo-37713450.jpeg?auto=compress&cs=tinysrgb&h=650&w=940', alt: 'Snow-covered Alpine village in Switzerland', span: 'wide' },
];

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Packages', href: '/packages' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Services', href: '/services' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Contact', href: '/contact' },
];

export const packageCategories = [
  'Domestic',
  'International',
  'Honeymoon',
  'Family',
  'Adventure',
  'Luxury',
] as const;
