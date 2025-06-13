import { useState, useEffect, useRef } from 'react';
import './Market.css';

const companies = [
    { symbol: 'AAPL', name: 'Apple Inc.' },
    { symbol: 'MSFT', name: 'Microsoft Corporation' },
    { symbol: 'GOOGL', name: 'Alphabet Inc.' },
    { symbol: 'AMZN', name: 'Amazon.com Inc.' },
    { symbol: 'TSLA', name: 'Tesla Inc.' },
    { symbol: 'META', name: 'Meta Platforms Inc.' },
    { symbol: 'NVDA', name: 'NVIDIA Corporation' },
    { symbol: 'JPM', name: 'JPMorgan Chase & Co.' },
    { symbol: 'V', name: 'Visa Inc.' },
    { symbol: 'WMT', name: 'Walmart Inc.' },
    { symbol: 'JNJ', name: 'Johnson & Johnson' },
    { symbol: 'PG', name: 'Procter & Gamble Co.' },
    { symbol: 'MA', name: 'Mastercard Inc.' },
    { symbol: 'UNH', name: 'UnitedHealth Group Inc.' },
    { symbol: 'HD', name: 'Home Depot Inc.' },
    { symbol: 'BAC', name: 'Bank of America Corp.' },
    { symbol: 'XOM', name: 'Exxon Mobil Corporation' },
    { symbol: 'DIS', name: 'The Walt Disney Company' },
    { symbol: 'NFLX', name: 'Netflix Inc.' },
    { symbol: 'CSCO', name: 'Cisco Systems Inc.' },
    { symbol: 'VZ', name: 'Verizon Communications Inc.' },
    { symbol: 'KO', name: 'The Coca-Cola Company' },
    { symbol: 'PFE', name: 'Pfizer Inc.' },
    { symbol: 'T', name: 'AT&T Inc.' },
    { symbol: 'MRK', name: 'Merck & Co. Inc.' },
    { symbol: 'PEP', name: 'PepsiCo Inc.' },
    { symbol: 'ABT', name: 'Abbott Laboratories' },
    { symbol: 'TMO', name: 'Thermo Fisher Scientific Inc.' },
    { symbol: 'DHR', name: 'Danaher Corporation' },
    { symbol: 'LLY', name: 'Eli Lilly and Company' },
    { symbol: 'ABBV', name: 'AbbVie Inc.' },
    { symbol: 'CRM', name: 'Salesforce Inc.' },
    { symbol: 'ACN', name: 'Accenture plc' },
    { symbol: 'NKE', name: 'Nike Inc.' },
    { symbol: 'MCD', name: 'McDonald\'s Corporation' },
    { symbol: 'SBUX', name: 'Starbucks Corporation' },
    { symbol: 'PYPL', name: 'PayPal Holdings Inc.' },
    { symbol: 'INTC', name: 'Intel Corporation' },
    { symbol: 'AMD', name: 'Advanced Micro Devices Inc.' },
    { symbol: 'QCOM', name: 'Qualcomm Inc.' },
    { symbol: 'TXN', name: 'Texas Instruments Inc.' },
    { symbol: 'AVGO', name: 'Broadcom Inc.' },
    { symbol: 'CHTR', name: 'Charter Communications Inc.' },
    { symbol: 'GILD', name: 'Gilead Sciences Inc.' },
    { symbol: 'MDLZ', name: 'Mondelez International Inc.' },
    { symbol: 'ADBE', name: 'Adobe Inc.' },
    { symbol: 'CMCSA', name: 'Comcast Corporation' },
    { symbol: 'COST', name: 'Costco Wholesale Corporation' },
    { symbol: 'TMUS', name: 'T-Mobile US Inc.' },
    { symbol: 'BMY', name: 'Bristol-Myers Squibb Company' },
    { symbol: 'NEE', name: 'NextEra Energy Inc.' },
    { symbol: 'PM', name: 'Philip Morris International Inc.' },
    { symbol: 'RTX', name: 'Raytheon Technologies Corporation' },
    { symbol: 'UPS', name: 'United Parcel Service Inc.' },
    { symbol: 'SCHW', name: 'The Charles Schwab Corporation' },
    { symbol: 'MMM', name: '3M Company' },
    { symbol: 'BA', name: 'The Boeing Company' },
    { symbol: 'CAT', name: 'Caterpillar Inc.' },
    { symbol: 'GE', name: 'General Electric Company' },
    { symbol: 'IBM', name: 'International Business Machines Corporation' },
    { symbol: 'F', name: 'Ford Motor Company' },
    { symbol: 'GM', name: 'General Motors Company' },
    { symbol: 'UBER', name: 'Uber Technologies Inc.' },
    { symbol: 'LYFT', name: 'Lyft Inc.' },
    { symbol: 'SNAP', name: 'Snap Inc.' },
    { symbol: 'TWTR', name: 'Twitter Inc.' },
    { symbol: 'SQ', name: 'Square Inc.' },
    { symbol: 'SHOP', name: 'Shopify Inc.' },
    { symbol: 'ZM', name: 'Zoom Video Communications Inc.' },
    { symbol: 'PTON', name: 'Peloton Interactive Inc.' },
    { symbol: 'RBLX', name: 'Roblox Corporation' },
    { symbol: 'COIN', name: 'Coinbase Global Inc.' },
    { symbol: 'PLTR', name: 'Palantir Technologies Inc.' },
    { symbol: 'SNOW', name: 'Snowflake Inc.' },
    { symbol: 'DASH', name: 'DoorDash Inc.' },
    { symbol: 'ABNB', name: 'Airbnb Inc.' },
    { symbol: 'U', name: 'Unity Software Inc.' },
    { symbol: 'CRWD', name: 'CrowdStrike Holdings Inc.' },
    { symbol: 'NET', name: 'Cloudflare Inc.' },
    { symbol: 'OKTA', name: 'Okta Inc.' },
    { symbol: 'ZS', name: 'Zscaler Inc.' },
    { symbol: 'DOCU', name: 'DocuSign Inc.' },
    { symbol: 'TWLO', name: 'Twilio Inc.' },
    { symbol: 'SPOT', name: 'Spotify Technology S.A.' },
    { symbol: 'PINS', name: 'Pinterest Inc.' },
    { symbol: 'ETSY', name: 'Etsy Inc.' },
    { symbol: 'ROKU', name: 'Roku Inc.' },
    { symbol: 'TTD', name: 'The Trade Desk Inc.' },
    { symbol: 'TTWO', name: 'Take-Two Interactive Software Inc.' },
    { symbol: 'EA', name: 'Electronic Arts Inc.' },
    { symbol: 'ATVI', name: 'Activision Blizzard Inc.' },
    { symbol: 'DISCA', name: 'Discovery Inc.' },
    { symbol: 'FOXA', name: 'Fox Corporation' },
    { symbol: 'NWSA', name: 'News Corporation' },
    { symbol: 'PARA', name: 'Paramount Global' },
    { symbol: 'WBD', name: 'Warner Bros. Discovery Inc.' },
    { symbol: 'NFLX', name: 'Netflix Inc.' },
    { symbol: 'DIS', name: 'The Walt Disney Company' },
    { symbol: 'CMCSA', name: 'Comcast Corporation' },
    { symbol: 'CHTR', name: 'Charter Communications Inc.' },
    { symbol: 'T', name: 'AT&T Inc.' },
    { symbol: 'VZ', name: 'Verizon Communications Inc.' },
    { symbol: 'TMUS', name: 'T-Mobile US Inc.' },
    { symbol: 'S', name: 'SentinelOne Inc.' },
    { symbol: 'ZS', name: 'Zscaler Inc.' },
    { symbol: 'CRWD', name: 'CrowdStrike Holdings Inc.' },
    { symbol: 'NET', name: 'Cloudflare Inc.' },
    { symbol: 'OKTA', name: 'Okta Inc.' },
    { symbol: 'PANW', name: 'Palo Alto Networks Inc.' },
    { symbol: 'FTNT', name: 'Fortinet Inc.' },
    { symbol: 'CHKP', name: 'Check Point Software Technologies Ltd.' },
    { symbol: 'CYBR', name: 'CyberArk Software Ltd.' },
    { symbol: 'QLYS', name: 'Qualys Inc.' },
    { symbol: 'TENB', name: 'Tenable Holdings Inc.' },
    { symbol: 'RPD', name: 'Rapid7 Inc.' },
    { symbol: 'VRNS', name: 'Varonis Systems Inc.' },
    { symbol: 'ESTC', name: 'Elastic N.V.' },
    { symbol: 'SPLK', name: 'Splunk Inc.' },
    { symbol: 'DT', name: 'Dynatrace Inc.' },
    { symbol: 'NEWR', name: 'New Relic Inc.' },
    { symbol: 'APPN', name: 'Appian Corporation' },
    { symbol: 'PLAN', name: 'Anaplan Inc.' },
    { symbol: 'ASAN', name: 'Asana Inc.' },
    { symbol: 'TEAM', name: 'Atlassian Corporation Plc' },
    { symbol: 'WORK', name: 'Slack Technologies Inc.' },
    { symbol: 'CRM', name: 'Salesforce Inc.' },
    { symbol: 'NOW', name: 'ServiceNow Inc.' },
    { symbol: 'WDAY', name: 'Workday Inc.' },
    { symbol: 'ADBE', name: 'Adobe Inc.' },
    { symbol: 'INTU', name: 'Intuit Inc.' },
    { symbol: 'ADP', name: 'Automatic Data Processing Inc.' },
    { symbol: 'PAYC', name: 'Paycom Software Inc.' },
    { symbol: 'PAYX', name: 'Paychex Inc.' },
    { symbol: 'FIS', name: 'Fidelity National Information Services Inc.' },
    { symbol: 'FISV', name: 'Fiserv Inc.' },
    { symbol: 'GPN', name: 'Global Payments Inc.' },
    { symbol: 'JKHY', name: 'Jack Henry & Associates Inc.' },
    { symbol: 'MELI', name: 'MercadoLibre Inc.' },
    { symbol: 'SE', name: 'Sea Limited' },
    { symbol: 'BABA', name: 'Alibaba Group Holding Limited' },
    { symbol: 'JD', name: 'JD.com Inc.' },
    { symbol: 'PDD', name: 'Pinduoduo Inc.' },
    { symbol: 'BIDU', name: 'Baidu Inc.' },
    { symbol: 'NTES', name: 'NetEase Inc.' },
    { symbol: 'TCEHY', name: 'Tencent Holdings Limited' },
    { symbol: 'NIO', name: 'NIO Inc.' },
    { symbol: 'XPEV', name: 'XPeng Inc.' },
    { symbol: 'LI', name: 'Li Auto Inc.' },
    { symbol: 'BYD', name: 'BYD Company Limited' },
    { symbol: 'TSM', name: 'Taiwan Semiconductor Manufacturing Company Limited' },
    { symbol: 'ASML', name: 'ASML Holding N.V.' },
    { symbol: 'AVGO', name: 'Broadcom Inc.' },
    { symbol: 'QCOM', name: 'Qualcomm Inc.' },
    { symbol: 'TXN', name: 'Texas Instruments Inc.' },
    { symbol: 'INTC', name: 'Intel Corporation' },
    { symbol: 'AMD', name: 'Advanced Micro Devices Inc.' },
    { symbol: 'NVDA', name: 'NVIDIA Corporation' },
    { symbol: 'MU', name: 'Micron Technology Inc.' },
    { symbol: 'WDC', name: 'Western Digital Corporation' },
    { symbol: 'STX', name: 'Seagate Technology Holdings plc' },
    { symbol: 'LRCX', name: 'Lam Research Corporation' },
    { symbol: 'KLAC', name: 'KLA Corporation' },
    { symbol: 'AMAT', name: 'Applied Materials Inc.' },
    { symbol: 'TER', name: 'Teradyne Inc.' },
    { symbol: 'SWKS', name: 'Skyworks Solutions Inc.' },
    { symbol: 'QRVO', name: 'Qorvo Inc.' },
    { symbol: 'MRVL', name: 'Marvell Technology Inc.' },
    { symbol: 'MCHP', name: 'Microchip Technology Inc.' },
    { symbol: 'ADI', name: 'Analog Devices Inc.' },
    { symbol: 'TXN', name: 'Texas Instruments Inc.' },
    { symbol: 'NXP', name: 'NXP Semiconductors N.V.' },
    { symbol: 'STM', name: 'STMicroelectronics N.V.' },
    { symbol: 'ON', name: 'ON Semiconductor Corporation' },
    { symbol: 'MPWR', name: 'Monolithic Power Systems Inc.' },
    { symbol: 'POWI', name: 'Power Integrations Inc.' },
    { symbol: 'VICR', name: 'Vicor Corporation' },
    { symbol: 'ALGM', name: 'Allegro MicroSystems Inc.' },
    { symbol: 'ALLE', name: 'Allegion plc' },
    { symbol: 'ALGN', name: 'Align Technology Inc.' },
    { symbol: 'ALKS', name: 'Alkermes plc' },
    { symbol: 'ALKT', name: 'Alkami Technology Inc.' },
    { symbol: 'ALLO', name: 'Allogene Therapeutics Inc.' },
    { symbol: 'ALLT', name: 'Allot Ltd.' },
    { symbol: 'ALLY', name: 'Ally Financial Inc.' },
    { symbol: 'ALNY', name: 'Alnylam Pharmaceuticals Inc.' },
    { symbol: 'ALRM', name: 'Alarm.com Holdings Inc.' },
    { symbol: 'ALSN', name: 'Allison Transmission Holdings Inc.' },
    { symbol: 'ALT', name: 'Altimmune Inc.' },
    { symbol: 'ALTR', name: 'Altair Engineering Inc.' },
    { symbol: 'ALXN', name: 'Alexion Pharmaceuticals Inc.' },
    { symbol: 'AMAT', name: 'Applied Materials Inc.' },
    { symbol: 'AMBA', name: 'Ambarella Inc.' },
    { symbol: 'AMC', name: 'AMC Entertainment Holdings Inc.' },
    { symbol: 'AMCR', name: 'Amcor plc' },
    { symbol: 'AME', name: 'AMETEK Inc.' },
    { symbol: 'AMGN', name: 'Amgen Inc.' },
    { symbol: 'AMKR', name: 'Amkor Technology Inc.' },
    { symbol: 'AMN', name: 'AMN Healthcare Services Inc.' },
    { symbol: 'AMOT', name: 'Allied Motion Technologies Inc.' },
    { symbol: 'AMPY', name: 'Amplify Energy Corp.' },
    { symbol: 'AMRS', name: 'Amyris Inc.' },
    { symbol: 'AMRX', name: 'Amneal Pharmaceuticals Inc.' },
    { symbol: 'AMSC', name: 'American Superconductor Corporation' },
    { symbol: 'AMSF', name: 'AMERISAFE Inc.' },
    { symbol: 'AMSWA', name: 'American Software Inc.' },
    { symbol: 'AMT', name: 'American Tower Corporation' },
    { symbol: 'AMWD', name: 'American Woodmark Corporation' },
    { symbol: 'AMZN', name: 'Amazon.com Inc.' },
    { symbol: 'AN', name: 'AutoNation Inc.' },
    { symbol: 'ANAB', name: 'AnaptysBio Inc.' },
    { symbol: 'ANDE', name: 'The Andersons Inc.' },
    { symbol: 'ANET', name: 'Arista Networks Inc.' },
    { symbol: 'ANF', name: 'Abercrombie & Fitch Co.' },
    { symbol: 'ANGI', name: 'Angi Inc.' },
    { symbol: 'ANGO', name: 'AngioDynamics Inc.' },
    { symbol: 'ANIK', name: 'Anika Therapeutics Inc.' },
    { symbol: 'ANIP', name: 'ANI Pharmaceuticals Inc.' },
    { symbol: 'ANSS', name: 'ANSYS Inc.' },
    { symbol: 'ANTM', name: 'Anthem Inc.' },
    { symbol: 'AOSL', name: 'Alpha and Omega Semiconductor Limited' },
    { symbol: 'APA', name: 'APA Corporation' },
    { symbol: 'APD', name: 'Air Products and Chemicals Inc.' },
    { symbol: 'APH', name: 'Amphenol Corporation' },
    { symbol: 'APLE', name: 'Apple Hospitality REIT Inc.' },
    { symbol: 'APLS', name: 'Apellis Pharmaceuticals Inc.' },
    { symbol: 'APOG', name: 'Apogee Enterprises Inc.' },
    { symbol: 'APP', name: 'Applovin Corporation' },
    { symbol: 'APPF', name: 'AppFolio Inc.' },
    { symbol: 'APPN', name: 'Appian Corporation' },
    { symbol: 'APPS', name: 'Digital Turbine Inc.' },
    { symbol: 'APRE', name: 'Aprea Therapeutics Inc.' },
    { symbol: 'APRN', name: 'Blue Apron Holdings Inc.' },
    { symbol: 'APTO', name: 'Aptose Biosciences Inc.' },
    { symbol: 'APTV', name: 'Aptiv PLC' },
    { symbol: 'APYX', name: 'Apyx Medical Corporation' },
    { symbol: 'AQB', name: 'AquaBounty Technologies Inc.' },
    { symbol: 'AQMS', name: 'Aqua Metals Inc.' },
    { symbol: 'AQST', name: 'Aquestive Therapeutics Inc.' },
    { symbol: 'AR', name: 'Antero Resources Corporation' },
    { symbol: 'ARA', name: 'American Renal Associates Holdings Inc.' },
    { symbol: 'ARAV', name: 'Aravive Inc.' },
    { symbol: 'ARAY', name: 'Accuray Incorporated' },
    { symbol: 'ARCB', name: 'ArcBest Corporation' },
    { symbol: 'ARCH', name: 'Arch Resources Inc.' },
    { symbol: 'ARCT', name: 'Arcturus Therapeutics Holdings Inc.' },
    { symbol: 'ARDS', name: 'Aridis Pharmaceuticals Inc.' },
    { symbol: 'ARDX', name: 'Ardelyx Inc.' },
    { symbol: 'ARE', name: 'Alexandria Real Estate Equities Inc.' },
    { symbol: 'AREC', name: 'American Resources Corporation' },
    { symbol: 'ARES', name: 'Ares Management Corporation' },
    { symbol: 'ARGX', name: 'argenx SE' },
    { symbol: 'ARI', name: 'Apollo Commercial Real Estate Finance Inc.' },
    { symbol: 'ARKO', name: 'ARKO Corp.' },
    { symbol: 'ARKR', name: 'Ark Restaurants Corp.' },
    { symbol: 'ARLO', name: 'Arlo Technologies Inc.' },
    { symbol: 'ARLP', name: 'Alliance Resource Partners L.P.' },
    { symbol: 'ARMK', name: 'Aramark' },
    { symbol: 'ARNA', name: 'Arena Pharmaceuticals Inc.' },
    { symbol: 'ARNC', name: 'Arconic Corporation' },
    { symbol: 'AROC', name: 'Archrock Inc.' },
    { symbol: 'AROW', name: 'Arrow Financial Corporation' },
    { symbol: 'ARPO', name: 'Aerpio Pharmaceuticals Inc.' },
    { symbol: 'ARQT', name: 'Arcutis Biotherapeutics Inc.' },
    { symbol: 'ARRY', name: 'Array Technologies Inc.' },
    { symbol: 'ARTL', name: 'Artelo Biosciences Inc.' },
    { symbol: 'ARTNA', name: 'Artesian Resources Corporation' },
    { symbol: 'ARTW', name: 'Art\'s-Way Manufacturing Co. Inc.' },
    { symbol: 'ARVN', name: 'Arvinas Inc.' },
    { symbol: 'ARW', name: 'Arrow Electronics Inc.' },
    { symbol: 'ARWR', name: 'Arrowhead Pharmaceuticals Inc.' },
    { symbol: 'ARYA', name: 'ARYA Sciences Acquisition Corp.' },
    { symbol: 'ASA', name: 'ASA Gold and Precious Metals Limited' },
    { symbol: 'ASB', name: 'Associated Banc-Corp' },
    { symbol: 'ASC', name: 'Ardmore Shipping Corporation' },
    { symbol: 'ASGN', name: 'ASGN Incorporated' },
    { symbol: 'ASIX', name: 'AdvanSix Inc.' },
    { symbol: 'ASLE', name: 'AerSale Corporation' },
    { symbol: 'ASLN', name: 'ASLAN Pharmaceuticals Limited' },
    { symbol: 'ASM', name: 'Avino Silver & Gold Mines Ltd.' },
    { symbol: 'ASMB', name: 'Assembly Biosciences Inc.' },
    { symbol: 'ASML', name: 'ASML Holding N.V.' },
    { symbol: 'ASNA', name: 'Ascena Retail Group Inc.' },
    { symbol: 'ASND', name: 'Ascendis Pharma A/S' },
    { symbol: 'ASO', name: 'Academy Sports and Outdoors Inc.' },
    { symbol: 'ASPN', name: 'Aspen Aerogels Inc.' },
    { symbol: 'ASPS', name: 'Altisource Portfolio Solutions S.A.' },
    { symbol: 'ASPU', name: 'Aspen Group Inc.' },
    { symbol: 'ASR', name: 'Grupo Aeroportuario del Sureste S.A.B. de C.V.' },
    { symbol: 'ASTC', name: 'Astrotech Corporation' },
    { symbol: 'ASTE', name: 'Astec Industries Inc.' },
    { symbol: 'ASUR', name: 'Asure Software Inc.' },
    { symbol: 'ASX', name: 'ASE Technology Holding Co. Ltd.' },
    { symbol: 'ASYS', name: 'Amtech Systems Inc.' },
    { symbol: 'ATAI', name: 'ATAI Life Sciences N.V.' },
    { symbol: 'ATAX', name: 'America First Multifamily Investors L.P.' },
    { symbol: 'ATEC', name: 'Alphatec Holdings Inc.' },
    { symbol: 'ATEN', name: 'A10 Networks Inc.' },
    { symbol: 'ATEX', name: 'Anterix Inc.' },
    { symbol: 'ATGE', name: 'Adtalem Global Education Inc.' },
    { symbol: 'ATH', name: 'Athene Holding Ltd.' },
    { symbol: 'ATHE', name: 'Alterity Therapeutics Limited' },
    { symbol: 'ATHM', name: 'Autohome Inc.' },
    { symbol: 'ATHX', name: 'Athersys Inc.' },
    { symbol: 'ATI', name: 'ATI Inc.' },
    { symbol: 'ATKR', name: 'Atkore Inc.' },
    { symbol: 'ATLC', name: 'Atlanticus Holdings Corporation' },
    { symbol: 'ATLO', name: 'Ames National Corporation' },
    { symbol: 'ATNI', name: 'ATN International Inc.' },
    { symbol: 'ATNM', name: 'Actinium Pharmaceuticals Inc.' },
    { symbol: 'ATNX', name: 'Athenex Inc.' },
    { symbol: 'ATO', name: 'Atmos Energy Corporation' },
    { symbol: 'ATOM', name: 'Atomera Incorporated' },
    { symbol: 'ATOS', name: 'Atossa Therapeutics Inc.' },
    { symbol: 'ATR', name: 'AptarGroup Inc.' },
    { symbol: 'ATRA', name: 'Atara Biotherapeutics Inc.' },
    { symbol: 'ATRC', name: 'AtriCure Inc.' },
    { symbol: 'ATRI', name: 'Atrion Corporation' },
    { symbol: 'ATRO', name: 'Astronics Corporation' },
    { symbol: 'ATRS', name: 'Antares Pharma Inc.' },
    { symbol: 'ATSG', name: 'Air Transport Services Group Inc.' },
    { symbol: 'ATTO', name: 'Atento S.A.' },
    { symbol: 'ATUS', name: 'Altice USA Inc.' },
    { symbol: 'ATVI', name: 'Activision Blizzard Inc.' },
    { symbol: 'ATXI', name: 'Avenue Therapeutics Inc.' },
    { symbol: 'AUB', name: 'Atlantic Union Bankshares Corporation' },
    { symbol: 'AUBL', name: 'Atlantic Union Bankshares Corporation' },
    { symbol: 'AUDC', name: 'AudioCodes Ltd.' },
    { symbol: 'AUMN', name: 'Golden Minerals Company' },
    { symbol: 'AUPH', name: 'Aurinia Pharmaceuticals Inc.' },
    { symbol: 'AUTL', name: 'Autolus Therapeutics plc' },
    { symbol: 'AUTO', name: 'AutoWeb Inc.' },
    { symbol: 'AUY', name: 'Yamana Gold Inc.' },
    { symbol: 'AVA', name: 'Avista Corporation' },
    { symbol: 'AVAV', name: 'AeroVironment Inc.' },
    { symbol: 'AVB', name: 'AvalonBay Communities Inc.' },
    { symbol: 'AVD', name: 'American Vanguard Corporation' },
    { symbol: 'AVDL', name: 'Avadel Pharmaceuticals plc' },
    { symbol: 'AVEO', name: 'AVEO Pharmaceuticals Inc.' },
    { symbol: 'AVGO', name: 'Broadcom Inc.' },
    { symbol: 'AVGR', name: 'Avinger Inc.' },
    { symbol: 'AVID', name: 'Avid Technology Inc.' },
    { symbol: 'AVLR', name: 'Avalara Inc.' },
    { symbol: 'AVNS', name: 'Avanos Medical Inc.' },
    { symbol: 'AVNT', name: 'Avient Corporation' },
    { symbol: 'AVNW', name: 'Aviat Networks Inc.' },
    { symbol: 'AVRO', name: 'AVROBIO Inc.' },
    { symbol: 'AVT', name: 'Avnet Inc.' },
    { symbol: 'AVTR', name: 'Avantor Inc.' },
    { symbol: 'AVXL', name: 'Anavex Life Sciences Corp.' },
    { symbol: 'AVY', name: 'Avery Dennison Corporation' },
    { symbol: 'AVYA', name: 'Avaya Holdings Corp.' },
    { symbol: 'AWH', name: 'Aspira Women\'s Health Inc.' },
    { symbol: 'AWI', name: 'Armstrong World Industries Inc.' },
    { symbol: 'AWK', name: 'American Water Works Company Inc.' },
    { symbol: 'AWR', name: 'American States Water Company' },
    { symbol: 'AWRE', name: 'Aware Inc.' },
    { symbol: 'AXAS', name: 'Abraxas Petroleum Corporation' },
    { symbol: 'AXDX', name: 'Accelerate Diagnostics Inc.' },
    { symbol: 'AXGN', name: 'Axogen Inc.' },
    { symbol: 'AXL', name: 'American Axle & Manufacturing Holdings Inc.' },
    { symbol: 'AXLA', name: 'Axcella Health Inc.' },
    { symbol: 'AXNX', name: 'Axonics Modulation Technologies Inc.' },
    { symbol: 'AXON', name: 'Axon Enterprise Inc.' },
    { symbol: 'AXP', name: 'American Express Company' },
    { symbol: 'AXR', name: 'Amrep Corporation' },
    { symbol: 'AXS', name: 'Axis Capital Holdings Limited' },
    { symbol: 'AXSM', name: 'Axsome Therapeutics Inc.' },
    { symbol: 'AXTA', name: 'Axalta Coating Systems Ltd.' },
    { symbol: 'AXTI', name: 'AXT Inc.' },
    { symbol: 'AY', name: 'Atlantica Sustainable Infrastructure plc' },
    { symbol: 'AYI', name: 'Acuity Brands Inc.' },
    { symbol: 'AYRO', name: 'AYRO Inc.' },
    { symbol: 'AYTU', name: 'Aytu BioScience Inc.' },
    { symbol: 'AZEK', name: 'The AZEK Company Inc.' },
    { symbol: 'AZN', name: 'AstraZeneca PLC' },
    { symbol: 'AZO', name: 'AutoZone Inc.' },
    { symbol: 'AZPN', name: 'Aspen Technology Inc.' },
    { symbol: 'AZRE', name: 'Azure Power Global Limited' },
    { symbol: 'AZRX', name: 'AzurRx BioPharma Inc.' },
    { symbol: 'AZUL', name: 'Azul S.A.' },
    { symbol: 'AZYO', name: 'Aziyo Biologics Inc.' },
    { symbol: 'AZZ', name: 'AZZ Inc.' },
    { symbol: 'B', name: 'Barnes Group Inc.' },
    { symbol: 'BA', name: 'The Boeing Company' },
    { symbol: 'BABA', name: 'Alibaba Group Holding Limited' },
    { symbol: 'BAC', name: 'Bank of America Corp.' },
    { symbol: 'BAH', name: 'Booz Allen Hamilton Holding Corporation' },
    { symbol: 'BAK', name: 'Braskem S.A.' },
    { symbol: 'BALY', name: 'Bally\'s Corporation' },
    { symbol: 'BANC', name: 'Banc of California Inc.' },
    { symbol: 'BAND', name: 'Bandwidth Inc.' },
    { symbol: 'BANF', name: 'BancFirst Corporation' },
    { symbol: 'BANR', name: 'Banner Corporation' },
    { symbol: 'BANX', name: 'StoneCastle Financial Corp.' },
    { symbol: 'BAOS', name: 'Baosheng Media Group Holdings Limited' },
    { symbol: 'BAP', name: 'Credicorp Ltd.' },
    { symbol: 'BARK', name: 'BARK Inc.' },
    { symbol: 'BASE', name: 'Couchbase Inc.' },
    { symbol: 'BATL', name: 'Battalion Oil Corporation' },
    { symbol: 'BAX', name: 'Baxter International Inc.' },
    { symbol: 'BB', name: 'BlackBerry Limited' },
    { symbol: 'BBAI', name: 'BigBear.ai Inc.' },
    { symbol: 'BBAR', name: 'Banco BBVA Argentina S.A.' },
    { symbol: 'BBBY', name: 'Bed Bath & Beyond Inc.' },
    { symbol: 'BBCP', name: 'Concrete Pumping Holdings Inc.' },
    { symbol: 'BBD', name: 'Banco Bradesco S.A.' },
    { symbol: 'BBDC', name: 'Barings BDC Inc.' },
    { symbol: 'BBGI', name: 'Beasley Broadcast Group Inc.' },
    { symbol: 'BBI', name: 'Brickell Biotech Inc.' },
    { symbol: 'BBIG', name: 'Vinco Ventures Inc.' },
    { symbol: 'BBIO', name: 'BridgeBio Pharma Inc.' },
    { symbol: 'BBN', name: 'BlackRock Taxable Municipal Bond Trust' },
    { symbol: 'BBSI', name: 'Barrett Business Services Inc.' },
    { symbol: 'BBU', name: 'Brookfield Business Partners L.P.' },
    { symbol: 'BBVA', name: 'Banco Bilbao Vizcaya Argentaria S.A.' },
    { symbol: 'BBW', name: 'Build-A-Bear Workshop Inc.' },
    { symbol: 'BBY', name: 'Best Buy Co. Inc.' },
    { symbol: 'BC', name: 'Brunswick Corporation' },
    { symbol: 'BCAB', name: 'BioAtla Inc.' },
    { symbol: 'BCAC', name: 'Brookline Capital Acquisition Corp.' },
    { symbol: 'BCBP', name: 'BCB Bancorp Inc.' },
    { symbol: 'BCC', name: 'Boise Cascade Company' },
    { symbol: 'BCDA', name: 'BioCardia Inc.' },
    { symbol: 'BCE', name: 'BCE Inc.' },
    { symbol: 'BCEL', name: 'Atreca Inc.' },
    { symbol: 'BCH', name: 'Banco de Chile' },
    { symbol: 'BCLI', name: 'Brainstorm Cell Therapeutics Inc.' },
    { symbol: 'BCML', name: 'BayCom Corp' },
    { symbol: 'BCO', name: 'The Brink\'s Company' },
    { symbol: 'BCOM', name: 'B Communications Ltd.' },
    { symbol: 'BCOR', name: 'Blucora Inc.' },
    { symbol: 'BCOV', name: 'Brightcove Inc.' },
    { symbol: 'BCPC', name: 'Balchem Corporation' },
    { symbol: 'BCRX', name: 'BioCryst Pharmaceuticals Inc.' },
    { symbol: 'BCS', name: 'Barclays PLC' },
    { symbol: 'BCSF', name: 'Bain Capital Specialty Finance Inc.' },
    { symbol: 'BCTX', name: 'BriaCell Therapeutics Corp.' },
    { symbol: 'BCYC', name: 'Bicycle Therapeutics plc' },
    { symbol: 'BDC', name: 'Belden Inc.' },
    { symbol: 'BDJ', name: 'BlackRock Enhanced Equity Dividend Trust' },
    { symbol: 'BDL', name: 'Flanigan\'s Enterprises Inc.' },
    { symbol: 'BDN', name: 'Brandywine Realty Trust' },
    { symbol: 'BDR', name: 'Blonder Tongue Laboratories Inc.' },
    { symbol: 'BDSI', name: 'BioDelivery Sciences International Inc.' },
    { symbol: 'BDSX', name: 'Biodesix Inc.' },
    { symbol: 'BDTX', name: 'Black Diamond Therapeutics Inc.' },
    { symbol: 'BDX', name: 'Becton Dickinson and Company' },
    { symbol: 'BE', name: 'Bloom Energy Corporation' },
    { symbol: 'BEAM', name: 'Beam Therapeutics Inc.' },
    { symbol: 'BEAT', name: 'BioTelemetry Inc.' },
    { symbol: 'BECN', name: 'Beacon Roofing Supply Inc.' },
    { symbol: 'BEDU', name: 'Bright Scholar Education Holdings Limited' },
    { symbol: 'BELFA', name: 'Bel Fuse Inc.' },
    { symbol: 'BELFB', name: 'Bel Fuse Inc.' },
    { symbol: 'BEN', name: 'Franklin Resources Inc.' },
    { symbol: 'BEP', name: 'Brookfield Renewable Partners L.P.' },
    { symbol: 'BEPC', name: 'Brookfield Renewable Corporation' },
    { symbol: 'BERY', name: 'Berry Global Group Inc.' },
    { symbol: 'BEST', name: 'BEST Inc.' },
    { symbol: 'BF.A', name: 'Brown-Forman Corporation' },
    { symbol: 'BF.B', name: 'Brown-Forman Corporation' },
    { symbol: 'BFAM', name: 'Bright Horizons Family Solutions Inc.' },
    { symbol: 'BFC', name: 'Bank First Corporation' },
    { symbol: 'BFI', name: 'BurgerFi International Inc.' },
    { symbol: 'BFIN', name: 'BankFinancial Corporation' },
    { symbol: 'BFRA', name: 'Biofrontera AG' },
    { symbol: 'BFST', name: 'Business First Bancshares Inc.' },
    { symbol: 'BG', name: 'Bunge Limited' },
    { symbol: 'BGFV', name: 'Big 5 Sporting Goods Corporation' },
    { symbol: 'BGNE', name: 'BeiGene Ltd.' },
    { symbol: 'BGRN', name: 'iShares Global Green Bond ETF' },
    { symbol: 'BGS', name: 'B&G Foods Inc.' },
    { symbol: 'BGSF', name: 'BGSF Inc.' },
    { symbol: 'BGXX', name: 'Bright Green Corporation' },
    { symbol: 'BHC', name: 'Bausch Health Companies Inc.' },
    { symbol: 'BHE', name: 'Benchmark Electronics Inc.' },
    { symbol: 'BHF', name: 'Brighthouse Financial Inc.' },
    { symbol: 'BHG', name: 'Bright Health Group Inc.' },
    { symbol: 'BHLB', name: 'Berkshire Hills Bancorp Inc.' },
    { symbol: 'BHR', name: 'Braemar Hotels & Resorts Inc.' },
    { symbol: 'BHTG', name: 'BioHiTech Global Inc.' },
    { symbol: 'BHVN', name: 'Biohaven Pharmaceutical Holding Company Ltd.' },
    { symbol: 'BIDU', name: 'Baidu Inc.' },
    { symbol: 'BIG', name: 'Big Lots Inc.' },
    { symbol: 'BIIB', name: 'Biogen Inc.' },
    { symbol: 'BILI', name: 'Bilibili Inc.' },
    { symbol: 'BILL', name: 'Bill.com Holdings Inc.' },
    { symbol: 'BIMI', name: 'BIMI International Medical Inc.' },
    { symbol: 'BIO', name: 'Bio-Rad Laboratories Inc.' },
    { symbol: 'BIOC', name: 'Biocept Inc.' },
    { symbol: 'BIOL', name: 'Biolase Inc.' },
    { symbol: 'BIOS', name: 'BioPlus Acquisition Corp.' },
    { symbol: 'BIP', name: 'Brookfield Infrastructure Partners L.P.' },
    { symbol: 'BIPC', name: 'Brookfield Infrastructure Corporation' },
    { symbol: 'BIRD', name: 'Allbirds Inc.' },
    { symbol: 'BITE', name: 'Bite Acquisition Corp.' },
    { symbol: 'BITF', name: 'Bitfarms Ltd.' },
    { symbol: 'BIVI', name: 'BioVie Inc.' },
    { symbol: 'BJ', name: 'BJ\'s Wholesale Club Holdings Inc.' },
    { symbol: 'BJRI', name: 'BJ\'s Restaurants Inc.' },
    { symbol: 'BK', name: 'The Bank of New York Mellon Corporation' },
    { symbol: 'BKCC', name: 'BlackRock Capital Investment Corporation' },
    { symbol: 'BKD', name: 'Brookdale Senior Living Inc.' },
    { symbol: 'BKE', name: 'The Buckle Inc.' },
    { symbol: 'BKEP', name: 'Blueknight Energy Partners L.P.' },
    { symbol: 'BKH', name: 'Black Hills Corporation' },
    { symbol: 'BKI', name: 'Black Knight Inc.' },
    { symbol: 'BKKT', name: 'Bakkt Holdings Inc.' },
    { symbol: 'BKNG', name: 'Booking Holdings Inc.' },
    { symbol: 'BKR', name: 'Baker Hughes Company' },
    { symbol: 'BKSC', name: 'Bank of South Carolina Corp.' },
    { symbol: 'BKT', name: 'BlackRock Income Trust Inc.' },
    { symbol: 'BKTI', name: 'BK Technologies Corporation' },
    { symbol: 'BKU', name: 'BankUnited Inc.' },
    { symbol: 'BKYI', name: 'BIO-key International Inc.' },
    { symbol: 'BL', name: 'BlackLine Inc.' },
    { symbol: 'BLBD', name: 'Blue Bird Corporation' },
    { symbol: 'BLCM', name: 'Bellicum Pharmaceuticals Inc.' },
    { symbol: 'BLCT', name: 'BlueCity Holdings Limited' },
    { symbol: 'BLD', name: 'TopBuild Corp.' },
    { symbol: 'BLDP', name: 'Ballard Power Systems Inc.' },
    { symbol: 'BLDR', name: 'Builders FirstSource Inc.' },
    { symbol: 'BLE', name: 'BlackRock Municipal Income Trust II' },
    { symbol: 'BLFS', name: 'BioLife Solutions Inc.' },
    { symbol: 'BLI', name: 'Berkeley Lights Inc.' },
    { symbol: 'BLIN', name: 'Bridgeline Digital Inc.' },
    { symbol: 'BLK', name: 'BlackRock Inc.' },
    { symbol: 'BLKB', name: 'Blackbaud Inc.' },
    { symbol: 'BLL', name: 'Ball Corporation' },
    { symbol: 'BLMN', name: 'Bloomin\' Brands Inc.' },
    { symbol: 'BLNK', name: 'Blink Charging Co.' },
    { symbol: 'BLPH', name: 'Bellerophon Therapeutics Inc.' },
    { symbol: 'BLRX', name: 'BioLine Rx Ltd.' },
    { symbol: 'BLSA', name: 'BCLS Acquisition Corp.' },
    { symbol: 'BLTS', name: 'Bright Lights Acquisition Corp.' },
    { symbol: 'BLU', name: 'BELLUS Health Inc.' },
    { symbol: 'BLUE', name: 'bluebird bio Inc.' },
    { symbol: 'BLW', name: 'BlackRock Limited Duration Income Trust' },
    { symbol: 'BLX', name: 'Banco Latinoamericano de Comercio Exterior S.A.' },
    { symbol: 'BMA', name: 'Banco Macro S.A.' },
    { symbol: 'BMCH', name: 'BMC Stock Holdings Inc.' },
    { symbol: 'BMLP', name: 'Bank of America Merrill Lynch' },
    { symbol: 'BMO', name: 'Bank of Montreal' },
    { symbol: 'BMRA', name: 'Biomerica Inc.' },
    { symbol: 'BMRC', name: 'Bank of Marin Bancorp' },
    { symbol: 'BMRN', name: 'BioMarin Pharmaceutical Inc.' },
    { symbol: 'BMTC', name: 'Bryant & Stratton College Inc.' },
    { symbol: 'BMY', name: 'Bristol-Myers Squibb Company' },
];
const companiesPerPage = 20;

function Market() {
  const [currentPage, setCurrentPage] = useState(1);
  const [prices, setPrices] = useState({});
  const [loading, setLoading] = useState(false);
  const [swipeDirection, setSwipeDirection] = useState(null);
  const listRef = useRef(null);
  const lastFetchTimeRef = useRef({});
  const abortControllerRef = useRef(null);
  const isFetchingRef = useRef(false);

  const startIndex = (currentPage - 1) * companiesPerPage;
  const endIndex = startIndex + companiesPerPage;
  const displayedCompanies = companies.slice(startIndex, endIndex);

  const fetchPrices = async () => {
    // Prevent multiple simultaneous fetches
    if (isFetchingRef.current) {
      console.log('Fetch already in progress, aborting...');
      return;
    }

    // Cancel any ongoing fetch
    if (abortControllerRef.current) {
      console.log('Cancelling previous fetch...');
      abortControllerRef.current.abort();
    }

    isFetchingRef.current = true;
    setLoading(true);
    console.log('Starting fetchPrices...');

    // Create new AbortController for this fetch
    abortControllerRef.current = new AbortController();

    try {
      const newPrices = { ...prices };
      const currentTime = Date.now();
      const CACHE_DURATION = 15 * 60 * 1000;

      const companiesToFetch = displayedCompanies.filter(company => {
        const lastFetch = lastFetchTimeRef.current[company.symbol] || 0;
        const needsUpdate = !lastFetch || (currentTime - lastFetch) > CACHE_DURATION;
        return needsUpdate;
      });

      if (companiesToFetch.length === 0) {
        console.log('All prices are cached and valid, skipping fetch');
        return;
      }

      for (const company of companiesToFetch) {
        // Check if fetch was aborted
        if (abortControllerRef.current.signal.aborted) {
          console.log('Fetch aborted, stopping...');
          return;
        }

        try {
          console.log(`\n[${company.symbol}] Starting fetch...`);
          const res = await fetch(
            `https://finnhub.io/api/v1/quote?symbol=${company.symbol}&token=${import.meta.env.VITE_ALPHA_VANTAGE_API_KEY}`,
            { signal: abortControllerRef.current.signal }
          );
          
          if (res.status === 429) {
            console.warn(`[${company.symbol}] Rate limit reached, waiting before retry...`);
            await new Promise(resolve => setTimeout(resolve, 1000));
            continue;
          }
          
          const data = await res.json();
          console.log(`[${company.symbol}] Received data:`, data);
          
          // Only update if fetch wasn't aborted
          if (!abortControllerRef.current.signal.aborted) {
            newPrices[company.symbol] = data.c || null;
            lastFetchTimeRef.current[company.symbol] = currentTime;
            console.log(`[${company.symbol}] Updated price to: ${data.c || 'null'}`);
            
            setPrices(prevPrices => ({
              ...prevPrices,
              [company.symbol]: data.c || null
            }));
          }
          
          await new Promise(resolve => setTimeout(resolve, 1000));
        } catch (error) {
          if (error.name === 'AbortError') {
            console.log(`[${company.symbol}] Fetch aborted`);
            return;
          }
          console.error(`[${company.symbol}] Error:`, error);
        }
      }
    } finally {
      isFetchingRef.current = false;
      setLoading(false);
      console.log('Finished all fetches');
    }
  };

  const nextPage = () => {
    if (currentPage < Math.ceil(companies.length / companiesPerPage)) {
      // Cancel any ongoing fetch
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      setSwipeDirection('right');
      // Wait for animation to complete before changing page
      setTimeout(() => {
        setCurrentPage((prev) => prev + 1);
        setSwipeDirection(null);
      }, 400);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      // Cancel any ongoing fetch
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      setSwipeDirection('left');
      // Wait for animation to complete before changing page
      setTimeout(() => {
        setCurrentPage((prev) => prev - 1);
        setSwipeDirection(null);
      }, 400);
    }
  };

  useEffect(() => {
    let isMounted = true;
    let timeoutId;

    const loadAndSetPrices = async () => {
      if (!isMounted) return;
      // Add a small delay to ensure page transition is complete
      timeoutId = setTimeout(async () => {
        console.log('\n=== Starting new page load ===');
        await fetchPrices();
      }, 500);
    };

    loadAndSetPrices();

    return () => {
      isMounted = false;
      if (timeoutId) clearTimeout(timeoutId);
      // Cancel any ongoing fetch when component unmounts
      if (abortControllerRef.current) {
        abortControllerRef.current.abort();
      }
      isFetchingRef.current = false;
    };
  }, [currentPage]);

  // Add a function to render company cards
  const renderCompanyCard = (company) => {
    const price = prices[company.symbol];
    const isLoading = loading && !price;
    
    return (
      <div key={company.symbol} className="company-card">
        <div className="company-info">
          <h3>{company.symbol}</h3>
          <p>{company.name}</p>
        </div>
        <div className="price-info">
          {isLoading ? (
            <div className="loading-spinner">Loading...</div>
          ) : price ? (
            <div className="price">${price.toFixed(2)}</div>
          ) : (
            <div className="price-error">Price unavailable</div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="frontpage-bg-fintech">
            <svg className="fintech-bg-svg" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                <defs>
                <linearGradient id="fintechGradient1" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#00C4FF"/>
                    <stop offset="100%" stopColor="#007FFF"/>
                </linearGradient>
                <linearGradient id="fintechGradient2" x1="1" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#39FF14"/>
                    <stop offset="100%" stopColor="#00B300"/>
                </linearGradient>
                <linearGradient id="fintechGradient3" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#FF6B6B"/>
                    <stop offset="100%" stopColor="#FF0000"/>
                </linearGradient>
                </defs>
                {/* Animated Bars (like a growing chart) */}
                <rect x="100" y="800" width="40" height="0" fill="url(#fintechGradient1)" opacity="0.6">
                <animate attributeName="height" values="0;150;0" dur="5s" repeatCount="indefinite"/>
                <animate attributeName="y" values="800;650;800" dur="5s" repeatCount="indefinite"/>
                </rect>
                <rect x="200" y="800" width="40" height="0" fill="url(#fintechGradient2)" opacity="0.6">
                <animate attributeName="height" values="0;100;0" dur="6s" repeatCount="indefinite"/>
                <animate attributeName="y" values="800;700;800" dur="6s" repeatCount="indefinite"/>
                </rect>
                <rect x="300" y="800" width="40" height="0" fill="url(#fintechGradient1)" opacity="0.6">
                <animate attributeName="height" values="0;200;0" dur="7s" repeatCount="indefinite"/>
                <animate attributeName="y" values="800;600;800" dur="7s" repeatCount="indefinite"/>
                </rect>
                <rect x="400" y="800" width="40" height="0" fill="url(#fintechGradient2)" opacity="0.6">
                <animate attributeName="height" values="0;120;0" dur="5.5s" repeatCount="indefinite"/>
                <animate attributeName="y" values="800;680;800" dur="5.5s" repeatCount="indefinite"/>
                </rect>
                <rect x="500" y="800" width="40" height="0" fill="url(#fintechGradient3)" opacity="0.6">
                <animate attributeName="height" values="0;180;0" dur="6.5s" repeatCount="indefinite"/>
                <animate attributeName="y" values="800;620;800" dur="6.5s" repeatCount="indefinite"/>
                </rect>
                <rect x="600" y="800" width="40" height="0" fill="url(#fintechGradient1)" opacity="0.6">
                <animate attributeName="height" values="0;160;0" dur="5s" repeatCount="indefinite"/>
                <animate attributeName="y" values="800;640;800" dur="5s" repeatCount="indefinite"/>
                </rect>
                <rect x="700" y="800" width="40" height="0" fill="url(#fintechGradient2)" opacity="0.6">
                <animate attributeName="height" values="0;140;0" dur="6s" repeatCount="indefinite"/>
                <animate attributeName="y" values="800;660;800" dur="6s" repeatCount="indefinite"/>
                </rect>
                <rect x="800" y="800" width="40" height="0" fill="url(#fintechGradient3)" opacity="0.6">
                <animate attributeName="height" values="0;190;0" dur="7s" repeatCount="indefinite"/>
                <animate attributeName="y" values="800;610;800" dur="7s" repeatCount="indefinite"/>
                </rect>
                <rect x="900" y="800" width="40" height="0" fill="url(#fintechGradient1)" opacity="0.6">
                <animate attributeName="height" values="0;170;0" dur="5.5s" repeatCount="indefinite"/>
                <animate attributeName="y" values="800;630;800" dur="5.5s" repeatCount="indefinite"/>
                </rect>
                <rect x="1000" y="800" width="40" height="0" fill="url(#fintechGradient2)" opacity="0.6">
                <animate attributeName="height" values="0;130;0" dur="6s" repeatCount="indefinite"/>
                <animate attributeName="y" values="800;670;800" dur="6s" repeatCount="indefinite"/>
                </rect>
                <rect x="1100" y="800" width="40" height="0" fill="url(#fintechGradient3)" opacity="0.6">
                <animate attributeName="height" values="0;200;0" dur="7s" repeatCount="indefinite"/>
                <animate attributeName="y" values="800;600;800" dur="7s" repeatCount="indefinite"/>
                </rect>
                <rect x="1200" y="800" width="40" height="0" fill="url(#fintechGradient1)" opacity="0.6">
                <animate attributeName="height" values="0;150;0" dur="5s" repeatCount="indefinite"/>
                <animate attributeName="y" values="800;650;800" dur="5s" repeatCount="indefinite"/>
                </rect>
                <rect x="1300" y="800" width="40" height="0" fill="url(#fintechGradient2)" opacity="0.6">
                <animate attributeName="height" values="0;110;0" dur="6s" repeatCount="indefinite"/>
                <animate attributeName="y" values="800;690;800" dur="6s" repeatCount="indefinite"/>
                </rect>
                <rect x="1400" y="800" width="40" height="0" fill="url(#fintechGradient3)" opacity="0.6">
                <animate attributeName="height" values="0;180;0" dur="7s" repeatCount="indefinite"/>
                <animate attributeName="y" values="800;620;800" dur="7s" repeatCount="indefinite"/>
                </rect>
                {/* Animated Line Graph */}
                <polyline points="0,450 300,400 600,480 900,420 1200,500 1440,450" fill="none" stroke="#00C4FF" strokeWidth="3" opacity="0.4">
                <animate attributeName="points" values="0,450 300,400 600,480 900,420 1200,500 1440,450;0,460 300,390 600,490 900,410 1200,510 1440,460;0,450 300,400 600,480 900,420 1200,500 1440,450" dur="15s" repeatCount="indefinite"/>
                </polyline>
                {/* Animated Dots/Nodes (like network activity) */}
                <circle cx="250" cy="300" r="8" fill="#00C4FF" opacity="0.3">
                <animate attributeName="cy" values="300;320;300" dur="4s" repeatCount="indefinite"/>
                </circle>
                <circle cx="700" cy="250" r="8" fill="#39FF14" opacity="0.3">
                <animate attributeName="cy" values="250;270;250" dur="5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="1000" cy="350" r="8" fill="#007FFF" opacity="0.3">
                <animate attributeName="cy" values="350;370;350" dur="4.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="1300" cy="200" r="8" fill="#00B300" opacity="0.3">
                <animate attributeName="cy" values="200;220;200" dur="6s" repeatCount="indefinite"/>
                </circle>
                {/* Additional Animated Graph on the Right (near the top) */}
                <polyline points="1200,100 1300,80 1400,120 1500,60" fill="none" stroke="#39FF14" strokeWidth="2" opacity="0.4">
                <animate attributeName="points" values="1200,100 1300,80 1400,120 1500,60;1200,110 1300,70 1400,130 1500,50;1200,100 1300,80 1400,120 1500,60" dur="10s" repeatCount="indefinite"/>
                </polyline>
                <rect x="1250" y="150" width="30" height="0" fill="url(#fintechGradient1)" opacity="0.5">
                <animate attributeName="height" values="0;80;0" dur="4s" repeatCount="indefinite"/>
                <animate attributeName="y" values="150;70;150" dur="4s" repeatCount="indefinite"/>
                </rect>
                <rect x="1350" y="150" width="30" height="0" fill="url(#fintechGradient2)" opacity="0.5">
                <animate attributeName="height" values="0;60;0" dur="5s" repeatCount="indefinite"/>
                <animate attributeName="y" values="150;90;150" dur="5s" repeatCount="indefinite"/>
                </rect>
                <rect x="1450" y="150" width="30" height="0" fill="url(#fintechGradient1)" opacity="0.5">
                <animate attributeName="height" values="0;100;0" dur="6s" repeatCount="indefinite"/>
                <animate attributeName="y" values="150;50;150" dur="6s" repeatCount="indefinite"/>
                </rect>
            </svg>
        <div className="market-container">
        <div className="market-header">
            <h1>Market</h1>
            <div className="market-underline"></div>
            <p className="market-subtitle">Live prices for top stocks, updated in real time</p>
        </div>
        <div
            className={`companies-list${swipeDirection ? ' swipe-' + swipeDirection : ''}`}
            ref={listRef}
        >
            {displayedCompanies.map(renderCompanyCard)}
        </div>
        <div className="pagination">
            <button onClick={prevPage} disabled={currentPage === 1}>
            Previous
            </button>
            <span>Page {currentPage}</span>
            <button
            onClick={nextPage}
            disabled={currentPage === Math.ceil(companies.length / companiesPerPage)}
            >
            Next
            </button>
        </div>
        </div>
    </div>
  );
}

export default Market;