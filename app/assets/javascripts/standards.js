var standardData = [
    "Church minister (degree)",
    "Motorcycle technician (repair and maintenance)",
    "Learning mentor",
    "Mineral processing weighbridge operator",
    "Blacksmith ",
    "Construction quantity surveying technician",
    "Business support assistant ",
    "Children, young people and families practitioner",
    "Structural steelwork fabricator",
    "Tunnelling operative",
    "Wall and floor tiler",
    "Asbestos removal operative",
    "Registrar (creative and cultural)",
    "Resource technical manager",
    "Sporting excellence professional",
    "Construction design and build technician",
    "Metal casting, foundry and patternmaking technician",
    "Policy officer",
    "Print technician",
    "School business professional",
    "Marina and boatyard operative",
    "Watchmaker",
    "Emergency service contact handling",
    "Port plant machinery operative ",
    "Marine engineer",
    "Senior investment / commercial banking professional",
    "Public relations and communications assistant",
    "Crop technician",
    "Leisure and entertainment engineering technician",
    "Financial services professional",
    "Vehicle damage mechanical, electrical and trim (MET) technician",
    "Revenues and welfare benefits practitioner",
    "Caster ",
    "Cyber security technical professional (integrated degree)",
    "Propulsion technician",
    "Improvement specialist",
    "Construction assembly and installation operative",
    "Outdoor activity instructor",
    "Stockperson (beef, pigs, sheep, dairy)",
    "Brewer",
    "Marketing manager",
    "Ordnance munitions and explosives (OME) professional (degree)",
    "Vehicle damage paint technician",
    "Military engineering construction technician",
    "Scaffolder",
    "Supply chain practitioner (fast moving consumer good) [previously Operator/Manager]",
    "Technician Scientist",
    "Waste resource operative",
    "Jewellery, silversmithing, and allied trades professional",
    "Operating department practitioner (integrated degree)",
    "Prosthetist / orthotist (degree)",
    "Intelligence analyst",
    "Photographic assistant",
    "Underkeeper",
    "Formworker",
    "Police community support officer",
    "Advanced carpentry and joinery",
    "Poultry worker",
    "Social worker (degree)",
    "Leisure team member",
    "Funeral director",
    "Firing operative",
    "Network cable installer",
    "Architect (degree)",
    "Creative venue technician",
    "Acoustics technician",
    "Mineral and construction product sampling and testing operations",
    "Internal audit professional",
    "Physician associate (degree)",
    "Leisure duty manager",
    "Industrial coatings applicator",
    "Motor finance specialist",
    "Commercial thermal insulation operative",
    "Supply chain leadership professional (degree)",
    "Actuary",
    "Geospatial survey technician",
    "Specialist rescue operative",
    "Fall protection technician",
    "Port agent",
    "Stairlift, platform lift, service lift electromechanic",
    "Water treatment technician",
    "High speed rail and infrastructure technician",
    "Cyber security technician ",
    "Cultural learning and participation officer",
    "Steeplejack",
    "Advanced clinical practitioner (degree)",
    "Countryside ranger",
    "Fundraiser",
    "Compressed air and vacuum technician",
    "Senior journalist ",
    "Engineering operative",
    "Hygiene specialist",
    "PE, PA and youth sport specialist",
    "Non-destructive testing engineer (degree)",
    "Clinical photographer",
    "Media production co-ordinator",
    "Boatmaster",
    "Marine technical superintendent (degree)",
    "Food and drink engineer",
    "Radio network technician",
    "Senior leader (degree)",
    "Project manager (degree)",
    "Data technician",
    "Automation and controls engineering technician",
    "Electronic systems principal engineer",
    "Fitted furniture design technician ",
    "Historic environment advice assistant",
    "Advanced upholsterer ",
    "Process leader",
    "Airworthiness planning, quality and safety technician ",
    "Small vessel engineer",
    "Laboratory scientist (degree)",
    "Research scientist ",
    "Early years educator",
    "Vehicle damage assessor ",
    "Rail and rail systems engineer",
    "BEMS (building energy management systems) controls engineer",
    "Ambulance support worker (emergency, urgent and non-urgent)",
    "Psychological wellbeing practitioner ",
    "General farm worker ",
    "Livestock unit manager ",
    "Asset finance specialist ",
    "Asset management professional ",
    "Stained glass craftsperson",
    "Officer of the watch",
    "Corporate responsibility and sustainability practitioner",
    "Nuclear technical specialist",
    "Space systems engineer ",
    "Marine electrician",
    "Embalmer",
    "Youth justice practitioner",
    "Asset manager",
    "Construction plant operative",
    "Clock maker",
    "Creative digital design professional",
    "Packaging professional (degree)",
    "Curtain wall installer",
    "Bioinformatics scientist (degree)",
    "Engineer surveyor",
    "Storyboard artist",
    "Assistant puppet maker ",
    "Lift truck and powered access engineering technician",
    "Non home office police officer",
    "Space engineering technician",
    "Costume performance technician",
    "Specialist community and public health nurse",
    "In situ flooring operative",
    "Transport planner (degree)",
    "Clinical pharmacology scientist",
    "Prosthetic and orthotic technician",
    "Broadcast and media systems technician",
    "Building control surveyor (degree)",
    "Sustainability business specialist ",
    "DevOps engineer",
    "Education technician",
    "Engineering manufacturing technician",
    "Water network operative",
    "Fire Safety Engineer (Degree)",
    "Serious and complex crime investigator (degree)",
    "Materials process engineering technician",
    "Materials processing engineering operative",
    "Aviation movement specialist",
    "Early years practitioner",
    "Coaching professional",
    "Road surfacing operative",
    "Gunsmith",
    "Geotechnical engineer",
    "Tramway construction operative",
    "Manufacturing manager (degree)",
    "Fire safety inspector",
    "Keeper and aquarist",
    "Landscape technician",
    "Orthodontic therapist",
    "Senior professional economist",
    "Curator",
    "Train driver",
    "Textile technical specialist",
    "Power support operative",
    "Associate continuing healthcare practitioner",
    "Agriculture / horticulture professional adviser",
    "Fenestration fabricator",
    "Machinist (advanced manufacturing engineering)",
    "Aerospace manufacturing fitter",
    "Aerospace manufacturing electrical, mechanical and systems fitter",
    "Product design and development technician",
    "Garment maker",
    "Mechatronics maintenance technician",
    "Aircraft maintenance fitter / technician (fixed and rotary wing)",
    "Nutritionist",
    "Mastic asphalter",
    "Glass processor",
    "Material cutter",
    "Junior animator",
    "Digital user experience (UX) professional (integrated degree)",
    "Vet technician",
    "Town planning assistant",
    "Radiation protection practitioner",
    "Outdoor learning specialist",
    "Professional forester",
    "Systems thinking practitioner",
    "Senior culinary chef ",
    "Gas network operative",
    "Information manager",
    "Forensic collision investigator",
    "Bookbinder",
    "Light water reactor scientist and engineer",
    "Metal recycling technical manager (MRTM)",
    "Clinical Scientist",
    "Damp control and timber preservation operative",
    "Water environment worker",
    "Construction equipment maintenance mechanic ",
    "Advertising and media executive ",
    "Stonemasonry",
    "Laboratory technician",
    "Operational research specialist",
    "Artificial intelligence (AI) data specialist",
    "Advanced beauty therapist ",
    "Dog grooming stylist",
    "Express delivery sortation hub operative",
    "Advanced furniture CNC technician",
    "Transport and warehousing operations manager",
    "Transport and warehousing operations supervisor",
    "Camera prep technician",
    "Thatcher",
    "Quality practitioner",
    "Clinical associate in psychology (CAP)",
    "Public sector compliance Investigator / officer",
    "Junior vfx artist (generalist)",
    "Digital accessibility specialist",
    "Junior advertising creative",
    "Fisher",
    "Assistant recording engineer",
    "Audiovisual technician",
    "Scenic construction technician",
    "Medical statistician",
    "Chartered surveyor (degree)",
    "Archivist and records manager",
    "Naval architect",
    "Software development technician",
    "Workplace pensions (administrator or consultant)",
    "Supply chain warehouse operative",
    "Chartered legal executive",
    "Bus and coach engineering technician",
    "Tool process design engineer",
    "Railway engineering design technician",
    "Digital marketer",
    "Aviation maintenance mechanic (military)",
    "Dental laboratory assistant",
    "Product design and development engineer (degree)",
    "Highway electrical maintenance and installation operative",
    "Retail manager",
    "Unified communications technician",
    "Dental technician (integrated)",
    "Multi-positional welder (arc processes)",
    "Hair professional",
    "Assistant accountant",
    "Digital and technology solutions professional (integrated degree)",
    "Financial adviser",
    "Hospitality supervisor",
    "Outside broadcasting engineer (degree)",
    "HR support",
    "Compliance / risk officer",
    "Food technologist",
    "Building services engineering service and maintenance engineer",
    "Building services engineering ductwork craftsperson",
    "Investment operations specialist",
    "Chartered manager (degree)",
    "Broadcast production assistant",
    "Road transport engineering manager",
    "Registered nurse - degree (NMC 2010)",
    "Spectacle maker",
    "Insurance professional",
    "Aerospace software development engineer (degree)",
    "Beauty therapist",
    "Operations / departmental manager",
    "Housing / property management assistant",
    "Food and drink process operator",
    "Gas network craftsperson",
    "Senior production chef",
    "Food and drink advanced process operator",
    "VFX artist / technical director",
    "Papermaker",
    "Building services engineering ductwork installer",
    "Paraplanner",
    "Financial services administrator",
    "Motor vehicle service and maintenance technician (light vehicle)",
    "Manufacturing engineer (degree)",
    "Licensed conveyancer",
    "Horticulture and landscape operative",
    "Software tester",
    "Facilities management supervisor",
    "Non-destructive testing engineering technician",
    "Food and drink maintenance engineer",
    "Materials process engineer (degree)",
    "Surveying technician",
    "General welder (arc processes)",
    "Building services engineering craftsperson",
    "Registered nurse degree (NMC 2018)",
    "Chef de partie",
    "Furniture manufacturer",
    "Fire emergency and security systems technician",
    "Healthcare support worker",
    "Aerospace engineer (degree)",
    "Large goods vehicle (LGV) driver",
    "Non-destructive testing (NDT) operator",
    "Systems engineer (degree)",
    "Data analyst",
    "Actuarial technician",
    "Accident repair technician",
    "Food industry technical professional (degree)",
    "Lead adult care worker",
    "Electrical power protection and plant commissioning engineer",
    "Rail engineering advanced technician",
    "Associate ambulance practitioner",
    "Assistant technical director (visual effects)",
    "Advanced butcher",
    "Able seafarer (deck)",
    "Senior housing / property management",
    "Mineral processing mobile and static plant operator",
    "Electrical / electronic technical support engineer (degree)",
    "Healthcare science associate",
    "Nuclear technician",
    "Survival equipment fitter",
    "Fishmonger",
    "Cyber intrusion analyst",
    "Dental nurse",
    "Aviation operations manager",
    "Property maintenance operative",
    "Investment operations administrator",
    "Cyber security technologist",
    "Credit controller / collector",
    "Cultural heritage conservator (degree)",
    "Financial services customer adviser",
    "Control / technical support engineer (degree)",
    "Sports turf operative",
    "Conveyancing technician",
    "Junior journalist",
    "Forest operative",
    "Unified communications trouble shooter",
    "Healthcare science practitioner (degree)",
    "Butcher",
    "Retail team leader",
    "Network engineer",
    "Water process technician",
    "Chartered landscape professional",
    "Junior energy manager",
    "Junior content producer",
    "Healthcare cleaning operative",
    "Lightning protection operative",
    "Public sector commercial professional ",
    "Senior compliance / risk specialist",
    "Arborist",
    "Customer service practitioner",
    "Nuclear welding inspection technician",
    "Steel fixer",
    "Power network craftsperson",
    "Boatbuilder",
    "Building services design technician",
    "Software developer",
    "Aviation ground specialist",
    "Highways electrician / service operative",
    "Science industry maintenance technician",
    "Golf greenkeeper",
    "Rail engineering technician",
    "Retailer",
    "Laboratory scientist",
    "Insurance practitioner",
    "IT technical salesperson",
    "Rail engineering operative",
    "Senior healthcare support worker",
    "Land-based service engineer",
    "Science manufacturing technician",
    "Live event rigger",
    "Land-based service engineering technician",
    "Hospitality team member",
    "Baker",
    "Passenger transport driver - bus, coach and tram",
    "Bespoke tailor and cutter",
    "Heavy vehicle service and maintenance technician",
    "Paralegal",
    "Dual fuel smart meter installer",
    "Building services engineering installer",
    "Advanced dairy technologist",
    "Animal technologist",
    "Solicitor",
    "Healthcare assistant practitioner",
    "Associate project manager",
    "Junior 2D artist (visual effects)",
    "Public service operational delivery officer",
    "Gas engineering operative",
    "Aviation ground operative",
    "Relationship manager (banking)",
    "Metrology technician",
    "Travel consultant",
    "Senior financial services customer adviser",
    "Nuclear scientist and nuclear engineer (degree)",
    "Utilities engineering technician",
    "Post graduate engineer",
    "Engineering design and draughtsperson",
    "Healthcare science assistant",
    "Refrigeration air conditioning and heat pump engineering technician",
    "Midwife (2019 NMC standards)",
    "Team leader / supervisor",
    "Installation electrician / maintenance electrician",
    "Airside operator",
    "Composites technician",
    "Water process operative",
    "Advanced credit controller / debt collection specialist",
    "Employability practitioner",
    "Project controls technician",
    "Power engineer (degree)",
    "HM forces serviceperson (public services)",
    "Business administrator",
    "IS business analyst",
    "Maintenance and operations engineering technician",
    "Nuclear health physics monitor",
    "Rail infrastructure operator",
    "Transport planning technician",
    "Building services engineering ventilation hygiene technician",
    "Investment operations technician",
    "Dental practice manager",
    "Embedded electronic systems design and development engineer (degree)",
    "Professional accounting / taxation technician",
    "Event assistant",
    "Aircraft maintenance certifying engineer",
    "HR consultant / partner",
    "Digital engineering technician",
    "Mortgage adviser",
    "Junior management consultant",
    "Commis chef",
    "Supply chain operator",
    "Infrastructure technician",
    "Bespoke Saddler",
    "Lifting equipment technician ",
    "Bespoke furniture maker",
    "Ordnance munitions and explosives specialist ",
    "Glazier",
    "Equestrian athlete",
    "Independent sexual violence advisor",
    "Historic environment advisor",
    "Airworthiness maintenance engineer",
    "Telecoms field operative",
    "Sport performance analyst",
    "Health play specialist",
    "Health and care intelligence specialist",
    "Scrum master",
    "Project controls engineering professional",
    "Trade union official",
    "Strategic procurement and supply professional",
    "Housing and property professional",
    "Meat hygiene inspector",
    "Signage technician",
    "First officer pilot",
    "Human factors specialist",
    "Nuclear reactor desk engineer",
    "Corporate investigator",
    "Head barista",
    "Visitor experience and economy leader",
    "Stock broker",
    "Dispensing optician",
    "Optometrist",
    "Advanced coach (sport and physical activity)",
    "Critical care practitioner (Adult)",
    "Harbour master",
    "Healthcare scientist ",
    "Damage management practitioner",
    "Digital device repair technician",
    "Furniture quality technician and production leader",
    "Holistic therapist",
    "Engineering geology (masters degree)",
    "Engineering geology degree",
    "Construction equipment maintenance technician",
    "Electro-mechanical engineer",
    "Pharmacist (degree)",
    "Clinical academic professional (degree)",
    "Educational leadership ",
    "Animal feed and grain trade process operator (Level 2)",
    "Engineering process industries professional",
    "Mineral processing general site operative",
    "Mineral products technician",
    "Horticulture / landscape technical manager",
    "Professional arboriculturist",
    "Arboriculturist",
    "Knitted product manufacturing technician",
    "Aviation below wing operative",
    "Nail services technician",
    "Beauty and make up consultant",
    "Power and propulsion gas turbine engineer ",
    "Debt adviser",
    "Housing / property management",
    "Senior people professional",
    "Ordnance munitions explosives technician",
    "Senior quality practitioner",
    "Plasterer",
    "Adult care worker",
    "Hearing aid dispenser",
    "Building services design engineer (degree)",
    "Civil engineer (degree)",
    "Civil engineering technician",
    "Organ builder",
    "Engineering technician",
    "Engineering construction pipefitter",
    "Process automation engineer (degree)",
    "Teacher",
    "Accountancy / taxation professional",
    "Senior insurance professional",
    "Metal fabricator",
    "Post production technical operator",
    "Archaeological specialist (degree)",
    "Arts therapist (degree)",
    "Land referencer",
    "Assistant buyer / Assistant merchandiser ",
    "Personal trainer",
    "Career development professional",
    "Marketing executive",
    "Mammography associate",
    "Temporary traffic management operative",
    "Science manufacturing process operative",
    "Commercial catering equipment technician",
    "Community energy specialist",
    "Veterinary nurse",
    "Senior equine groom",
    "Physiotherapist (integrated degree)",
    "Counter fraud investigator",
    "Design and construction management (degree)",
    "Automotive glazing technician",
    "Digital and technology solutions specialist (integrated degree)",
    "Clinical dental technician",
    "Diagnostic radiographer (Integrated Degree)",
    "Improvement technician",
    "Packhouse line leader",
    "Process control systems engineer (degree)",
    "Publishing assistant",
    "Dietitian (degree)",
    "Clinical trials specialist (degree)",
    "Castings, foundry and patternmaking operative",
    "Express delivery operative",
    "District nurse",
    "Archaeological technician",
    "Painter and decorator",
    "Passenger transport operations manager",
    "Rail and rail systems senior engineer (degree)",
    "Environmental health practitioner (degree)",
    "Building services engineering site management (degree)",
    "Customer service specialist",
    "Live event technician",
    "Pharmacy technician (Integrated)",
    "International freight forwarding specialist",
    "Ceramic mould maker operative",
    "Commercial procurement and supply (formerly Public sector commercial professional)",
    "Probation services practitioner",
    "Civil engineering site management (degree)",
    "Countryside worker",
    "Speech and language therapist (integrated degree)",
    "Roofer",
    "Network operations",
    "Occupational therapist (integrated degree)",
    "Workboat crewmember",
    "Therapeutic radiographer (integrated degree)",
    "Fashion and textiles pattern cutter",
    "Smart home technician",
    "Poultry technician",
    "Payroll administrator",
    "Through life engineering services specialist (degree)",
    "Construction site engineering technician",
    "Broadcast and media systems engineer (degree)",
    "Teaching assistant",
    "Retail leadership degree apprenticeship",
    "Drinks dispense technician",
    "Science industry process / plant engineer (degree)",
    "Pharmacy services assistant",
    "Business to business sales professional (degree)",
    "Facilities manager",
    "Senior metrology technician",
    "Ecologist (degree)",
    "Professional economist (degree)",
    "Engineering fitter",
    "Police constable (degree)",
    "Heritage carpenter and joiner",
    "Marine Pilot",
    "Lean manufacturing operative",
    "Leader in adult care",
    "Materials science technologist (degree)",
    "Port operative",
    "Demolition operative",
    "Glass manufacturing operator",
    "Museums and galleries technician",
    "Florist",
    "Sales executive",
    "Express delivery manager (degree)",
    "Broadcast and media systems technical operator",
    "Learning and skills teacher",
    "Custody and detention officer",
    "Specialist tyre operative",
    "Modeller",
    "Buying and merchandising assistant",
    "Senior / head of facilities management (degree)",
    "Early years lead practitioner (degree)",
    "Animal trainer",
    "Leather craftsperson",
    "IT solutions technician",
    "Fashion and textiles product technologist",
    "Lead practitioner in adult care",
    "Library, information and archive services assistant",
    "Domestic violence and abuse advocate",
    "Carpentry and joinery",
    "Playworker",
    "Advanced and creative hair professional",
    "Early intervention practitioner",
    "Production chef",
    "Structural steelwork erector",
    "Bricklayer",
    "Midwife (degree)",
    "Assessor / coach",
    "Footwear manufacturer",
    "Air traffic controller",
    "Advanced forensic practitioner (custody or sexual offence)",
    "Landscape / horticulture supervisor",
    "Procurement and supply assistant",
    "Floorlayer",
    "Electrical power networks engineer",
    "Play therapist ",
    "Youth support worker",
    "Journeyman bookbinder",
    "Post production engineer",
    "VFX supervisor",
    "Specialist clinical practitioner",
    "Environmental manager (degree)",
    "Anti-social behaviour officer",
    "Market research executive",
    "Groundworker",
    "Aviation ground operative (above wing)",
    "Vehicle damage panel technician",
    "Bicycle mechanic",
    "Learning and development practitioner",
    "Lifting technician",
    "Farrier",
    "Engineering construction erector / rigger",
    "Digital community manager",
    "Props technician",
    "Maritime operations officer",
    "Podiatrist (degree)",
    "Piling attendant",
    "Safety, health and environment technician",
    "Abattoir worker",
    "Animal care and welfare assistant",
    "Digital support technician",
    "Industrial thermal insulation technician",
    "Data scientist (integrated degree)",
    "Port marine operations officer",
    "Textile care operative",
    "Business fire safety advisor",
    "Geospatial mapping and science specialist (degree)",
    "Construction site management (degree)",
    "Junior estate agent",
    "Nursing associate",
    "Food and drink advanced engineer (degree)",
    "Electrical, electronic product service and installation engineer",
    "Building services engineering technician",
    "Advanced golf greenkeeper",
    "Equine groom",
    "Community safety advisor",
    "Lift and escalator electromechanic",
    "Technical dyer and colourist",
    "Bid and proposal co-ordinator",
    "Construction quantity surveyor (degree)",
    "Probate technician",
    "Maritime caterer",
    "Golf course manager",
    "Sonographer (degree)",
    "Metal decking installer",
    "Powered pedestrian door installer and service engineer",
    "Improvement practitioner",
    "Internal audit practitioner",
    "Academic professional",
    "Security first line manager",
    "Clinical coder",
    "Community sport and health officer",
    "Advanced baker",
    "Metal recycling general operative",
    "Plumbing and domestic heating technician",
    "Textile manufacturing operative",
    "Improvement leader",
    "Facilities services operative",
    "Public health practitioner (degree)",
    "Nuclear operative",
    "Interior systems installer",
    "Probation officer",
    "Wireless communications rigger",
    "Wood product manufacturing operative",
    "Plate welder",
    "Oral health practitioner",
    "Rail and rail systems principal engineer (degree)",
    "Trade supplier",
    "Asbestos analyst / surveyor",
    "Paramedic (degree)",
    "Architectural assistant (degree)",
    "Environmental practitioner (degree)",
    "Children, young people and families manager",
    "Youth worker",
    "Heritage engineering technician",
    "Operational firefighter",
    "Pipe welder",
    "Regulatory affairs specialist (degree)",
    "Passenger transport onboard and station team member",
    "Learning and development consultant / business partner",
    "Fenestration installer",
    "Highways maintenance skilled operative",
    "Community activator coach",
    "Risk and safety management professional (degree)",
    "Maritime electrical / mechanical mechanic",
    "Rehabilitation worker (visual impairment)",
    "Recruitment resourcer",
    "Hire controller (plant, tools and equipment)",
    "Autocare technician",
    "Early years lead practitioner ",
    "Marine surveyor (degree)",
    "Pest control technician",
    "Chartered town planner (degree)",
    "Regulatory compliance officer",
    "New furniture product developer",
    "Fashion studio assistant",
    "Cabin crew",
    "Recruitment consultant",
    "Fencing installer",
    "Nursing associate (NMC 2018)",
    "Hospitality manager",
    "Cultural heritage conservation technician",
    "Sewing machinist",
    "Funeral team member",
    "Marketing assistant",
    "Payroll assistant manager",
    "Optical assistant",
    "Slip preparation operative",
    "Creative industries production manager",
    "Accounts / finance assistant",
  "Digital marketer integrated degree"
]