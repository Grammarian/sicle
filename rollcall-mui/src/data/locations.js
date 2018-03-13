const locations = [
  {
    name: "Al-Bayan Institute",
    formattedAddress: "22 Auburn Rd, Regents Park NSW 2143, Australia",
    found: true,
    electorate: "Bankstown",
    address: "22-24 Auburn Road",
    suburb: "REGENTS PARK",
    state: "NSW",
    postcode: "2143",
    placeId: "ChIJqc9ZOl68EmsRzl2g56DrRok",
    lat: -33.8858687,
    lng: 151.0229249,
    students: 600
  },
  {
    query: "Al Ghadir Youth Centre, 2/5 Hollylea Road, LEUMEAH, NSW, 2560",
    found: false
  },
  {
    name: "Alexandria Park Community School Senior Campus",
    formattedAddress: "Buckland St, Alexandria NSW 2015, Australia",
    found: true,
    electorate: "Heffron",
    address: "Park Road",
    suburb: "ALEXANDRIA",
    state: "NSW",
    postcode: "2015",
    placeId: "ChIJxRD8v86xEmsR5Z117ul5P70",
    lat: -33.901437,
    lng: 151.1962161,
    students: 60,    
  },
  {
    query:
      "Alfirdaus College-Blacktown Centre, 7/45 Fourth Avenue, BLACKTOWN, NSW, 2148",
    found: false
  },
  {
    query:
      "Alfirdaus College-Liverpool Centre, Suite 5, 72-74 Bathurst Street, LIVERPOOL, NSW, 2170",
    found: false
  },
  {
    name: "All Saints Greek Orthodox Church",
    formattedAddress: "Cecilia St & Isabel St, Belmore NSW 2192, Australia",
    found: true,
    electorate: "Canterbury",
    address: "Isabel & Cecilia Sts",
    suburb: "BELMORE",
    state: "NSW",
    postcode: "2192",
    placeId: "ChIJldnsgrS7EmsRp7VuG-fEwIA",
    lat: -33.9154375,
    lng: 151.0910969,
    students: 6    
  },
  {
    name: "Ambarvale Public School",
    formattedAddress: "Copperfield Dr, Ambarvale NSW 2560, Australia",
    found: true,
    electorate: "Wollondilly",
    address: "Copperfield Drive",
    suburb: "AMBARVALE",
    state: "NSW",
    postcode: "2560",
    placeId: "ChIJ6d8cu7_vEmsRNDXucniS3vA",
    lat: -34.086279,
    lng: 150.7980722,
    students: 300    
  },
  {
    name: "Amity College, Auburn Campus",
    formattedAddress: "26-28 Kerr Parade, Auburn NSW 2144, Australia",
    found: true,
    electorate: "Auburn",
    address: "26-28 Kerr Parade",
    suburb: "AUBURN",
    state: "NSW",
    postcode: "2144",
    placeId: "ChIJryMENLC8EmsRFIerhlvr-nY",
    lat: -33.8523705,
    lng: 151.034588
  },
  {
    name: "Amity College, Prestons Campus",
    formattedAddress: "163 Kurrajong Rd, Prestons NSW 2170, Australia",
    found: true,
    electorate: "Holsworthy",
    address: "163 Kurrajong Road",
    suburb: "PRESTONS",
    state: "NSW",
    postcode: "2170",
    placeId: "ChIJ3YlQK5GUEmsRedMfByrL6YQ",
    lat: -33.9417362,
    lng: 150.8758356
  },
  {
    name: "Amity College, Auburn Campus",
    formattedAddress: "26-28 Kerr Parade, Auburn NSW 2144, Australia",
    found: true,
    electorate: "Auburn",
    address: "26-29 Kerr Parade",
    suburb: "AUBURN",
    state: "NSW",
    postcode: "2144",
    placeId: "ChIJryMENLC8EmsRFIerhlvr-nY",
    lat: -33.8523705,
    lng: 151.034588
  },
  {
    query:
      "Arabic Ethnic Education Society, 8 Leofrene Avenue, MARRICKVILLE, NSW, 2204",
    found: false
  },
  {
    name: "Arncliffe Public School",
    formattedAddress: "168 Princes Hwy, Arncliffe NSW 2205, Australia",
    found: true,
    electorate: "Rockdale",
    address: "Princes Hwy",
    suburb: "ARNCLIFFE",
    state: "NSW",
    postcode: "2205",
    placeId: "ChIJG6z38qOwEmsRI_QjGnGOdQI",
    lat: -33.9407565,
    lng: 151.1473383
  },
  {
    query: "Artamon Guides Hall, Thompson Avenue, ARTAMON, NSW, 2064",
    found: false
  },
  {
    name: "Artarmon Public School",
    formattedAddress: "McMillan Rd, Artarmon NSW 2064, Australia",
    found: true,
    electorate: "Lane Cove",
    address: "McMillan Road",
    suburb: "ARTARMON",
    state: "NSW",
    postcode: "2064",
    placeId: "ChIJUSn3DiivEmsRdNLT9FjRxOw",
    lat: -33.8112934,
    lng: 151.185996
  },
  {
    name: "Ascham School",
    formattedAddress: "188 New South Head Rd, Edgecliff NSW 2027, Australia",
    found: true,
    electorate: "Vaucluse",
    address: "188 New South Head Road",
    suburb: "EDGECLIFF",
    state: "NSW",
    postcode: "2027",
    placeId: "ChIJ-eKKB-GtEmsRWNougo-Z4Vc",
    lat: -33.877077,
    lng: 151.2362376
  },
  {
    query:
      "Ashabul Kahfi Islamic Centre, 11 Edge Street, WILEY PARK, NSW, 2195",
    found: false
  },
  {
    name: "Ashfield Boys High School",
    formattedAddress: "117 Liverpool Rd, Ashfield NSW 2131, Australia",
    found: true,
    electorate: "Summer Hill",
    address: "117 Liverpool Road",
    suburb: "ASHFIELD",
    state: "NSW",
    postcode: "2131",
    placeId: "ChIJHVlZBpi6EmsR94qBMc8CrTY",
    lat: -33.8897037,
    lng: 151.1290904
  },
  {
    name: "Ashfield Public School",
    formattedAddress: "Liverpool Rd, Ashfield NSW 2131, Australia",
    found: true,
    electorate: "Summer Hill",
    address: "Liverpool Road",
    suburb: "ASHFIELD",
    state: "NSW",
    postcode: "2131",
    placeId: "ChIJxyO7HJi6EmsR7b3KPXnEkPI",
    lat: -33.8894762,
    lng: 151.1286933
  },
  {
    name: "Athelstane Public School",
    formattedAddress: "2 Athelstane Ave, Arncliffe NSW 2205, Australia",
    found: true,
    electorate: "Rockdale",
    address: "Athelstane Avenue",
    suburb: "ARNCLIFFE",
    state: "NSW",
    postcode: "2205",
    placeId: "ChIJF5KqJwq6EmsR7J8U94JSGyc",
    lat: -33.9374698,
    lng: 151.1383126
  },
  {
    name: "Auburn Diversity Services Inc",
    formattedAddress: "17 Macquarie Rd, Auburn NSW 2144, Australia",
    found: true,
    electorate: "Auburn",
    address: "17 Macquarie  Road",
    suburb: "AUBURN",
    state: "NSW",
    postcode: "2144",
    placeId: "ChIJceO2XrK8EmsROWflozy8_4w",
    lat: -33.847246,
    lng: 151.033705
  },
  {
    name: "Auburn North Public School",
    formattedAddress: "100 Adderley St W, Auburn NSW 2144, Australia",
    found: true,
    electorate: "Auburn",
    address: "Adderley Street",
    suburb: "AUBURN",
    state: "NSW",
    postcode: "2144",
    placeId: "ChIJaQvdJN28EmsR6qaJarA6tNI",
    lat: -33.841564,
    lng: 151.038377
  },
  {
    name: "Auburn Public School",
    formattedAddress: "Auburn Rd & Beatrice St, Auburn NSW 2144, Australia",
    found: true,
    electorate: "Auburn",
    address: "Auburn Rd & Beatrice Street",
    suburb: "AUBURN",
    state: "NSW",
    postcode: "2144",
    placeId: "ChIJ_bRedrq8EmsRrueQ2KFTbwM",
    lat: -33.8545542,
    lng: 151.0317457
  },
  {
    name: "Auburn West Public School",
    formattedAddress: "Chiswick Rd, Auburn NSW 2144, Australia",
    found: true,
    electorate: "Auburn",
    address: "Chiswick Road",
    suburb: "AUBURN",
    state: "NSW",
    postcode: "2144",
    placeId: "ChIJTRVdcMC8EmsRCdNqKRj1EAk",
    lat: -33.8608284,
    lng: 151.0198015
  },
  {
    query:
      "Australian Bosnian & Herzegovinian Cultural Association - Leppington, 205 Bringelly Road, LEPPINGTON, NSW, 2179",
    found: false
  },
  {
    query:
      "Australian Bosnian Islamic Society Gazi Husrev-beg-Penshurst, 447 Forest  Road, PENSHURST, NSW, 2164",
    found: false
  },
  {
    query:
      "Australian Bosnian Islamic Society Gazi Husrev-beg-Smithfield, 30 Bourke Street, SMITHFIELD, NSW, 2164",
    found: false
  },
  {
    name: "Australian Catholic University, Strathfield Campus",
    formattedAddress: "25A Barker Rd, Strathfield NSW 2135, Australia",
    found: true,
    electorate: "Strathfield",
    address: "25A Barker Road",
    suburb: "STRATHFIELD",
    state: "NSW",
    postcode: "2135",
    placeId: "ChIJv6ILAj67EmsRQyoXY69KFa0",
    lat: -33.8761164,
    lng: 151.0762594,
    query:
      "Australian Catholic University, 25A Barker Road, STRATHFIELD, NSW, 2135",
    multipleResults: 2,
    results: [
      {
        formatted_address: "25A Barker Rd, Strathfield NSW 2135, Australia",
        geometry: {
          location: { lat: -33.8761164, lng: 151.0762594 },
          viewport: {
            northeast: { lat: -33.87482117010727, lng: 151.08037085 },
            southwest: { lat: -33.87752082989272, lng: 151.07360905 }
          }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/school-71.png",
        id: "17c9a03bfe9c9594651580bf8297cdf391874ee4",
        name: "Australian Catholic University, Strathfield Campus",
        opening_hours: { open_now: true, weekday_text: [] },
        photos: [
          {
            height: 1365,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/110884388814661801527/photos">Australian Catholic University, Strathfield Campus</a>'
            ],
            photo_reference:
              "CmRaAAAAiWMzztKfM8yRfTUXjpzP60IRRxjCI-F3TlVr-xlggAPls-M_6ZZqO-HdJsiY0qsFphKjO6lOcjeuhC9OI-0ksYVciT29nh1z_MRX5FCcCKF84S05eH-uPuxaLfncmvXxEhCYiG4iBrL0X2DnCYZwrf_SGhRwequzcrad-yhUmpZTlCDqA2WMTg",
            width: 2048
          }
        ],
        place_id: "ChIJv6ILAj67EmsRQyoXY69KFa0",
        rating: 4.3,
        reference:
          "CmRbAAAA-PcJ8xcL0_LLnnNSW5bzktzrvUtsnOOaNjg6-AOnRCEgeoh5fGaahuTJnueNFHgsqjPrNKwXYjSkJ7PMrqZoRHQlJsCXj5_VrnNab_PVHkx9VEzJspEpDJM-ZQQcrju7EhBoEMm1Lkn2UrMg_8Wmftk-GhTS4ZsVq6q3tcU7-CkWdSTFum_lXQ",
        types: ["university", "point_of_interest", "establishment"]
      },
      {
        formatted_address: "25A Barker Rd, Strathfield NSW 2135, Australia",
        geometry: {
          location: { lat: -33.8763638, lng: 151.0754496 },
          viewport: {
            northeast: { lat: -33.87507292010728, lng: 151.0768981798927 },
            southwest: { lat: -33.87777257989272, lng: 151.0741985201072 }
          }
        },
        icon:
          "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        id: "4ca772ba502b1002b60da3727bfca5bb6d298d9e",
        name: "ACU McGlade Gallery",
        opening_hours: { open_now: false, weekday_text: [] },
        place_id: "ChIJJfZ17xW7EmsR8CtifTOsQj4",
        rating: 3,
        reference:
          "CmRbAAAAKDPibMOzACgASZ72OZY9WRuqd587RGVSUCFvIgV7Mi78copnyGtCPUu_wxiHpGxYOCdbeC__Ms73uWS5EuudcmS22Kq_xwYJ7mcNVHFJ3qo0Zwh59w5THWzvHCpTFP-XEhClJuloPFLSRYkFEVxedS7wGhQz1t2dVxL02x1HgakAwJiveP4JFw",
        types: ["art_gallery", "point_of_interest", "establishment"]
      }
    ]
  },
  {
    query:
      "Australian Confucius Mencius Morality Society Hall, 590-592 Forrest Road, BEXLEY, NSW, 2207",
    found: false
  },
  {
    name: "Australian Croatian Cultural & Educational Association",
    formattedAddress: "79 South St, Schofields NSW 2762, Australia",
    found: true,
    electorate: "Riverstone",
    address: "79 South Street",
    suburb: "SCHOFIELDS",
    state: "NSW",
    postcode: "2762",
    placeId: "ChIJVaf9RQWcEmsRGtIoOJioN8E",
    lat: -33.706019,
    lng: 150.850389
  },
  {
    query:
      "Australian Islamic Mission (AIM) Hall - Punchbowl, 25-29 Matthews Street, PUNCHBOWL, NSW, 2196",
    found: false
  },
  {
    name: "Gurdwara Sahib Glenwood",
    formattedAddress: "4/18 Meurants Ln, Glenwood NSW 2768, Australia",
    found: true,
    electorate: "Macquarie Fields",
    address: "8 Meurants Lane",
    suburb: "GLENWOOD",
    state: "NSW",
    postcode: "2768",
    placeId: "ChIJWW75-82YEmsRZ2sEBP2Sup4",
    lat: -33.7380147,
    lng: 150.9199191
  },
  {
    name: "Baldface Public School",
    formattedAddress: "84 Stuart St, Blakehurst NSW 2221, Australia",
    found: true,
    electorate: "Oatley",
    address: "Stuart Street",
    suburb: "BLAKEHURST",
    state: "NSW",
    postcode: "2221",
    placeId: "ChIJRdAGtE-4EmsR8WGii3IMaeM",
    lat: -33.9965036,
    lng: 151.1070072
  },
  {
    name: "Banksia Road Primary School",
    formattedAddress: "65 Banksia Rd, Greenacre NSW 2190, Australia",
    found: true,
    electorate: "Lakemba",
    address: "65 Banksia Road",
    suburb: "GREENACRE",
    state: "NSW",
    postcode: "2190",
    placeId: "ChIJXRu08oq7EmsRGJbZk_2b3N0",
    lat: -33.9069566,
    lng: 151.0502286
  },
  {
    name: "Bankstown Girls High School",
    formattedAddress: "Mona St, Bankstown NSW 2200, Australia",
    found: true,
    electorate: "Bankstown",
    address: "Mona Street",
    suburb: "BANKSTOWN",
    state: "NSW",
    postcode: "2200",
    placeId: "ChIJCTT_eBu8EmsRm6ZS4FudqTE",
    lat: -33.9208258,
    lng: 151.032012
  },
  {
    name: "Bankstown Public School",
    formattedAddress: "61 Restwell St, Bankstown NSW 2200, Australia",
    found: true,
    electorate: "Bankstown",
    address: "Restwell Street",
    suburb: "BANKSTOWN",
    state: "NSW",
    postcode: "2200",
    placeId: "ChIJdfHEVxu8EmsRtZ5uI1vfst0",
    lat: -33.921057,
    lng: 151.0335415
  },
  {
    name: "Bankstown Senior College",
    formattedAddress: "Antwerp St, Bankstown NSW 2200, Australia",
    found: true,
    electorate: "East Hills",
    address: "Antwerp Street",
    suburb: "BANKSTOWN",
    state: "NSW",
    postcode: "2200",
    placeId: "ChIJw8biNJi-EmsR_sxff_PBNtc",
    lat: -33.9302992,
    lng: 151.0217703
  },
  {
    name: "Bankstown West Public School",
    formattedAddress: "William St, Bankstown NSW 2200, Australia",
    found: true,
    electorate: "Bankstown",
    address: "William Street",
    suburb: "BANKSTOWN WEST",
    state: "NSW",
    postcode: "2200",
    placeId: "ChIJXd5lbCO8EmsR94hkLZsx7oI",
    lat: -33.9157246,
    lng: 151.0196641
  },
  {
    name: "Bass High School",
    formattedAddress: "Arundle Rd, Bass Hill NSW 2197, Australia",
    found: true,
    electorate: "Bankstown",
    address: "Hume Hwy & Arundle Rd",
    suburb: "BASS HILL",
    state: "NSW",
    postcode: "2197",
    placeId: "ChIJu_Yxwci9EmsR1S0pELrV9-A",
    lat: -33.8979749,
    lng: 150.9912636
  },
  {
    name: "Baulkham Hills High School",
    formattedAddress: "419A Windsor Rd, Baulkham Hills NSW 2153, Australia",
    found: true,
    electorate: "Baulkham Hills",
    address: "Windsor Road",
    suburb: "BAULKHAM HILLS",
    state: "NSW",
    postcode: "2153",
    placeId: "ChIJd6xgjoehEmsRHfoHriBGXdU",
    lat: -33.7513031,
    lng: 150.9907425
  },
  {
    name: "Beaumont Hills Public School",
    formattedAddress: "10-30 The Pkwy, Beaumont Hills NSW 2155, Australia",
    found: true,
    electorate: "Castle Hill",
    address: "The Parkway",
    suburb: "BEAUMONT HILLS",
    state: "NSW",
    postcode: "2155",
    placeId: "ChIJSV0AXoKfEmsROUL-799Yn64",
    lat: -33.6977306,
    lng: 150.9453531
  },
  {
    name: "Bellevue Hill Public School",
    formattedAddress: "163A Victoria Rd, Bellevue Hill NSW 2023, Australia",
    found: true,
    electorate: "Vaucluse",
    address: "Victoria Road",
    suburb: "BELLEVUE HILL",
    state: "NSW",
    postcode: "2023",
    placeId: "ChIJs7kWfpOtEmsRWkY9bE1nzKQ",
    lat: -33.8868757,
    lng: 151.259565
  },
  {
    name: "Belmore Boys High School",
    formattedAddress: "Burwood Rd, Belmore NSW 2192, Australia",
    found: true,
    electorate: "Canterbury",
    address: "Burwood Road",
    suburb: "BELMORE",
    state: "NSW",
    postcode: "2192",
    placeId: "ChIJ_eRugra7EmsRNsyBdGdzHpM",
    lat: -33.9111213,
    lng: 151.0848821
  },
  {
    name: "Belmore North Public School",
    formattedAddress: "193-201 Burwood Rd, Belmore NSW 2192, Australia",
    found: true,
    electorate: "Canterbury",
    address: "201 Burwood Road",
    suburb: "BELMORE",
    state: "NSW",
    postcode: "2192",
    placeId: "ChIJwfXYtrG7EmsRFg63Qj5RZ0g",
    lat: -33.9098073,
    lng: 151.0846364
  },
  {
    name: "Belrose Public School",
    formattedAddress: "26 Ralston Ave, Belrose NSW 2085, Australia",
    found: true,
    electorate: "Davidson",
    address: "Ralston Avenue",
    suburb: "BELROSE",
    state: "NSW",
    postcode: "2085",
    placeId: "ChIJfVJFbe-pEmsRdJpjTIgtVLU",
    lat: -33.7280825,
    lng: 151.2164872
  },
  {
    name: "Berala Public School",
    formattedAddress: "Harrow Road, Berala NSW 2141, Australia",
    found: true,
    electorate: "Auburn",
    address: "32 Auburn Road",
    suburb: "BERALA",
    state: "NSW",
    postcode: "2141",
    placeId: "ChIJP99I6ZO8EmsRPtbfWDcYAAQ",
    lat: -33.8697498,
    lng: 151.0283962
  },
  {
    name: "Beresford Road Public School",
    formattedAddress: "72 Beresford Rd, Greystanes NSW 2145, Australia",
    found: true,
    electorate: "Prospect",
    address: "Beresford Road",
    suburb: "PENDLE HILL SOUTH",
    state: "NSW",
    postcode: "2145",
    placeId: "ChIJ325lOhuYEmsRyauIvPDMSvY",
    lat: -33.8145142,
    lng: 150.941633
  },
  {
    name: "Berkeley Neighbourhood Centre",
    formattedAddress: "Winnima Way, Berkeley NSW 2506, Australia",
    found: true,
    electorate: "Wollongong",
    address: "Winnima Way",
    suburb: "BERKELY",
    state: "NSW",
    postcode: "2506",
    placeId: "ChIJR0uNvtoQE2sRt2OCIQWUpLk",
    lat: -34.4798735,
    lng: 150.848125
  },
  {
    name: "Beverly Hills Girls High School",
    formattedAddress: "Broad Arrow Road, Beverly Hills NSW 2209, Australia",
    found: true,
    electorate: "Kogarah",
    address: "Broadarrow & King Georges Rds",
    suburb: "BEVERLY HILLS",
    state: "NSW",
    postcode: "2209",
    placeId: "ChIJy-MQVm-5EmsRFNk69xLH4Gc",
    lat: -33.9476279,
    lng: 151.077289
  },
  {
    name: "Beverly Hills Intensive English Centre",
    formattedAddress: "58-60 Melvin St, Beverly Hills NSW 2209, Australia",
    found: true,
    electorate: "Kogarah",
    address: "Melvin North Street",
    suburb: "BEVERLY HILLS",
    state: "NSW",
    postcode: "2209",
    placeId: "ChIJiz9JNm-5EmsRG9R-Kc_iyeY",
    lat: -33.9491244,
    lng: 151.0790538
  },
  {
    name: "Beverly Hills North Public School",
    formattedAddress: "1-3 Shorter Ave, Beverly Hills NSW 2209, Australia",
    found: true,
    electorate: "Lakemba",
    address: "Shorter Ave/King Georges",
    suburb: "BEVERLY HILLS",
    state: "NSW",
    postcode: "2209",
    placeId: "ChIJIwgmP2G5EmsRBZfUDT-V0TY",
    lat: -33.9411886,
    lng: 151.0743431
  },
  {
    name: "Beverly Hills Public School",
    formattedAddress: "King Georges Rd, Beverly Hills NSW 2209, Australia",
    found: true,
    electorate: "Kogarah",
    address: "King Georges Rd",
    suburb: "BEVERLY HILLS",
    state: "NSW",
    postcode: "2209",
    placeId: "ChIJDVSxn3G5EmsRcaMSFud1lz8",
    lat: -33.9534077,
    lng: 151.0846626
  },
  {
    name: "Bexley North Public School",
    formattedAddress: "116 Kingsland Rd N, Bexley North NSW 2207, Australia",
    found: true,
    electorate: "Rockdale",
    address: "Kingsland Road",
    suburb: "BEXLEY",
    state: "NSW",
    postcode: "2207",
    placeId: "ChIJAQ4CBxm6EmsRi_D_M_NnymQ",
    lat: -33.9411935,
    lng: 151.1198599
  },
  {
    name: "Birrong Public School",
    formattedAddress: "130-132 Auburn Rd, Birrong NSW 2143, Australia",
    found: true,
    electorate: "Bankstown",
    address: "130 Auburn Road",
    suburb: "BIRRONG",
    state: "NSW",
    postcode: "2143",
    placeId: "ChIJ-SRXTEK8EmsRM9GaHT0y2Xw",
    lat: -33.89561279999999,
    lng: 151.0208864
  },
  {
    name: "Blacktown Boys' High School",
    formattedAddress: "Fifth Ave, Blacktown NSW 2148, Australia",
    found: true,
    electorate: "Blacktown",
    address: "Sunnyholt Rd 7 Fifth Avenue",
    suburb: "BLACKTOWN",
    state: "NSW",
    postcode: "2148",
    placeId: "ChIJTYBmwvyYEmsRFsHX-rNKDS8",
    lat: -33.7616067,
    lng: 150.9114969
  },
  {
    name: "Blacktown Girls High School",
    formattedAddress: "17 Fifth Ave, Blacktown NSW 2148, Australia",
    found: true,
    electorate: "Blacktown",
    address: "Fifth Avenue",
    suburb: "BLACKTOWN",
    state: "NSW",
    postcode: "2148",
    placeId: "ChIJTYBmwvyYEmsRrOdBz-CEmQI",
    lat: -33.7616327,
    lng: 150.9115208
  },
  {
    name: "Blakehurst High School",
    formattedAddress: "270A Woniora Rd, Blakehurst NSW 2221, Australia",
    found: true,
    electorate: "Kogarah",
    address: "Woniora Road",
    suburb: "BLAKEHURST",
    state: "NSW",
    postcode: "2221",
    placeId: "ChIJ9fy4vba5EmsRWVxEIofmKm4",
    lat: -33.9815367,
    lng: 151.1127427
  },
  {
    name: "Bonnyrigg High School",
    formattedAddress: "430 Elizabeth Dr, Bonnyrigg NSW 2177, Australia",
    found: true,
    electorate: "Cabramatta",
    address: "Elizabeth Drive",
    suburb: "BONNYRIGG",
    state: "NSW",
    postcode: "2177",
    placeId: "ChIJm2AQQSGUEmsRtLx6RJY6YWw",
    lat: -33.8947533,
    lng: 150.891842
  },
  {
    name: "Bonnyrigg Mosque",
    formattedAddress: "10/12 Bibbys Pl, Bonnyrigg NSW 2177, Australia",
    found: true,
    electorate: "Cabramatta",
    address: "Lot 455 Bibbys Pl",
    suburb: "BONNYRIGG",
    state: "NSW",
    postcode: "2177",
    placeId: "ChIJ73KSHpyWEmsRWaeT50lddpY",
    lat: -33.8841524,
    lng: 150.8904748
  },
  {
    name: "Bonnyrigg Public School",
    formattedAddress: "59 Tarlington Parade, Bonnyrigg NSW 2177, Australia",
    found: true,
    electorate: "Cabramatta",
    address: "Tarlington Parade",
    suburb: "BONNYRIGG",
    state: "NSW",
    postcode: "2177",
    placeId: "ChIJ29vJ8J2WEmsRUiEh-OtpGsY",
    lat: -33.8886387,
    lng: 150.8882645
  },
  {
    name: "Bossley Park Public School",
    formattedAddress: "Marconi Rd, Bossley Park NSW 2176, Australia",
    found: true,
    electorate: "Prospect",
    address: "Marconi Road",
    suburb: "BOSSLEY PARK",
    state: "NSW",
    postcode: "2176",
    placeId: "ChIJgUSQUcKWEmsRRkSH9ixvNq0",
    lat: -33.8584374,
    lng: 150.8831078
  },
  {
    name: "Brighton le Sands Public School",
    formattedAddress: "35 Crawford Rd, Brighton-Le-Sands NSW 2216, Australia",
    found: true,
    electorate: "Rockdale",
    address: "Crawford Road",
    suburb: "ROCKDALE",
    state: "NSW",
    postcode: "2216",
    placeId: "ChIJx9dqaJ-wEmsRWo_4ZVxTzZM",
    lat: -33.9624075,
    lng: 151.14923
  },
  {
    name: "Brookvale Public School",
    formattedAddress: "Old Pittwater Rd, Brookvale NSW 2100, Australia",
    found: true,
    electorate: "Wakehurst",
    address: "Old Pittwater Rd",
    suburb: "BROOKVALE",
    state: "NSW",
    postcode: "2100",
    placeId: "ChIJmdrM6EOqEmsRgv8oZ3-nOiw",
    lat: -33.7616066,
    lng: 151.2707789
  },
  {
    name: "Brunswick Heads Public School",
    formattedAddress: "2 Fingal St, Brunswick Heads NSW 2483, Australia",
    found: true,
    electorate: "Ballina",
    address: "2 Fingal Street",
    suburb: "BRUNSWICK HEADS",
    state: "NSW",
    postcode: "2483",
    placeId: "ChIJ95zN1sSKkGsRRuBhjIrEFWE",
    lat: -28.541239,
    lng: 153.550842
  },
  {
    name: "Burwood Girls' High School",
    formattedAddress: "96 Queen St, Croydon NSW 2132, Australia",
    found: true,
    electorate: "Strathfield",
    address: "Queen Street",
    suburb: "CROYDON",
    state: "NSW",
    postcode: "2132",
    placeId: "ChIJhf3R-ce6EmsRmZNDRAj4Zb0",
    lat: -33.8757894,
    lng: 151.1126454
  },
  {
    name: "Burwood Public School",
    formattedAddress: "1 Conder St, Burwood NSW 2134, Australia",
    found: true,
    electorate: "Strathfield",
    address: "1 Conder Street",
    suburb: "BURWOOD",
    state: "NSW",
    postcode: "2134",
    placeId: "ChIJz1NTqd66EmsRAJXCiOBRniE",
    lat: -33.8768607,
    lng: 151.0991819
  },
  {
    name: "Byron Bay Public School",
    formattedAddress: "Kingsley St, Byron Bay NSW 2481, Australia",
    found: true,
    electorate: "Ballina",
    address: "17 Kingsley Street",
    suburb: "BYRON BAY",
    state: "NSW",
    postcode: "2481",
    placeId: "ChIJydSkBDhikGsRm1SCiC5Z1XU",
    lat: -28.6477564,
    lng: 153.614627
  },
  {
    name: "Adventist Community Centre Hall",
    formattedAddress:
      "Cnr & Streets, Broomfield St & Fisher St, Cabramatta NSW 2166, Australia",
    found: true,
    electorate: "Cabramatta",
    address: "Broomfield & Fisher Sts",
    suburb: "CABRAMATTA",
    state: "NSW",
    postcode: "2166",
    placeId: "ChIJwxJQTQ6WEmsRklS9cejkRJg",
    lat: -33.89364279999999,
    lng: 150.939419
  },
  {
    name: "Cabramatta High School",
    formattedAddress: "17 Aladore Ave, Cabramatta NSW 2166, Australia",
    found: true,
    electorate: "Cabramatta",
    address: "Aladore Avenue",
    suburb: "CABRAMATTA",
    state: "NSW",
    postcode: "2166",
    placeId: "ChIJDdvcJXWWEmsRrQuC7q8_7WE",
    lat: -33.9005701,
    lng: 150.9290118
  },
  {
    name: "Cabramatta Public School",
    formattedAddress: "Levuka St, Cabramatta NSW 2166, Australia",
    found: true,
    electorate: "Cabramatta",
    address: "Levuka Street",
    suburb: "CABRAMATTA",
    state: "NSW",
    postcode: "2166",
    placeId: "ChIJkYy3JnaWEmsRcglJ61CgXMY",
    lat: -33.8952446,
    lng: 150.9422175
  },
  {
    name: "Cabramatta West Public School",
    formattedAddress: "Broad St, Cabramatta NSW 2166, Australia",
    found: true,
    electorate: "Cabramatta",
    address: "Broad Street",
    suburb: "CABRAMATTA",
    state: "NSW",
    postcode: "2166",
    placeId: "ChIJo5WfOXaWEmsRVo_WGryqR4I",
    lat: -33.8974557,
    lng: 150.9230983
  },
  {
    name: "Callaghan College Jesmond Campus",
    formattedAddress: "Janet St, Jesmond NSW 2299, Australia",
    found: true,
    electorate: "Wallsend",
    address: "Janet St",
    suburb: "JESMOND",
    state: "NSW",
    postcode: "2299",
    placeId: "ChIJZ6zReyw-c2sRTfd8DKV1KhQ",
    lat: -32.901188,
    lng: 151.6958154
  },
  {
    name: "Camden Public School",
    formattedAddress: "John St, Camden NSW 2570, Australia",
    found: true,
    electorate: "Camden",
    address: "John Street",
    suburb: "CAMDEN",
    state: "NSW",
    postcode: "2570",
    placeId: "ChIJ95uXJ8PwEmsR3XalUOMWUNA",
    lat: -34.0521608,
    lng: 150.6937521
  },
  {
    name: "Cammeray Public School",
    formattedAddress: "Palmer St, Cammeray NSW 2062, Australia",
    found: true,
    electorate: "Willoughby",
    address: "Palmer Street",
    suburb: "CAMMERAY",
    state: "NSW",
    postcode: "2062",
    placeId: "ChIJ2ZrAE8euEmsRYYbMPduGyCU",
    lat: -33.8203638,
    lng: 151.2114269
  },
  {
    name: "Campsie Public School",
    formattedAddress:
      "Campsie Public School, 3 Harold St, Campsie NSW 2194, Australia",
    found: true,
    electorate: "Canterbury",
    address: "Harold Street",
    suburb: "CAMPSIE",
    state: "NSW",
    postcode: "2194",
    placeId: "ChIJJTKHcFC6EmsRYSAJKVUGRHQ",
    lat: -33.911845,
    lng: 151.1048311
  },
  {
    name: "Canley Vale High School",
    formattedAddress: "Prospect Rd, Canley Vale NSW 2166, Australia",
    found: true,
    electorate: "Fairfield",
    address: "Prospect Road",
    suburb: "CANLEY VALE",
    state: "NSW",
    postcode: "2166",
    placeId: "ChIJ4URo8B-WEmsRgL_Y2uNEenE",
    lat: -33.8849576,
    lng: 150.9515082
  },
  {
    name: "Canley Vale Public School",
    formattedAddress: "76 Canley Vale Rd, Canley Vale NSW 2166, Australia",
    found: true,
    electorate: "Fairfield",
    address: "Canley Vale Road",
    suburb: "CANLEY VALE",
    state: "NSW",
    postcode: "2166",
    placeId: "ChIJR7VMyRaWEmsRIBscX5YyLvM",
    lat: -33.8862261,
    lng: 150.9382043
  },
  {
    name: "Canterbury Boys\u2019 High School",
    formattedAddress: "Holden St, Ashbury NSW 2193, Australia",
    found: true,
    electorate: "Canterbury",
    address: "Holden Street",
    suburb: "CANTERBURY",
    state: "NSW",
    postcode: "2193",
    placeId: "ChIJe_PX1Yu6EmsRARi4AERyoGo",
    lat: -33.9050247,
    lng: 151.1241917
  },
  {
    name: "Canterbury Public School",
    formattedAddress: "44 Church St, Canterbury NSW 2193, Australia",
    found: true,
    electorate: "Canterbury",
    address: "Church Street",
    suburb: "CANTERBURY",
    state: "NSW",
    postcode: "2193",
    placeId: "ChIJO5jxiWG6EmsRK1T5wPLMQT4",
    lat: -33.9083797,
    lng: 151.1229227
  },
  {
    name: "Canterbury South Public School",
    formattedAddress: "20 High St, Canterbury NSW 2193, Australia",
    found: true,
    electorate: "Canterbury",
    address: "High Street",
    suburb: "CANTERBURY",
    state: "NSW",
    postcode: "2193",
    placeId: "ChIJf78nvkK6EmsRS-rEL8hAsgY",
    lat: -33.9178136,
    lng: 151.1157954
  },
  {
    name: "Cardiff North Public School",
    formattedAddress: "59 Wansbeck Valley Rd, Cardiff NSW 2285, Australia",
    found: true,
    electorate: "Wallsend",
    address: "Wansbeck Valley Road",
    suburb: "CARDIFF",
    state: "NSW",
    postcode: "2285",
    placeId: "ChIJeUta-9k9c2sR2mzQDdbOUeI",
    lat: -32.9370074,
    lng: 151.6654981
  },
  {
    name: "Carlingford Public School",
    formattedAddress: "5 Rickard St, Carlingford NSW 2118, Australia",
    found: true,
    electorate: "Epping",
    address: "Rickard Street",
    suburb: "CARLINGFORD",
    state: "NSW",
    postcode: "2118",
    placeId: "ChIJLWioBw-kEmsRpwE0wxNRXpA",
    lat: -33.7796939,
    lng: 151.0551078
  },
  {
    name: "Carlton Public School",
    formattedAddress: "60 Cameron St, Bexley NSW 2207, Australia",
    found: true,
    electorate: "Kogarah",
    address: "60 Cameron Street",
    suburb: "BEXLEY",
    state: "NSW",
    postcode: "2207",
    placeId: "ChIJcxg_lu65EmsRFi6ZkQB7I6g",
    lat: -33.9635349,
    lng: 151.1228608
  },
  {
    name: "Carlton South Public School",
    formattedAddress: "67 Jubilee Ave, Carlton NSW 2218, Australia",
    found: true,
    electorate: "Kogarah",
    address: "Jubilee Ave",
    suburb: "CARLTON SOUTH",
    state: "NSW",
    postcode: "2218",
    placeId: "ChIJVT_okMK5EmsRfCMUnSqR9CY",
    lat: -33.9726287,
    lng: 151.1283149
  },
  {
    name: "Castle Cove Public School",
    formattedAddress: "Kendall Rd, Castle Cove NSW 2069, Australia",
    found: true,
    electorate: "Davidson",
    address: "Kendall Road",
    suburb: "CASTLE COVE",
    state: "NSW",
    postcode: "2069",
    placeId: "ChIJRxOaXRapEmsREJgU8RTj-aU",
    lat: -33.7831593,
    lng: 151.2029057
  },
  {
    name: "Castle Hill High School",
    formattedAddress: "76-100 Castle St, Castle Hill NSW 2154, Australia",
    found: true,
    electorate: "Castle Hill",
    address: "Castle Street",
    suburb: "CASTLE HILL",
    state: "NSW",
    postcode: "2154",
    placeId: "ChIJX2cLDwqhEmsR_cz3-zLs6SE",
    lat: -33.7267088,
    lng: 150.999645
  },
  {
    name: "Casula Public School",
    formattedAddress: "De Meyrick Ave, Casula NSW 2170, Australia",
    found: true,
    electorate: "Holsworthy",
    address: "De Meyrick Ave",
    suburb: "CASULA",
    state: "NSW",
    postcode: "2170",
    placeId: "ChIJY6gsNvaUEmsRcexIf-1EcbI",
    lat: -33.9442962,
    lng: 150.9092822
  },
  {
    name: "Chatswood High School",
    formattedAddress: "24 Centennial Avenue, Chatswood NSW 2067, Australia",
    found: true,
    electorate: "Willoughby",
    address: "Centennial Avenue",
    suburb: "CHATSWOOD WEST",
    state: "NSW",
    postcode: "2067",
    placeId: "ChIJmyRhrDKvEmsRtJNUIBOe9Dw",
    lat: -33.798966,
    lng: 151.1752818
  },
  {
    name: "Chatswood Public School, Pacific Hwy",
    formattedAddress: "Chatswood NSW 2067, Australia",
    found: true,
    electorate: "Willoughby",
    address: "Pacific Hwy",
    suburb: "CHATSWOOD",
    state: "NSW",
    postcode: "2067",
    placeId: "ChIJJT02IdOoEmsR6SZVplw9hqo",
    lat: -33.7985549,
    lng: 151.1784617
  },
  {
    name: "Cherrybrook Technology High School",
    formattedAddress: "28/44 Purchase Rd, Cherrybrook NSW 2126, Australia",
    found: true,
    electorate: "Epping",
    address: "Purchase Road",
    suburb: "CHERRYBROOK",
    state: "NSW",
    postcode: "2126",
    placeId: "ChIJ8-xyp9egEmsRfypjjsxMrjg",
    lat: -33.720096,
    lng: 151.038017
  },
  {
    name: "Chester Hill Public School",
    formattedAddress: "Proctor Parade, Chester Hill NSW 2162, Australia",
    found: true,
    electorate: "Auburn",
    address: "Proctor Pde",
    suburb: "CHESTER HILL",
    state: "NSW",
    postcode: "2162",
    placeId: "ChIJcUbwulK8EmsRPJyojj7a-2U",
    lat: -33.8865362,
    lng: 151.0017083
  },
  {
    name: "Chinese Presbyterian Church Surry Hills",
    formattedAddress: "388-394 Crown St, Surry Hills NSW 2010, Australia",
    found: true,
    electorate: "Sydney",
    address: "Crown & Albion Streets",
    suburb: "SURRY HILLS",
    state: "NSW",
    postcode: "2010",
    placeId: "ChIJDS3UbBmuEmsRplSnYFkmdzU",
    lat: -33.883745,
    lng: 151.2146358
  },
  {
    name: "Chipping Norton Public School",
    formattedAddress: "4 Central Ave, Chipping Norton NSW 2170, Australia",
    found: true,
    electorate: "Holsworthy",
    address: "Central Avenue",
    suburb: "CHIPPING NORTON",
    state: "NSW",
    postcode: "2170",
    placeId: "ChIJWQZGVQG-EmsRkbdmuEdmIio",
    lat: -33.9091255,
    lng: 150.9609214
  },
  {
    name: "Chullora Public School",
    formattedAddress: "90 Norfolk Rd, Greenacre NSW 2190, Australia",
    found: true,
    electorate: "Lakemba",
    address: "Norfolk& Waterloo Rds",
    suburb: "GREENACRE",
    state: "NSW",
    postcode: "2190",
    placeId: "ChIJ3e1JHp27EmsRks0lvv6qJCM",
    lat: -33.8950825,
    lng: 151.0606
  },
  {
    name: "Clemton Park Public School",
    formattedAddress: "185 Bexley Rd, Earlwood NSW 2206, Australia",
    found: true,
    electorate: "Canterbury",
    address: "Bexley Road",
    suburb: "EARLWOOD",
    state: "NSW",
    postcode: "2206",
    placeId: "ChIJcedvYTm6EmsRbJujbz6W4Ls",
    lat: -33.9297251,
    lng: 151.1086453
  },
  {
    name: "Cleveland Street Intensive English High School",
    formattedAddress:
      "Cleveland St & Chalmers St, Surry Hills NSW 2010, Australia",
    found: true,
    electorate: "Sydney",
    address: "Cleveland & Chalmer Sts",
    suburb: "SURRY HILLS",
    state: "NSW",
    postcode: "2010",
    placeId: "ChIJY9Eoa9-xEmsR6HCr55nx07Q",
    lat: -33.8890621,
    lng: 151.2060585
  },
  {
    name: "Clovelly Public School",
    formattedAddress: "1 Arden St, Waverley NSW 2074, Australia",
    found: true,
    electorate: "Coogee",
    address: "Arden Street",
    suburb: "WAVERLEY",
    state: "NSW",
    postcode: "2024",
    placeId: "ChIJufhjfXSyEmsR6ErikRBe7C4",
    lat: -33.9073287,
    lng: 151.2598773
  },
  {
    name: "Co.As.It.",
    formattedAddress: "67 Norton St, Leichhardt NSW 2040, Australia",
    found: true,
    electorate: "Balmain",
    address: "67 Norton Street",
    suburb: "LEICHHARDT",
    state: "NSW",
    postcode: "2040",
    placeId: "ChIJ5b6bGxqwEmsREwG7oTz66rs",
    lat: -33.88546,
    lng: 151.15769
  },
  {
    name: "Colyton Public School",
    formattedAddress: "43-81 Nelson St, Mount Druitt NSW 2770, Australia",
    found: true,
    electorate: "Mount Druitt",
    address: "Nelson Street",
    suburb: "MOUNT DRUITT",
    state: "NSW",
    postcode: "2770",
    placeId: "ChIJ29eCNYiaEmsRfp23xhDzbVo",
    lat: -33.7770961,
    lng: 150.813135
  },
  {
    name: "Concord West Public School",
    formattedAddress: "378 Concord Rd, Concord West NSW 2138, Australia",
    found: true,
    electorate: "Drummoyne",
    address: "64 Concord Road",
    suburb: "CONCORD WEST",
    state: "NSW",
    postcode: "2138",
    placeId: "ChIJeWrNP9mkEmsRTXI-y1YWbGo",
    lat: -33.8399916,
    lng: 151.0874892
  },
  {
    name: "Connells Point Public School",
    formattedAddress: "Riverview Ave, Connells Point NSW 2221, Australia",
    found: true,
    electorate: "Oatley",
    address: "Riverview Avenue",
    suburb: "HURSTVILLE SOUTH",
    state: "NSW",
    postcode: "2221",
    placeId: "ChIJKzalUFO4EmsRD9xd9XXm7Rw",
    lat: -33.9845478,
    lng: 151.0994398
  },
  {
    name: "Crestwood High School",
    formattedAddress: "17 Chapel Ln, Baulkham Hills NSW 2153, Australia",
    found: true,
    electorate: "Baulkham Hills",
    address: "17 Chapel Lane",
    suburb: "BAULKHAM HILLS",
    state: "NSW",
    postcode: "2153",
    placeId: "ChIJa0SpEPahEmsRicx48crY2fQ",
    lat: -33.7438613,
    lng: 150.97517
  },
  {
    name: "Crestwood Public School",
    formattedAddress: "38 Peel Rd, Baulkham Hills NSW 2153, Australia",
    found: true,
    electorate: "Baulkham Hills",
    address: "38 Peel Road",
    suburb: "BAULKHAM HILLS",
    state: "NSW",
    postcode: "2153",
    placeId: "ChIJa0iTfB6iEmsRxV28sOSQNQQ",
    lat: -33.7490925,
    lng: 150.9720365
  },
  {
    name: "Cringila Lions Football Club",
    formattedAddress: "25 Merrett Ave, Cringila NSW 2502, Australia",
    found: true,
    electorate: "Wollongong",
    address: "Meret Avenue",
    suburb: "CRINGILA",
    state: "NSW",
    postcode: "2502",
    placeId: "ChIJ8WgjckUXE2sRT1BDrHbnCX8",
    lat: -34.4668166,
    lng: 150.8677635
  },
  {
    name: "Cringila Public School",
    formattedAddress: "35 Sheffield St, Cringila NSW 2502, Australia",
    found: true,
    electorate: "Wollongong",
    address: "4-6 Bethlehem Street",
    suburb: "CRINGILA",
    state: "NSW",
    postcode: "2502",
    placeId: "ChIJ14mu20gXE2sRQMffTpsFEaM",
    lat: -34.4720523,
    lng: 150.8700407
  },
  {
    name: "Blacktown South Croatian Catholic Church",
    formattedAddress: "70 Douglas Rd, Blacktown NSW 2148, Australia",
    found: true,
    electorate: "Blacktown",
    address: "70 Douglas Road",
    suburb: "BLACKTOWN",
    state: "NSW",
    postcode: "2148",
    placeId: "ChIJ7V0PG76ZEmsRTwuyIBtFrbQ",
    lat: -33.7827819,
    lng: 150.8844014,
    query: "Croatian C C - Blacktown, 70 Douglas Road, BLACKTOWN, NSW, 2148",
    multipleResults: 2,
    results: [
      {
        formatted_address: "70 Douglas Rd, Blacktown NSW 2148, Australia",
        geometry: {
          location: { lat: -33.7827819, lng: 150.8844014 },
          viewport: {
            northeast: { lat: -33.78067605, lng: 150.8858823298927 },
            southwest: { lat: -33.78348384999999, lng: 150.8831826701073 }
          }
        },
        icon:
          "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
        id: "f2df170d6cdfadb2eb0537af5a454c93211823d6",
        name: "Blacktown South Croatian Catholic Church",
        photos: [
          {
            height: 1440,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/105872698981568617088/photos">A Google User</a>'
            ],
            photo_reference:
              "CmRaAAAAFBgYH05k32r0J4FmtR9Lhx3Ab5OaOdFhK0ydBDUsg7eReeMEmny7KRrU0MmgKgZHRzp8yNRRS5lsSpGaLJzWUsyZA8hOgz2w3YS0Dh7yLVQsqpFR5DMUlEfRMyPFs6xnEhBBAuWTygK81jKu6lJj2ujnGhSAhiT_VmV_J35xe1hgVki3DFnY-A",
            width: 2560
          }
        ],
        place_id: "ChIJ7V0PG76ZEmsRTwuyIBtFrbQ",
        rating: 5,
        reference:
          "CmRbAAAA5yBp25QtEvSCjLlgj8V84Prmkf0qz4IbH8tdU6zmuqe_8Xa_-_uMpyc7zG2gea5B8aNJX7471iCyA5bl1tJR17INJkCieTMLhSFbUEi-immAM3Atx52Um8IU2pXm_la2EhChJ4TeTQUTp9gpkxrAUg_OGhSvu1xO2tZT2n83RqNZx4ZEp_wYSg",
        types: [
          "church",
          "place_of_worship",
          "point_of_interest",
          "establishment"
        ]
      },
      {
        formatted_address: "70 Douglas Rd, Blacktown NSW 2148, Australia",
        geometry: {
          location: { lat: -33.7814729, lng: 150.8846169 },
          viewport: {
            northeast: { lat: -33.78007377010728, lng: 150.8859759298927 },
            southwest: { lat: -33.78277342989272, lng: 150.8832762701072 }
          }
        },
        icon:
          "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        id: "c92d771c436c6ac14f3c05d25fc2de43a3ac6abc",
        name: "Franciscan Friars",
        place_id: "ChIJyzfwGr6ZEmsRlHM9xAo2hV8",
        rating: 1,
        reference:
          "CmRbAAAACtNYzoRrVzQ-jferkc8oDhiQ3Vpds4Td1YyDrhJxBBGQevpLmlF24QLyDjfzW_CjCnonwDB-Ls4tNA6M45oWLz1nCTEUS-_A2pWqDF6iqc0nZUrM1N3nFTdrY9uyXPcGEhAZLbjTtGPaRHaPWN_XgYFHGhTOXVzStttACJQaqf8Q_hGSX-Be5A",
        types: ["point_of_interest", "establishment"]
      }
    ]
  },
  {
    name: "Croatian Catholic Church Priest's",
    formattedAddress: "86-90 Brisbane Rd, St Johns Park NSW 2176, Australia",
    found: true,
    electorate: "Cabramatta",
    address: "86-90 Brisbane Road",
    suburb: "ST JOHNS PARK",
    state: "NSW",
    postcode: "2176",
    placeId: "ChIJ2_UoqY6WEmsR7cjFFs1RemU",
    lat: -33.8770833,
    lng: 150.9011141,
    query:
      "Croatian Catholic Centre - St Johns Park, 86-90 Brisbane Road, ST JOHNS PARK, NSW, 2176",
    multipleResults: 3,
    results: [
      {
        formatted_address:
          "86-90 Brisbane Rd, St Johns Park NSW 2176, Australia",
        geometry: {
          location: { lat: -33.8770833, lng: 150.9011141 },
          viewport: {
            northeast: { lat: -33.87544742010727, lng: 150.9021225298927 },
            southwest: { lat: -33.87814707989271, lng: 150.8994228701073 }
          }
        },
        icon:
          "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
        id: "5d916d3b182f71cb625fb44d777763b6a383114a",
        name: "Croatian Catholic Church Priest's",
        photos: [
          {
            height: 1836,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/105779341399526487488/photos">Mary</a>'
            ],
            photo_reference:
              "CmRaAAAAJu6RyEJEMXOxTRyRUONU56kQcbEi3rXy2cW4-KFmBd3TmRtpGPo61hC7wTaf0HC2usnbB8UsmE-xk_BmWY_ucpSPaVjjNKGCh8A6ZE8BF6LR6tF5ZPENrFXqaFBD3D2PEhB6LyYR9fTiuKRQienb3EMPGhR_15Lws4bpDVz6Fkkrlhtcxj7yOQ",
            width: 3264
          }
        ],
        place_id: "ChIJ2_UoqY6WEmsR7cjFFs1RemU",
        rating: 5,
        reference:
          "CmRbAAAAnYU17bDhHJvWGn_TdzmgKvDgfocq0lrqjQrABsnEQJLt8aybb7p7G7FPw_t_MfbPJYDYFs-L0uvFBS-WyNzAj-v-40srrCbjL1bubczV8j-cmMk7J3J-w134weB8JfB5EhCYr1uXBPM4BtV_MBMeGWv-GhQLtIAAIjvbVfwpUg62EHeERK0fng",
        types: [
          "church",
          "place_of_worship",
          "point_of_interest",
          "establishment"
        ]
      },
      {
        formatted_address: "107 Brisbane Rd, St Johns Park NSW 2176, Australia",
        geometry: {
          location: { lat: -33.8765542, lng: 150.8999753 },
          viewport: {
            northeast: { lat: -33.87528817010728, lng: 150.9014251798928 },
            southwest: { lat: -33.87798782989272, lng: 150.8987255201073 }
          }
        },
        icon:
          "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
        id: "818031b3abd5de5dad104b3308667db753efd3fc",
        name: "Catholic Church Croatian Sisters",
        photos: [
          {
            height: 1280,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/111887285625272152594/photos">Iluminata Antolovic</a>'
            ],
            photo_reference:
              "CmRaAAAAN7xHSMy9VFQDAgTpJFw7GnrGSyIWzn9rMcFo8uKCfnuOZV1-6b3PIBktnSSffnT4ofwHyTr60U5waGLT75OKkywuNh8XDNA1FB7r5k7xUg79KNb5clxf7e-0fG5cCPbCEhAb3YrpIO9DLwi_lXldHjawGhTR3p9dkBVkbPujJytKKs97ty73MA",
            width: 960
          }
        ],
        place_id: "ChIJ6co6no6WEmsRCQQEqX3Ukb0",
        rating: 1,
        reference:
          "CmRbAAAAoQTzM3EHbhw3Wr_oPXUDlPa7ULpir4KDl1ljwipOKdPKt8P8pGOyq9qW-t6SR1Iu8K1ONONEIhia03_ztT0cGLOPWYXqtjFgoCgy052TII39F0RTLD1I4gV3ize-34RGEhDOtvhfYJALp98KqYEWKU30GhRAjSVs4WlN9RUQrIwO7o7OWk-k_w",
        types: [
          "church",
          "place_of_worship",
          "point_of_interest",
          "establishment"
        ]
      },
      {
        formatted_address:
          "24-32 Runcorn St, St Johns Park NSW 2176, Australia",
        geometry: {
          location: { lat: -33.87728269999999, lng: 150.9018947 },
          viewport: {
            northeast: { lat: -33.87600997010728, lng: 150.9033356798927 },
            southwest: { lat: -33.87870962989272, lng: 150.9006360201073 }
          }
        },
        icon:
          "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        id: "28e365cc31b522efd832ee2ba0d6157784b1049c",
        name: "Cardinal Stepinac Village",
        photos: [
          {
            height: 3840,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/101673230168412023261/photos">Ivan Vuljanic</a>'
            ],
            photo_reference:
              "CmRaAAAA2q6Mne5Pv5eLbulMl58Knrt0qPHZxd99cbPSUJf783lGsd4P5yUXFr4rsGJU1M4a9qyJtTJQAwikccJ5EV30M-PU3ncpugKeNISC9orQB3LaDeSrR7m4phBawDlgUXN8EhD5l_2WdfS6VbaG2IigSCXzGhSVuYVHk6eLnj3BCBqQz846DwMMTQ",
            width: 2160
          }
        ],
        place_id: "ChIJja9Q5YuWEmsRIW26FjwPUNI",
        rating: 4,
        reference:
          "CmRbAAAAKvEMCYkdAJNPUuxLJP1TgmvPeqbEy6X51nyXqG6V07YARI2jUaINcuWg4Qgrob-lj5COUkeIgNw6XKFqxI9gREG8OQNuKxY8dXK5tBab4KJ4n2UbUORQzhNbyXW7l2S8EhC5mja9J8z-1aFy_Oc4MdDpGhTe2l0QBVrCgeKmPIX8E8Zlwwvsfw",
        types: ["point_of_interest", "establishment"]
      }
    ]
  },
  {
    name: "Croatian Catholic Centre",
    formattedAddress: "15 Prospect Rd, Summer Hill NSW 2130, Australia",
    found: true,
    electorate: "Summer Hill",
    address: "15 Prospect Road",
    suburb: "SUMMER HILL",
    state: "NSW",
    postcode: "2130",
    placeId: "ChIJqZfwkZi6EmsRHStmV7aumSY",
    lat: -33.8912786,
    lng: 151.1322905
  },
  {
    name: "Croatian Catholic Centre",
    formattedAddress: "7-9 Bellevue Rd, Figtree NSW 2525, Australia",
    found: true,
    electorate: "Keira",
    address: "7 Bellevue Road",
    suburb: "FIG TREE",
    state: "NSW",
    postcode: "2525",
    placeId: "ChIJ2WObJh4aE2sRUN60l58WliI",
    lat: -34.43445320000001,
    lng: 150.8607167
  },
  {
    name: "Crown Street Public School",
    formattedAddress: "356 Crown St, Surry Hills NSW 2010, Australia",
    found: true,
    electorate: "Sydney",
    address: "Crown Street",
    suburb: "SURRY HILLS",
    state: "NSW",
    postcode: "2010",
    placeId: "ChIJU1OgkBmuEmsRYDsrudnBE_Q",
    lat: -33.88224,
    lng: 151.2150445
  },
  {
    name: "Cyprus Community Club of NSW",
    formattedAddress: "58 - 76 Stanmore Rd, Stanmore NSW 2048, Australia",
    found: true,
    electorate: "Newtown",
    address: "58 Stanmore Road",
    suburb: "STANMORE",
    state: "NSW",
    postcode: "2048",
    placeId: "ChIJbVYURT-wEmsR_6VfIGlp5Hg",
    lat: -33.8984397,
    lng: 151.1681482
  },
  {
    name: "Danebank Anglican School for Girls",
    formattedAddress: "80-98 Park Road, Hurstville NSW 2220, Australia",
    found: true,
    electorate: "Kogarah",
    address: "84-96 Park Road",
    suburb: "HURSTVILLE",
    state: "NSW",
    postcode: "2220",
    placeId: "ChIJDevF_5i5EmsRnnygIRe8190",
    lat: -33.9622024,
    lng: 151.1022592
  },
  {
    name: "Darcy Road Public School",
    formattedAddress: "98A Darcy Rd, Wentworthville NSW 2145, Australia",
    found: true,
    electorate: "Seven Hills",
    address: "Darcy Road",
    suburb: "WENTWORTHVILLE",
    state: "NSW",
    postcode: "2145",
    placeId: "ChIJ7SgXipOiEmsRLGUtxxNKuGs",
    lat: -33.8020534,
    lng: 150.9661908
  },
  {
    name: "Darfur Community Social & Cultural Asscoication",
    formattedAddress: "3/118 Main St, Blactown NSW 2148, Australia",
    found: true,
    electorate: "Blacktown",
    address: "118 Main Street",
    suburb: "BLACKTOWN",
    state: "NSW",
    postcode: "2148",
    placeId: "ChIJZe3oe_-YEmsRIafY7uVV68o",
    lat: -33.7716234,
    lng: 150.9107881
  },
  {
    name: "Denistone East Public School",
    formattedAddress: "Eastwood NSW 2122, Australia",
    found: true,
    electorate: "Ryde",
    address: "Lovell Road",
    suburb: "EASTWOOD",
    state: "NSW",
    postcode: "2122",
    placeId: "ChIJ73ygaMylEmsR2A75JnK02aI",
    lat: -33.793304,
    lng: 151.0968031
  },
  {
    name: "Dong San Uniting Church",
    formattedAddress: "125 Great Western Hwy, Mays Hill NSW 2145, Australia",
    found: true,
    electorate: "Parramatta",
    address: "125 Great Western Highway",
    suburb: "MAYS HILL",
    state: "NSW",
    postcode: "2145",
    placeId: "ChIJm4PTgtuiEmsRRa-lJICjQos",
    lat: -33.819043,
    lng: 150.991991
  },
  {
    name: "Doonside Technology High School",
    formattedAddress: "15-39 Power St, Doonside NSW 2767, Australia",
    found: true,
    electorate: "Blacktown",
    address: "Power Street",
    suburb: "DOONSIDE",
    state: "NSW",
    postcode: "2767",
    placeId: "ChIJkUIN_XuZEmsRTkg5isDkaQk",
    lat: -33.7553086,
    lng: 150.873339,
    query: "Doonside High School, Power Street, DOONSIDE, NSW, 2767",
    multipleResults: 2,
    results: [
      {
        formatted_address: "15-39 Power St, Doonside NSW 2767, Australia",
        geometry: {
          location: { lat: -33.7553086, lng: 150.873339 },
          viewport: {
            northeast: { lat: -33.75395877010728, lng: 150.8746888298927 },
            southwest: { lat: -33.75665842989272, lng: 150.8719891701073 }
          }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/school-71.png",
        id: "d9f44fe34f4d3e98ce5484f570ee19b7c60cc638",
        name: "Doonside Technology High School",
        photos: [
          {
            height: 3024,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/106570018970378914080/photos">MOHAMMAD IBRAHIM SIDDIQUE</a>'
            ],
            photo_reference:
              "CmRaAAAAD-GceLP9cDx7alG0d1-8-Iab2K0lf6_u6aPrgT-tG2rUsY2L23-TQIzc1cbqo_t74GuGPq-iMWg4GAbYQcr5RNZGYz0xSnKbBTpWK0ab3VzMlZJVDNZMlP_ya1aBK-nsEhBc86I72BbrwKGjQ1Bf6J3kGhRP-b3rdaJaUu5VOUVBoz_om4CtEQ",
            width: 4032
          }
        ],
        place_id: "ChIJkUIN_XuZEmsRTkg5isDkaQk",
        rating: 3.8,
        reference:
          "CmRbAAAAz2CrxKEX7H0YEeabxMg7ngh-hCVVTCulH2A7Kte0CeDBI6173VXLnf_Mqnj4gGbmYTHBtaZ3ruRpyr6m2DQnQ2EQuFvhtHOCX4jfJ7MSHZF2YD58PRnxURzeza8iZxrzEhC1eO9YP7j9dBBbXmI18Nh1GhS2SGekgpUjOUvt3U0_3-rb6IIPWQ",
        types: ["school", "point_of_interest", "establishment"]
      },
      {
        formatted_address: "Power St, Doonside NSW 2767, Australia",
        geometry: {
          location: { lat: -33.7552787, lng: 150.8689031 },
          viewport: {
            northeast: { lat: -33.75420337010728, lng: 150.8702014298927 },
            southwest: { lat: -33.75690302989272, lng: 150.8675017701073 }
          }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/school-71.png",
        id: "0a5ca9be3868834263ad00ce7c292fd8cbefc666",
        name: "Crawford Public School",
        photos: [
          {
            height: 4160,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/109884116640180241819/photos">Ananwa family</a>'
            ],
            photo_reference:
              "CmRaAAAAkLiB4SJMfsilXZYSdd2UnDQtey6sF1tdKFVpNlwomuMpXxIUXjx_fiPX7Xdkm8jtFdW3tGTrcw2WpJqAwsLxWHa4jG8KnJKNhbXrqFolhOHCNpW0Bs3z1QqosTLTWds7EhBJNLohmAjLgTRZ4BbZH-JPGhSxVtXwe3Htzt-rXTIvjvwjj62TfA",
            width: 3120
          }
        ],
        place_id: "ChIJkUIN_XuZEmsR6iQizbkEGDE",
        rating: 3,
        reference:
          "CmRbAAAA2P9Szxq1V42RuG4X-BsO4Fi1ODQFjRV5Rk8-H53HdcvT-s5c5kh7K6UKdphJwX0Z-7GvTlo0giCbL1nrkfARMdXk1lSssxZ7NeOSVH70hEIav9mS3VZ4phNbX-4oD0PUEhBM1_sUAHLhdKtetVbYeCejGhTWvjZ0MQL0_wFffEjjDe6ulKNjrw",
        types: ["school", "point_of_interest", "establishment"]
      }
    ]
  },
  {
    name: "Drummoyne Public School",
    formattedAddress: "Rawson Ave, Drummoyne NSW 2047, Australia",
    found: true,
    electorate: "Drummoyne",
    address: "Rawson Ave",
    suburb: "DRUMMOYNE",
    state: "NSW",
    postcode: "2047",
    placeId: "ChIJm5svupSvEmsRgMNfxfCFftc",
    lat: -33.856072,
    lng: 151.1527688
  },
  {
    name: "Dubbo South Public School",
    formattedAddress: "Fitzroy St, Dubbo NSW 2830, Australia",
    found: true,
    electorate: "Dubbo",
    address: "Fitzroy Street",
    suburb: "DUBBO",
    state: "NSW",
    postcode: "2830",
    placeId: "ChIJt0gkULpxD2sRq5alHU_DFHg",
    lat: -32.263178,
    lng: 148.6097257
  },
  {
    name: "Dulwich Hill Public School",
    formattedAddress: "Kintore St, Dulwich Hill NSW 2203, Australia",
    found: true,
    electorate: "Summer Hill",
    address: "Kintore Street",
    suburb: "DULWICH HILL",
    state: "NSW",
    postcode: "2203",
    placeId: "ChIJh4bzdIK6EmsRAcAiR_3C3YU",
    lat: -33.9053496,
    lng: 151.1399501
  },
  {
    name: "Dundas Public School",
    formattedAddress: "85 Kissing Point Rd, Dundas NSW 2117, Australia",
    found: true,
    electorate: "Parramatta",
    address: "Kissing Point Road",
    suburb: "DUNDAS",
    state: "NSW",
    postcode: "2117",
    placeId: "ChIJGY7jCHijEmsRhDAGllDxn_I",
    lat: -33.8043867,
    lng: 151.036401
  },
  {
    name: "Efks Care Australia",
    formattedAddress: "977 Forest Rd, Lugarno NSW 2210, Australia",
    found: true,
    electorate: "Oatley",
    address: "977 Forest Road",
    suburb: "LUGARNO",
    state: "NSW",
    postcode: "2210",
    placeId: "ChIJPX9jS824EmsRiLzHFTKqv34",
    lat: -33.981699,
    lng: 151.047261
  },
  {
    name: "Earlwood Public School",
    formattedAddress: "396 Homer St, Earlwood NSW 2206, Australia",
    found: true,
    electorate: "Canterbury",
    address: "Homer Street",
    suburb: "EARLWOOD",
    state: "NSW",
    postcode: "2206",
    placeId: "ChIJ8b-IpW26EmsRkoWtdp4B2xI",
    lat: -33.9282355,
    lng: 151.1224147
  },
  {
    name: "Eastlakes Public School",
    formattedAddress: "7 Florence Ave, Eastlakes NSW 2018, Australia",
    found: true,
    electorate: "Heffron",
    address: "Florence Ave",
    suburb: "EASTLAKES",
    state: "NSW",
    postcode: "2018",
    placeId: "ChIJyV7x6J6xEmsRHuY6UogR-ww",
    lat: -33.927706,
    lng: 151.2140018
  },
  {
    name: "Eastwood Public School",
    formattedAddress: "Rowe St, Eastwood NSW 2122, Australia",
    found: true,
    electorate: "Ryde",
    address: "Rowe Street",
    suburb: "EASTWOOD",
    state: "NSW",
    postcode: "2122",
    placeId: "ChIJ4bDYATmkEmsRAPjWkn1iAgk",
    lat: -33.7925285,
    lng: 151.0778888
  },
  {
    name: "Epping Boys High School",
    formattedAddress:
      "Epping Boys High School, 213 Vimiera Rd, Marsfield NSW 2122, Australia",
    found: true,
    electorate: "Ryde",
    address: "213 Vimiera Road",
    suburb: "EASTWOOD",
    state: "NSW",
    postcode: "2122",
    placeId: "ChIJOY22DXumEmsRotioKh8of0A",
    lat: -33.770461,
    lng: 151.098436
  },
  {
    name: "Epping Heights Public School",
    formattedAddress: "128 Kent St, Epping NSW 2121, Australia",
    found: true,
    electorate: "Epping",
    address: "Kent Street",
    suburb: "EPPING",
    state: "NSW",
    postcode: "2121",
    placeId: "ChIJQ7ZffZemEmsR115uRo3anX0",
    lat: -33.76267,
    lng: 151.073981
  },
  {
    name: "Epping Public School",
    formattedAddress: "Norfolk Rd, Epping NSW 2121, Australia",
    found: true,
    electorate: "Epping",
    address: "Norfolk Road",
    suburb: "EPPING",
    state: "NSW",
    postcode: "2121",
    placeId: "ChIJp4CGzYWmEmsRl0CmDortb7s",
    lat: -33.7708252,
    lng: 151.0877733
  },
  {
    name: "Epping West Public School",
    formattedAddress: "96 Carlingford Rd, Epping NSW 2121, Australia",
    found: true,
    electorate: "Epping",
    address: "Carlingford Road",
    suburb: "EPPING",
    state: "NSW",
    postcode: "2121",
    placeId: "ChIJTTMLxx-kEmsR5b5y-e-y2jc",
    lat: -33.7729524,
    lng: 151.0678787
  },
  {
    name: "Fairfield High School",
    formattedAddress: "407 The Horsley Dr, Fairfield NSW 2165, Australia",
    found: true,
    electorate: "Fairfield",
    address: "The Horsley Drive",
    suburb: "FAIRFIELD",
    state: "NSW",
    postcode: "2165",
    placeId: "ChIJMylwu4G9EmsR-oA0jwN1n-4",
    lat: -33.8658647,
    lng: 150.9561167
  },
  {
    name: "Fairfield Public School",
    formattedAddress: "68-82 Smart St, Fairfield NSW 2165, Australia",
    found: true,
    electorate: "Fairfield",
    address: "68-82 Smart Street",
    suburb: "FAIRFIELD",
    state: "NSW",
    postcode: "2165",
    placeId: "ChIJj6Y7aIC9EmsRZytHNCxINiU",
    lat: -33.8670377,
    lng: 150.9554055
  },
  {
    name: "Fairfield West Public School",
    formattedAddress: "Palmerston Rd, Fairfield West NSW 2165, Australia",
    found: true,
    electorate: "Fairfield",
    address: "Palmerston Road",
    suburb: "FAIRFIELD WEST",
    state: "NSW",
    postcode: "2165",
    placeId: "ChIJg9AcIUmWEmsRKQ6O2g6gkY8",
    lat: -33.8693072,
    lng: 150.9247308
  },
  {
    name: "Fairvale Public School",
    formattedAddress: "83-99 Wolseley St, Fairfield NSW 2165, Australia",
    found: true,
    electorate: "Fairfield",
    address: "The Wolseley Drive",
    suburb: "FAIRFIELD",
    state: "NSW",
    postcode: "2165",
    placeId: "ChIJ0whhuiSWEmsRUYiR7SkvOts",
    lat: -33.8767034,
    lng: 150.9407121
  },
  {
    name: "Ferncourt Public School",
    formattedAddress: "74 Premier St, Marrickville NSW 2204, Australia",
    found: true,
    electorate: "Summer Hill",
    address: "Premier Street",
    suburb: "MARRICKVILLE",
    state: "NSW",
    postcode: "2204",
    placeId: "ChIJHYsz_4WwEmsRfinL7LzVYx4",
    lat: -33.9207786,
    lng: 151.1517895
  },
  {
    name: "Figtree High School",
    formattedAddress: "Gibsons Rd, Figtree NSW 2525, Australia",
    found: true,
    electorate: "Keira",
    address: "Gibsons Road",
    suburb: "FIGTREE",
    state: "NSW",
    postcode: "2525",
    placeId: "ChIJ56LEURsaE2sR5-nbYEXx7Pk",
    lat: -34.4389445,
    lng: 150.8540867
  },
  {
    name: "Five Dock Public School",
    formattedAddress: "Henry St, Five Dock NSW 2046, Australia",
    found: true,
    electorate: "Drummoyne",
    address: "Henry Street",
    suburb: "FIVE DOCK",
    state: "NSW",
    postcode: "2046",
    placeId: "ChIJEeahck2lEmsR4fHR5U81F0g",
    lat: -33.8668642,
    lng: 151.1276025
  },
  {
    name: "Flinders Primary School",
    formattedAddress: "Brunderee Rd, Flinders NSW 2529, Australia",
    found: true,
    electorate: "Shellharbour",
    address: "Adam Murray Way",
    suburb: "FLINDERS",
    state: "NSW",
    postcode: "2529",
    placeId: "ChIJ-ccUYGUTE2sR79OSY96fv0I",
    lat: -34.5815773,
    lng: 150.8497147
  },
  {
    name: "Floraville Public School",
    formattedAddress: "78 Floraville Rd, Belmont NSW 2280, Australia",
    found: true,
    electorate: "Swansea",
    address: "Floraville Road",
    suburb: "BELMONT",
    state: "NSW",
    postcode: "2280",
    placeId: "ChIJLzCgjS09c2sRdY4B4i9zXoA",
    lat: -33.0144331,
    lng: 151.6646477
  },
  {
    name: "Forestville Public School",
    formattedAddress: "7 Melwood Ave, Forestville NSW 2087, Australia",
    found: true,
    electorate: "Wakehurst",
    address: "Melwood Avenue",
    suburb: "FORESTVILLE",
    state: "NSW",
    postcode: "2087",
    placeId: "ChIJZ-O8uJipEmsRg2qDyIP6Myc",
    lat: -33.7615558,
    lng: 151.2127874
  },
  {
    name: "St George Serbian Orthodox Church",
    formattedAddress: "348 Cabramatta Rd W, Cabramatta NSW 2166, Australia",
    found: true,
    electorate: "Cabramatta",
    address: "348 Cabramatta Road",
    suburb: "CABRAMATTA",
    state: "NSW",
    postcode: "2166",
    placeId: "ChIJ0fDMs9iVEmsRcKunfBcybCA",
    lat: -33.8983865,
    lng: 150.9249891
  },
  {
    query:
      "GDPT Bo De Minh Quang - Vietnamese Buddhist Youth of NSW, 28-32 Chadderton Street, LANSVALE, NSW, 2166",
    found: false
  },
  {
    name: "Garden Suburb Public School",
    formattedAddress:
      "Garden Suburb Primary, 2A Prospect Rd, Garden Suburb NSW 2289, Australia",
    found: true,
    electorate: "Charlestown",
    address: "2A Prospect Road",
    suburb: "GARDEN SUBURB",
    state: "NSW",
    postcode: "2289",
    placeId: "ChIJ05IWnOc9c2sRDxj5HDCGXNY",
    lat: -32.9478011,
    lng: 151.6831604
  },
  {
    name: "Georges River College Penshurst Girls Campus",
    formattedAddress: "2 Austral St, Penshurst NSW 2222, Australia",
    found: true,
    electorate: "Oatley",
    address: "2 Austral Street",
    suburb: "PENSHURST",
    state: "NSW",
    postcode: "2222",
    placeId: "ChIJ205ZPwy5EmsR0wo28sb2Fuo",
    lat: -33.9640668,
    lng: 151.0862588
  },
  {
    name: "Girraween Public School",
    formattedAddress: "9 Bando Rd, Girraween NSW 2145, Australia",
    found: true,
    electorate: "Prospect",
    address: "Bando Road",
    suburb: "GIRRAWEEN",
    state: "NSW",
    postcode: "2145",
    placeId: "ChIJjfA2OHSYEmsRtc5k36FwSAk",
    lat: -33.7989616,
    lng: 150.9503507
  },
  {
    name: "Gladesville Public School NSW",
    formattedAddress: "Victoria Rd, Gladesville NSW 2111, Australia",
    found: true,
    electorate: "Lane Cove",
    address: "Victoria Road",
    suburb: "GLADESVILLE",
    state: "NSW",
    postcode: "2111",
    placeId: "ChIJ2zeCEXelEmsRHH9btdvg-Bs",
    lat: -33.8319006,
    lng: 151.125809,
    query: "Gladesville Public School, Victoria Road, GLADESVILLE, NSW, 2111",
    multipleResults: 2,
    results: [
      {
        formatted_address: "Victoria Rd, Gladesville NSW 2111, Australia",
        geometry: {
          location: { lat: -33.8319006, lng: 151.125809 },
          viewport: {
            northeast: { lat: -33.83052882010728, lng: 151.1276682298927 },
            southwest: { lat: -33.83322847989272, lng: 151.1249685701073 }
          }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/school-71.png",
        id: "32b783e77f3dd7e4d15f3a0de4e9aa6f2fccec17",
        name: "Gladesville Public School NSW",
        photos: [
          {
            height: 1520,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/101665587378306034864/photos">Ashley Prendergast</a>'
            ],
            photo_reference:
              "CmRaAAAAxKwhVHu6ZRCD2nvUNLy3l-BLvVBB9P8cbCKvUrVznSN5e70o7XUKJ2W4LW3MZ6fHWUi5Lu0GuRp2vTft0OUJ0zTZL0QFHxRrVRfxmMP6CyUDcR28fw4PUJ8SgjAn9YoxEhBj5tXbb_QdnB9OfVTN3QMkGhQVvOKY6JfRbQitMblnixFDU8L45A",
            width: 2688
          }
        ],
        place_id: "ChIJ2zeCEXelEmsRHH9btdvg-Bs",
        rating: 3.2,
        reference:
          "CmRbAAAAkSOGMBv-hbL3rG1hmA2m2DqYm6TO-FwOyu7r9qrc65VXVUluQZz3QmwRm1USF7F06HQs2yA77RKDjfH1CZFON0RGlrpqOOU6YZETmP2Nmm11uOvuIQCinMlg6k0uHpyqEhDrr3QyfXqRbzLWYuDdcrmnGhTJ_VwgVo-qjkFZygdyIreKsRTZYA",
        types: ["school", "point_of_interest", "establishment"]
      },
      {
        formatted_address:
          "Old Sandstone Cottage, Gladesville Public School, Victoria Road, Gladesville NSW 2111, Australia",
        geometry: {
          location: { lat: -33.8330131, lng: 151.125938 },
          viewport: {
            northeast: { lat: -33.83166327010728, lng: 151.1272878298927 },
            southwest: { lat: -33.83436292989272, lng: 151.1245881701072 }
          }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/school-71.png",
        id: "b23038a7de9cef6c928f613c3e0430b36797b53b",
        name: "GOOSH - Gladesville Out of School Hours Inc",
        opening_hours: { open_now: true, weekday_text: [] },
        place_id: "ChIJq6qq2XClEmsReXVSU0RaclI",
        reference:
          "CmRbAAAACSMIZhqi8TXoCvy5r2assXKRFpivAIKn8WEJfXgG1cLeEmNjd5cGS13mgG5Bm-ZypQ7jClbamagzUpxdhvVHCFq3T2x2Y_KQcH5Aid76ey2fq834KOby2XC8ODlnRA7XEhBQAzAc5u5lQHD05ifqVCkzGhResKZlLMF13q_M-yJ_HEdXst-jpw",
        types: ["point_of_interest", "establishment"]
      }
    ]
  },
  {
    name: "Glendenning Public School",
    formattedAddress: "Armitage Dr, Glendenning NSW 2761, Australia",
    found: true,
    electorate: "Mount Druitt",
    address: "Armitage Drive",
    suburb: "GLENDENNING",
    state: "NSW",
    postcode: "2761",
    placeId: "ChIJyRKXhNubEmsRJhFoaEx0KGE",
    lat: -33.7428748,
    lng: 150.8531974
  },
  {
    name: "Glenwood Public School",
    formattedAddress:
      "Belmont Road (Corner Harrow Road), Glenfield NSW 2167, Australia",
    found: true,
    electorate: "Macquarie Fields",
    address: "Belmont Road",
    suburb: "GLENFIELD",
    state: "NSW",
    postcode: "2167",
    placeId: "ChIJQYOwIyvrEmsRy6Wo_ZEQfaE",
    lat: -33.9746389,
    lng: 150.9027516
  },
  {
    query: "Good News Korean School, 72-74 Joseph Street, LIDCOMBE, NSW, 2141",
    found: false
  },
  {
    name: "The Grange Public School",
    formattedAddress: "8 Benham Rd, Minto NSW 2566, Australia",
    found: true,
    electorate: "Macquarie Fields",
    address: "Benham Road",
    suburb: "MINTO",
    state: "NSW",
    postcode: "2566",
    placeId: "ChIJZ2bu1nTsEmsRfMGJLKwpmOw",
    lat: -34.0223624,
    lng: 150.8567134
  },
  {
    name: "Granville Public School",
    formattedAddress: "7 Lena St, Granville NSW 2142, Australia",
    found: true,
    electorate: "Granville",
    address: "Lena St",
    suburb: "GRANVILLE",
    state: "NSW",
    postcode: "2142",
    placeId: "ChIJt4KEcSujEmsR239jYMJz_48",
    lat: -33.834324,
    lng: 151.0051916
  },
  {
    name: "Grays Point Public School",
    formattedAddress: "109 Angle Rd, Grays Point NSW 2232, Australia",
    found: true,
    electorate: "Cronulla",
    address: "Angle Road",
    suburb: "GRAYS POINT",
    state: "NSW",
    postcode: "2232",
    placeId: "ChIJf4TIIODGEmsRlJOJF4uXRrI",
    lat: -34.058653,
    lng: 151.072202
  },
  {
    name: "Greek Orthodox Church of the Holy Cross (Constantinople)",
    formattedAddress: "18 Stewart St, Wollongong NSW 2500, Australia",
    found: true,
    electorate: "Wollongong",
    address: "18 Stewart Street",
    suburb: "WOLLONGONG",
    state: "NSW",
    postcode: "2500",
    placeId: "ChIJ4Qdb7K4ZE2sRLgNYxAEPfAA",
    lat: -34.4279886,
    lng: 150.9001042
  },
  {
    name: "Holy Apostles Greek Orthodox Parish & Community of Newcastle",
    formattedAddress: "11 Steel St, Hamilton NSW 2303, Australia",
    found: true,
    electorate: "Newcastle",
    address: "27 Skelton Street",
    suburb: "HAMILTON",
    state: "NSW",
    postcode: "2303",
    placeId: "ChIJfxKuX7IVc2sRdXQq0At9EWw",
    lat: -32.922817,
    lng: 151.744532,
    query:
      "Greek Community of Newcastle, 27 Skelton Street, HAMILTON, NSW, 2303",
    multipleResults: 4,
    results: [
      {
        formatted_address: "11 Steel St, Hamilton NSW 2303, Australia",
        geometry: {
          location: { lat: -32.922817, lng: 151.744532 },
          viewport: {
            northeast: { lat: -32.92144377010727, lng: 151.7457227298927 },
            southwest: { lat: -32.92414342989272, lng: 151.7430230701072 }
          }
        },
        icon:
          "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
        id: "6a4d91e2bea9cefdb52b65819a22837cae2e8b57",
        name: "Holy Apostles Greek Orthodox Parish & Community of Newcastle",
        place_id: "ChIJfxKuX7IVc2sRdXQq0At9EWw",
        rating: 5,
        reference:
          "CmRbAAAAauDIo5oA372fukpZilugMxmnR5-rZwEnD5ZuTGnQqgG5Nwds6Et7rlzompkoSZgPNmjqyM2QMCHxcYMAFDOcyVbJlZYIC5KEANdvMYL62PUmYVWyHHADGFEQSWJX9sneEhB12UecQeRoypQOgTwMYvesGhSZJhFraLNseTjPSFi3NwaytNB8Lw",
        types: [
          "church",
          "place_of_worship",
          "point_of_interest",
          "establishment"
        ]
      },
      {
        formatted_address:
          "11-17 Steel Street Hamilton, Newcastle NSW 2303, Australia",
        geometry: {
          location: { lat: -32.922987, lng: 151.744258 },
          viewport: {
            northeast: { lat: -32.92163717010727, lng: 151.7456078298927 },
            southwest: { lat: -32.92433682989272, lng: 151.7429081701073 }
          }
        },
        icon:
          "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        id: "d8acaad4df9382799fc573d44c3a1a9a8b9edbb3",
        name: "The Hellenic Community and Cultural Centre of Newcastle",
        opening_hours: { open_now: false, weekday_text: [] },
        photos: [
          {
            height: 2048,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/101896094847682889568/photos">The Hellenic Community and Cultural Centre of Newcastle</a>'
            ],
            photo_reference:
              "CmRaAAAAXnhAzpmSZ7a5S35guOzDf5YyHdnZt9NnrfQQYAxjlBpkzof4pgLjs2GPqQBU7yS3qrWwK9cudAc1tjqKsNvq8GK_Ie7BCF-VkJ06n8TwfBRu-OBt3rTyAjsQygmhOwxfEhDTYIlCSUMPyVntEF-O2ay_GhT__4gxbO1XnYh0u7FW9rI3UHauiw",
            width: 1536
          }
        ],
        place_id: "ChIJP5NRWLIVc2sRuop9awxrKW0",
        rating: 4.8,
        reference:
          "CmRbAAAAHz5A3-_kGyEhgLB0xcYxFdR_F08Bf6oxppdhktTq5-dUIDDkIExvHpazsqlmwDQZQmGBWN1PEmCR33irIZmXfzNadJsqeQhWfuneFi009UwALATdxO-ZEwuNj-Y7A3wxEhChbzKHZH3zgsEONjooUiRGGhSWPhKabtr5D0qW01BqBDA0yruq9A",
        types: ["restaurant", "food", "point_of_interest", "establishment"]
      },
      {
        formatted_address: "44/89 Park Ave, Kotara NSW 2289, Australia",
        geometry: {
          location: { lat: -32.9411919, lng: 151.7112907 },
          viewport: {
            northeast: { lat: -32.93984207010728, lng: 151.7126405298927 },
            southwest: { lat: -32.94254172989272, lng: 151.7099408701073 }
          }
        },
        icon:
          "https://maps.gstatic.com/mapfiles/place_api/icons/restaurant-71.png",
        id: "4577c75090786eb80fa75a180ccf13154e0aeb7d",
        name: "Zeus Street Greek",
        opening_hours: { open_now: true, weekday_text: [] },
        photos: [
          {
            height: 1151,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/111882800761280984493/photos">Zeus Street Greek</a>'
            ],
            photo_reference:
              "CmRZAAAA5Jdd_lk2nou9qN5R-a5kNVblS88Y7mbq6lYnQ1vdQIhmaOV-dp27US6g8mM0u2N95EtemooFM7lX9Stb5fOFMXN1aSmEpb0DyeDHFXhCm9YAgcX8Qz3nxN-fUZmH8JCNEhCyDlzXOxAkSdG6FFZhAXN7GhT3ETwQxew7rcbGk0Fv1nxGNbrUzw",
            width: 2048
          }
        ],
        place_id: "ChIJm6Gx3fwVc2sR4Ms7DGigfys",
        rating: 3.5,
        reference:
          "CmRbAAAAgX88ue3bNGxBbBvG4hO4ncdWx9P5vUN0yiIMQKcgFN0LBkkRIDrqexlAKdXSwubo3sU6_SV-akETQ4irPyVjnwNWgy-9bTvbDcmQCbPV-D6CVWp69Dj4UObttZeVmxQXEhCHF3wdfQGBtb9c2vzLum0JGhQsmL80SKbo_sXdlddT2UoI8HAe_A",
        types: ["restaurant", "food", "point_of_interest", "establishment"]
      },
      {
        formatted_address: "25 Skelton St, Hamilton East NSW 2303, Australia",
        geometry: {
          location: { lat: -32.9268872, lng: 151.7524547 },
          viewport: {
            northeast: { lat: -32.92540127010727, lng: 151.7537674298927 },
            southwest: { lat: -32.92810092989271, lng: 151.7510677701073 }
          }
        },
        icon:
          "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
        id: "f8b1e06501379349ccca9e107eb933f16ee0b624",
        name: "St Demetrios Greek Orthodox Church",
        place_id: "ChIJ40wrI0wUc2sRYy8PiBo_81Q",
        reference:
          "CmRbAAAAoNWLZ3hbndg9WDLuNTuu1MkQxtxktyrtzglKhQWXyV02h4yBv7eiIBDzhtPFaNH7LjpBnAFWl1LuXlxmd1KI9KFoUL4D4STSXnx32chREQz-ok9EVMKkkuIkQNONorQKEhBRBH9jd9Z4TyIZjREGJtIzGhTLdNbVAMTpukLNAkFZLEzuHMP37A",
        types: [
          "church",
          "place_of_worship",
          "point_of_interest",
          "establishment"
        ]
      }
    ]
  },
  {
    name: "Community Centre, Greek Orthodox Parish & Community of Kogarah",
    formattedAddress: "20 Belgrave St, Kogarah NSW 2217, Australia",
    found: true,
    electorate: "Kogarah",
    address: "20 Belgrave Street",
    suburb: "KOGARAH",
    state: "NSW",
    postcode: "2217",
    placeId: "ChIJ03SQe-S5EmsRW5pdQqJLrE4",
    lat: -33.9649843,
    lng: 151.1339942
  },
  {
    name: "St. Euphemia Greek Orthodox Church of Bankstown",
    formattedAddress: "6-12 East Terrace, Bankstown NSW 2200, Australia",
    found: true,
    electorate: "Bankstown",
    address: "6-12 East Terrace",
    suburb: "BANKSTOWN",
    state: "NSW",
    postcode: "2200",
    placeId: "ChIJ37-mpwW8EmsRs1aIGpWWL78",
    lat: -33.918736,
    lng: 151.038942
  },
  {
    name: "Green Square School",
    formattedAddress: "237 Botany Rd, Waterloo NSW 2017, Australia",
    found: true,
    electorate: "Heffron",
    address: "237 Botany Road",
    suburb: "WATERLOO",
    state: "NSW",
    postcode: "2017",
    placeId: "ChIJy1NkvsaxEmsRmBNgK27HCFA",
    lat: -33.904029,
    lng: 151.203108
  },
  {
    name: "Green Valley Public School, Green Valley Rd",
    formattedAddress: "Green Valley NSW 2168, Australia",
    found: true,
    electorate: "Liverpool",
    address: "Green Valley Rd",
    suburb: "GREEN VALLEY",
    state: "NSW",
    postcode: "2168",
    placeId: "ChIJ2bHo-gyUEmsR6rmhwxjyBL4",
    lat: -33.902255,
    lng: 150.8690545,
    query:
      "Green Valley Public School, Green Valley Rd, GREEN VALLEY, NSW, 2168",
    multipleResults: 7,
    results: [
      {
        formatted_address: "Green Valley NSW 2168, Australia",
        geometry: {
          location: { lat: -33.902255, lng: 150.8690545 },
          viewport: {
            northeast: { lat: -33.90090517010728, lng: 150.8704043298928 },
            southwest: { lat: -33.90360482989272, lng: 150.8677046701073 }
          }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/bus-71.png",
        id: "62cd3d148ad721a9c959bac3304112d852c019c6",
        name: "Green Valley Public School, Green Valley Rd",
        place_id: "ChIJ2bHo-gyUEmsR6rmhwxjyBL4",
        reference:
          "CmRbAAAA4Fx0Zpd0_3LIHeKjWRn1g1gk7WsdB0Ed4UIpwQy3VHIasL1OHf_m2txXIPyjdm51BoNmnwQ7uAJjUod6YaDO-JvQ5huD5BM2ZomxJECdZVy9SOyYBHif8koT3myiVINtEhBUMo-06--ArQGyq2or5NHFGhQOaY79zz6oGdPKJnzVauKJXzbyqw",
        types: [
          "bus_station",
          "transit_station",
          "point_of_interest",
          "establishment"
        ]
      },
      {
        formatted_address:
          "173/183 Green Valley Rd, Green Valley Public School premises, Green Valley NSW 2168, Australia",
        geometry: {
          location: { lat: -33.902078, lng: 150.868661 },
          viewport: {
            northeast: { lat: -33.90072817010727, lng: 150.8700108298927 },
            southwest: { lat: -33.90342782989271, lng: 150.8673111701073 }
          }
        },
        icon:
          "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        id: "d95e5814f383d3106ff9b7f0ccaa396d581d8407",
        name: "Green Valley Languages and Arts School",
        opening_hours: { open_now: false, weekday_text: [] },
        photos: [
          {
            height: 2304,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/114339689388544374478/photos">A Google User</a>'
            ],
            photo_reference:
              "CmRaAAAATFrAPQWPNN-5OJZKvu4omEQ-Y7eWbhBxM4cgWaePbnye3csHT6L5KDiLLxmkacRIn_zR6AvqltW1kiJJOGHak7CjR0Y6-3CHUEOvaD2wy50zVQbJeXQHnGLE1IvcoetXEhBV5_eBfQUFdUbRO-aNuYyRGhSpX1dLYYalycjtb6cAocQyz-prjQ",
            width: 3072
          }
        ],
        place_id: "ChIJN6CUBA2UEmsRQ-_JsFy3Wtg",
        rating: 3.2,
        reference:
          "CmRbAAAAkYrfua4VYGyJ5GAMUYO1iQf5P2e1AsO-xL3PM3R50fpwot2PHWqags2Wk8wdlMNk03cYJGnJbJrSz4fA4iBEjI_80Maezf39Q04CPe_tinnj-lGTlKGtUsthHgTj8BK_EhDj64poUeK1D7pSQgGACYcpGhT90ZqZWkm7GYDPUWSPepmTg-xkNA",
        types: ["school", "point_of_interest", "establishment"]
      },
      {
        formatted_address:
          "1/170 Green Valley Rd, Green Valley NSW 2168, Australia",
        geometry: {
          location: { lat: -33.9028161, lng: 150.8695584 },
          viewport: {
            northeast: { lat: -33.90146627010729, lng: 150.8709082298927 },
            southwest: { lat: -33.90416592989273, lng: 150.8682085701072 }
          }
        },
        icon:
          "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        id: "54cf8bdd288ef0d455b2af2442761a5001c54663",
        name: "First National Real Estate Pretti Green Valley",
        opening_hours: { open_now: true, weekday_text: [] },
        photos: [
          {
            height: 3595,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/111109611693055955336/photos">Mathew Bell</a>'
            ],
            photo_reference:
              "CmRaAAAAhzodHqmE6Dj0QF6eMLvl0hG9tJrS2lz9q7CVHBNpyRN3f7YHjBY3sIQHYuThLP0TEM1keFBq7S8_BOv-6wBb6v0tGuE_ZM9LSDx4MLJEXb2WndEtORL2fmxy8OUI4S-dEhDHfFeqAH5-Q8DQ3CNHF2IAGhREbc7rAZ_0l1wVPnIGTnnOCjOr1g",
            width: 4679
          }
        ],
        place_id: "ChIJvWoH5wyUEmsR57g4-cMwQSs",
        rating: 5,
        reference:
          "CmRbAAAAVKdk9PgLd6aBUCIUjX4HfP-rkvrarzngCZfQX6MFHDB7bvermkUFERwjZJbK-Gz69VDWEV1k1Olsy2ICp5QVB3BW1gdmZrhmPsvztcfSDx_rWmenOYXtJcCj_m9NjllnEhBDNRjvhEaIqdfFzXh5Pb--GhQNVN_6jX65Qk4YmUdFTQ-j-6CYZA",
        types: ["real_estate_agency", "point_of_interest", "establishment"]
      },
      {
        formatted_address: "264 Wilson Rd, Green Valley NSW 2168, Australia",
        geometry: {
          location: { lat: -33.8984722, lng: 150.867313 },
          viewport: {
            northeast: { lat: -33.89711977010727, lng: 150.8686419298927 },
            southwest: { lat: -33.89981942989272, lng: 150.8659422701073 }
          }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/school-71.png",
        id: "58b09fee3588ce83ef8ea081e2a66a14af2b668c",
        name: "Green Valley Islamic College",
        photos: [
          {
            height: 1280,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/103106237609688894685/photos">Abdur Rashid Norath</a>'
            ],
            photo_reference:
              "CmRaAAAAEOKl9Y9SxwKSbdLOJuj7q0Uev-rErQQjvM3uMXeyesQFFkxWdxvXfzjyZGZWUzxGmzr0JWB7oPbImDeVb7kOYLw0Y3SKOImMxH_KjyX_ds-j8Na1pw-e8WtC60himAyDEhCzk2wY4lTFxQ3qN2YfLwxSGhSln-EDsKw8cGJSAe0Z-O5eouxsDQ",
            width: 960
          }
        ],
        place_id: "ChIJ50QFrw6UEmsRzsd4KY42IAg",
        rating: 3.3,
        reference:
          "CmRbAAAAy1Fmt_NOTiK8Tw8AsBJIvjvcQY4xY01AlP-xqKBk19tESc5rcieJ1YwrET2SZspSrBzDnYBTN2vDeiAyuVHNgx1fqj2Ku8I9h1uVbnmb0WEH7W60aJ6nXmPp4L0wKNe3EhBSaUh0KAIr1FjUSBiydVheGhQfNqvuL3asw_35P64TNzkYaaUN9g",
        types: ["university", "point_of_interest", "establishment"]
      },
      {
        formatted_address: "Brolga Cres, Green Valley NSW 2168, Australia",
        geometry: {
          location: { lat: -33.9100169, lng: 150.8739351 },
          viewport: {
            northeast: { lat: -33.90868307010727, lng: 150.8753288298927 },
            southwest: { lat: -33.91138272989271, lng: 150.8726291701072 }
          }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/school-71.png",
        id: "8176477fc5db3e658859ac1d783261d567d6289a",
        name: "James Busby High School",
        photos: [
          {
            height: 816,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/113081667169889250056/photos">Britany Woods</a>'
            ],
            photo_reference:
              "CmRaAAAAnryxdiWP1ZgKzA7GhbudKhtB-_DRIofjGl0CNtXIdMjvhmnyMY1YUZqnW0eftADyrPPQq4WRcZlTtkxjFzMRQ56iE4N5v6hz5Fi9srk6xWS87Ny5TGuAIB7eGCq4gDk_EhBLhha3jbYtfMNwd-wKWMLPGhQpBeyvA_nRrRWB_cOVtFUWRVGhag",
            width: 480
          }
        ],
        place_id: "ChIJifJu3myUEmsRk27ktNFJXRo",
        rating: 2.7,
        reference:
          "CmRbAAAAoapl-Ljr_F-xkBDIAY7HxcuXdJ4Z1erSyEJQTD8_zjsZiU_UCRXP5IFcLwaoLi7JPP7JCyd3Y6dIDKuN8SOh4KTGId8GI7dGGC4gsqkQ6ixDVX1ATcRp2taeGB5hoya7EhBIh_v6r4Eh6HzrTXxZbU1WGhQt6VvVZkxp82yS3VHzsmRerXA9fQ",
        types: ["school", "point_of_interest", "establishment"]
      },
      {
        formatted_address: "Starling St, Green Valley NSW 2168, Australia",
        geometry: {
          location: { lat: -33.9060796, lng: 150.8742625 },
          viewport: {
            northeast: { lat: -33.90466612010727, lng: 150.8751414798927 },
            southwest: { lat: -33.90736577989271, lng: 150.8724418201073 }
          }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/school-71.png",
        id: "0e8e4ad106b7544174358bc2de1b13b7849d1da5",
        name: "Busby West Public School",
        place_id: "ChIJifJu3myUEmsRFMlO9bhfJ3k",
        rating: 4,
        reference:
          "CmRbAAAAUUNxp0zI7z33eZ3trcWdqEKMppdWp201uD2bGeVj1OLLWkIEIWszFXJYfvguTQttNvZP-XK6Jqy-zLQwgOsl_0DH91m85j2p8r2j09pHDCk4f8PxxyMoX30gmamz-kTNEhBbxMDmNbv_yjpyqBMitz0vGhQGLR9KgRxZH18la1tTNULJCrJOpg",
        types: ["school", "point_of_interest", "establishment"]
      },
      {
        formatted_address: "Green Valley NSW 2168, Australia",
        geometry: {
          location: { lat: -33.9024507, lng: 150.86942 },
          viewport: {
            northeast: { lat: -33.90110087010726, lng: 150.8707698298927 },
            southwest: { lat: -33.90380052989271, lng: 150.8680701701073 }
          }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/bus-71.png",
        id: "7cefef9ccb22b310a490b5c7fd9916695c3b26a0",
        name: "Green Valley Rd opp Currawong St",
        place_id: "ChIJ6X8z4wyUEmsRyM8ZWwA3_D8",
        reference:
          "CmRbAAAALzcdMaJqDwHh5pDIzS5KrC5_naCG9H0Iqe9AzX9EQdzh6eKscYJ9UobpT3wAATbUitVO3PgxtodPXmK6e7F11pdbjuRqdP1TmUGHfUrcAMPmm664MQoeXtHul6SdN5etEhDS9W6a5KoxwfXl5G3P7bIlGhRTebEFBasjQWBQY3t44MPkxkGFog",
        types: [
          "bus_station",
          "transit_station",
          "point_of_interest",
          "establishment"
        ]
      }
    ]
  },
  {
    name: "Greystanes Public School",
    formattedAddress: "781 Merrylands Rd, Greystanes NSW 2145, Australia",
    found: true,
    electorate: "Prospect",
    address: "Merrylands Road",
    suburb: "MERRYLANDS",
    state: "NSW",
    postcode: "2145",
    placeId: "ChIJTS9Qj_CXEmsRas0C9V4HbpQ",
    lat: -33.8280761,
    lng: 150.9412793
  },
  {
    name: "Gurdwara Singh Sabha",
    formattedAddress: "895 Kidman Way, Griffith NSW 2680, Australia",
    found: true,
    electorate: "Murray",
    address: "895 Kidman Way",
    suburb: "GRIFFITH",
    state: "NSW",
    postcode: "2680",
    placeId: "ChIJRwp2DTWuH2sR7-InFdwV-58",
    lat: -34.309212,
    lng: 146.0457333
  },
  {
    name: "Guildford Mosque",
    formattedAddress: "64 Mountford Ave, Guildford NSW 2161, Australia",
    found: true,
    electorate: "Granville",
    address: "64 Mountford Avenue",
    suburb: "GUILDFORD",
    state: "NSW",
    postcode: "2161",
    placeId: "ChIJNegPTj29EmsRcWbw-ULhVKQ",
    lat: -33.852659,
    lng: 150.988808
  },
  {
    name: "Gwynneville Public School",
    formattedAddress: "10a Acacia Ave, Gwynneville NSW 2500, Australia",
    found: true,
    electorate: "Wollongong",
    address: "Acacia Street",
    suburb: "GWYNNEVILLE",
    state: "NSW",
    postcode: "2500",
    placeId: "ChIJH2hjep4ZE2sR16fz9ZdYabg",
    lat: -34.4180791,
    lng: 150.8793378
  },
  {
    name: "Whalan Public School",
    formattedAddress: "Karangi Rd, Whalan NSW 2770, Australia",
    found: true,
    electorate: "Londonderry",
    address: "Karangi Road",
    suburb: "WHALAN",
    state: "NSW",
    postcode: "2770",
    placeId: "ChIJ-5A_I_maEmsRZ9VAJtOd1eo",
    lat: -33.7531974,
    lng: 150.8095836,
    query: "Halinda Public School, Karangi Road, WHALAN, NSW, 2770",
    multipleResults: 3,
    results: [
      {
        formatted_address: "Karangi Rd, Whalan NSW 2770, Australia",
        geometry: {
          location: { lat: -33.7531974, lng: 150.8095836 },
          viewport: {
            northeast: { lat: -33.75186262010727, lng: 150.8114733298927 },
            southwest: { lat: -33.75456227989272, lng: 150.8087736701073 }
          }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/school-71.png",
        id: "082403c1c84476110d7bf95ed2566230c8196942",
        name: "Whalan Public School",
        place_id: "ChIJ-5A_I_maEmsRZ9VAJtOd1eo",
        rating: 3.2,
        reference:
          "CmRbAAAAorZO6nYHieoBlozSFfC_OVo_4zK3hZQWae7XrvsdOd_waK1Hwf8fjAZLArN6VMa4_zLNPGuZ7Iv3p2s_r94fZY-EXWuy4T3dfz3ca09gJzYFy6eNyvn0oA1i98tzf971EhDYHAkP9rqAwSSGqOettpQwGhSxsIvJSlHqksrJpdYwqBPnkdqFiQ",
        types: ["school", "point_of_interest", "establishment"]
      },
      {
        formatted_address: "Mimika Ave, Whalan NSW 2770, Australia",
        geometry: {
          location: { lat: -33.7605248, lng: 150.8064794 },
          viewport: {
            northeast: { lat: -33.75843154999999, lng: 150.8076086298927 },
            southwest: { lat: -33.76122255, lng: 150.8049089701073 }
          }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/school-71.png",
        id: "5bca794cb22dcaf622b6720334c805517546027a",
        name: "Halinda School SSP",
        place_id: "ChIJC4pSc_GaEmsRvheQ0UHfoXs",
        rating: 5,
        reference:
          "CmRbAAAAHNymkYnbkpTJuzjD9O-ybf6rDfabI9kdyTkrjp57BKlZPZ26pgxBknwY_dwLngn147xmfwGwLGDXdr9tbFpN_wDs3T_of6fGEE-jPBB3Waai7qYqppuYXY2pYFsIe8TpEhCJW1w0OSTR7GX8MntLNPONGhRYAuhnpRB_sXXh7OxtOodxlsBYrw",
        types: ["school", "point_of_interest", "establishment"]
      },
      {
        formatted_address: "18 Mimika Ave, Whalan NSW 2770, Australia",
        geometry: {
          location: { lat: -33.759638, lng: 150.8048696 },
          viewport: {
            northeast: { lat: -33.75816067010728, lng: 150.8061814298927 },
            southwest: { lat: -33.76086032989273, lng: 150.8034817701073 }
          }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/school-71.png",
        id: "8fc4a58e0694d853689b3423829ce43c1171b909",
        name: "Madang Avenue Public School",
        place_id: "ChIJGzjXDPGaEmsRSMQEgAHwt5Y",
        rating: 3.4,
        reference:
          "CmRbAAAAj5YGM5o5YtBELrqWrKwnAUrGKqGpZSK5vSf-yITgr9rlNGoQbA7H5l7JhQD8oWMkrvCy2TqsSTn-OUzOikZgn0BUFs6aHnLhAMKMhT3mGzbRjXY3VIKsSKoKf9Mri_c3EhD53eA5vHbg53O5VKQHtckRGhQqcKLJwUyHo-PTq0N9v5KAIVPDwA",
        types: ["school", "point_of_interest", "establishment"]
      }
    ]
  },
  {
    name: "Hambledon Public School",
    formattedAddress: "35 Bali Dr, Quakers Hill NSW 2763, Australia",
    found: true,
    electorate: "Riverstone",
    address: "Bali Drive",
    suburb: "QUAKERS HILL",
    state: "NSW",
    postcode: "2763",
    placeId: "ChIJddh15MieEmsRZIs9pCpgtjM",
    lat: -33.716691,
    lng: 150.886773
  },
  {
    name: "Hamilton Public School",
    formattedAddress: "Tudor St, Hamilton NSW 2303, Australia",
    found: true,
    electorate: "Newcastle",
    address: "Tudor Street",
    suburb: "HAMILTON",
    state: "NSW",
    postcode: "2303",
    placeId: "ChIJ51fks7MVc2sRJH7A03KRhME",
    lat: -32.9238317,
    lng: 151.7436432
  },
  {
    name: "Hampden Park Public School",
    formattedAddress: "39/75 Hampden Rd, Lakemba NSW 2195, Australia",
    found: true,
    electorate: "Lakemba",
    address: "Hampden Rd",
    suburb: "LAKEMBA",
    state: "NSW",
    postcode: "2195",
    placeId: "ChIJc2Fvpr-7EmsRiOpmSocfyAw",
    lat: -33.9152158,
    lng: 151.0738401
  },
  {
    name: "Hannans Road Public School",
    formattedAddress: "19 Hannans Rd, Riverwood NSW 2210, Australia",
    found: true,
    electorate: "Lakemba",
    address: "Hannans Road",
    suburb: "RIVERWOOD",
    state: "NSW",
    postcode: "2210",
    placeId: "ChIJbaH4Yk-5EmsRp4dLOHAscb4",
    lat: -33.9457796,
    lng: 151.0573527
  },
  {
    name: "Harcourt Public School",
    formattedAddress: "9/1 First Ave, Campsie NSW 2194, Australia",
    found: true,
    electorate: "Canterbury",
    address: "First Ave",
    suburb: "CAMPSIE",
    state: "NSW",
    postcode: "2194",
    placeId: "ChIJnzlR71K6EmsReDP1t0ZyVnI",
    lat: -33.9090036,
    lng: 151.0955287
  },
  {
    name: "Harrington Street Public School",
    formattedAddress: "West, Harrington St, Cabramatta NSW 2166, Australia",
    found: true,
    electorate: "Cabramatta",
    address: "Harrington Street",
    suburb: "CABRAMATTA",
    state: "NSW",
    postcode: "2166",
    placeId: "ChIJcw2jTn6WEmsRR9BaN1aO90I",
    lat: -33.8882321,
    lng: 150.909421
  },
  {
    name: "St. Paraskevi Greek Orthodox Church",
    formattedAddress: "47-49 Balmoral St, Blacktown NSW 2148, Australia",
    found: true,
    electorate: "Blacktown",
    address: "47-49 Balmoral Street",
    suburb: "BLACKTOWN",
    state: "NSW",
    postcode: "2148",
    placeId: "ChIJd0o2_6uZEmsRPYjsh2MZ71k",
    lat: -33.77468950000001,
    lng: 150.9015582
  },
  {
    name: "Henry Kendall High School",
    formattedAddress: "Faunce St, Gosford NSW 2250, Australia",
    found: true,
    electorate: "Gosford",
    address: "Faunce Street",
    suburb: "GOSFORD",
    state: "NSW",
    postcode: "2250",
    placeId: "ChIJHYXiJaTKcmsRzeZn2wKzBVU",
    lat: -33.420513,
    lng: 151.334509
  },
  {
    name: "Holsworthy High School",
    formattedAddress: "Huon Cres, Holsworthy NSW 2173, Australia",
    found: true,
    electorate: "Holsworthy",
    address: "Huon Cres",
    suburb: "HOLSWORTHY",
    state: "NSW",
    postcode: "2175",
    placeId: "ChIJcUaN03yVEmsRSMGsu6x7R7g",
    lat: -33.9556952,
    lng: 150.9508918
  },
  {
    name: "Holsworthy Public School",
    formattedAddress: "36 Infantry Parade, Holsworthy NSW 2173, Australia",
    found: true,
    electorate: "Holsworthy",
    address: "Infantry Pde",
    suburb: "HOLSWORTHY",
    state: "NSW",
    postcode: "2173",
    placeId: "ChIJyyiRr2KVEmsR-yDRWElS2yU",
    lat: -33.955975,
    lng: 150.9547119
  },
  {
    name: "Holy Spirit Catholic College",
    formattedAddress: "39 Croydon St, Lakemba NSW 2195, Australia",
    found: true,
    electorate: "Lakemba",
    address: "39 Croydon Street",
    suburb: "LAKEMBA",
    state: "NSW",
    postcode: "2195",
    placeId: "ChIJaV3Dqca7EmsRqSkKAFdRU0I",
    lat: -33.922021,
    lng: 151.0766053
  },
  {
    name: "Homebush Boys High School",
    formattedAddress: "Bridge Rd, Homebush NSW 2140, Australia",
    found: true,
    electorate: "Strathfield",
    address: "Bridge Road",
    suburb: "HOMEBUSH",
    state: "NSW",
    postcode: "2140",
    placeId: "ChIJAfF3mzC7EmsRC6yaURZAwU8",
    lat: -33.8661362,
    lng: 151.0772012
  },
  {
    name: "Homebush Public School",
    formattedAddress: "Rochester St, Homebush NSW 2140, Australia",
    found: true,
    electorate: "Strathfield",
    address: "Rochester Street",
    suburb: "HOMEBUSH",
    state: "NSW",
    postcode: "2140",
    placeId: "ChIJ1ffMbyW7EmsRz9FIIdSIEPs",
    lat: -33.8670275,
    lng: 151.0851668
  },
  {
    name: "Homebush West Public School",
    formattedAddress:
      "Homebush West School, 20 Exeter Rd, Homebush West NSW 2140, Australia",
    found: true,
    electorate: "Strathfield",
    address: "Exeter Road",
    suburb: "HOMEBUSH WEST",
    state: "NSW",
    postcode: "2140",
    placeId: "ChIJ0znBBke7EmsRhyLZLTcOwB4",
    lat: -33.866461,
    lng: 151.0666854
  },
  {
    name: "Hornsby Girls High School",
    formattedAddress: "Edgeworth David Ave, Hornsby NSW 2077, Australia",
    found: true,
    electorate: "Ku-ring-gai",
    address: "Edgeworth David Avenue",
    suburb: "HORNSBY",
    state: "NSW",
    postcode: "2077",
    placeId: "ChIJ2wNSqoWnEmsRFAeeMhRHoOs",
    lat: -33.70601389999999,
    lng: 151.1011201
  },
  {
    name: "Hornsby Heights Primary School",
    formattedAddress: "Somerville Rd, Hornsby Heights NSW 2077, Australia",
    found: true,
    electorate: "Hornsby",
    address: "Sommerville Road",
    suburb: "HORNSBY",
    state: "NSW",
    postcode: "2077",
    placeId: "ChIJDVLlFLBZDWsRxbzGZo-8-WE",
    lat: -33.6699846,
    lng: 151.0967403
  },
  {
    name: "Hornsby North Public School",
    formattedAddress: "52 Ida St, Hornsby NSW 2077, Australia",
    found: true,
    electorate: "Hornsby",
    address: "Ida Street",
    suburb: "HORNSBY",
    state: "NSW",
    postcode: "2077",
    placeId: "ChIJ9_QBl2NYDWsRs3oRkzVohxs",
    lat: -33.6823925,
    lng: 151.0991807
  },
  {
    name: "Hornsby South Public School",
    formattedAddress: "57-63 Clarke Rd, Hornsby NSW 2077, Australia",
    found: true,
    electorate: "Hornsby",
    address: "Clarke Road",
    suburb: "HORNSBY",
    state: "NSW",
    postcode: "2077",
    placeId: "ChIJZTEMOJ6nEmsRQ25eAweUi_c",
    lat: -33.7131802,
    lng: 151.0952149
  },
  {
    name: "Horsley Park Public School",
    formattedAddress: "1759 The Horsley Dr, Horsley Park NSW 2175, Australia",
    found: true,
    electorate: "Mulgoa",
    address: "The Horsley Drive",
    suburb: "HORSLEY PARK",
    state: "NSW",
    postcode: "2164",
    placeId: "ChIJQ-dJtymREmsRfr1R0AbtadQ",
    lat: -33.8404,
    lng: 150.852851
  },
  {
    name: "Hunters Hill Public School",
    formattedAddress: "17 Alexandra St, Hunters Hill NSW 2110, Australia",
    found: true,
    electorate: "Lane Cove",
    address: "Alexandra St",
    suburb: "HUNTERS HILL",
    state: "NSW",
    postcode: "2110",
    placeId: "ChIJXVbhhZ2vEmsR9rfsBzTTFtw",
    lat: -33.8345858,
    lng: 151.1516596
  },
  {
    name: "Hurstville Public School",
    formattedAddress: "Forest Rd, Hurstville NSW 2220, Australia",
    found: true,
    electorate: "Kogarah",
    address: "Forest Road",
    suburb: "HURSTVILLE",
    state: "NSW",
    postcode: "2220",
    placeId: "ChIJ71OccZa5EmsRTv_3xPLaJI0",
    lat: -33.9648942,
    lng: 151.1106349
  },
  {
    name: "The Italian Social Welfare Organisation",
    formattedAddress: "21 Stewart St, Wollongong NSW 2500, Australia",
    found: true,
    electorate: "Wollongong",
    address: "21 Stewart Street",
    suburb: "WOLLONGONG",
    state: "NSW",
    postcode: "2500",
    placeId: "ChIJJ5TN864ZE2sR7MU9hrR7gho",
    lat: -34.4283784,
    lng: 150.8998737
  },
  {
    name: "Illawarra Sports High School",
    formattedAddress: "1 Gura St, Berkeley NSW 2506, Australia",
    found: true,
    electorate: "Wollongong",
    address: "Gura Street",
    suburb: "BERKELEY",
    state: "NSW",
    postcode: "2506",
    placeId: "ChIJr25LLs4QE2sRYWOnkYlMwd4",
    lat: -34.480332,
    lng: 150.8536687
  },
  {
    name: "Ingleburn High School",
    formattedAddress: "Oxford Rd, Ingleburn NSW 2565, Australia",
    found: true,
    electorate: "Macquarie Fields",
    address: "Oxford Road",
    suburb: "INGLEBURN",
    state: "NSW",
    postcode: "2565",
    placeId: "ChIJU7dcC3frEmsR9-ggTmxBtFQ",
    lat: -34.0053036,
    lng: 150.8714762
  },
  {
    name: "Ingleburn Public School",
    formattedAddress:
      "Ingleburn Public School, 51 Oxford Rd, Ingleburn NSW 2565, Australia",
    found: true,
    electorate: "Macquarie Fields",
    address: "Oxford Road",
    suburb: "INGLEBURN",
    state: "NSW",
    postcode: "2565",
    placeId: "ChIJLYeI9XvrEmsR8hbfXogYDkg",
    lat: -34.0004084,
    lng: 150.8666734
  },
  {
    name: "Italian Bilingual School",
    formattedAddress: "30/32 See St, Meadowbank NSW 2114, Australia",
    found: true,
    electorate: "Ryde",
    address: "30 See Street",
    suburb: "MEADOWBANK",
    state: "NSW",
    postcode: "2114",
    placeId: "ChIJwdj_2lSkEmsRPUeSowRfh4s",
    lat: -33.815602,
    lng: 151.092811
  },
  {
    name: "James Busby High School",
    formattedAddress: "Brolga Cres, Green Valley NSW 2168, Australia",
    found: true,
    electorate: "Liverpool",
    address: "Rundle Road",
    suburb: "BUSBY",
    state: "NSW",
    postcode: "2168",
    placeId: "ChIJifJu3myUEmsRk27ktNFJXRo",
    lat: -33.9100169,
    lng: 150.8739351
  },
  {
    name: "James Ruse Agricultural High School",
    formattedAddress: "17-31 Felton Rd, Carlingford NSW 2118, Australia",
    found: true,
    electorate: "Parramatta",
    address: "Felton Road",
    suburb: "CARLINGFORD",
    state: "NSW",
    postcode: "2118",
    placeId: "ChIJ-e1HpPKjEmsRUH1OzXMDtSk",
    lat: -33.7818819,
    lng: 151.0423207
  },
  {
    name: "Jannali High School",
    formattedAddress: "Sutherland Rd, Jannali NSW 2226, Australia",
    found: true,
    electorate: "Miranda",
    address: "Sutherland Road",
    suburb: "JANNALI",
    state: "NSW",
    postcode: "2226",
    placeId: "ChIJFdumhVjHEmsR-ofL4lgedOE",
    lat: -34.0219256,
    lng: 151.0617694
  },
  {
    name: "Jesmond Public School",
    formattedAddress: "16 Ralph St, Jesmond NSW 2299, Australia",
    found: true,
    electorate: "Wallsend",
    address: "Ralph Street",
    suburb: "JESMOND",
    state: "NSW",
    postcode: "2299",
    placeId: "ChIJ31mN_Cs-c2sRAZjebaC5iYE",
    lat: -32.903733,
    lng: 151.695312
  },
  {
    name: "John Colet School",
    formattedAddress: "6 Wyatt Ave, Belrose NSW 2085, Australia",
    found: true,
    electorate: "Davidson",
    address: "6 Wyatt Avenue",
    suburb: "BELROSE",
    state: "NSW",
    postcode: "2085",
    placeId: "ChIJc0-Ksh5WDWsRPS57v-_Xd40",
    lat: -33.721983,
    lng: 151.215268
  },
  {
    name: "John Purchase Public School",
    formattedAddress: "Purchase Rd, Cherrybrook NSW 2126, Australia",
    found: true,
    electorate: "Epping",
    address: "Purchase Road",
    suburb: "CHERRYBROOK",
    state: "NSW",
    postcode: "2126",
    placeId: "ChIJifeofc2gEmsROkUxI-27Kz8",
    lat: -33.718909,
    lng: 151.0395618
  },
  {
    name: "Kegworth Public School",
    formattedAddress: "60 Tebbutt St, Leichhardt NSW 2040, Australia",
    found: true,
    electorate: "Balmain",
    address: "Tebbutt Street",
    suburb: "LEICHHARDT",
    state: "NSW",
    postcode: "2040",
    placeId: "ChIJoVRvuw6wEmsR5OCD-KqsLA8",
    lat: -33.8865706,
    lng: 151.1473288
  },
  {
    name: "Kellyville Public School",
    formattedAddress: "35A Windsor Rd, Kellyville NSW 2155, Australia",
    found: true,
    electorate: "Castle Hill",
    address: "Windsor Road",
    suburb: "KELLYVILLE",
    state: "NSW",
    postcode: "2155",
    placeId: "ChIJz89dGuyhEmsRxqnGQIcAQWs",
    lat: -33.7110558,
    lng: 150.9578259
  },
  {
    name: "Kent Road Public School",
    formattedAddress: "Herring Rd, Marsfield NSW 2122, Australia",
    found: true,
    electorate: "Ryde",
    address: "Kent & Herring Roads",
    suburb: "EASTWOOD",
    state: "NSW",
    postcode: "2122",
    placeId: "ChIJZeEjctmlEmsR4KyXT9cOZ3Y",
    lat: -33.7867609,
    lng: 151.1097546
  },
  {
    name: "Killarney Heights High School",
    formattedAddress: "89 Starkey St, Killarney Heights NSW 2087, Australia",
    found: true,
    electorate: "Wakehurst",
    address: "Starkey Street",
    suburb: "KILLARNEY HEIGHTS",
    state: "NSW",
    postcode: "2087",
    placeId: "ChIJ2_fOI3GpEmsRt-2DUTegSdw",
    lat: -33.7718267,
    lng: 151.2151954
  },
  {
    name: "Killarney Heights Public School",
    formattedAddress: "10 Tralee Ave, Killarney Heights NSW 2087, Australia",
    found: true,
    electorate: "Wakehurst",
    address: "Tralee Avenue",
    suburb: "KILLARNEY HEIGHTS",
    state: "NSW",
    postcode: "2087",
    placeId: "ChIJG3Tlg3GpEmsRR5RoYXe5ovc",
    lat: -33.7756222,
    lng: 151.2160315
  },
  {
    name: "King Park Public School",
    formattedAddress: "31 Humphries Rd, Wakeley NSW 2176, Australia",
    found: true,
    electorate: "Fairfield",
    address: "Humphries Road",
    suburb: "ST JOHNS PARK",
    state: "NSW",
    postcode: "2176",
    placeId: "ChIJm6eqNmGWEmsR7XREQRDZr50",
    lat: -33.8791963,
    lng: 150.9112663
  },
  {
    name: "Kingsgrove Public School",
    formattedAddress: "327 Kingsgrove Rd, Kingsgrove NSW 2208, Australia",
    found: true,
    electorate: "Kogarah",
    address: "Kingsgrove Road",
    suburb: "KINGSGROVE",
    state: "NSW",
    postcode: "2208",
    placeId: "ChIJYwBXjoa5EmsRAKNqUpJnr2k",
    lat: -33.9479464,
    lng: 151.1018912,
    query: "Kingsgrove Public School, Kingsgrove Road, KINGSGROVE, NSW, 2208",
    multipleResults: 2,
    results: [
      {
        formatted_address: "327 Kingsgrove Rd, Kingsgrove NSW 2208, Australia",
        geometry: {
          location: { lat: -33.9479464, lng: 151.1018912 },
          viewport: {
            northeast: { lat: -33.94653497010727, lng: 151.1036295798927 },
            southwest: { lat: -33.94923462989271, lng: 151.1009299201073 }
          }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/school-71.png",
        id: "240a2ab304a95f9183f410b8f837eae84a00ad97",
        name: "Kingsgrove Public School",
        place_id: "ChIJYwBXjoa5EmsRAKNqUpJnr2k",
        rating: 5,
        reference:
          "CmRbAAAAJnWs2YJcgcohds-3n9w_KPFVeiory8gzSXgePBF8AeL307_fbfl59F1A6co2Fq7FBqxFuudtG4D6P6z2r8OKHMEjbZ3NLpf-NzAkt83Zvbi8Z6fGPTEFJS5-By2I7n9YEhAVrXR62r7G2AcvSMzWtz1rGhT1mEIDv6o_AmIvmLu5p9MtusgeYw",
        types: ["school", "point_of_interest", "establishment"]
      },
      {
        formatted_address: "2 Caroline St, Kingsgrove NSW 2208, Australia",
        geometry: {
          location: { lat: -33.9483403, lng: 151.1047959 },
          viewport: {
            northeast: { lat: -33.94694667010728, lng: 151.1064686298927 },
            southwest: { lat: -33.94964632989272, lng: 151.1037689701073 }
          }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/school-71.png",
        id: "dccff122b7227108a407a746636227f5ab5a61e1",
        name: "Kingsgrove Public School",
        opening_hours: { open_now: false, weekday_text: [] },
        place_id: "ChIJb3PUHYa5EmsR72xOj1ryew8",
        reference:
          "CmRbAAAAL1GPYypa3zxR4n4Y7mbuxyddRguR9EMTnJNRmlvtBRYV_x1aDgTdjLchO7DtFScV4hImG8jWtEu0yCY1HzOHGzYKxbKSpywbhNQucp5-nBrVry-JGKw0tNCTnuIvAJKSEhB8UklMqW-S1dralw08SgB_GhTwa0TcHcr9qvO9ILCe_dfRquMO9g",
        types: ["school", "point_of_interest", "establishment"]
      }
    ]
  },
  {
    name: "Kogarah High School",
    formattedAddress: "22A Gladstone St, Kogarah NSW 2217, Australia",
    found: true,
    electorate: "Kogarah",
    address: "Regent Street",
    suburb: "KOGARAH",
    state: "NSW",
    postcode: "2217",
    placeId: "ChIJXRblsPy5EmsRJK5xpQD4P9o",
    lat: -33.9615519,
    lng: 151.1349158
  },
  {
    name: "Kogarah Public School",
    formattedAddress: "24B Gladstone St, Kogarah NSW 2217, Australia",
    found: true,
    electorate: "Kogarah",
    address: "Gladstone Street",
    suburb: "KOGARAH",
    state: "NSW",
    postcode: "2217",
    placeId: "ChIJXRblsPy5EmsRTIwMx45UNF0",
    lat: -33.962005,
    lng: 151.136234
  },
  {
    query:
      "Korean Central Presbyterian Church, 72-80 Burwood Road, BELFIELD, NSW, 2191",
    found: false
  },
  {
    name: "Kyeemagh Infants School",
    formattedAddress:
      "Cnr Jacobson Avenue & Beehag St, Kyeemagh NSW 2216, Australia",
    found: true,
    electorate: "Rockdale",
    address: "Beehag Street",
    suburb: "ROCKDALE",
    state: "NSW",
    postcode: "2216",
    placeId: "ChIJjzzAmrewEmsRakGTs0u7zx8",
    lat: -33.9488402,
    lng: 151.1628575
  },
  {
    name: "Lebanese Muslim Association",
    formattedAddress: "71-75 Wangee Rd, Lakemba NSW 2195, Australia",
    found: true,
    electorate: "Lakemba",
    address: "71-75 Wangee Road",
    suburb: "LAKEMBA",
    state: "NSW",
    postcode: "2159",
    placeId: "ChIJm7fm9L67EmsRWzp5QzLNglg",
    lat: -33.912129,
    lng: 151.073659,
    query:
      "LMA Islamic Community Centre, 71-75 Wangee Road, LAKEMBA, NSW, 2159",
    multipleResults: 2,
    results: [
      {
        formatted_address: "71-75 Wangee Rd, Lakemba NSW 2195, Australia",
        geometry: {
          location: { lat: -33.912129, lng: 151.073659 },
          viewport: {
            northeast: { lat: -33.91084677010728, lng: 151.0748448798927 },
            southwest: { lat: -33.91354642989272, lng: 151.0721452201072 }
          }
        },
        icon:
          "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        id: "e9a1285f1e80f8ff1bf68bb69592874d42208c23",
        name: "Lebanese Muslim Association",
        opening_hours: { open_now: true, weekday_text: [] },
        photos: [
          {
            height: 2340,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/107435514759117035062/photos">Bahjat Alaadel</a>'
            ],
            photo_reference:
              "CmRZAAAADJ039dGYpfKaeWo9CikAIKjHWsMooTxQdN8g5kvReQDvzj5OXa4s2iaoknqp387HU2al-zTqkr4mfjkPrOBqXOtRWIB9Mkgc9zoNoctOFe7M-P453dgaxIti-sf4aou0EhDhOu6idGO06E4GfNTQwt3bGhRUH7OniPXE0B8147Gfm2gMFfjCvQ",
            width: 4160
          }
        ],
        place_id: "ChIJm7fm9L67EmsRWzp5QzLNglg",
        rating: 4.8,
        reference:
          "CmRbAAAAG0TdRsSuvIYxTQevVwXnV3PSYYalor-nAEQSKF6OHakecezBh2c_tsae_gLnhCwUFIzu6Hvw1hOtqQkmJ03ILYQ6kP_R4vmd2NLzomrVuGBzpdSrt8goJArGf44xU1iHEhCZR7VcxZKGMVbkSyxd4wsBGhTV_d5O-he_oX9IcHWVz8v-2Rc4fw",
        types: [
          "mosque",
          "place_of_worship",
          "point_of_interest",
          "establishment"
        ]
      },
      {
        formatted_address: "65-67 Wangee Rd, Lakemba NSW 2195, Australia",
        geometry: {
          location: { lat: -33.912607, lng: 151.074138 },
          viewport: {
            northeast: { lat: -33.91135862010728, lng: 151.0752425798927 },
            southwest: { lat: -33.91405827989272, lng: 151.0725429201073 }
          }
        },
        icon:
          "https://maps.gstatic.com/mapfiles/place_api/icons/worship_islam-71.png",
        id: "7c84099cd9342475de3d1532b929f69e663130ba",
        name: "Lakemba Mosque",
        opening_hours: { open_now: true, weekday_text: [] },
        photos: [
          {
            height: 828,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/102204493346597643402/photos">Lakemba Mosque</a>'
            ],
            photo_reference:
              "CmRaAAAAhps1Dyssvb0srdrqmtdKgA0UG0S7ZjV9fP3k5jrgor2ta8mLrbUad8rYgUupcNOjLDu6wyL7VugYvRD4mbuPeNaM6UCKTubr3Hz4D124qE8zFkaCTmnhcQoHDKYDoZ1_EhDNsavgpZjHVuY9OjA_5I8UGhQXj11V0SfY5GTKowxiElHBtrNWbA",
            width: 828
          }
        ],
        place_id: "ChIJ58DB8b67EmsRvaX8zYy47x8",
        rating: 4.9,
        reference:
          "CmRbAAAAfrx4Jokt1fIpnGaEMHS3GC7gN-hw-QMHQsUboqcBbWz4sTS-RILDoa1C-Bl22IgMSdp35g2yIm_wC86IgFotSlef0SgkiN9FJoNRgqQ2KKhYIpTcdv7C0PrZZQPYRtcLEhB-M56BUMDl9s22wU4W8UvFGhSk2RcAgRSBIbLHaS5WgxYa0nswUQ",
        types: [
          "mosque",
          "place_of_worship",
          "point_of_interest",
          "establishment"
        ]
      }
    ]
  },
  {
    name: "La Perouse Public School",
    formattedAddress: "Yarra Rd, La Perouse NSW 2036, Australia",
    found: true,
    electorate: "Maroubra",
    address: "Yarra Road",
    suburb: "LA PEROUSE",
    state: "NSW",
    postcode: "2036",
    placeId: "ChIJf9CGQQC0EmsRLrAmLiH1kbg",
    lat: -33.9794743,
    lng: 151.2353708
  },
  {
    name: "LaSalle Catholic College",
    formattedAddress: "544 Chapel Rd, Bankstown NSW 2200, Australia",
    found: true,
    electorate: "Bankstown",
    address: "544 Chapel Rd",
    suburb: "BANKSTOWN",
    state: "NSW",
    postcode: "2200",
    placeId: "ChIJcc3bfA28EmsRWh2ql79VWQY",
    lat: -33.9084922,
    lng: 151.0351844
  },
  {
    name: "Lambton High School",
    formattedAddress: "15 Young Rd, Lambton NSW 2299, Australia",
    found: true,
    electorate: "Newcastle",
    address: "Womboin & Young Rds",
    suburb: "LAMBTON",
    state: "NSW",
    postcode: "2299",
    placeId: "ChIJ5xd1AJoVc2sR1Rr1AdUq7lA",
    lat: -32.9180077,
    lng: 151.7221227
  },
  {
    name: "Lambton Public School, Croudace St",
    formattedAddress: "Lambton NSW 2299, Australia",
    found: true,
    electorate: "Wallsend",
    address: "Croudace St",
    suburb: "LAMBTON",
    state: "NSW",
    postcode: "2304",
    placeId: "ChIJy-COIoYVc2sRxtTUGS82z2c",
    lat: -32.9109999,
    lng: 151.7048909
  },
  {
    name: "Lane Cove Public School",
    formattedAddress: "145-153 Longueville Rd, Lane Cove NSW 2066, Australia",
    found: true,
    electorate: "Lane Cove",
    address: "Austin St & Longueville Roads",
    suburb: "LANE COVE",
    state: "NSW",
    postcode: "2066",
    placeId: "ChIJ9x9QeRavEmsRpA3YS0-sX4o",
    lat: -33.8164662,
    lng: 151.1694719
  },
  {
    name: "Lansvale Public School",
    formattedAddress: "37 - 45 Chancery St, Canley Vale NSW 2166, Australia",
    found: true,
    electorate: "Cabramatta",
    address: "Chancery Street",
    suburb: "CANLEY VALE",
    state: "NSW",
    postcode: "2166",
    placeId: "ChIJNdMLjh2WEmsRqTUJxhl1PfY",
    lat: -33.8916589,
    lng: 150.9535235
  },
  {
    name: "Sydney Latvian Society",
    formattedAddress: "32 Parnell St, Strathfield NSW 2135, Australia",
    found: true,
    electorate: "Strathfield",
    address: "32 Parnell Street",
    suburb: "STRATHFIELD",
    state: "NSW",
    postcode: "2135",
    placeId: "ChIJ7VOJi9i6EmsRIL98b-Q-rZ8",
    lat: -33.8732516,
    lng: 151.0948018
  },
  {
    name: "Leppington Public School",
    formattedAddress: "144 Rickard Rd, Leppington NSW 2179, Australia",
    found: true,
    electorate: "Camden",
    address: "Rickard Road",
    suburb: "LEPPINGTON",
    state: "NSW",
    postcode: "2171",
    placeId: "ChIJ6y8lvyjtEmsRSEY6EjfZEnc",
    lat: -33.9592982,
    lng: 150.8100423
  },
  {
    name: "Leumeah High School",
    formattedAddress: "45 Junction Rd, Leumeah NSW 2560, Australia",
    found: true,
    electorate: "Macquarie Fields",
    address: "Junction Road",
    suburb: "LEUMEAH",
    state: "NSW",
    postcode: "2560",
    placeId: "ChIJ5WHAW7ruEmsRfcr1gpytusQ",
    lat: -34.0539948,
    lng: 150.8472769
  },
  {
    name: "Lewisham Public School",
    formattedAddress: "49 The Boulevarde, Lewisham NSW 2049, Australia",
    found: true,
    electorate: "Summer Hill",
    address: "The Boulevard",
    suburb: "LEWISHAM",
    state: "NSW",
    postcode: "2049",
    placeId: "ChIJN9g2CnSwEmsR_BZUZgEXgXQ",
    lat: -33.8978366,
    lng: 151.1460346
  },
  {
    name: "Lidcombe Public School",
    formattedAddress: "Mills St, Lidcombe NSW 2141, Australia",
    found: true,
    electorate: "Auburn",
    address: "John Street",
    suburb: "LIDCOMBE",
    state: "NSW",
    postcode: "2141",
    placeId: "ChIJeTw3gKe8EmsR6fn7noPBvqY",
    lat: -33.8606905,
    lng: 151.047625
  },
  {
    name: "Lindfield Public School",
    formattedAddress: "218 Pacific Hwy, Lindfield NSW 2070, Australia",
    found: true,
    electorate: "Ku-ring-gai",
    address: "Pacific Highway",
    suburb: "LINDFIELD",
    state: "NSW",
    postcode: "2070",
    placeId: "ChIJt3Je4sOoEmsR0Q-_ScfxgLM",
    lat: -33.7809803,
    lng: 151.1692411
  },
  {
    name: "Lindsay Park Public School (LPPS)",
    formattedAddress: "Thames St, Wollongong NSW 2500, Australia",
    found: true,
    electorate: "Keira",
    address: "Thames Street",
    suburb: "WOLLONGONG",
    state: "NSW",
    postcode: "2500",
    placeId: "ChIJY5nQlYoZE2sRp5MpjGRkpt4",
    lat: -34.430292,
    lng: 150.862041
  },
  {
    name: "Lugarno Public School",
    formattedAddress: "38 Old Forest Rd, Lugarno NSW 2210, Australia",
    found: true,
    electorate: "Oatley",
    address: "Old Forest Road",
    suburb: "LUGARNO",
    state: "NSW",
    postcode: "2210",
    placeId: "ChIJk4ixgTS_EmsRs96hIgqUuGU",
    lat: -33.9848231,
    lng: 151.0445882
  },
  {
    name: "Lurnea Public School",
    formattedAddress: "Reilly St & West Street, Lurnea NSW 2170, Australia",
    found: true,
    electorate: "Holsworthy",
    address: "Reilly Street",
    suburb: "LURNEA",
    state: "NSW",
    postcode: "2170",
    placeId: "ChIJY6gsNvaUEmsRAPJQEaqEmSI",
    lat: -33.9319075,
    lng: 150.8931023
  },
  {
    name: "Macedonia Park",
    formattedAddress: "Hooka Creek Rd, Berkeley NSW 2506, Australia",
    found: true,
    electorate: "Wollongong",
    address: "Hooka Creek Road",
    suburb: "BERKELEY",
    state: "NSW",
    postcode: "2506",
    placeId: "ChIJL-LhbOYQE2sRPDFWVTXSJZs",
    lat: -34.4760062,
    lng: 150.8323694
  },
  {
    name: "Macquarie Fields Public School",
    formattedAddress: "35 Fields Rd, Macquarie Fields NSW 2564, Australia",
    found: true,
    electorate: "Macquarie Fields",
    address: "Field Road",
    suburb: "MACQUARIE FIELDS",
    state: "NSW",
    postcode: "2564",
    placeId: "ChIJXct7fGvrEmsRQHO_TjQyjSU",
    lat: -33.9954868,
    lng: 150.8821991
  },
  {
    name: "Maitland High School",
    formattedAddress: "32 High St, East Maitland NSW 2323, Australia",
    found: true,
    electorate: "Maitland",
    address: "High Street",
    suburb: "MAITLAND EAST",
    state: "NSW",
    postcode: "2323",
    placeId: "ChIJT2wb1qZGc2sR89zT7K478M8",
    lat: -32.7473742,
    lng: 151.5973272
  },
  {
    name: "Blacktown Migrant Resource Centre",
    formattedAddress: "125 Main St, Blacktown NSW 2148, Australia",
    found: true,
    electorate: "Liverpool",
    address: "70 Moore Street",
    suburb: "LIVERPOOOL",
    state: "NSW",
    postcode: "2170",
    placeId: "ChIJ2Q21Xf-YEmsRtNzys9cZUwE",
    lat: -33.7729754,
    lng: 150.9131452,
    query:
      "Mandaean Resource Centre - Liverpool, 70 Moore Street, LIVERPOOOL, NSW, 2170",
    multipleResults: 2,
    results: [
      {
        formatted_address: "125 Main St, Blacktown NSW 2148, Australia",
        geometry: {
          location: { lat: -33.7729754, lng: 150.9131452 },
          viewport: {
            northeast: { lat: -33.77153702010727, lng: 150.9145636298927 },
            southwest: { lat: -33.77423667989272, lng: 150.9118639701072 }
          }
        },
        icon:
          "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        id: "666a03f1c2013375d1e2d099a3ea7fab9ca3e84b",
        name: "Blacktown Migrant Resource Centre",
        place_id: "ChIJ2Q21Xf-YEmsRtNzys9cZUwE",
        reference:
          "CmRbAAAAxqNWYZnMwDpW7un0nrooeQY3uexmB7ZVo7MXcK688QNh2KAw8niwgxnHUYST1dnpICa9tWyd_N-IJEL7QboLwUBzQFI5uITkVLIH9H49i8pD3oG1BVM_jeUArX89CUPpEhDheRGyCagxBm5p1Y05F9QhGhSsui19FiAZxnAq5uFNxUAofGfznw",
        types: ["point_of_interest", "establishment"]
      },
      {
        formatted_address: "70 Terminus St, Liverpool NSW 2170, Australia",
        geometry: {
          location: { lat: -33.926249, lng: 150.923347 },
          viewport: {
            northeast: { lat: -33.92480382010728, lng: 150.9246471298927 },
            southwest: { lat: -33.92750347989272, lng: 150.9219474701073 }
          }
        },
        icon:
          "https://maps.gstatic.com/mapfiles/place_api/icons/generic_business-71.png",
        id: "e2e9ec840c25c2005705b001e5450e869b52f606",
        name: "The Sabian Mandaean Association and Mandaean Resource Centre",
        photos: [
          {
            height: 618,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/107333991678465895003/photos">A Google User</a>'
            ],
            photo_reference:
              "CmRaAAAA8sBompOOa6oT35i7CZCQjRa7cSAtYLFHzL2mgU1o4BYhrBoi--Z5cqeYJsIqCpVD960Ghx2w5LUVBotuPrMfa8HDdFQVb_vHAX933idbw2lefFsLnEg-dLExaJWByO6eEhCdZyxz1bYLVob0jlcBvjKUGhSnFlpN8pgsSuajN3QJiCZ_pWr5kw",
            width: 960
          }
        ],
        place_id: "ChIJ2-WmDLuVEmsR18mP3rjGhH0",
        reference:
          "CmRbAAAAunilV94mFL_UBxi7qkApitzeFh3Wzh7clHrStmFLiB3sfqgu5bgPLWxKVIQ4dW4A47oEDm4psHGZe0DQUc5Wbk9J03HxBeB6IdjdZoRHp9NjppdPAObDl6MtnSsYtVuYEhDSAeqEfgx3_jKxHc6d5egQGhSwzN7jcrjMJB8Ui_HDpk9P6uMS4g",
        types: ["place_of_worship", "point_of_interest", "establishment"]
      }
    ]
  },
  {
    name: "Manly Vale Public School",
    formattedAddress: "77 Sunshine St, Manly Vale NSW 2093, Australia",
    found: true,
    electorate: "Manly",
    address: "Sunshine Street",
    suburb: "MANLY VALE",
    state: "NSW",
    postcode: "2093",
    placeId: "ChIJ22KXl7OrEmsROHltbF-JZnE",
    lat: -33.7837338,
    lng: 151.2603559
  },
  {
    name: "Manly Village Public School",
    formattedAddress: "Darley Rd, Manly NSW 2095, Australia",
    found: true,
    electorate: "Manly",
    address: "Darley Road",
    suburb: "MANLY",
    state: "NSW",
    postcode: "2095",
    placeId: "ChIJe6x52Q6rEmsRu2ujTUviNu8",
    lat: -33.7992015,
    lng: 151.2869546
  },
  {
    name: "Manly West Public School",
    formattedAddress: "Griffiths St, Balgowlah NSW 2093, Australia",
    found: true,
    electorate: "Manly",
    address: "Griffith Street",
    suburb: "BALGOWLAH",
    state: "NSW",
    postcode: "2093",
    placeId: "ChIJVU_HYLqrEmsRfAipp5Qi7vU",
    lat: -33.7921853,
    lng: 151.2687414
  },
  {
    name: "Marayong Heights Public School",
    formattedAddress: "4A Guerie St, Marayong NSW 2148, Australia",
    found: true,
    electorate: "Blacktown",
    address: "Shedworth Street",
    suburb: "MARAYONG",
    state: "NSW",
    postcode: "2148",
    placeId: "ChIJ5Qm1RCOZEmsRgZ_Gza08mgY",
    lat: -33.7420874,
    lng: 150.897083
  },
  {
    name: "Marayong South Primary School",
    formattedAddress: "64 McClean St, Blacktown NSW 2148, Australia",
    found: true,
    electorate: "Blacktown",
    address: "McClean Street",
    suburb: "BLACKTOWN",
    state: "NSW",
    postcode: "2148",
    placeId: "ChIJcam8YwuZEmsRQSzAih3Om-I",
    lat: -33.76078270000001,
    lng: 150.8861505
  },
  {
    name: "Maroubra Bay Public School",
    formattedAddress: "Duncan St, Maroubra NSW 2035, Australia",
    found: true,
    electorate: "Maroubra",
    address: "Duncan Street",
    suburb: "MAROUBRA",
    state: "NSW",
    postcode: "2035",
    placeId: "ChIJ4Qp9jcqzEmsR_UNBY8Fps0c",
    lat: -33.9443227,
    lng: 151.2530518
  },
  {
    name: "Marrickville High School",
    formattedAddress: "Northcote St, Marrickville NSW 2204, Australia",
    found: true,
    electorate: "Summer Hill",
    address: "Northcote Street",
    suburb: "MARRICKVILLE",
    state: "NSW",
    postcode: "2204",
    placeId: "ChIJxR4sy3-wEmsRe8fvOcyyZ2o",
    lat: -33.9056344,
    lng: 151.1560957
  },
  {
    name: "Marrickville West Primary School",
    formattedAddress: "3 Beauchamp St, Marrickville NSW 2204, Australia",
    found: true,
    electorate: "Summer Hill",
    address: "Livingstone Road",
    suburb: "MARRICKVILLE",
    state: "NSW",
    postcode: "2204",
    placeId: "ChIJ7w86u4CwEmsREv7B0zujepE",
    lat: -33.9138769,
    lng: 151.1461323
  },
  {
    name: "Marsden High School",
    formattedAddress: "22a Winbourne St, West Ryde NSW 2114, Australia",
    found: true,
    electorate: "Ryde",
    address: "Winbourne Ave",
    suburb: "WEST RYDE",
    state: "NSW",
    postcode: "2114",
    placeId: "ChIJ3bHFbWikEmsRpbr30KJealg",
    lat: -33.8035561,
    lng: 151.0698068
  },
  {
    name: "Marsden Road Public School",
    formattedAddress: "Marsden Rd, Liverpool NSW 2170, Australia",
    found: true,
    electorate: "Liverpool",
    address: "Marsden Road",
    suburb: "LIVERPOOL",
    state: "NSW",
    postcode: "2170",
    placeId: "ChIJ_fXP-8mVEmsRgyvau3fJcww",
    lat: -33.9166948,
    lng: 150.9134147
  },
  {
    name: "Martin Luther Kirche",
    formattedAddress: "90B Goulburn St, Sydney NSW 2000, Australia",
    found: true,
    electorate: "Sydney",
    address: "96 Goulburn Street",
    suburb: "SYDNEY",
    state: "NSW",
    postcode: "2000",
    placeId: "ChIJAcxcWj2uEmsR-7Bq1gW2Tto",
    lat: -33.8782537,
    lng: 151.2096534
  },
  {
    name: "Mascot Public School",
    formattedAddress: "207 King St, Mascot NSW 2020, Australia",
    found: true,
    electorate: "Heffron",
    address: "King Street",
    suburb: "MASCOT",
    state: "NSW",
    postcode: "2020",
    placeId: "ChIJicT57waxEmsROLPKZcyZYtA",
    lat: -33.9287808,
    lng: 151.1946695
  },
  {
    name: "Matraville Public School",
    formattedAddress: "310 Bunnerong Rd, Matraville NSW 2036, Australia",
    found: true,
    electorate: "Maroubra",
    address: "Bunnerong & Beauchamp Rds",
    suburb: "MATRAVILLE",
    state: "NSW",
    postcode: "2036",
    placeId: "ChIJA_lz_OGzEmsRctaHwprKI70",
    lat: -33.9550863,
    lng: 151.2294834
  },
  {
    name: "Matthew Pearce Public School",
    formattedAddress: "4G Astoria Park Rd, Baulkham Hills NSW 2153, Australia",
    found: true,
    electorate: "Baulkham Hills",
    address: "Astoria Park Road",
    suburb: "BAULKHAM HILLS",
    state: "NSW",
    postcode: "2153",
    placeId: "ChIJLZBh_A6iEmsRCzAQmreLYBI",
    lat: -33.7583711,
    lng: 150.9634567
  },
  {
    name: "Mayfield West Public School",
    formattedAddress: "7 Gregson Ave, Mayfield NSW 2304, Australia",
    found: true,
    electorate: "Newcastle",
    address: "Gregson Avenue",
    suburb: "MAYFIELD",
    state: "NSW",
    postcode: "2304",
    placeId: "ChIJ9U4qvRUVc2sRjgP8s6_cw1o",
    lat: -32.8886472,
    lng: 151.7296617
  },
  {
    name: "McCallums Hill Public School",
    formattedAddress: "McCallum St, Roselands NSW 2196, Australia",
    found: true,
    electorate: "Canterbury",
    address: "McCallum Street",
    suburb: "ROSELANDS",
    state: "NSW",
    postcode: "2196",
    placeId: "ChIJ8Sja2dC7EmsRoyPA7IjrRcs",
    lat: -33.9349129,
    lng: 151.0847998
  },
  {
    name: "The Meadows Public School",
    formattedAddress: "2C Fuller St, Seven Hills NSW 2147, Australia",
    found: true,
    electorate: "Seven Hills",
    address: "Fuller Street",
    suburb: "SEVEN HILLS",
    state: "NSW",
    postcode: "2147",
    placeId: "ChIJESBkb32YEmsRGMaLlvvG0o8",
    lat: -33.7812894,
    lng: 150.9425521
  },
  {
    name: "Mercy College",
    formattedAddress:
      "Mercy College, 101 Archer St, Chatswood NSW 2067, Australia",
    found: true,
    electorate: "Willoughby",
    address: "101 Archer Street",
    suburb: "CHATSWOOD",
    state: "NSW",
    postcode: "2067",
    placeId: "ChIJa0ADTdaoEmsRZQGz_JGIRks",
    lat: -33.7934265,
    lng: 151.1848214
  },
  {
    name: "Merewether High School",
    formattedAddress: "130 Chatham St, Broadmeadow NSW 2292, Australia",
    found: true,
    electorate: "Newcastle",
    address: "Chatham Road",
    suburb: "BROADMEADOW",
    state: "NSW",
    postcode: "2292",
    placeId: "ChIJkU127rcVc2sRIQFtDEGp-lY",
    lat: -32.929166,
    lng: 151.7353006
  },
  {
    name: "Merrylands High School",
    formattedAddress: "Bristol St, Sydney NSW 2160, Australia",
    found: true,
    electorate: "Fairfield",
    address: "Bristol St",
    suburb: "GUILDFORD",
    state: "NSW",
    postcode: "2160",
    placeId: "ChIJ-6NyPUS9EmsRrv0aaXeM33E",
    lat: -33.8401539,
    lng: 150.9672647
  },
  {
    name: "Merrylands Public School",
    formattedAddress: "Fowler Rd, Merrylands NSW 2160, Australia",
    found: true,
    electorate: "Granville",
    address: "Fowler Road",
    suburb: "MERRYLANDS",
    state: "NSW",
    postcode: "2160",
    placeId: "ChIJl--ccki9EmsRxSWOPSX_C4E",
    lat: -33.8410191,
    lng: 150.9754596
  },
  {
    name: "Metella Road Public School",
    formattedAddress: "117-131 Metella Rd, Toongabbie NSW 2146, Australia",
    found: true,
    electorate: "Prospect",
    address: "Metella Road",
    suburb: "TOONGABBIE",
    state: "NSW",
    postcode: "2146",
    placeId: "ChIJ0xuI_2uYEmsRhje9lW2VnjU",
    lat: -33.7941168,
    lng: 150.9352794
  },
  {
    name: "Miller Public School",
    formattedAddress: "3 Shropshire St, Miller NSW 2168, Australia",
    found: true,
    electorate: "Liverpool",
    address: "Shropshire Street",
    suburb: "MILLER",
    state: "NSW",
    postcode: "2168",
    placeId: "ChIJ-zjzvmaUEmsRDwHiGrV-Je0",
    lat: -33.9216766,
    lng: 150.8770896
  },
  {
    name: "Minto Public School",
    formattedAddress: "Pembroke Rd, Minto NSW 2566, Australia",
    found: true,
    electorate: "Macquarie Fields",
    address: "Pembroke & Redfern Rds",
    suburb: "MINTO",
    state: "NSW",
    postcode: "2566",
    placeId: "ChIJFZ4rMRDsEmsRpqqQH9pV5QE",
    lat: -34.0297689,
    lng: 150.8473622
  },
  {
    name: "Sikh Mission Centre",
    formattedAddress: "170 Ninth Ave, Austral NSW 2179, Australia",
    found: true,
    electorate: "Macquarie Fields",
    address: "170 Ninth Avenue",
    suburb: "AUSTRAL",
    state: "NSW",
    postcode: "2171",
    placeId: "ChIJ62GwKtuSEmsRt90RV-Jgr6k",
    lat: -33.935563,
    lng: 150.802836
  },
  {
    name: "Mona Vale Public School",
    formattedAddress: "2 Waratah St, Mona Vale NSW 2103, Australia",
    found: true,
    electorate: "Pittwater",
    address: "Waratah Street",
    suburb: "MONA VALE",
    state: "NSW",
    postcode: "2103",
    placeId: "ChIJpRTk_ZdUDWsRmGS3uAxIZTk",
    lat: -33.6771195,
    lng: 151.3008414
  },
  {
    name: "Moorefield Girls High School",
    formattedAddress: "Kogarah NSW 2217, Australia",
    found: true,
    electorate: "Rockdale",
    address: "Princes Highway",
    suburb: "KOGARAH",
    state: "NSW",
    postcode: "2217",
    placeId: "ChIJhVCVsOO5EmsR3k-QrsSvIVM",
    lat: -33.9686643,
    lng: 151.136603
  },
  {
    name: "Mortdale Public School",
    formattedAddress: "Coleborne Ave, Mortdale NSW 2223, Australia",
    found: true,
    electorate: "Oatley",
    address: "Coleborne Avenue",
    suburb: "MORTDALE",
    state: "NSW",
    postcode: "2223",
    placeId: "ChIJE8fVOhu5EmsRAUFakHsbZqw",
    lat: -33.972195,
    lng: 151.0811707
  },
  {
    name: "AL Sadiq College",
    formattedAddress: "178 Cooper Rd, Yagoona NSW 2199, Australia",
    found: true,
    electorate: "Bankstown",
    address: "178 Cooper Road",
    suburb: "YAGOONA",
    state: "NSW",
    postcode: "2199",
    placeId: "ChIJK8snmBW8EmsRtAud4C6H7nA",
    lat: -33.90666849999999,
    lng: 151.025333
  },
  {
    name: "Mount Colah Public School",
    formattedAddress: "19 Telopea St, Mount Colah NSW 2079, Australia",
    found: true,
    electorate: "Hornsby",
    address: "Telopea Street",
    suburb: "MOUNT COLAH",
    state: "NSW",
    postcode: "2079",
    placeId: "ChIJi-tF-TdYDWsR8UQkD5fs4Sk",
    lat: -33.6728383,
    lng: 151.115522
  },
  {
    name: "Mount Druitt Public School",
    formattedAddress: "51 Belmore Ave, Mount Druitt NSW 2770, Australia",
    found: true,
    electorate: "Londonderry",
    address: "51 Belmore Avenue",
    suburb: "MOUNT DRUITT",
    state: "NSW",
    postcode: "2770",
    placeId: "ChIJ4zO4pPWaEmsRyJN_8ZqO3Aw",
    lat: -33.763982,
    lng: 150.8124431
  },
  {
    name: "Mount Pritchard Public School",
    formattedAddress: "104 Meadows Rd, Mount Pritchard NSW 2170, Australia",
    found: true,
    electorate: "Cabramatta",
    address: "Meadows Road",
    suburb: "MOUNT PRITCHARD",
    state: "NSW",
    postcode: "2170",
    placeId: "ChIJLySJQS6UEmsRAHFoCXWYPAE",
    lat: -33.900196,
    lng: 150.8989239
  },
  {
    name: "Muhammadi Welfare Association of Australia",
    formattedAddress: "419 Blaxcell St, South Granville NSW 2142, Australia",
    found: true,
    electorate: "Granville",
    address: "419 Blaxcell Street",
    suburb: "GRANVILLE",
    state: "NSW",
    postcode: "2142",
    placeId: "ChIJYY4dq-a8EmsRrqfhrcXXEFU",
    lat: -33.8628655,
    lng: 151.0065518
  },
  {
    name: "Muirfield High School",
    formattedAddress: "Barclay Rd, North Rocks NSW 2151, Australia",
    found: true,
    electorate: "Baulkham Hills",
    address: "Barclay Road",
    suburb: "NORTH ROCKS",
    state: "NSW",
    postcode: "2150",
    placeId: "ChIJv89RkNujEmsRs48l1k9Fu8I",
    lat: -33.7644444,
    lng: 151.0222222
  },
  {
    name: "Mulwaree High School",
    formattedAddress: "40 McDermott Dr, Goulburn NSW 2580, Australia",
    found: true,
    electorate: "Goulburn",
    address: "40 McDermott Drive",
    suburb: "GOULBURN",
    state: "NSW",
    postcode: "2580",
    placeId: "ChIJTWHZgb6uFmsRHAnwed2WMAI",
    lat: -34.730263,
    lng: 149.7287769
  },
  {
    query:
      "NCTA Turkish Language and Culture School, 295 Clyde St, GRANVILLE SOUTH, NSW, 2142",
    found: false
  },
  {
    name: "Nabi Akram Islamic Centre",
    formattedAddress: "37 Cowper St, Granville NSW 2142, Australia",
    found: true,
    electorate: "Granville",
    address: "36 Cowper Street",
    suburb: "GRANVILLE",
    state: "NSW",
    postcode: "2142",
    placeId: "ChIJSbBhxTGjEmsR1pbM-uLWE7k",
    lat: -33.8317709,
    lng: 151.0134511
  },
  {
    name: "Fo Guang Shan Nan Tien Temple Parramatta",
    formattedAddress: "22 Cowper St, Parramatta NSW 2150, Australia",
    found: true,
    electorate: "Parramatta",
    address: "22 Cowper Street",
    suburb: "PARRAMATTA",
    state: "NSW",
    postcode: "2150",
    placeId: "ChIJu9Du3SOjEmsR2BI7hjt5pQI",
    lat: -33.8209476,
    lng: 151.0069104
  },
  {
    name: "Naremburn School",
    formattedAddress: "250 Willoughby Rd, Naremburn NSW 2065, Australia",
    found: true,
    electorate: "Willoughby",
    address: "250 Willoughby Road",
    suburb: "NAREMBURN",
    state: "NSW",
    postcode: "2065",
    placeId: "ChIJjU5kksSuEmsRGMatz3wc7cU",
    lat: -33.8194563,
    lng: 151.200688
  },
  {
    name: "Neutral Bay Public School",
    formattedAddress: "Ben Boyd Rd, Neutral Bay NSW 2089, Australia",
    found: true,
    electorate: "North Shore",
    address: "Ben Boyd Road",
    suburb: "NEUTRAL BAY",
    state: "NSW",
    postcode: "2086",
    placeId: "ChIJQ0ZgtJeuEmsRKMKE6kurYQ0",
    lat: -33.8321208,
    lng: 151.2200153
  },
  {
    name: "New Lambton South Primary",
    formattedAddress: "St James Rd, New Lambton NSW 2305, Australia",
    found: true,
    electorate: "Charlestown",
    address: "St James Road",
    suburb: "NEW LAMBTON",
    state: "NSW",
    postcode: "2305",
    placeId: "ChIJMRSgyO4Vc2sRS32d5lgTxwk",
    lat: -32.9315364,
    lng: 151.7173514
  },
  {
    name: "Newcastle High School",
    formattedAddress: "160/200 Parkway Ave, Hamilton South NSW 2303, Australia",
    found: true,
    electorate: "Newcastle",
    address: "Park Way Avenue",
    suburb: "HAMILTON",
    state: "NSW",
    postcode: "2303",
    placeId: "ChIJ2xKVYEgUc2sRcY3r-UvLk3M",
    lat: -32.9317375,
    lng: 151.7583019
  },
  {
    name: "Sikh temple",
    formattedAddress: "27 Marton St, Shortland NSW 2307, Australia",
    found: true,
    electorate: "Wallsend",
    address: "27 Marton Street",
    suburb: "SHORTLAND",
    state: "NSW",
    postcode: "2307",
    placeId: "ChIJxUZOy90_c2sR7vetQwr2vDA",
    lat: -32.88021,
    lng: 151.693571
  },
  {
    name: "Newington College",
    formattedAddress: "200 Stanmore Rd, Stanmore NSW 2048, Australia",
    found: true,
    electorate: "Newtown",
    address: "200 Stanmore Road",
    suburb: "STANMORE",
    state: "NSW",
    postcode: "2048",
    placeId: "ChIJV0dc4T-wEmsR5_QZ-wviyzE",
    lat: -33.8980016,
    lng: 151.1631472
  },
  {
    name: "Newington Public School",
    formattedAddress: "Newington Blvd, Newington NSW 2127, Australia",
    found: true,
    electorate: "Auburn",
    address: "Newington Boulevarde",
    suburb: "NEWINGTON",
    state: "NSW",
    postcode: "2127",
    placeId: "ChIJ2Uh9QK-kEmsRIebF6AlGC7k",
    lat: -33.8406853,
    lng: 151.0542289
  },
  {
    name: "Normanhurst Boys High School",
    formattedAddress:
      "Pennant Hills Rd & Fraser Rd, Normanhurst NSW 2076, Australia",
    found: true,
    electorate: "Ku-ring-gai",
    address: "Pennant Hills Road",
    suburb: "NORMANHURST",
    state: "NSW",
    postcode: "2076",
    placeId: "ChIJb309_aanEmsRD6x0xiebdcs",
    lat: -33.7214356,
    lng: 151.1013763
  },
  {
    name: "North Ryde Public School",
    formattedAddress: "154 Coxs Rd, North Ryde NSW 2113, Australia",
    found: true,
    electorate: "Ryde",
    address: "Coxs Road",
    suburb: "NORTH RYDE",
    state: "NSW",
    postcode: "2113",
    placeId: "ChIJ9-_f1fGlEmsRqb7IEFDPM9s",
    lat: -33.7946431,
    lng: 151.1202949
  },
  {
    name: "North Sydney Demonstration School",
    formattedAddress: "Bay Rd, Waverton NSW 2060, Australia",
    found: true,
    electorate: "North Shore",
    address: "Bay Road",
    suburb: "NORTH SYDNEY",
    state: "NSW",
    postcode: "2060",
    placeId: "ChIJHapqbPCuEmsR6PoFbRTeMG4",
    lat: -33.8348983,
    lng: 151.203824
  },
  {
    name: "Northern Beaches Secondary College Balgowlah Boys Campus",
    formattedAddress: "27 Maretimo St, Balgowlah NSW 2093, Australia",
    found: true,
    electorate: "Manly",
    address: "Maretimo Street",
    suburb: "BALGOWLAH",
    state: "NSW",
    postcode: "2093",
    placeId: "ChIJAZyAPMCrEmsRVSrVYuDD4WU",
    lat: -33.7965867,
    lng: 151.2546197
  },
  {
    name: "NBSC Mackellar Girls Campus",
    formattedAddress: "11 Campbell Parade, Manly Vale NSW 2093, Australia",
    found: true,
    electorate: "Manly",
    address: "Campbell Parade",
    suburb: "MANLY VALE",
    state: "NSW",
    postcode: "2093",
    placeId: "ChIJUy_PSU2qEmsR6_NXuNAaVGk",
    lat: -33.7819973,
    lng: 151.272179
  },
  {
    name: "Northmead Creative and Performing Arts High School",
    formattedAddress: "28 Campbell St, Northmead NSW 2152, Australia",
    found: true,
    electorate: "Seven Hills",
    address: "Campbell Street",
    suburb: "NORTHMEAD",
    state: "NSW",
    postcode: "2152",
    placeId: "ChIJT44nf1OiEmsRMQMnWEb2-dc",
    lat: -33.7888756,
    lng: 150.9999598
  },
  {
    name: "Nuwarra Public School",
    formattedAddress: "McKay Ave, Moorebank NSW 2170, Australia",
    found: true,
    electorate: "Holsworthy",
    address: "McKay Avenue",
    suburb: "MOOREBANK",
    state: "NSW",
    postcode: "2170",
    placeId: "ChIJS4lCU4iVEmsRl3YKS-ZXIoI",
    lat: -33.9332414,
    lng: 150.951494
  },
  {
    name: "Old Guildford Public School",
    formattedAddress: "646 Woodville Rd, Old Guildford NSW 2161, Australia",
    found: true,
    electorate: "Fairfield",
    address: "Woodville Road",
    suburb: "GUILDFORD",
    state: "NSW",
    postcode: "2161",
    placeId: "ChIJDblEzAi9EmsR73NdhGB8yJ4",
    lat: -33.867325,
    lng: 150.9865594
  },
  {
    query: "Online - La Perouse, 22 Goorawahl Ave, LA PEROUSE, NSW, 2036",
    found: false
  },
  {
    name: "Our Lady of Lebanon Co-Cathedral",
    formattedAddress: "40 Alice St, Harris Park NSW 2150, Australia",
    found: true,
    electorate: "Parramatta",
    address: "40 Alice Street",
    suburb: "HARRIS PARK",
    state: "NSW",
    postcode: "2150",
    placeId: "ChIJFcjPBz2jEmsRwME-QIJImaI",
    lat: -33.8202899,
    lng: 151.0148614
  },
  {
    name: "Our Lady of Lourdes Primary School",
    formattedAddress: "Oakland Ave, Baulkham Hills South NSW 2153, Australia",
    found: true,
    electorate: "Baulkham Hills",
    address: "Oakland Avenue",
    suburb: "BAULKHAM HILLS",
    state: "NSW",
    postcode: "2153",
    placeId: "ChIJ7ZjnlzKiEmsRAOMvS-3XiAI",
    lat: -33.7665079,
    lng: 150.9981543
  },
  {
    query:
      "Our Lady of Fatima Portuguese School, 127 Flagstaff Road, WARRAWONG, NSW, 2502",
    found: false
  },
  {
    name: "Panania Public School",
    formattedAddress: "23 Lawler St, Panania NSW 2213, Australia",
    found: true,
    electorate: "East Hills",
    address: "Lawler Street",
    suburb: "PANANIA",
    state: "NSW",
    postcode: "2213",
    placeId: "ChIJ68krfAe_EmsRDLHRFdC6fvs",
    lat: -33.9658475,
    lng: 151.0005087
  },
  {
    name: "Parramatta High School",
    formattedAddress: "Great Western Hwy, Parramatta NSW 2150, Australia",
    found: true,
    electorate: "Parramatta",
    address: "Great Western Road",
    suburb: "PARRAMATTA",
    state: "NSW",
    postcode: "2150",
    placeId: "ChIJR1plQ9-iEmsRa2fqhD3XjxY",
    lat: -33.817957,
    lng: 150.9961128
  },
  {
    name: "Parramatta North Public School",
    formattedAddress: "Albert St, North Parramatta NSW 2151, Australia",
    found: true,
    electorate: "Parramatta",
    address: "Albert Street",
    suburb: "NORTH PARRAMATTA",
    state: "NSW",
    postcode: "2150",
    placeId: "ChIJcS2uTASjEmsRYsFDKfopnQM",
    lat: -33.8040652,
    lng: 151.004566
  },
  {
    name: "Parramatta Public School",
    formattedAddress:
      "Parramatta Public School, 177 Macquarie St, Parramatta NSW 2150, Australia",
    found: true,
    electorate: "Parramatta",
    address: "Macquarie St",
    suburb: "PARRAMATTA",
    state: "NSW",
    postcode: "2150",
    placeId: "ChIJIZN-ah-jEmsR_XlYaG85aEo",
    lat: -33.8166134,
    lng: 151.008022
  },
  {
    name: "Parramatta West Public School",
    formattedAddress: "Young St, Parramatta NSW 2150, Australia",
    found: true,
    electorate: "Granville",
    address: "Cnr Auburn & Young Streets",
    suburb: "PARRAMATTA",
    state: "NSW",
    postcode: "2150",
    placeId: "ChIJLdwLaNCiEmsRYIblxGdp02g",
    lat: -33.824331,
    lng: 150.991014
  },
  {
    name: "Peakhurst Public School",
    formattedAddress: "65A Bonds Rd, Peakhurst NSW 2210, Australia",
    found: true,
    electorate: "Lakemba",
    address: "Bonds Road",
    suburb: "PEAKHURST",
    state: "NSW",
    postcode: "2210",
    placeId: "ChIJFWdvUTi5EmsRjJJL-zQKmv8",
    lat: -33.9554845,
    lng: 151.0625561
  },
  {
    name: "Peakhurst West Public School",
    formattedAddress: "Ogilvy St, Peakhurst NSW 2210, Australia",
    found: true,
    electorate: "Oatley",
    address: "Ogilvy Street",
    suburb: "PEAKHURST",
    state: "NSW",
    postcode: "2210",
    placeId: "ChIJM-hpcy25EmsRF3RsBqtqGD8",
    lat: -33.9626517,
    lng: 151.0500663
  },
  {
    name: "Pennant Hills High School",
    formattedAddress: "Laurence Street, Pennant Hills NSW 2120, Australia",
    found: true,
    electorate: "Hornsby",
    address: "Laurence Street",
    suburb: "PENNANT HILLS",
    state: "NSW",
    postcode: "2120",
    placeId: "ChIJtQO7b9mmEmsRehIMrzcxXCY",
    lat: -33.7334215,
    lng: 151.0625466
  },
  {
    name: "Penrith Public School",
    formattedAddress: "Cnr High St & Doonmore St, Penrith NSW 2750, Australia",
    found: true,
    electorate: "Penrith",
    address: "High Street",
    suburb: "PENRITH",
    state: "NSW",
    postcode: "2750",
    placeId: "ChIJ1RrVa4mFEmsR0dtW8RE8pcQ",
    lat: -33.7561729,
    lng: 150.7053825
  },
  {
    name: "Penshurst Public School",
    formattedAddress: "18 Arcadia St, Penshurst NSW 2222, Australia",
    found: true,
    electorate: "Oatley",
    address: "Arcadia Street",
    suburb: "PENSHURST",
    state: "NSW",
    postcode: "2222",
    placeId: "ChIJz2eIJ3O5EmsROeJX69FW71I",
    lat: -33.9625745,
    lng: 151.0876155
  },
  {
    name: "Petersham Primary School",
    formattedAddress: "25 Hunter St, Lewisham NSW 2049, Australia",
    found: true,
    electorate: "Summer Hill",
    address: "West Street",
    suburb: "PETERSHAM",
    state: "NSW",
    postcode: "2049",
    placeId: "ChIJ-digFQ2wEmsR1CJpVKIKdKU",
    lat: -33.89526290000001,
    lng: 151.1494828
  },
  {
    name: "Ch\u00f9a Ph\u00e1p B\u1ea3o",
    formattedAddress: "148 Edensor Rd, St Johns Park NSW 2176, Australia",
    found: true,
    electorate: "Cabramatta",
    address: "Phap Bao Pagoda,148-154 Edensor Road",
    suburb: "ST JOHNS PARK",
    state: "NSW",
    postcode: "2176",
    placeId: "ChIJwSjUwZuWEmsRJCHKXCEL32E",
    lat: -33.8834539,
    lng: 150.8908779
  },
  {
    name: "Ph\u01b0\u1edbc Hu\u1ec7 Temple",
    formattedAddress: "365 Victoria St, Wetherill Park NSW 2164, Australia",
    found: true,
    electorate: "Prospect",
    address: "365 Victoria Street",
    suburb: "WETHERILL PARK",
    state: "NSW",
    postcode: "2164",
    placeId: "ChIJMT-yMweXEmsR27PBCFZMbJ8",
    lat: -33.8470789,
    lng: 150.9054824
  },
  {
    name: "Plumpton House School",
    formattedAddress: "327 Rooty Hill Rd N, Plumpton NSW 2761, Australia",
    found: true,
    electorate: "Mount Druitt",
    address: "327 Rooty Hill Road",
    suburb: "NORTH PLUMPTON",
    state: "NSW",
    postcode: "2761",
    placeId: "ChIJKRgdtcubEmsRhLao1yPIIY8",
    lat: -33.7503123,
    lng: 150.8407657
  },
  {
    name: "Polish ASSCN Wollongong Inc.",
    formattedAddress: "143 Gipps Rd, Keiraville NSW 2500, Australia",
    found: true,
    electorate: "Wollongong",
    address: "143 Gipps Road",
    suburb: "GWYNNEVILLE",
    state: "NSW",
    postcode: "2500",
    placeId: "ChIJ142bAXYZE2sRkLVzb5g_IiY",
    lat: -34.4162118,
    lng: 150.8777008
  },
  {
    name: "Polish Association of Newcastle",
    formattedAddress: "122 Chatham St, Broadmeadow NSW 2292, Australia",
    found: true,
    electorate: "Newcastle",
    address: "122 Chatham Road",
    suburb: "BROADMEADOW",
    state: "NSW",
    postcode: "2292",
    placeId: "ChIJh2t-8bcVc2sR0VS1ZDjOj_E",
    lat: -32.928584,
    lng: 151.736173
  },
  {
    name: "Port Hacking High School",
    formattedAddress: "637 Kingsway, Miranda NSW 2228, Australia",
    found: true,
    electorate: "Miranda",
    address: "Kingsway",
    suburb: "MIRANDA",
    state: "NSW",
    postcode: "2228",
    placeId: "ChIJ_8KjEIXHEmsRt0V6nSm4qQg",
    lat: -34.0324806,
    lng: 151.097339
  },
  {
    name: "Prestons Public School",
    formattedAddress: "Kurrajong & Box Road, Prestons NSW 2170, Australia",
    found: true,
    electorate: "Holsworthy",
    address: "Kurrajong & Box Rds",
    suburb: "PRESTONS",
    state: "NSW",
    postcode: "2170",
    placeId: "ChIJY6gsNvaUEmsRGJp6N-TNCY8",
    lat: -33.9463293,
    lng: 150.8904235
  },
  {
    name: "Punchbowl Boys High School",
    formattedAddress: "Kelly St, Punchbowl NSW 2196, Australia",
    found: true,
    electorate: "Bankstown",
    address: "Kelly Street",
    suburb: "PUNCHBOWL",
    state: "NSW",
    postcode: "2196",
    placeId: "ChIJrVFRe_m7EmsRK-LQmxFZ7mA",
    lat: -33.9235115,
    lng: 151.0526436
  },
  {
    name: "Punchbowl Public School",
    formattedAddress: "1333 Canterbury Rd, Punchbowl NSW 2196, Australia",
    found: true,
    electorate: "Lakemba",
    address: "Canterbury Road",
    suburb: "PUNCHBOWL",
    state: "NSW",
    postcode: "2196",
    placeId: "ChIJs2mbs-K7EmsRHuFavsq-APE",
    lat: -33.9310002,
    lng: 151.0562869
  },
  {
    name: "Pymble Public School",
    formattedAddress: "Crown Road, Pymble NSW 2073, Australia",
    found: true,
    electorate: "Ku-ring-gai",
    address: "Rushall Street",
    suburb: "PYMBLE",
    state: "NSW",
    postcode: "2073",
    placeId: "ChIJIwK1PUqmEmsROsSB0xp9rhk",
    lat: -33.73188630000001,
    lng: 151.141279
  },
  {
    name: "Quakers Hill High School",
    formattedAddress: "70 Lalor Rd, Quakers Hill NSW 2763, Australia",
    found: true,
    electorate: "Riverstone",
    address: "Lalor Road",
    suburb: "QUAKERS HILL",
    state: "NSW",
    postcode: "2763",
    placeId: "ChIJ_2svZS2ZEmsRys473QHq_ro",
    lat: -33.7293712,
    lng: 150.896558
  },
  {
    name: "Queanbeyan High School",
    formattedAddress:
      "Surveyor St & Agnes Avenue, Queanbeyan NSW 2620, Australia",
    found: true,
    electorate: "Monaro",
    address: "Agnes Avenue",
    suburb: "QUEANBEYAN",
    state: "NSW",
    postcode: "2620",
    placeId: "ChIJ7SylUupOFmsRZkNqiCS7nOc",
    lat: -35.3534326,
    lng: 149.2212278
  },
  {
    name: "Queanbeyan Public School",
    formattedAddress: "Isabella St, Queanbeyan NSW 2620, Australia",
    found: true,
    electorate: "Monaro",
    address: "Isabella Street",
    suburb: "QUEANBEYAN",
    state: "NSW",
    postcode: "2620",
    placeId: "ChIJf1EMNedOFmsRk2DrijxEeqY",
    lat: -35.3575177,
    lng: 149.2359096
  },
  {
    name: "Rainbow Street Public School",
    formattedAddress: "90 Rainbow St, Randwick NSW 2031, Australia",
    found: true,
    electorate: "Coogee",
    address: "Rainbow Street",
    suburb: "RANDWICK",
    state: "NSW",
    postcode: "2031",
    placeId: "ChIJ72JCTiayEmsRfBmNv9oIm6w",
    lat: -33.9250535,
    lng: 151.2370221
  },
  {
    name: "Ramsgate Public School",
    formattedAddress: "Chuter Ave, Ramsgate Beach NSW 2217, Australia",
    found: true,
    electorate: "Rockdale",
    address: "Chuter Avenue",
    suburb: "RAMSGATE",
    state: "NSW",
    postcode: "2217",
    placeId: "ChIJgwC7w2O3EmsR1bG60JNdMvE",
    lat: -33.9820367,
    lng: 151.1440628
  },
  {
    name: "Randwick Boys' High School",
    formattedAddress: "Rainbow St & Avoca Street, Randwick NSW 2031, Australia",
    found: true,
    electorate: "Coogee",
    address: "Rainbow & Avoca Sts",
    suburb: "RANDWICK",
    state: "NSW",
    postcode: "2031",
    placeId: "ChIJ65WlZyayEmsRa3o-7QQ5rMs",
    lat: -33.9241829,
    lng: 151.2388016
  },
  {
    name: "Regents Park Public School",
    formattedAddress: "1 Auburn Rd, Regents Park NSW 2143, Australia",
    found: true,
    electorate: "Bankstown",
    address: "1 Auburn Road",
    suburb: "REGENTS PARK",
    state: "NSW",
    postcode: "2143",
    placeId: "ChIJZVkKGF68EmsRlJEwHTNhgbc",
    lat: -33.8855988,
    lng: 151.0235681
  },
  {
    name: "Revesby Public School",
    formattedAddress: "67 Victoria St, Revesby NSW 2212, Australia",
    found: true,
    electorate: "East Hills",
    address: "Victoria Street",
    suburb: "REVESBY",
    state: "NSW",
    postcode: "2212",
    placeId: "ChIJ9YgncOy-EmsRiuPJgkEO3Oo",
    lat: -33.9444758,
    lng: 151.0168434
  },
  {
    name: "Richard Johnson Anglican School - Oakhurst Campus",
    formattedAddress: "93 Hyatts Rd, Oakhurst NSW 2761, Australia",
    found: true,
    electorate: "Mount Druitt",
    address: "Hyatt Road",
    suburb: "OAKHURST",
    state: "NSW",
    postcode: "2761",
    placeId: "ChIJP4oLhLebEmsRxo2WNQThvL0",
    lat: -33.742757,
    lng: 150.835189
  },
  {
    name: "Ringrose Public School",
    formattedAddress: "Ringrose Ave, Greystanes NSW 2145, Australia",
    found: true,
    electorate: "Granville",
    address: "Ringrose Avenue",
    suburb: "WENTWORTHVILLE",
    state: "NSW",
    postcode: "2145",
    placeId: "ChIJsbrpN6uiEmsRgSefVsZKfWk",
    lat: -33.8201138,
    lng: 150.9594064
  },
  {
    name: "Riverside Girls High School",
    formattedAddress:
      "Riverside Girls High School, 2A Huntleys Point Rd, Huntleys Point NSW 2111, Australia",
    found: true,
    electorate: "Lane Cove",
    address: "Huntley's Point Road",
    suburb: "GLADESVILLE",
    state: "NSW",
    postcode: "2111",
    placeId: "ChIJ6WZxt4evEmsRsgTaKI5EJPc",
    lat: -33.8401053,
    lng: 151.1425708
  },
  {
    name: "Robert Townson High School",
    formattedAddress: "Thunderbolt Dr, Raby NSW 2566, Australia",
    found: true,
    electorate: "Macquarie Fields",
    address: "Shuttleworth Ave",
    suburb: "RABY",
    state: "NSW",
    postcode: "2560",
    placeId: "ChIJnUgk2TTsEmsRjdnI5U8m4Ew",
    lat: -34.0158895,
    lng: 150.8174327
  },
  {
    name: "Robert Townson Public School",
    formattedAddress: "Shuttleworth Ave, Raby NSW 2566, Australia",
    found: true,
    electorate: "Macquarie Fields",
    address: "Shuttleworth Avenue",
    suburb: "RABY",
    state: "NSW",
    postcode: "2566",
    placeId: "ChIJD4qM1zXsEmsRn6T8DiNiMTw",
    lat: -34.01650480000001,
    lng: 150.8176461
  },
  {
    name: "Rockdale Public School",
    formattedAddress: "Lord St, Rockdale NSW 2216, Australia",
    found: true,
    electorate: "Rockdale",
    address: "Lord Street",
    suburb: "ROCKDALE",
    state: "NSW",
    postcode: "2216",
    placeId: "ChIJv-gMlaqwEmsRzuekk-3Z_CY",
    lat: -33.9524336,
    lng: 151.141625
  },
  {
    name: "Rose Bay Public School",
    formattedAddress: "21 Wilberforce Ave, Rose Bay NSW 2029, Australia",
    found: true,
    electorate: "Vaucluse",
    address: "Albermarle Street",
    suburb: "ROSE BAY",
    state: "NSW",
    postcode: "2029",
    placeId: "ChIJcckVm6-tEmsRn5Kg9FY3-gs",
    lat: -33.8730033,
    lng: 151.2709715
  },
  {
    name: "Rosehill Public School",
    formattedAddress: "Prospect St, Rosehill NSW 2142, Australia",
    found: true,
    electorate: "Parramatta",
    address: "Prospect Street",
    suburb: "ROSEHILL",
    state: "NSW",
    postcode: "2142",
    placeId: "ChIJaQvdJN28EmsR47K9fJozQ20",
    lat: -33.8238693,
    lng: 151.0188802
  },
  {
    name: "Roselea Public School",
    formattedAddress: "549 N Rocks Rd, Carlingford NSW 2118, Australia",
    found: true,
    electorate: "Epping",
    address: "North Rocks Road",
    suburb: "CARLINGFORD",
    state: "NSW",
    postcode: "2118",
    placeId: "ChIJN1AUzKumEmsRU6X0b7TDCDY",
    lat: -33.7651811,
    lng: 151.0526917
  },
  {
    name: "Rouse Hill Public School",
    formattedAddress: "Clower Ave, Rouse Hill NSW 2155, Australia",
    found: true,
    electorate: "Castle Hill",
    address: "Clover Avenue",
    suburb: "ROUSE HILL",
    state: "NSW",
    postcode: "2155",
    placeId: "ChIJG_S0Q7qfEmsRh6hqTczyYmg",
    lat: -33.6790454,
    lng: 150.9209168
  },
  {
    name: "Rydalmere Public School",
    formattedAddress: "397 Victoria Rd, Rydalmere NSW 2116, Australia",
    found: true,
    electorate: "Parramatta",
    address: "Victoria Road",
    suburb: "RYDALMERE",
    state: "NSW",
    postcode: "2116",
    placeId: "ChIJQVYUBH2jEmsRERfxEwqPADA",
    lat: -33.8143238,
    lng: 151.0447367
  },
  {
    name: "Ryde Public School",
    formattedAddress: "Pope St, Ryde NSW 2112, Australia",
    found: true,
    electorate: "Ryde",
    address: "Pope Street",
    suburb: "RYDE",
    state: "NSW",
    postcode: "2112",
    placeId: "ChIJo7n2xbqlEmsRKHoi6SQt-Ac",
    lat: -33.8115848,
    lng: 151.1083978
  },
  {
    name: "Ryde Secondary College",
    formattedAddress: "5 Malvina St, Ryde NSW 2112, Australia",
    found: true,
    electorate: "Lane Cove",
    address: "5 Malvina St",
    suburb: "RYDE",
    state: "NSW",
    postcode: "2112",
    placeId: "ChIJuZRduZelEmsRtTpST3cOufI",
    lat: -33.8134938,
    lng: 151.1191015
  },
  {
    name: "Sydney Saesoon Presbyterian Church",
    formattedAddress: "219a N Rocks Rd, North Rocks NSW 2151, Australia",
    found: true,
    electorate: "Baulkham Hills",
    address: "219A North Rocks Road",
    suburb: "NORTH ROCKS",
    state: "NSW",
    postcode: "2151",
    placeId: "ChIJi6d8VsajEmsRpkiJY7z-bD4",
    lat: -33.7753684,
    lng: 151.0149571
  },
  {
    name: "Samuel Gilbert Public School",
    formattedAddress: "Ridgecrop Dr, Castle Hill NSW 2154, Australia",
    found: true,
    electorate: "Castle Hill",
    address: "Ridgecrop Drive",
    suburb: "CASTLE HILL",
    state: "NSW",
    postcode: "2154",
    placeId: "ChIJz0xIV6yhEmsRg-e4dSqGHCI",
    lat: -33.7136677,
    lng: 150.9926323
  },
  {
    name: "Sans Souci Public School",
    formattedAddress: "Rocky Point Rd, Sans Souci NSW 2219, Australia",
    found: true,
    electorate: "Rockdale",
    address: "Rock Point Road",
    suburb: "SANS SOUCI",
    state: "NSW",
    postcode: "2219",
    placeId: "ChIJFwARlS24EmsRRIkFEyHA890",
    lat: -33.9949847,
    lng: 151.1295784
  },
  {
    name: "Sefton High School",
    formattedAddress: "41-43 Hector St, Sefton NSW 2162, Australia",
    found: true,
    electorate: "Bankstown",
    address: "Munro & Hector Sts",
    suburb: "SEFTON",
    state: "NSW",
    postcode: "2162",
    placeId: "ChIJ22MALFa8EmsRFQNOYErFidg",
    lat: -33.8792907,
    lng: 151.0089315
  },
  {
    name: "Serbian Orthodox Church of St John the Baptist",
    formattedAddress: "82 Kenny St, Wollongong NSW 2500, Australia",
    found: true,
    electorate: "Wollongong",
    address: "82 Kenny Street",
    suburb: "WOLLONGONG",
    state: "NSW",
    postcode: "2500",
    placeId: "ChIJv8zikbsZE2sRMIzBQxa8x7g",
    lat: -34.432489,
    lng: 150.8908103,
    query: "Serbian Language School, 82 Kenny Street, WOLLONGONG, NSW, 2500",
    multipleResults: 2,
    results: [
      {
        formatted_address: "82 Kenny St, Wollongong NSW 2500, Australia",
        geometry: {
          location: { lat: -34.432489, lng: 150.8908103 },
          viewport: {
            northeast: { lat: -34.43115787010727, lng: 150.8923613798927 },
            southwest: { lat: -34.43385752989272, lng: 150.8896617201073 }
          }
        },
        icon:
          "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
        id: "82af797ae43f45f1efa6b2b0eb930f9db2bc970c",
        name: "Serbian Orthodox Church of St John the Baptist",
        photos: [
          {
            height: 5312,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/104944328407913398954/photos">A Google User</a>'
            ],
            photo_reference:
              "CmRaAAAA0yEd2xFPSos2G7ZZhF0ueQCvvvCi_TiFYRR2TfWZ2GhlzkF0dp3CfRm-XRknndjh_W7P9ZlbszmZd8ZGH9M3pWZRY6qlF25x5ZGUIgacOHUYxjoKZ2RE1Ts4QHTH1YxsEhBrHtwCm7J03TRXkgicbRmRGhTZXawiZDzQj5Qq_A2A2ou_HCwpiQ",
            width: 2988
          }
        ],
        place_id: "ChIJv8zikbsZE2sRMIzBQxa8x7g",
        rating: 5,
        reference:
          "CmRbAAAAGBesAhJOD5H52jAgLXykvQPLrK9RAxajc8wYapRFfEoA1aR1t-Vcbm_d88Kyf5x4iYFwxSnftp_PKSON8yHmcjeneIEAOrNnUm9GKoiUmTc8oHkWpBDAJ0yyo3nmwL1yEhCPP30efQHjSPaYFPTrTT8FGhT45xezyQzd-FDKcBHdIjtk75T0cA",
        types: [
          "church",
          "place_of_worship",
          "point_of_interest",
          "establishment"
        ]
      },
      {
        formatted_address: "1 Oxford St, Darlinghurst NSW 2010, Australia",
        geometry: {
          location: { lat: -33.8774261, lng: 151.212404 },
          viewport: {
            northeast: { lat: -33.87593912010728, lng: 151.2139028298927 },
            southwest: { lat: -33.87863877989273, lng: 151.2112031701073 }
          }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/school-71.png",
        id: "5a892477c3b68458be9925af651bb6c59807dd85",
        name: "Saturday School of Community Languages",
        place_id: "ChIJd_6i0MalEmsRg2AGFzWcqUk",
        rating: 3,
        reference:
          "CmRbAAAAXuLngtCFncwpdY-o0CdL6TqpawjuCWyyKBzzcnBkj63LfwkJZUZcPLyshB9olzGj18Ui074pCjkEHZi3-vDTtI9X8UQ7F5jn_YpplekLl8RAbvkbcgyxpMtPuib3LkqBEhCgjv2v0zJE8I77wZ4bhcdUGhRYHUgCMft8kw1um8tcSv16V-WQVA",
        types: ["point_of_interest", "establishment"]
      }
    ]
  },
  {
    name: "Seven Hills Public School",
    formattedAddress: "2A Lucas Rd, Seven Hills NSW 2147, Australia",
    found: true,
    electorate: "Blacktown",
    address: "Lucas Rd & Morris Street",
    suburb: "SEVEN HILLS",
    state: "NSW",
    postcode: "2147",
    placeId: "ChIJVWaqbI6YEmsRj1YoMbk2u3I",
    lat: -33.7704907,
    lng: 150.9384138
  },
  {
    name: "Seven Hills West Public School",
    formattedAddress: "Sackville St, Sydney NSW 2147, Australia",
    found: true,
    electorate: "Blacktown",
    address: "Lucas Rd & Sackville St",
    suburb: "SEVEN HILLS",
    state: "NSW",
    postcode: "2147",
    placeId: "ChIJS1ZKSfCYEmsR-tREbIGyR_M",
    lat: -33.7661429,
    lng: 150.9215623
  },
  {
    name: "Mt Druitt Seventh Day Adventist Church",
    formattedAddress: "55 Hythe St, Mount Druitt NSW 2770, Australia",
    found: true,
    electorate: "Londonderry",
    address: "Hythe Street",
    suburb: "MOUNT DRUITT",
    state: "NSW",
    postcode: "2770",
    placeId: "ChIJ38OfxkSaEmsRm9Uow_JrFsI",
    lat: -33.7635115,
    lng: 150.8265286
  },
  {
    name: "Sherwood Ridge Public School",
    formattedAddress: "34 Rosebery Rd, Kellyville NSW 2155, Australia",
    found: true,
    electorate: "Castle Hill",
    address: "Rosebery Road",
    suburb: "KELLYVILLE",
    state: "NSW",
    postcode: "2155",
    placeId: "ChIJtUAty8qhEmsRUAJfveqB9V4",
    lat: -33.707102,
    lng: 150.9754654
  },
  {
    name: "SINOFIELD",
    formattedAddress: "77 Scott Ave, Leura NSW 2780, Australia",
    found: true,
    electorate: "Blue Mountains",
    address: "77 Scott Avenue",
    suburb: "LEURA",
    state: "NSW",
    postcode: "2780",
    placeId: "ChIJBZ6YaABvEmsRmuYVCmi754U",
    lat: -33.7096048,
    lng: 150.3508714
  },
  {
    name: "Slavic Pentecostal Church",
    formattedAddress: "33 Kearneys Dr, Orange NSW 2800, Australia",
    found: true,
    electorate: "Orange",
    address: "33 Kearneys Drive",
    suburb: "ORANGE",
    state: "NSW",
    postcode: "2800",
    placeId: "ChIJF3teILgsEGsRollRZsEzHwY",
    lat: -33.266926,
    lng: 149.092597
  },
  {
    name: "Smith's Hill High School",
    formattedAddress: "35-37 Gipps St, Wollongong NSW 2500, Australia",
    found: true,
    electorate: "Wollongong",
    address: "Gipps Road",
    suburb: "WOLLONGONG",
    state: "NSW",
    postcode: "2500",
    placeId: "ChIJtVzjdwgZE2sR8hmAgFBCqjc",
    lat: -34.4186197,
    lng: 150.8957255
  },
  {
    name: "Smith's Hill High School",
    formattedAddress: "35-37 Gipps St, Wollongong NSW 2500, Australia",
    found: true,
    electorate: "Wollongong",
    address: "Gipps Street",
    suburb: "WOLLONGONG",
    state: "NSW",
    postcode: "2500",
    placeId: "ChIJtVzjdwgZE2sR8hmAgFBCqjc",
    lat: -34.4186197,
    lng: 150.8957255
  },
  {
    query: "South Coast Tibetan Community, 80a Park Road, NOWRA, NSW, 2541",
    found: false
  },
  {
    name: "South Coogee Public School",
    formattedAddress: "Moverly Rd, South Coogee NSW 2034, Australia",
    found: true,
    electorate: "Coogee",
    address: "Moverly Road",
    suburb: "COOGEE",
    state: "NSW",
    postcode: "2034",
    placeId: "ChIJdY66czKyEmsRsiLMuyWJ2D8",
    lat: -33.9332927,
    lng: 151.2540848
  },
  {
    name: "South Coogee Public School",
    formattedAddress: "Moverly Rd, South Coogee NSW 2034, Australia",
    found: true,
    electorate: "Coogee",
    address: "Moverly Road",
    suburb: "SOUTH COOGEE",
    state: "NSW",
    postcode: "2034",
    placeId: "ChIJdY66czKyEmsRsiLMuyWJ2D8",
    lat: -33.9332927,
    lng: 151.2540848
  },
  {
    name: "Sri Guru Singh Sabha",
    formattedAddress: "20 The River Rd, Revesby NSW 2212, Australia",
    found: true,
    electorate: "East Hills",
    address: "14-18 The River Road",
    suburb: "REVESBY",
    state: "NSW",
    postcode: "2212",
    placeId: "ChIJc5XPeJS-EmsRm233nB1uGOk",
    lat: -33.9396394,
    lng: 151.0183586
  },
  {
    name: "St Andrews College Junior Campus",
    formattedAddress: "116 Quakers Rd, Marayong NSW 2148, Australia",
    found: true,
    electorate: "Blacktown",
    address: "116-132 Quakers Road",
    suburb: "MARAYONG",
    state: "NSW",
    postcode: "2148",
    placeId: "ChIJExFb0D6ZEmsRYYmDN_-kKEg",
    lat: -33.7416662,
    lng: 150.8884485,
    query:
      "St Andrew's College-Holy Family Campus, 116-132 Quakers Road, MARAYONG, NSW, 2148",
    multipleResults: 2,
    results: [
      {
        formatted_address: "116 Quakers Rd, Marayong NSW 2148, Australia",
        geometry: {
          location: { lat: -33.7416662, lng: 150.8884485 },
          viewport: {
            northeast: { lat: -33.74028887010729, lng: 150.8898286298927 },
            southwest: { lat: -33.74298852989273, lng: 150.8871289701072 }
          }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/school-71.png",
        id: "fbdc3dfc257b24b1cc998f5f0a2013ada302eef2",
        name: "St Andrews College Junior Campus",
        place_id: "ChIJExFb0D6ZEmsRYYmDN_-kKEg",
        rating: 2.8,
        reference:
          "CmRbAAAAKTQ_dZtvMyOAyfBQKJ6Tx-A2NObUU1ULTkFr0HbOlsOuXIkxlFI-HfcYKcLmjj_17EaIeKs4iVzopksiJ6E73Ncicu-r24fSrcI11XmyhTV-ahb11L0MByQ0ZsLfOnZfEhABZ2fVZciAmLqXykQK_Sk6GhTVvpbSZmplhon4HFSFnUD_-h9SJQ",
        types: ["university", "point_of_interest", "establishment"]
      },
      {
        formatted_address: "50 Breakfast Rd, Marayong NSW 2148, Australia",
        geometry: {
          location: { lat: -33.7491199, lng: 150.8886418 },
          viewport: {
            northeast: { lat: -33.74803332010727, lng: 150.8903413798927 },
            southwest: { lat: -33.75073297989272, lng: 150.8876417201073 }
          }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/school-71.png",
        id: "5b2ebb2cce22248f85a54d64a66d47abbc2007e8",
        name: "St Andrews College Senior Campus",
        place_id: "ChIJjVf6NhSZEmsR-lXfe50UtPc",
        rating: 4,
        reference:
          "CmRbAAAA8r9XBTnr-weSe9ZlXUQBt_wiXq288wYKRmV46UPknVEE4nJORaiA84MeT5VhHU9r8VmY99mab5FNqF1iGTDNRWdS_YHwAInxQ6iKV0ei7SzHlnSWBuoscg-Chwcei8FcEhB5Naaog37PDm0aIxh75SUaGhS-732ofIUy3OJSu_Cf9PznB8WN6A",
        types: ["university", "point_of_interest", "establishment"]
      }
    ]
  },
  {
    name: "St Andrews Ukrainian School",
    formattedAddress: "57 Church St, Lidcombe NSW 2141, Australia",
    found: true,
    electorate: "Auburn",
    address: "57 Church Street",
    suburb: "LIDCOMBE",
    state: "NSW",
    postcode: "2141",
    placeId: "ChIJo9d-RV-7EmsRyGDt3diGiqI",
    lat: -33.8640963,
    lng: 151.0480332
  },
  {
    name: "St Brigid's Catholic Primary School",
    formattedAddress: "392A Marrickville Rd, Marrickville NSW 2204, Australia",
    found: true,
    electorate: "Summer Hill",
    address: "392A Marrickville Rd",
    suburb: "MARRICKVILLE",
    state: "NSW",
    postcode: "2204",
    placeId: "ChIJZ2AGymSwEmsRa2-ltc4vqLo",
    lat: -33.90923300000001,
    lng: 151.152301
  },
  {
    name: "St Catherine of Siena Primary School OSHC",
    formattedAddress: "58 Dalmeny Dr, Prestons NSW 2170, Australia",
    found: true,
    electorate: "Holsworthy",
    address: "Dalmeny Drive",
    suburb: "PRESTONS",
    state: "NSW",
    postcode: "2170",
    placeId: "ChIJ_dNUNqSUEmsRA6L4kpMwfGM",
    lat: -33.95199059999999,
    lng: 150.8680361,
    query:
      "St Catherine of Siena Primary - Prestons, Dalmeny Drive, PRESTONS, NSW, 2170",
    multipleResults: 2,
    results: [
      {
        formatted_address: "58 Dalmeny Dr, Prestons NSW 2170, Australia",
        geometry: {
          location: { lat: -33.95199059999999, lng: 150.8680361 },
          viewport: {
            northeast: { lat: -33.95065137010728, lng: 150.8693690298927 },
            southwest: { lat: -33.95335102989272, lng: 150.8666693701072 }
          }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/school-71.png",
        id: "1599af57609ede196d2a0c1898e8be6c8b120559",
        name: "St Catherine of Siena Primary School OSHC",
        opening_hours: { open_now: false, weekday_text: [] },
        place_id: "ChIJ_dNUNqSUEmsRA6L4kpMwfGM",
        reference:
          "CmRbAAAA5brF81CiYKOWbtPEp9YsS7uvbrgwi1KdK-StLorXk1O6Mmspn0ZORjrKLn5AabjJ8Jsnid5QpfSfkN5I0apNcT_I43J4KJGEJ64cQhE9C1kEUMSwkM_U8RfLFuNRR1c4EhDEv7TbIQbSezPixw1tJizMGhTjmb3uojljQn9kAh_SsuyWPlkZDQ",
        types: ["point_of_interest", "establishment"]
      },
      {
        formatted_address: "Prestons NSW 2170, Australia",
        geometry: {
          location: { lat: -33.95233899999999, lng: 150.86821 },
          viewport: {
            northeast: { lat: -33.95098917010726, lng: 150.8695598298927 },
            southwest: { lat: -33.95368882989271, lng: 150.8668601701073 }
          }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/bus-71.png",
        id: "7c5dcb40e7ab37166d1526d0ef87e8f3226cac98",
        name: "Saint Catherine of Siena Primary School, Dalmeny Dr",
        place_id: "ChIJaRSASqSUEmsRDSApt1YPtoc",
        reference:
          "CmRbAAAAqigUxuedcY72RbEgcOM0QH4jP9KcIaGucsOs7wJdm4zkwdPIt62MC9j6wbZ5EvIUyg2uTKWZVX-2F0L95JOZ1r8bnA_BrYeCOfaGDPPPWTbpRDsM58PeyuJl4qcAWny6EhBrSUvbPMu6VLcQ9kmsK4-nGhQl989-q6BhwI6zshd8oCJNxQVqJQ",
        types: [
          "bus_station",
          "transit_station",
          "point_of_interest",
          "establishment"
        ]
      }
    ]
  },
  {
    name: "St Charbel's College",
    formattedAddress: "142 Highclere Ave, Punchbowl NSW 2196, Australia",
    found: true,
    electorate: "Lakemba",
    address: "142 Highclere Avenue",
    suburb: "PUNCHBOWL",
    state: "NSW",
    postcode: "2196",
    placeId: "ChIJv7Obo_G7EmsRrW9fG9ZMWno",
    lat: -33.9172029,
    lng: 151.0566282
  },
  {
    query: "St Christophorus Hall, 112 Edwin Street North, CROYDON, NSW, 2132",
    found: false
  },
  {
    name: "St George Girls High School",
    formattedAddress: "Victoria St, Kogarah NSW 2217, Australia",
    found: true,
    electorate: "Kogarah",
    address: "Victoria Street",
    suburb: "KOGARAH",
    state: "NSW",
    postcode: "2217",
    placeId: "ChIJFT-_ivy5EmsRanOrW4tXCo4",
    lat: -33.9594606,
    lng: 151.136447
  },
  {
    name: "St George Maronite Catholic Church",
    formattedAddress: "2 Yarrara Rd, Thornleigh NSW 2120, Australia",
    found: true,
    electorate: "Hornsby",
    address: "2 Yarrara Road",
    suburb: "THORNLEIGH",
    state: "NSW",
    postcode: "2120",
    placeId: "ChIJHVE--h2nEmsRrxWpamyS3uY",
    lat: -33.732322,
    lng: 151.076877
  },
  {
    name: "ST George Greek Orthodox Church Rose Bay",
    formattedAddress: "90-92 Newcastle St, Rose Bay NSW 2029, Australia",
    found: true,
    electorate: "Vaucluse",
    address: "96 Newcastle Street",
    suburb: "ROSE BAY",
    state: "NSW",
    postcode: "2029",
    placeId: "ChIJ-zwDdqWtEmsR0M1LOB7bHZs",
    lat: -33.8767205,
    lng: 151.270588
  },
  {
    name: "St. Gerasimos Greek Orthodox Church",
    formattedAddress: "21 Henry St, Leichhardt NSW 2040, Australia",
    found: true,
    electorate: "Balmain",
    address: "21 Henry Street",
    suburb: "LEICHHARDT",
    state: "NSW",
    postcode: "2040",
    placeId: "ChIJIau0_h2wEmsRMa2Y9x_oyjw",
    lat: -33.8762551,
    lng: 151.1578874
  },
  {
    name: "St Ives High School",
    formattedAddress: "Yarrabung Rd, St. Ives NSW 2075, Australia",
    found: true,
    electorate: "Davidson",
    address: "Yarrabung Rd",
    suburb: "ST IVES",
    state: "NSW",
    postcode: "2075",
    placeId: "ChIJzcXXZEGoEmsRDtnv_13Zj48",
    lat: -33.7393541,
    lng: 151.166542
  },
  {
    name: "St Ives North Public School",
    formattedAddress: "87 Memorial Ave, St. Ives NSW 2075, Australia",
    found: true,
    electorate: "Davidson",
    address: "87 Memorial Avenue",
    suburb: "ST IVES",
    state: "NSW",
    postcode: "2075",
    placeId: "ChIJF1f3VR-oEmsRH0rR4-0Khpo",
    lat: -33.7186323,
    lng: 151.163191
  },
  {
    name: "St Ives Public School",
    formattedAddress: "60/70 Horace St, St. Ives NSW 2075, Australia",
    found: true,
    electorate: "Davidson",
    address: "Horace Street",
    suburb: "ST IVES",
    state: "NSW",
    postcode: "2075",
    placeId: "ChIJ-VwyUECoEmsRAuZN0-DVEB8",
    lat: -33.7384587,
    lng: 151.165728
  },
  {
    name: "St Joachim's Catholic Primary School",
    formattedAddress: "7 Mary St, Lidcombe NSW 2141, Australia",
    found: true,
    electorate: "Auburn",
    address: "7 Mary Street",
    suburb: "LIDCOMBE",
    state: "NSW",
    postcode: "2141",
    placeId: "ChIJja6lS6e8EmsR4RfZQKHmflc",
    lat: -33.86271,
    lng: 151.045917
  },
  {
    name: "Serbian Orthodox Church",
    formattedAddress: "29 Dale St, Penrose NSW 2530, Australia",
    found: true,
    electorate: "Shellharbour",
    address: "20 Dale Street",
    suburb: "DAPTO",
    state: "NSW",
    postcode: "2530",
    placeId: "ChIJqebhHfgRE2sRl89rnjfOohw",
    lat: -34.510647,
    lng: 150.7794728
  },
  {
    name: "St John the Baptist Catholic Primary School",
    formattedAddress: "7 Johnson St, Freshwater NSW 2096, Australia",
    found: true,
    electorate: "Manly",
    address: "7 Johnson Street",
    suburb: "FRESHWATER",
    state: "NSW",
    postcode: "2096",
    placeId: "ChIJ37F71fmqEmsRP1dAijA8jCY",
    lat: -33.775005,
    lng: 151.2831679
  },
  {
    name: "Saint John the Beloved Church",
    formattedAddress: "63 George St, Mount Druitt NSW 2770, Australia",
    found: true,
    electorate: "Mount Druitt",
    address: "63 George St",
    suburb: "MOUNT DRUITT",
    state: "NSW",
    postcode: "2770",
    placeId: "ChIJA9w7nGWaEmsRAJkGqNWXR34",
    lat: -33.7778204,
    lng: 150.8256347
  },
  {
    name: "St Ioannis Greek Orthodox Church",
    formattedAddress: "163-165 George St, Parramatta NSW 2150, Australia",
    found: true,
    electorate: "Parramatta",
    address: "163-165 George Street",
    suburb: "PARRAMATTA",
    state: "NSW",
    postcode: "2150",
    placeId: "ChIJ5VMBbiKjEmsRdqjQqmMV3Sc",
    lat: -33.8173744,
    lng: 151.0141343
  },
  {
    name: "St Johns Park High School",
    formattedAddress: "Mimosa Rd, Greenfield Park NSW 2176, Australia",
    found: true,
    electorate: "Cabramatta",
    address: "Mimosa Road",
    suburb: "ST JOHNS PARK",
    state: "NSW",
    postcode: "2176",
    placeId: "ChIJw8UU9euWEmsR__34kU3kteo",
    lat: -33.8735667,
    lng: 150.8911711
  },
  {
    name: "St Johns Park Public School",
    formattedAddress: "Sandringham St, St Johns Park NSW 2176, Australia",
    found: true,
    electorate: "Cabramatta",
    address: "Sandringham Street",
    suburb: "ST JOHNS PARK",
    state: "NSW",
    postcode: "2176",
    placeId: "ChIJm8BbaYSWEmsRypGDRhRP3_I",
    lat: -33.8872395,
    lng: 150.8993305
  },
  {
    name: "St Joseph's Maronite Catholic Church",
    formattedAddress: "7 Acton St, Croydon NSW 2132, Australia",
    found: true,
    electorate: "Strathfield",
    address: "7 Acton St.",
    suburb: "CROYDON",
    state: "NSW",
    postcode: "2132",
    placeId: "ChIJ-Vrp5sm6EmsRaCEJ_K7onOA",
    lat: -33.8719634,
    lng: 151.1165221
  },
  {
    name: "St Joseph's Catholic Primary School",
    formattedAddress: "21 Rosa St, Oatley NSW 2223, Australia",
    found: true,
    electorate: "Oatley",
    address: "21 Rosa Street",
    suburb: "OATLEY",
    state: "NSW",
    postcode: "2223",
    placeId: "ChIJ_yHkKP24EmsRFCv2O-9tE4U",
    lat: -33.981925,
    lng: 151.082394
  },
  {
    name: "St Madeleine's Primary School",
    formattedAddress:
      "28 Annangrove Rd Marian College Kenthurst Rd, Kenthurst NSW 2156, Australia",
    found: true,
    electorate: "Castle Hill",
    address: "28 Annangrove Road",
    suburb: "KENTHURST",
    state: "NSW",
    postcode: "2158",
    placeId: "ChIJcRwQz4egEmsRLT-hq-fxWGA",
    lat: -33.68219150000001,
    lng: 151.0031108
  },
  {
    name: "St Marys South Public School",
    formattedAddress: "96 Monfarville St, St Marys NSW 2760, Australia",
    found: true,
    electorate: "Londonderry",
    address: "Monfarville St",
    suburb: "ST MARYS",
    state: "NSW",
    postcode: "2760",
    placeId: "ChIJIVtatqmaEmsRVlHGpeisAeM",
    lat: -33.780407,
    lng: 150.7761766
  },
  {
    name: "St Michael Greek Orthodox Church",
    formattedAddress: "49-59 Holtermann St, Crows Nest NSW 2065, Australia",
    found: true,
    electorate: "North Shore",
    address: "53-59 Holterman Street",
    suburb: "CROWS NEST",
    state: "NSW",
    postcode: "2065",
    placeId: "ChIJIW2aFcKuEmsRfmjOVfcF1as",
    lat: -33.825301,
    lng: 151.2031228
  },
  {
    name: "St Nicholas Antiochian Orthodox Church, Punchbowl",
    formattedAddress: "11 Henry St, Punchbowl NSW 2196, Australia",
    found: true,
    electorate: "Lakemba",
    address: "11 Henry Street",
    suburb: "PUNCHBOWL",
    state: "NSW",
    postcode: "2196",
    placeId: "ChIJD7mfE_q7EmsR4DpL6PRRyDQ",
    lat: -33.9222024,
    lng: 151.054403,
    query: "St Nicholas Arabic School, 11 Henry Street, PUNCHBOWL, NSW, 2196",
    multipleResults: 2,
    results: [
      {
        formatted_address: "11 Henry St, Punchbowl NSW 2196, Australia",
        geometry: {
          location: { lat: -33.9222024, lng: 151.054403 },
          viewport: {
            northeast: { lat: -33.92083962010727, lng: 151.0556544298927 },
            southwest: { lat: -33.92353927989272, lng: 151.0529547701072 }
          }
        },
        icon:
          "https://maps.gstatic.com/mapfiles/place_api/icons/worship_general-71.png",
        id: "60434f8fdf11e03e2d70b2b3ecc66e2dcd4cb677",
        name: "St Nicholas Antiochian Orthodox Church, Punchbowl",
        opening_hours: { open_now: true, weekday_text: [] },
        photos: [
          {
            height: 1155,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/108902155981235158084/photos">St Nicholas Antiochian Orthodox Church, Punchbowl</a>'
            ],
            photo_reference:
              "CmRaAAAAOAZcO69zenHoLB2145N-kFbNOe-NYZQl8AJmDpsNVA8xvgMmCLv634kKwp4CUXSZwp6uJewAQfak-yqkgMngDyMy1wUzJwzELPohI5TIblY7j1pq3ofzccOq9srCXXpXEhDhEJuYQNcw47Fkf4aPdJn7GhSZI8EXjxwdn70CCvjfgJqNqFi4sQ",
            width: 1158
          }
        ],
        place_id: "ChIJD7mfE_q7EmsR4DpL6PRRyDQ",
        rating: 5,
        reference:
          "CmRbAAAAYX0aDO8MsQo9Ck5EGHwN4hSSWNp8-KZo9-cAZGhdEx_-pP2QvOLavAUhkcCb5bNrBmc79hIoENXYwB667J0TJSml8wjN5dY7IL__wea-wK4HKkmPOs6MgHsfoaYODz3cEhC-Qeqv0zBTAXzIKYE1ZzGpGhSsmSDlm2ulTr-e2ZzMbaLlPjGjDQ",
        types: [
          "church",
          "place_of_worship",
          "school",
          "point_of_interest",
          "establishment"
        ]
      },
      {
        formatted_address: "6 Henry St, Punchbowl NSW 2196, Australia",
        geometry: {
          location: { lat: -33.9224849, lng: 151.0537917 },
          viewport: {
            northeast: { lat: -33.92115792010728, lng: 151.0553148798928 },
            southwest: { lat: -33.92385757989273, lng: 151.0526152201073 }
          }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/school-71.png",
        id: "649aa466d86ec798cf855c8443c1499c01ccc01d",
        name: "Shepherd Early Learning Centre - St Nicholas",
        opening_hours: { open_now: true, weekday_text: [] },
        photos: [
          {
            height: 673,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/115956507896408434852/photos">Shepherd Early Learning Centre - St Nicholas</a>'
            ],
            photo_reference:
              "CmRaAAAAZUBrGR9w3fOqXddL0otpn57zuRdhfDhk5GmPpVLrDu5NQdf_EqKJr814kOGFyrcr7jt4jbbWuEFz7istcijLA8xgmCBpUqmGpusJdSaEf3LfYeuOnI6LJT8sDBkrdpyXEhCUhUyaxZpEZ-lf2M-3p7gpGhQKNfwdV50iV1SmSpwZgyV1TUEvIQ",
            width: 1024
          }
        ],
        place_id: "ChIJvxdBPfq7EmsRBWNxjYt0NZ0",
        rating: 5,
        reference:
          "CmRbAAAA1-iT_IrVofA3N3otDYb3FrZSaAfUq4j7QY0pyLcJcxxO9O44lsh6FtEC_SfUogGrC9T4-TQfSO7aSzhTyXVGLln7cy-G4OUutY0KtBQvDgQsdYogCjN7ply628JDlqSjEhAnXrRzLeau_0fH-HQ13lU0GhSc-SdZGrMSCjh8PA6oMMbB6tC4Ag",
        types: ["school", "point_of_interest", "establishment"]
      }
    ]
  },
  {
    name: "St Nicholas Greek Orthodox Church",
    formattedAddress:
      "203-207 Livingstone Rd, Marrickville NSW 2204, Australia",
    found: true,
    electorate: "Summer Hill",
    address: "203 Livingstone Road",
    suburb: "MARRICKVILLE",
    state: "NSW",
    postcode: "2204",
    placeId: "ChIJc6cOinywEmsRq0FodB9agfE",
    lat: -33.9108965,
    lng: 151.1489646
  },
  {
    name: "St Raphael, Nicholas and Irene Liverpool Church",
    formattedAddress: "29 Forbes St, Liverpool NSW 2170, Australia",
    found: true,
    electorate: "Liverpool",
    address: "19-29 Forbes Street",
    suburb: "LIVERPOOL",
    state: "NSW",
    postcode: "2170",
    placeId: "ChIJre9j18GVEmsRIbSDLKEUUZI",
    lat: -33.9169691,
    lng: 150.9301336
  },
  {
    name: "Serbian Orthodox Church St Sava",
    formattedAddress: "5 Wilson Ave, Ingleside NSW 2101, Australia",
    found: true,
    electorate: "Pittwater",
    address: "Wilson St",
    suburb: "ELANORA HEIGHTS",
    state: "NSW",
    postcode: "2101",
    placeId: "ChIJ8Zq3N1BUDWsRg4hvJuu2fMs",
    lat: -33.691096,
    lng: 151.270298
  },
  {
    name: "Serbian Orthodox Church of Saint Sava",
    formattedAddress: "34 Hampstead Rd, Homebush West NSW 2140, Australia",
    found: true,
    electorate: "Strathfield",
    address: "34 Hamstead Road",
    suburb: "HOMEBUSH WEST",
    state: "NSW",
    postcode: "2140",
    placeId: "ChIJLdIBmzi7EmsRirsjTatpJN4",
    lat: -33.8675092,
    lng: 151.0710404
  },
  {
    name: "St Spyridon College Primary",
    formattedAddress: "80 Gardeners Rd, Kingsford NSW 2032, Australia",
    found: true,
    electorate: "Heffron",
    address: "26-30 Bruce Street",
    suburb: "KINGSFORD",
    state: "NSW",
    postcode: "2032",
    placeId: "ChIJ_0Yva4WxEmsRQmkJXnoBM_E",
    lat: -33.9252788,
    lng: 151.2242394,
    query:
      "St Spyridon College - Private: Kingsford, 26-30 Bruce Street, KINGSFORD, NSW, 2032",
    multipleResults: 2,
    results: [
      {
        formatted_address: "80 Gardeners Rd, Kingsford NSW 2032, Australia",
        geometry: {
          location: { lat: -33.9252788, lng: 151.2242394 },
          viewport: {
            northeast: { lat: -33.92402757010728, lng: 151.2256058298927 },
            southwest: { lat: -33.92672722989273, lng: 151.2229061701073 }
          }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/school-71.png",
        id: "133cd68e0dc2cfd6adacdeb15527cc02dd0197a3",
        name: "St Spyridon College Primary",
        photos: [
          {
            height: 1920,
            html_attributions: [
              '<a href="https://maps.google.com/maps/contrib/103914882328775900173/photos">A Google User</a>'
            ],
            photo_reference:
              "CmRaAAAA9X5L4hlft_pbVOWkNkABBGHKPWqNUWobsiddHNzy7yQdOG6bsvt0qnNGCxjn67pbxlBSSS5Qevassw0O9uWaR0HsnSEWwUy-ugdoKyNlvWY0R-s8-tiYwVQgIhNvsNBDEhBk4pbys75Q90kONkEVScBcGhTUj1AAuNN6nKqmAtuREJwvMe2T0Q",
            width: 1080
          }
        ],
        place_id: "ChIJ_0Yva4WxEmsRQmkJXnoBM_E",
        rating: 3.8,
        reference:
          "CmRbAAAAExBsZeG6EouyXjE97PFPSGUPGjCobOas2prRB33L_zsgGXzl5x0dEyZ4l-wwmugc8rjmHIUgEF2xDRJXZTnvItVEwC9ZtrL5Uv87Ga7Ir-X--Lv1fTmZma12mDaEyshzEhDk1S9Qv3O-Uj6xffa4YRXTGhQREmblZwzEYAVq4tPFdtSyO_NZ_Q",
        types: ["school", "point_of_interest", "establishment"]
      },
      {
        formatted_address: "1130 Anzac Parade, Maroubra NSW 2035, Australia",
        geometry: {
          location: { lat: -33.955017, lng: 151.243956 },
          viewport: {
            northeast: { lat: -33.95382147010728, lng: 151.2451308298927 },
            southwest: { lat: -33.95652112989272, lng: 151.2424311701073 }
          }
        },
        icon: "https://maps.gstatic.com/mapfiles/place_api/icons/school-71.png",
        id: "5da7270d74a2d42e1e247751b301edba87c3096d",
        name: "St. Spyridon High School",
        place_id: "ChIJtd3evNyzEmsRoqAtedhI3vg",
        rating: 4.1,
        reference:
          "CmRbAAAAG4B-Me1Xf5pPBmOBH4vCYNA7AAOYBloRFMUCjRsUu0XBQaugCQxRCij__tdJAONp9AC9aov7ljOTbDRPQSD4cWQT00bC3Iu42aIxyXtz6tKidZcdKYSGsEeMBYIgqYsZEhAyXF3sJyyp4mgyHRFwET6VGhQK4Vdi5lC7qs-iGz7tLusJxFOQbw",
        types: ["school", "point_of_interest", "establishment"]
      }
    ]
  },
  {
    name:
      "Greek Orthodox Parish of St. Stylianos,Sts. Peter & Paul & St. Gregory of Palama",
    formattedAddress: "806-808 Kingsway, Gymea NSW 2227, Australia",
    found: true,
    electorate: "Miranda",
    address: "810 The Kingsway",
    suburb: "GYMEA",
    state: "NSW",
    postcode: "2227",
    placeId: "ChIJs-CU0G_HEmsRiin4j0lRuvk",
    lat: -34.0324653,
    lng: 151.0815866
  },
  {
    name: "Stanmore Public School",
    formattedAddress: "100 Cambridge St, Stanmore NSW 2048, Australia",
    found: true,
    electorate: "Marrickville",
    address: "Cambridge Street",
    suburb: "STANMORE",
    state: "NSW",
    postcode: "2048",
    placeId: "ChIJ8_9uOT6wEmsRqiaNGRjt6H8",
    lat: -33.8953726,
    lng: 151.1645768
  },
  {
    name: "Strathfield North Public School",
    formattedAddress: "251 Concord Rd, North Strathfield NSW 2137, Australia",
    found: true,
    electorate: "Strathfield",
    address: "Concord Rd",
    suburb: "STRATHFIELD NTH",
    state: "NSW",
    postcode: "2137",
    placeId: "ChIJ0cE03NWkEmsRjHNv55r-vD4",
    lat: -33.85464,
    lng: 151.092077
  },
  {
    name: "Strathfield South Public School",
    formattedAddress: "457 Liverpool Road, Strathfield NSW 2135, Australia",
    found: true,
    electorate: "Strathfield",
    address: "457 Liverpool Road",
    suburb: "ENFIELD",
    state: "NSW",
    postcode: "2136",
    placeId: "ChIJTwYJ0-O6EmsRt5pImSyI7VY",
    lat: -33.890936,
    lng: 151.084743
  },
  {
    name: "Sturt Public School",
    formattedAddress: "White Ave, Wagga Wagga NSW 2650, Australia",
    found: true,
    electorate: "Wagga Wagga",
    address: "White Avenue",
    suburb: "WAGGA WAGGA",
    state: "NSW",
    postcode: "2650",
    placeId: "ChIJSZFQKeGbGGsRzOmCVNTTfMU",
    lat: -35.1366093,
    lng: 147.3784218
  },
  {
    name: "Summer Hill Public School",
    formattedAddress: "Moonbie St, Summer Hill NSW 2130, Australia",
    found: true,
    electorate: "Canterbury",
    address: "Moonbie Street",
    suburb: "SUMMER HILL",
    state: "NSW",
    postcode: "2130",
    placeId: "ChIJXZ4n_Z66EmsR3vH0_2cktus",
    lat: -33.8958073,
    lng: 151.1358262
  },
  {
    name: "Sutherland Public School",
    formattedAddress: "38/54 Eton St, Sutherland NSW 2232, Australia",
    found: true,
    electorate: "Heathcote",
    address: "Eton Street",
    suburb: "SUTHERLAND",
    state: "NSW",
    postcode: "2232",
    placeId: "ChIJtaub4EfHEmsR_5Bv8SHa2EA",
    lat: -34.0330049,
    lng: 151.0589624
  },
  {
    name: "Sydney Cheil Church",
    formattedAddress: "54 Sydney St, Concord NSW 2137, Australia",
    found: true,
    electorate: "Strathfield",
    address: "7 Sydney St",
    suburb: "CONCORD",
    state: "NSW",
    postcode: "2137",
    placeId: "ChIJCTeY8dW6EmsRBxcx_QAN_RQ",
    lat: -33.8641632,
    lng: 151.0943072
  },
  {
    name: "Sydney Full Gospel Church",
    formattedAddress: "204 Waterloo Rd, Greenacre NSW 2190, Australia",
    found: true,
    electorate: "Bankstown",
    address: "204 Waterloo Road",
    suburb: "GREENACRE",
    state: "NSW",
    postcode: "2190",
    placeId: "ChIJC3LrFI67EmsR1dyImhEZuYI",
    lat: -33.9059865,
    lng: 151.0572315
  },
  {
    query: "Sydney Juan Church, 7 Maxim Street, RYDE, NSW, 2114",
    found: false
  },
  {
    name: "Sydney Korean Uniting Church",
    formattedAddress: "98 Albert Rd, Strathfield NSW 2135, Australia",
    found: true,
    electorate: "Strathfield",
    address: "98-102 Albert Road",
    suburb: "STRATHFIELD",
    state: "NSW",
    postcode: "2135",
    placeId: "ChIJr-NpIiS7EmsR87BN-LYgLSE",
    lat: -33.8723155,
    lng: 151.0878052
  },
  {
    name: "Sydney Young Nak Presbyterian Church",
    formattedAddress: "7/9 Manson St, Telopea NSW 2117, Australia",
    found: true,
    electorate: "Parramatta",
    address: "7-9 Manson Street",
    suburb: "TELOPEA",
    state: "NSW",
    postcode: "2117",
    placeId: "ChIJ-68E2oWjEmsRLXCVYMru7yU",
    lat: -33.796841,
    lng: 151.041056
  },
  {
    name: "St John Paul II Catholic College",
    formattedAddress: "85 Hambledon Rd, Schofields NSW 2762, Australia",
    found: true,
    electorate: "Riverstone",
    address: "85 Hambledon Rd",
    suburb: "SCHOFIELDS",
    state: "NSW",
    postcode: "2762",
    placeId: "ChIJ82hlO-ieEmsRqA78f6EOzIc",
    lat: -33.705465,
    lng: 150.891832
  },
  {
    name: "Tharawal Public School",
    formattedAddress:
      "Tharawal Public School, 70 Gerald Rd, Illawong NSW 2234, Australia",
    found: true,
    electorate: "Menai",
    address: "Gerald Rd",
    suburb: "MENAI",
    state: "NSW",
    postcode: "2234",
    placeId: "ChIJHeDyWF6_EmsRaAUPmsVpiTw",
    lat: -34.0029582,
    lng: 151.0267986
  },
  {
    name: "The Ponds High School",
    formattedAddress: "180 Riverbank Dr, The Ponds NSW 2769, Australia",
    found: true,
    electorate: "Riverstone",
    address: "180 Riverbank Drive",
    suburb: "THE PONDS",
    state: "NSW",
    postcode: "2769",
    placeId: "ChIJuwr8ieaeEmsRHyRts3Xbf8M",
    lat: -33.7033103,
    lng: 150.8976379
  },
  {
    name: "The Ponds High School",
    formattedAddress: "180 Riverbank Dr, The Ponds NSW 2769, Australia",
    found: true,
    electorate: "Riverstone",
    address: "Wentworth Street",
    suburb: "THE PONDS",
    state: "NSW",
    postcode: "2769",
    placeId: "ChIJuwr8ieaeEmsRHyRts3Xbf8M",
    lat: -33.7033103,
    lng: 150.8976379
  },
  {
    name: "Thomas Acres Public School",
    formattedAddress: "Crispsparkle Dr, Ambarvale NSW 2560, Australia",
    found: true,
    electorate: "Wollondilly",
    address: "Crisparkle Drive",
    suburb: "AMBARVALE",
    state: "NSW",
    postcode: "2560",
    placeId: "ChIJsf3CVuvvEmsRC2JhyGWZSy8",
    lat: -34.093675,
    lng: 150.7904835
  },
  {
    name: "Thornleigh West Public School",
    formattedAddress: "Giblett Ave, Thornleigh NSW 2120, Australia",
    found: true,
    electorate: "Epping",
    address: "Giblett Ave",
    suburb: "THORNLEIGH",
    state: "NSW",
    postcode: "2120",
    placeId: "ChIJNXv28xenEmsRqEmvX466BiM",
    lat: -33.7243407,
    lng: 151.0719597
  },
  {
    name: "Towradgi Public School",
    formattedAddress: "Carters Ln, Fairy Meadow NSW 2518, Australia",
    found: true,
    electorate: "Keira",
    address: "Carters Lane",
    suburb: "FAIRY MEADOW",
    state: "NSW",
    postcode: "2518",
    placeId: "ChIJc4aedSsZE2sREj-Oqqb194U",
    lat: -34.3888812,
    lng: 150.902576
  },
  {
    name: "Trinity Grammar School",
    formattedAddress: "115-125 The Boulevarde, Strathfield NSW 2135, Australia",
    found: true,
    electorate: "Strathfield",
    address: "125 The Boulevarde",
    suburb: "STRATHFIELD",
    state: "NSW",
    postcode: "2135",
    placeId: "ChIJI_Bysh-7EmsRC5t5QXu70U4",
    lat: -33.882011,
    lng: 151.0915741
  },
  {
    name: "Trinity Grammar School",
    formattedAddress: "119 Prospect Rd, Summer Hill NSW 2130, Australia",
    found: true,
    electorate: "Canterbury",
    address: "119 Prospect Road",
    suburb: "SUMMER HILL",
    state: "NSW",
    postcode: "2130",
    placeId: "ChIJCxRBH5u6EmsRQMAfo8wE3hc",
    lat: -33.8992876,
    lng: 151.1317387
  },
  {
    name: "Turramurra High School",
    formattedAddress: "104 Maxwell St, South Turramurra NSW 2074, Australia",
    found: true,
    electorate: "Ku-ring-gai",
    address: "Maxwell Street",
    suburb: "SOUTH TURRAMURRA",
    state: "NSW",
    postcode: "2074",
    placeId: "ChIJh9oULkemEmsRv56194GpBwg",
    lat: -33.757358,
    lng: 151.114766
  },
  {
    name: "Ultimo Public School",
    formattedAddress: "Quarry St, Ultimo NSW 2007, Australia",
    found: true,
    electorate: "Sydney",
    address: "Quarry Street",
    suburb: "ULTIMO",
    state: "NSW",
    postcode: "2007",
    placeId: "ChIJl8z6si-uEmsRTl8HNDppFfs",
    lat: -33.877689,
    lng: 151.1955829
  },
  {
    name: "Undercliffe Public School",
    formattedAddress: "143-157 Bayview Ave, Earlwood NSW 2206, Australia",
    found: true,
    electorate: "Canterbury",
    address: "Bayview Avenue",
    suburb: "EARLWOOD",
    state: "NSW",
    postcode: "2206",
    placeId: "ChIJO4YsvZywEmsRzQLQ6lNfJD8",
    lat: -33.9244012,
    lng: 151.1386165
  },
  {
    name: "Uruguay club",
    formattedAddress: "62/56 Whitford Rd, Hinchinbrook NSW 2168, Australia",
    found: true,
    electorate: "Liverpool",
    address: "56-62 Whitford Road",
    suburb: "HINCHINBROOK",
    state: "NSW",
    postcode: "2168",
    placeId: "ChIJy44aHnyUEmsRRsqK5mWEY-M",
    lat: -33.919993,
    lng: 150.8667927
  },
  {
    name: "Valley View Public School",
    formattedAddress: "Chamberlain Rd, Wyoming NSW 2250, Australia",
    found: true,
    electorate: "The Entrance",
    address: "Chamberlain Road",
    suburb: "WYOMING",
    state: "NSW",
    postcode: "2250",
    placeId: "ChIJ74-Kt_3KcmsRBGYgiVUoL-8",
    lat: -33.399702,
    lng: 151.362087
  },
  {
    name: "Villawood North Public School",
    formattedAddress: "95 Bligh St, Fairfield East NSW 2165, Australia",
    found: true,
    electorate: "Fairfield",
    address: "Bligh Street",
    suburb: "FAIRFIELD EAST",
    state: "NSW",
    postcode: "2165",
    placeId: "ChIJrcY9rpm9EmsRBmxT0ugok18",
    lat: -33.8777498,
    lng: 150.9715226
  },
  {
    name: "Wadalba Community School",
    formattedAddress: "Orchid Way, Wadalba NSW 2259, Australia",
    found: true,
    electorate: "Wyong",
    address: "Orchid Way",
    suburb: "WADALBA",
    state: "NSW",
    postcode: "2259",
    placeId: "ChIJfZcSH7PRcmsRvT2-SnDbKvU",
    lat: -33.265021,
    lng: 151.4653735
  },
  {
    name: "Wahroonga Public School",
    formattedAddress: "71 Burns Rd, Wahroonga NSW 2076, Australia",
    found: true,
    electorate: "Ku-ring-gai",
    address: "71 Burns Road",
    suburb: "WAHROONGA",
    state: "NSW",
    postcode: "2076",
    placeId: "ChIJMWs1-u-nEmsRxjH69OMMWH0",
    lat: -33.7155608,
    lng: 151.1280317
  },
  {
    name: "Waitara Public School",
    formattedAddress: "68 Edgeworth David Ave, Wahroonga NSW 2076, Australia",
    found: true,
    electorate: "Ku-ring-gai",
    address: "Edgeworth David Avenue",
    suburb: "WAHROONGA",
    state: "NSW",
    postcode: "2077",
    placeId: "ChIJkaRM9IynEmsR33J1S7cfAcQ",
    lat: -33.7079525,
    lng: 151.1115577
  },
  {
    name: "Warrawee Public School",
    formattedAddress: "1486 Pacific Hwy, Turramurra NSW 2074, Australia",
    found: true,
    electorate: "Ku-ring-gai",
    address: "Pacific Hwy",
    suburb: "TURRAMURRA",
    state: "NSW",
    postcode: "2074",
    placeId: "ChIJYXic1tqnEmsR1AtEkyyT1p8",
    lat: -33.7295182,
    lng: 151.1211656
  },
  {
    name: "Warrawong High School",
    formattedAddress: "127 Cowper St, Warrawong NSW 2502, Australia",
    found: true,
    electorate: "Wollongong",
    address: "Cowper Street",
    suburb: "WARRAWONG",
    state: "NSW",
    postcode: "2502",
    placeId: "ChIJJUMq_zwXE2sRSyV01yHsub4",
    lat: -34.4804711,
    lng: 150.8754878
  },
  {
    name: "Waverley Public School",
    formattedAddress: "155 Bronte Rd, Waverley NSW 2024, Australia",
    found: true,
    electorate: "Coogee",
    address: "Bronte Rd",
    suburb: "WAVERLEY",
    state: "NSW",
    postcode: "2024",
    placeId: "ChIJQ7XThfWtEmsRsSnC0Qo8ST8",
    lat: -33.8984861,
    lng: 151.2517501
  },
  {
    name: "Wesley Castle Hill Uniting Church",
    formattedAddress: "32-34 Showground Rd, Castle Hill NSW 2154, Australia",
    found: true,
    electorate: "Castle Hill",
    address: "32-34 Showground Road",
    suburb: "CASTLE HILL",
    state: "NSW",
    postcode: "2154",
    placeId: "ChIJBTENeqChEmsRdTd54TCV6bE",
    lat: -33.7312648,
    lng: 151.0004461
  },
  {
    name: "West Ryde Public School",
    formattedAddress: "6 Endeavour St, West Ryde NSW 2114, Australia",
    found: true,
    electorate: "Ryde",
    address: "Endeavour St",
    suburb: "WEST RYDE",
    state: "NSW",
    postcode: "2114",
    placeId: "ChIJscNhrVGkEmsROiJyh8W96pM",
    lat: -33.8082959,
    lng: 151.0851086
  },
  {
    name: "Westmead Public School",
    formattedAddress: "Hawkesbury Rd, Westmead NSW 2145, Australia",
    found: true,
    electorate: "Granville",
    address: "Hawkesbury Road",
    suburb: "WESTMEAD",
    state: "NSW",
    postcode: "2145",
    placeId: "ChIJjXpLROiiEmsRBmsvND9EWCg",
    lat: -33.8109373,
    lng: 150.9864665
  },
  {
    name: "Wiley Park Girls High School",
    formattedAddress: "The Boulevarde, Punchbowl NSW 2196, Australia",
    found: true,
    electorate: "Lakemba",
    address: "The Boulevarde",
    suburb: "PUNCHBOWL",
    state: "NSW",
    postcode: "2196",
    placeId: "ChIJF__cOfu7EmsRygh1VnD7TVc",
    lat: -33.9241998,
    lng: 151.0669363
  },
  {
    name: "Wilkins Public School",
    formattedAddress: "31 Park Rd, Marrickville NSW 2204, Australia",
    found: true,
    electorate: "Marrickville",
    address: "Park Road",
    suburb: "MARRICKVILLE",
    state: "NSW",
    postcode: "2204",
    placeId: "ChIJBQODoW6wEmsR7kozHXkrZJk",
    lat: -33.9014982,
    lng: 151.1558005
  },
  {
    name: "Willoughby Girls High School",
    formattedAddress: "151 Mowbray Rd, Willoughby NSW 2068, Australia",
    found: true,
    electorate: "Willoughby",
    address: "Mowbray Road",
    suburb: "WILLOUGHBY",
    state: "NSW",
    postcode: "2068",
    placeId: "ChIJ6X9g5jKpEmsR9rNDjdwbL70",
    lat: -33.8028358,
    lng: 151.1997434
  },
  {
    name: "Willoughby Public School",
    formattedAddress: "Oakville Rd, Willoughby NSW 2068, Australia",
    found: true,
    electorate: "Willoughby",
    address: "Oakville Road",
    suburb: "WILLOUGHBY",
    state: "NSW",
    postcode: "2068",
    placeId: "ChIJXUN7TDKpEmsRYlkvCNCcuz4",
    lat: -33.8019686,
    lng: 151.2011156
  },
  {
    name: "Wollongong Public School",
    formattedAddress: "67A Church St, Wollongong NSW 2500, Australia",
    found: true,
    electorate: "Wollongong",
    address: "Church Street",
    suburb: "WOLLONGONG",
    state: "NSW",
    postcode: "2500",
    placeId: "ChIJ8UrU4qUZE2sRk2icyJDUqFw",
    lat: -34.4227815,
    lng: 150.8967398
  },
  {
    name: "Woodport Public School",
    formattedAddress: "144 The Entrance Rd, Erina NSW 2250, Australia",
    found: true,
    electorate: "Terrigal",
    address: "The Entrance Road",
    suburb: "ERINA",
    state: "NSW",
    postcode: "2250",
    placeId: "ChIJq--WcX_KcmsRySmvbu2gDWQ",
    lat: -33.4393761,
    lng: 151.3788666
  },
  {
    name: "Woollahra Public School",
    formattedAddress: "Forth St, Woollahra NSW 2025, Australia",
    found: true,
    electorate: "Vaucluse",
    address: "Forth Street",
    suburb: "WOOLLAHRA",
    state: "NSW",
    postcode: "2025",
    placeId: "ChIJgxrSzuStEmsReiv04lj5pgc",
    lat: -33.886567,
    lng: 151.2412598
  },
  {
    name: "Yagoona Public School",
    formattedAddress: "425 Hume Hwy, Yagoona NSW 2199, Australia",
    found: true,
    electorate: "Bankstown",
    address: "425 Hume Highway",
    suburb: "YAGOONA",
    state: "NSW",
    postcode: "2199",
    placeId: "ChIJoa8CNBS8EmsRttTxCR1brlw",
    lat: -33.9086717,
    lng: 151.026395
  },
  {
    name: "York Public School",
    formattedAddress: "224 Evan St, South Penrith NSW 2750, Australia",
    found: true,
    electorate: "Penrith",
    address: "Evan Street",
    suburb: "PENRITH SOUTH",
    state: "NSW",
    postcode: "2750",
    placeId: "ChIJhXiq8vqIEmsRybCf9BKcckQ",
    lat: -33.7766903,
    lng: 150.6977227
  }
];

export default locations;
