/**
 * Project Proposal & Analysis Slide Gallery / Carousel Component
 * Handles interactive slide browsing, thumbnails, keyboard navigation, and universal fullscreen modal
 */

(function() {
  const analysisSlidesData = [
    {
      page: 24,
      file: '../images/projects/tfm_upc/analysis_slides/slide_24.png',
      title_es: 'Marco Territorial del AAE: Diagnóstico ambiental y contexto metropolitano (p.24)',
      title_ca: 'Marc Territorial de l\'AAE: Diagnòstic ambiental i context metropolità (p.24)',
      title_en: 'Territorial Framework of AAE: Environmental Diagnosis & Metropolitan Context (p.24)',
      title_ja: '特別重点地域（AAE）の空間フレームワーク：環境診断と大都市圏コンテクスト（p.24）'
    },
    {
      page: 25,
      file: '../images/projects/tfm_upc/analysis_slides/slide_25.png',
      title_es: 'Evaluación de la Calidad del Aire: Estaciones de monitoreo y marco normativo (p.25)',
      title_ca: 'Avaluació de la Qualitat de l\'Aire: Estacions de monitoratge i marc normatiu (p.25)',
      title_en: 'Air Quality Assessment: Monitoring Stations & Regulatory Framework (p.25)',
      title_ja: '大気環境モニタリング評価：観測ステーションと大気質評価基準（p.25）'
    },
    {
      page: 26,
      file: '../images/projects/tfm_upc/analysis_slides/slide_26.png',
      title_es: 'Calidad del Aire: Promedio anual de PM-10 y PM-2.5 (Modelo CALIOPE, Gencat 2023, p.26)',
      title_ca: 'Qualitat de l\'Aire: Mitjana anual de PM-10 i PM-2.5 (Model CALIOPE, Gencat 2023, p.26)',
      title_en: 'Air Quality: Annual Average PM-10 & PM-2.5 (CALIOPE Model, Gencat 2023, p.26)',
      title_ja: '大気質空間モデリング：PM-10およびPM-2.5年間平均濃度分布（CALIOPEモデル、p.26）'
    },
    {
      page: 27,
      file: '../images/projects/tfm_upc/analysis_slides/slide_27.png',
      title_es: 'Temperatura Superficial (LST): Variabilidad estacional y amplitud térmica diurna-nocturna (p.27)',
      title_ca: 'Temperatura Superficial (LST): Variabilitat estacional i amplitud tèrmica diürna-nocturna (p.27)',
      title_en: 'Land Surface Temperature (LST): Seasonal Variability & Diurnal-Nocturnal Amplitude (p.27)',
      title_ja: '地表面温度（LST）解析：季節変動と昼夜温度振幅の空間分布（p.27）'
    },
    {
      page: 28,
      file: '../images/projects/tfm_upc/analysis_slides/slide_28.png',
      title_es: 'Temperatura Superficial LST: Diferencia diurna-nocturna en Invierno (ECOSTRESS 70m, p.28)',
      title_ca: 'Temperatura Superficial LST: Diferència diürna-nocturna a l\'Hivern (ECOSTRESS 70m, p.28)',
      title_en: 'LST Thermal Mapping: Winter Diurnal-Nocturnal Range (ECOSTRESS 70m Resolution, p.28)',
      title_ja: '冬季地表面温度（LST）：昼夜熱格差マップ（ECOSTRESS解像度70m、p.28）'
    },
    {
      page: 29,
      file: '../images/projects/tfm_upc/analysis_slides/slide_29.png',
      title_es: 'Cobertura Vegetal y Verde Urbano: Fragmentación y continuidad ecológica (p.29)',
      title_ca: 'Cobertura Vegetal i Verd Urbà: Fragmentació i continuïtat ecològica (p.29)',
      title_en: 'Urban Green Canopy: Vegetation Fragmentation & Ecological Corridors (p.29)',
      title_ja: '都市植生被覆と緑道ネットワーク：植生の断片化と生態系回廊の分析（p.29）'
    },
    {
      page: 30,
      file: '../images/projects/tfm_upc/analysis_slides/slide_30.png',
      title_es: 'Índice de Vegetación (NDVI): Comparativa estacional Invierno vs Verano (Sentinel-2, p.30)',
      title_ca: 'Índex de Vegetació (NDVI): Comparativa estacional Hivern vs Estiu (Sentinel-2, p.30)',
      title_en: 'Normalized Difference Vegetation Index (NDVI): Winter vs Summer (Sentinel-2, p.30)',
      title_ja: '正規化植生指数（NDVI）：冬季 vs 夏季の植生活性度比較解析（Sentinel-2、p.30）'
    },
    {
      page: 31,
      file: '../images/projects/tfm_upc/analysis_slides/slide_31.png',
      title_es: 'Superficies Impermeables y Mineralización: Índices EBBI, NDBI y NDWI (Landsat 9, p.31)',
      title_ca: 'Superfícies Impermeables i Mineralització: Índexs EBBI, NDBI i NDWI (Landsat 9, p.31)',
      title_en: 'Impervious Surfaces & Mineralization: EBBI, NDBI & NDWI Indices (Landsat 9, p.31)',
      title_ja: '不浸透面・人工鉱物化解析：EBBI・NDBI・NDWI衛星リモートセンシング（Landsat 9、p.31）'
    },
    {
      page: 32,
      file: '../images/projects/tfm_upc/analysis_slides/slide_32.png',
      title_es: 'Humedad Superficial (NDWI): Identificación de estrés hídrico y zonas secas (p.32)',
      title_ca: 'Humitat Superficial (NDWI): Identificació d\'estrès hídric i zones seques (p.32)',
      title_en: 'Surface Moisture Index (NDWI): Water Stress & Soil Dryness Mapping (p.32)',
      title_ja: '正規化水指数（NDWI）：地表面水分環境と乾燥・水ストレス街区の特定（p.32）'
    },
    {
      page: 33,
      file: '../images/projects/tfm_upc/analysis_slides/slide_33.png',
      title_es: 'Confort Térmico: Temperatura Media Radiante (TMRT) y estrés térmico diurno (p.33)',
      title_ca: 'Confort Tèrmic: Temperatura Mitjana Radiant (TMRT) i estrès tèrmic diürn (p.33)',
      title_en: 'Thermal Comfort: Mean Radiant Temperature (TMRT) & Daytime Heat Stress (p.33)',
      title_ja: '熱的快適性（TMRT）：平均放射温度と昼間温熱ストレス空間解析（p.33）'
    },
    {
      page: 34,
      file: '../images/projects/tfm_upc/analysis_slides/slide_34.png',
      title_es: 'TMRT Promedio Diario: Carga térmica superficial en el espacio público (28-38°C, p.34)',
      title_ca: 'TMRT Mitjana Diària: Càrrega tèrmica superficial a l\'espai públic (28-38°C, p.34)',
      title_en: 'Daily Mean TMRT: Heat Exposure Load Across Public Spaces (28-38°C, p.34)',
      title_ja: '日平均TMRT解析：公共空間における地表面熱負荷分布（28〜38℃、p.34）'
    },
    {
      page: 35,
      file: '../images/projects/tfm_upc/analysis_slides/slide_35.png',
      title_es: 'Vulnerabilidad Social: Envejecimiento, desigualdad de género y origen demográfico (p.35)',
      title_ca: 'Vulnerabilitat Social: Envelliment, desigualtat de gènere i origen demogràfic (p.35)',
      title_en: 'Social Vulnerability: Aging Index, Gender Dynamics & Demographic Origins (p.35)',
      title_ja: '社会脆弱性解析：高齢化率・ジェンダー格差・出身国別人口構成（p.35）'
    },
    {
      page: 36,
      file: '../images/projects/tfm_upc/analysis_slides/slide_36.png',
      title_es: 'Nivel Educativo: Distribución territorial de población con estudios superiores (p.36)',
      title_ca: 'Nivell Educatiu: Distribució territorial de població amb estudis superiors (p.36)',
      title_en: 'Educational Attainment: Spatial Distribution of Higher Education Graduates (p.36)',
      title_ja: '教育水準の空間格差：高等教育修了者比率の街区別分布（p.36）'
    },
    {
      page: 37,
      file: '../images/projects/tfm_upc/analysis_slides/slide_37.png',
      title_es: 'Desigualdad Económica Territorial: Tasa de paro y brecha de renta entre secciones (p.37)',
      title_ca: 'Desigualtat Econòmica Territorial: Taxa d\'atur i bretxa de renda entre seccions (p.37)',
      title_en: 'Territorial Economic Inequality: Unemployment Rate & Income Gaps (p.37)',
      title_ja: '地域経済格差：失業率および国勢調査区間での所得格差構造（p.37）'
    },
    {
      page: 38,
      file: '../images/projects/tfm_upc/analysis_slides/slide_38.png',
      title_es: 'Ingresos por Persona: Concentración de rentas bajas en Sant Roc, Artigues y El Remei (p.38)',
      title_ca: 'Ingressos per Persona: Concentració de rendes baixes a Sant Roc, Artigues i El Remei (p.38)',
      title_en: 'Income per Capita: Concentration of Low Incomes in Sant Roc, Artigues & El Remei (p.38)',
      title_ja: '1人当たり所得分布：サン・ロック、アルティゲス、アル・ラメイ地区の低所得集中（p.38）'
    },
    {
      page: 39,
      file: '../images/projects/tfm_upc/analysis_slides/slide_39.png',
      title_es: 'Estructura Urbanística y Usos del Suelo: Calificaciones PGM y tejidos consolidados (p.39)',
      title_ca: 'Estructura Urbanística i Usos del Sòl: Qualificacions PGM i teixits consolidats (p.39)',
      title_en: 'Urban Zoning & Land Use Structure: PGM Planning Codes & Land Fabric (p.39)',
      title_ja: '都市計画用途指定と土地利用：大都市計画（PGM）用途区分と市街地構成（p.39）'
    },
    {
      page: 40,
      file: '../images/projects/tfm_upc/analysis_slides/slide_40.png',
      title_es: 'Déficit de Equipamientos Comunitarios: Ratios por habitante Sant Adrià vs Badalona (p.40)',
      title_ca: 'Dèficit d\'Equipaments Comunitaris: Ràtios per habitant Sant Adrià vs Badalona (p.40)',
      title_en: 'Civic Equipment Deficit: Square Meters per Resident (Sant Adrià vs Badalona, p.40)',
      title_ja: '公共公益施設供給比率：住民1人当たり施設面積格差（サント・アドリア vs バダロナ、p.40）'
    },
    {
      page: 41,
      file: '../images/projects/tfm_upc/analysis_slides/slide_41.png',
      title_es: 'Verde Urbano y Espacios Libres: Diagnóstico de accesibilidad y continuidad de la red (p.41)',
      title_ca: 'Verd Urbà i Espais Lliures: Diagnòstic d\'accessibilitat i continuïtat de la xarxa (p.41)',
      title_en: 'Urban Greenery & Open Spaces: Accessibility & Network Continuity Diagnosis (p.41)',
      title_ja: '都市公園・オープンスペース網：近隣アクセス性と緑地ネットワーク連続性（p.41）'
    },
    {
      page: 42,
      file: '../images/projects/tfm_upc/analysis_slides/slide_42.png',
      title_es: 'Porcentaje de Verde Materializado: Cobertura efectiva de vegetación en el AAE (p.42)',
      title_ca: 'Percentatge de Verd Materialitzat: Cobertura efectiva de vegetació a l\'AAE (p.42)',
      title_en: 'Realized Greenery Ratio: Effective Vegetated Area Across the AAE (p.42)',
      title_ja: '実効緑地率分析：特別重点地域（AAE）における実質植生被覆率（p.42）'
    },
    {
      page: 43,
      file: '../images/projects/tfm_upc/analysis_slides/slide_43.png',
      title_es: 'Red de Transporte Público: Cobertura de Metro, Tram, Bus y Cercanías (12 líneas, p.43)',
      title_ca: 'Xarxa de Transport Públic: Cobertura de Metro, Tram, Bus i Rodalies (12 línies, p.43)',
      title_en: 'Public Transit Network: Coverage of Metro, Tram, Bus & Commuter Rail (12 Lines, p.43)',
      title_ja: '公共交通ネットワーク：地下鉄・トラム・バス・近郊鉄道網のアクセシビリティ（12系統、p.43）'
    },
    {
      page: 44,
      file: '../images/projects/tfm_upc/analysis_slides/slide_44.png',
      title_es: 'Jerarquía Viaria y Barreras Infraestructurales: Impacto del viaducto C-31 y ejes metropolitanos (p.44)',
      title_ca: 'Jerarquia Viària i Barreres Infraestructurals: Impacte del viaducte C-31 i eixos metropolitans (p.44)',
      title_en: 'Street Hierarchy & Infrastructure Severance: Impact of C-31 Motorway Viaduct (p.44)',
      title_ja: '道路階層構造とインフラ分断：C-31高速高架道路および広域幹線による分断影響（p.44）'
    },
    {
      page: 45,
      file: '../images/projects/tfm_upc/analysis_slides/slide_45.png',
      title_es: 'Morfología Edificatoria: Altura, intensidad de ocupación y compacidad urbana (p.45)',
      title_ca: 'Morfologia Edificatòria: Alçada, intensitat d\'ocupació i compacitat urbana (p.45)',
      title_en: 'Building Morphology: Height, Density, Plot Coverage & Urban Compactness (p.45)',
      title_ja: '建物形態・密度解析：階数・敷地利用強度・都市コンパクトネス（p.45）'
    },
    {
      page: 46,
      file: '../images/projects/tfm_upc/analysis_slides/slide_46.png',
      title_es: 'Distribución de Alturas: Número de plantas del parque edificado residencial (p.46)',
      title_ca: 'Distribució d\'Alçades: Nombre de plantes del parc edificat residencial (p.46)',
      title_en: 'Building Height Distribution: Storey Count of Residential Housing Stock (p.46)',
      title_ja: '建築階数分布：住宅ストックの階数別空間分布と高密度街区（p.46）'
    },
    {
      page: 47,
      file: '../images/projects/tfm_upc/analysis_slides/slide_47.png',
      title_es: 'Accesibilidad Vertical: Edificios residenciales de >2 plantas sin ascensor (66,85%, p.47)',
      title_ca: 'Accessibilitat Vertical: Edificis residencials de >2 plantes sense ascensor (66,85%, p.47)',
      title_en: 'Vertical Accessibility Deficit: Multi-Family Buildings Lacking Elevators (66.85%, p.47)',
      title_ja: '垂直バリアフリー課題：エレベーター未設置の集合住宅分布（未設置率66.85%、p.47）'
    },
    {
      page: 48,
      file: '../images/projects/tfm_upc/analysis_slides/slide_48.png',
      title_es: 'Auditoría de Alumbrado Público: Puntos de luz y seguridad en el espacio público (p.48)',
      title_ca: 'Auditoria d\'Enllumenat Públic: Punts de llum i seguretat a l\'espai públic (p.48)',
      title_en: 'Public Street Lighting Audit: Light Point Distribution & Urban Night Safety (p.48)',
      title_ja: '街路灯・夜間照明空間監査：照明配置と夜間歩行安全性・改修優先地点（p.48）'
    }
  ];

  const proposalSlidesData = [
    {
      page: 51,
      file: '../images/projects/tfm_upc/proposal_slides/slide_51.png',
      title_es: 'Zona 1. Artigues: Propuesta de infraestructura ciclista y pacificación urbana (p.51)',
      title_ca: 'Zona 1. Artigues: Proposta d\'infraestructura ciclista i pacificació urbana (p.51)',
      title_en: 'Zone 1. Artigues: Cycling Infrastructure & Urban Pacification Master Plan (p.51)',
      title_ja: 'ゾーン1. アルティゲス地区：自転車インフラ網と交通静穏化基本計画（p.51）'
    },
    {
      page: 52,
      file: '../images/projects/tfm_upc/proposal_slides/slide_52.png',
      title_es: 'Zona 1. Artigues: Red ciclista y pacificación viaria (p.52)',
      title_ca: 'Zona 1. Artigues: Xarxa ciclista i pacificació viària (p.52)',
      title_en: 'Zone 1. Artigues: Cycling Network & Street Pacification Sections (p.52)',
      title_ja: 'ゾーン1. アルティゲス地区：自転車道ネットワークと道路空間再編断面（p.52）'
    },
    {
      page: 53,
      file: '../images/projects/tfm_upc/proposal_slides/slide_53.png',
      title_es: 'Zona 1. Artigues: Sección transversal y diseño de franjas arboladas (p.53)',
      title_ca: 'Zona 1. Artigues: Secció transversal i disseny de franges arbrades (p.53)',
      title_en: 'Zone 1. Artigues: Cross-section & Tree Canopy Shading Design (p.53)',
      title_ja: 'ゾーン1. アルティゲス地区：横断構成と緑陰樹冠・街路植栽詳細（p.53）'
    },
    {
      page: 54,
      file: '../images/projects/tfm_upc/proposal_slides/slide_54.png',
      title_es: 'Zona 1. Artigues: Conectividad ciclista y permeabilidad de accesos (p.54)',
      title_ca: 'Zona 1. Artigues: Connectivitat ciclista i permeabilitat d\'accessos (p.54)',
      title_en: 'Zone 1. Artigues: Cycling Interconnectivity & Access Permeability (p.54)',
      title_ja: 'ゾーン1. アルティゲス地区：自転車動線連続性と地区アクセス透過性（p.54）'
    },
    {
      page: 55,
      file: '../images/projects/tfm_upc/proposal_slides/slide_55.png',
      title_es: 'Zona 1. Artigues: Reurbanización del eje cívico y dinamización comercial (p.55)',
      title_ca: 'Zona 1. Artigues: Reurbanització de l\'eix cívic i dinamització comercial (p.55)',
      title_en: 'Zone 1. Artigues: Civic Axis Street Renovation & Commercial Vitalization (p.55)',
      title_ja: 'ゾーン1. アルティゲス地区：市民軸の再整備と商店街・地域商業活性化（p.55）'
    },
    {
      page: 56,
      file: '../images/projects/tfm_upc/proposal_slides/slide_56.png',
      title_es: 'Zona 1. Artigues: Secciones detalladas y materiales de pavimento drenante (p.56)',
      title_ca: 'Zona 1. Artigues: Seccions detallades i materials de paviment drenant (p.56)',
      title_en: 'Zone 1. Artigues: Detailed Sections & Permeable Pavement Materials (p.56)',
      title_ja: 'ゾーン1. アルティゲス地区：詳細断面構成と透水性舗装マテリアル計画（p.56）'
    },
    {
      page: 57,
      file: '../images/projects/tfm_upc/proposal_slides/slide_57.png',
      title_es: 'Zona 1. Artigues: Solución de continuidad peatonal bajo la autopista C-31 (p.57)',
      title_ca: 'Zona 1. Artigues: Solució de continuïtat de vianants sota l\'autopista C-31 (p.57)',
      title_en: 'Zone 1. Artigues: Pedestrian Continuity Solution Under the C-31 Highway (p.57)',
      title_ja: 'ゾーン1. アルティゲス地区：C-31高速道路高架下の歩行者動線連続化（p.57）'
    },
    {
      page: 58,
      file: '../images/projects/tfm_upc/proposal_slides/slide_58.png',
      title_es: 'Zona 1. Artigues: Viaducto C-31 y conector verde metropolitano (p.58)',
      title_ca: 'Zona 1. Artigues: Viaducte C-31 i connector verd metropolità (p.58)',
      title_en: 'Zone 1. Artigues: C-31 Viaduct Green Connector & Ecological Transition (p.58)',
      title_ja: 'ゾーン1. アルティゲス地区：C-31高架区間のグリーンコネクター化（p.58）'
    },
    {
      page: 59,
      file: '../images/projects/tfm_upc/proposal_slides/slide_59.png',
      title_es: 'Zona 1. Artigues: Pasarela y permeabilidad territorial intermunicipal (p.59)',
      title_ca: 'Zona 1. Artigues: Passarel·la i permeabilitat territorial intermunicipal (p.59)',
      title_en: 'Zone 1. Artigues: Intermunicipal Footbridge & Urban Permeability (p.59)',
      title_ja: 'ゾーン1. アルティゲス地区：自治体間を跨ぐ歩道橋と都市空間の接続（p.59）'
    },
    {
      page: 60,
      file: '../images/projects/tfm_upc/proposal_slides/slide_60.png',
      title_es: 'Zona 1. Artigues: Axonométrica general de la transformación urbana (p.60)',
      title_ca: 'Zona 1. Artigues: Axonomètrica general de la transformació urbana (p.60)',
      title_en: 'Zone 1. Artigues: Comprehensive Axonometric Urban Transformation (p.60)',
      title_ja: 'ゾーン1. アルティゲス地区：地区空間再編の全体アクソノメトリック鳥瞰図（p.60）'
    },
    {
      page: 61,
      file: '../images/projects/tfm_upc/proposal_slides/slide_61.png',
      title_es: 'Zona 1. Artigues - Sant Adrià: Recuperación integral de la Masía Can Rigalt (p.61)',
      title_ca: 'Zona 1. Artigues - Sant Adrià: Recuperació integral de la Masia Can Rigalt (p.61)',
      title_en: 'Zone 1. Artigues - Sant Adrià: Full Heritage Recovery of Can Rigalt Masia (p.61)',
      title_ja: 'ゾーン1. カン・リガルト：歴史的農園遺産カン・リガルト邸の総合再生計画（p.61）'
    },
    {
      page: 62,
      file: '../images/projects/tfm_upc/proposal_slides/slide_62.png',
      title_es: 'Zona 1. Can Rigalt: Programa de equipamiento comunitario y jardín público (p.62)',
      title_ca: 'Zona 1. Can Rigalt: Programa d\'equipament comunitari i jardí públic (p.62)',
      title_en: 'Zone 1. Can Rigalt: Community Civic Hub & Bioclimatic Public Garden (p.62)',
      title_ja: 'ゾーン1. カン・リガルト：地域公共施設プログラムとバイオクライマティック庭園（p.62）'
    },
    {
      page: 63,
      file: '../images/projects/tfm_upc/proposal_slides/slide_63.png',
      title_es: 'Zona 2. El Remei - Sant Joan Baptista: Rehabilitación y patrimonio industrial (p.63)',
      title_ca: 'Zona 2. El Remei - Sant Joan Baptista: Rehabilitació i patrimoni industrial (p.63)',
      title_en: 'Zone 2. El Remei - Sant Joan: Industrial Heritage & Neighborhood Retrofit (p.63)',
      title_ja: 'ゾーン2. アル・ラメイ地区：産業遺産保全と住宅市街地のリノベーション（p.63）'
    },
    {
      page: 64,
      file: '../images/projects/tfm_upc/proposal_slides/slide_64.png',
      title_es: 'Zona 2. El Remei: Regeneración de tejidos residenciales y accesibilidad (p.64)',
      title_ca: 'Zona 2. El Remei: Regeneració de teixits residencials i accessibilitat (p.64)',
      title_en: 'Zone 2. El Remei: Residential Fabric Regeneration & Universal Access (p.64)',
      title_ja: 'ゾーン2. アル・ラメイ地区：住宅団地のバリアフリー化・改修戦略（p.64）'
    },
    {
      page: 65,
      file: '../images/projects/tfm_upc/proposal_slides/slide_65.png',
      title_es: 'Zona 2. El Remei: Transformación de la antigua fábrica en polo cívico - Clave 6b (p.65)',
      title_ca: 'Zona 2. El Remei: Transformació de l\'antiga fàbrica en pol cívic - Clau 6b (p.65)',
      title_en: 'Zone 2. El Remei: Industrial Factory Adaptive Reuse as Civic Hub - Key 6b (p.65)',
      title_ja: 'ゾーン2. アル・ラメイ地区：旧工場跡地（Clave 6b）の文化福祉拠点への転換（p.65）'
    },
    {
      page: 66,
      file: '../images/projects/tfm_upc/proposal_slides/slide_66.png',
      title_es: 'Zona 2. Antigua Fábrica: Planta y programa de economía circular y cultural (p.66)',
      title_ca: 'Zona 2. Antiga Fàbrica: Planta i programa d\'economia circular i cultural (p.66)',
      title_en: 'Zone 2. Former Factory: Floor Plan & Circular Economy/Cultural Incubator (p.66)',
      title_ja: 'ゾーン2. 旧工場跡地：平面図と循環経済・文化創造インキュベーション計画（p.66）'
    },
    {
      page: 67,
      file: '../images/projects/tfm_upc/proposal_slides/slide_67.png',
      title_es: 'Zona 2. El Remei: Pacificación y rediseño de la Plaza Frida Kahlo (p.67)',
      title_ca: 'Zona 2. El Remei: Pacificació i redisseny de la Plaça Frida Kahlo (p.67)',
      title_en: 'Zone 2. El Remei: Traffic Pacification & Plaza Frida Kahlo Redesign (p.67)',
      title_ja: 'ゾーン2. フリーダ・カーロ広場：歩行者空間化と交通静穏化デザイン（p.67）'
    },
    {
      page: 68,
      file: '../images/projects/tfm_upc/proposal_slides/slide_68.png',
      title_es: 'Zona 2. Plaza Frida Kahlo: Espacio de convivencia intergeneracional y SUDS (p.68)',
      title_ca: 'Zona 2. Plaça Frida Kahlo: Espai de convivència intergeneracional i SUDS (p.68)',
      title_en: 'Zone 2. Plaza Frida Kahlo: Intergenerational Community Space & SUDS (p.68)',
      title_ja: 'ゾーン2. フリーダ・カーロ広場：多世代交流空間とSUDS雨水浸透システム（p.68）'
    },
    {
      page: 69,
      file: '../images/projects/tfm_upc/proposal_slides/slide_69.png',
      title_es: 'Zona 2. Instituto B9: Huerto Urbano Transitorio y Laboratorio de Biodiversidad (p.69)',
      title_ca: 'Zona 2. Institut B9: Hort Urbà Transitori i Laboratori de Biodiversitat (p.69)',
      title_en: 'Zone 2. Former B9 Institute: Transitional Urban Garden & Biodiversity Lab (p.69)',
      title_ja: 'ゾーン2. 旧B9高校跡地：暫定都市農園と生物多様性ラボ（2段階用途指定：p.69）'
    },
    {
      page: 70,
      file: '../images/projects/tfm_upc/proposal_slides/slide_70.png',
      title_es: 'Zona 2. Instituto B9: Ciclo estacional, cultivo comunitario y refugio climático (p.70)',
      title_ca: 'Zona 2. Institut B9: Cicle estacional, conreu comunitari i refugi climàtic (p.70)',
      title_en: 'Zone 2. Former B9 Institute: Seasonal Vegetation Cycle & Climate Shelter (p.70)',
      title_ja: 'ゾーン2. 旧B9高校跡地：四季の植生サイクルと気候シェルター機能（p.70）'
    }
  ];

  const campusNordFieldworkSlidesData = [
    {
      page: 10,
      file: '../images/projects/climate/fieldwork_slides/slide_10.png',
      title_es: 'Análisis del Calor: Comportamiento térmico de pavimentos y fachadas (p.10)',
      title_ca: 'Anàlisi de la Calor: Comportament tèrmic de paviments i façanes (p.10)',
      title_en: 'Heat Analysis: Thermal Behaviour of Pavements & Facades (p.10)',
      title_ja: '熱環境分析：舗装材料および建材ファサードの熱的挙動（p.10）'
    },
    {
      page: 11,
      file: '../images/projects/climate/fieldwork_slides/slide_11.png',
      title_es: 'Punto de Medición 01: Plaza Central - Acumulación térmica en pavimentos expuestos (41-46°C, p.11)',
      title_ca: 'Punt de Mesurament 01: Plaça Central - Acumulació tèrmica en paviments exposats (41-46°C, p.11)',
      title_en: 'Measurement Station 01: Central Plaza - Thermal Accumulation on Exposed Pavements (41-46°C, p.11)',
      title_ja: '実測地点01：中央広場 - 直射日光下での舗装材蓄熱と温熱環境実測（41〜46℃、p.11）'
    },
    {
      page: 12,
      file: '../images/projects/climate/fieldwork_slides/slide_12.png',
      title_es: 'Punto de Medición 02: Mesas techadas - Efecto de la sombra en temperatura superficial (27.5°C vs 41.2°C, p.12)',
      title_ca: 'Punt de Mesurament 02: Taules cobertes - Efecte de l\'ombra en temperatura superficial (27.5°C vs 41.2°C, p.12)',
      title_en: 'Measurement Station 02: Covered Tables - Shading Effect on Surface Temperature (27.5°C vs 41.2°C, p.12)',
      title_ja: '実測地点02：屋根付きベンチ・テーブル - 日陰による地表面温度低減効果（27.5℃ vs 41.2℃、p.12）'
    },
    {
      page: 13,
      file: '../images/projects/climate/fieldwork_slides/slide_13.png',
      title_es: 'Punto de Medición 03: Jardín - Comportamiento de superficies permeables y césped (37.9°C, p.13)',
      title_ca: 'Punt de Mesurament 03: Jardí - Comportament de superfícies permeables i gespa (37.9°C, p.13)',
      title_en: 'Measurement Station 03: Garden Lawn - Permeable Surface & Grass Thermal Performance (37.9°C, p.13)',
      title_ja: '実測地点03：緑地・芝生エリア - 透水面・植生による温熱緩和効果（37.9℃、p.13）'
    },
    {
      page: 14,
      file: '../images/projects/climate/fieldwork_slides/slide_14.png',
      title_es: 'Punto de Medición 04: Pasadizo 2do piso - Radiación y acumulación térmica en pasarelas (p.14)',
      title_ca: 'Punt de Mesurament 04: Passadís 2n pis - Radiació i acumulació tèrmica en passarel·les (p.14)',
      title_en: 'Measurement Station 04: 2nd Floor Corridor - Radiation & Thermal Load on Elevated Walkways (p.14)',
      title_ja: '実測地点04：2階連絡通路 - 人工ハード舗装面における熱放射と蓄熱（p.14）'
    },
    {
      page: 15,
      file: '../images/projects/climate/fieldwork_slides/slide_15.png',
      title_es: 'Análisis y Confort del Mobiliario: Patrones de ocupación y estancias según sombra (p.15)',
      title_ca: 'Anàlisi i Confort del Mobiliari: Patrons d\'ocupació i estades segons ombra (p.15)',
      title_en: 'Urban Furniture & Comfort Audit: Occupancy Patterns Dictated by Solar Exposure (p.15)',
      title_ja: 'ファニチャー温熱快適性と空間利用調査：日陰状況と広場滞在パターンの相関（p.15）'
    }
  ];

  const campusNordBaselineSlidesData = [
    {
      page: 24,
      file: '../images/projects/climate/baseline_slides/slide_24.png',
      title_es: 'Bloque 3: Análisis en ENVI-met - Introducción al modelado 3D del estado actual (p.24)',
      title_ca: 'Bloc 3: Anàlisi a ENVI-met - Introducció a la modelització 3D de l\'estat actual (p.24)',
      title_en: 'Block 3: 3D Microclimate Modeling - Baseline Simulation Setup (p.24)',
      title_ja: 'ブロック3：ENVI-met 3D微気候シミュレーション - 現況モデル設定概要（p.24）'
    },
    {
      page: 25,
      file: '../images/projects/climate/baseline_slides/slide_25.png',
      title_es: 'Estado Actual: Temperatura del Aire Potencial a 1,4 m (22/04 y 13/08, p.25)',
      title_ca: 'Estat Actual: Temperatura de l\'Aire Potencial a 1,4 m (22/04 i 13/08, p.25)',
      title_en: 'Baseline: Potential Air Temperature at 1.4 m (April 22 & August 13, p.25)',
      title_ja: '現況解析：歩行者高（1.4m）における気温分布（4月22日実測日 vs 8月13日夏季代表日、p.25）'
    },
    {
      page: 26,
      file: '../images/projects/climate/baseline_slides/slide_26.png',
      title_es: 'Estado Actual: Temperatura del Aire - Cortes transversales día y verano (p.26)',
      title_ca: 'Estat Actual: Temperatura de l\'Aire - Seccions transversals dia i estiu (p.26)',
      title_en: 'Baseline: Air Temperature - Cross-Section Profiles (p.26)',
      title_ja: '現況解析：気温断面プロファイル（実測日 vs 夏季ピーク時、p.26）'
    },
    {
      page: 27,
      file: '../images/projects/climate/baseline_slides/slide_27.png',
      title_es: 'Estado Actual: Velocidad del Viento a 1,4 m - Comportamiento aerodinámico (p.27)',
      title_ca: 'Estat Actual: Velocitat del Vent a 1,4 m - Comportament aerodinàmic (p.27)',
      title_en: 'Baseline: Wind Speed at 1.4 m - Aerodynamic Flow & Stagnation Zones (p.27)',
      title_ja: '現況解析：歩行者高（1.4m）風速分布と大気循環・滞留ゾーン（p.27）'
    },
    {
      page: 28,
      file: '../images/projects/climate/baseline_slides/slide_28.png',
      title_es: 'Estado Actual: Flujo de Viento - Cortes transversales de ventilación (p.28)',
      title_ca: 'Estat Actual: Flux de Vent - Seccions transversals de ventilació (p.28)',
      title_en: 'Baseline: Wind Flow Vectors - Cross-Sectional Ventilation Dynamics (p.28)',
      title_ja: '現況解析：風の流れベクトルと垂直断面風速プロファイル（p.28）'
    },
    {
      page: 29,
      file: '../images/projects/climate/baseline_slides/slide_29.png',
      title_es: 'Estado Actual: Humedad Relativa a 1,4 m - Distribución espacial (p.29)',
      title_ca: 'Estat Actual: Humitat Relativa a 1,4 m - Distribució espacial (p.29)',
      title_en: 'Baseline: Relative Humidity at 1.4 m - Spatial Distribution (p.29)',
      title_ja: '現況解析：歩行者高（1.4m）相対湿度分布（p.29）'
    },
    {
      page: 30,
      file: '../images/projects/climate/baseline_slides/slide_30.png',
      title_es: 'Estado Actual: Humedad Relativa en Verano - Cortes transversales (p.30)',
      title_ca: 'Estat Actual: Humitat Relativa a l\'Estiu - Seccions transversals (p.30)',
      title_en: 'Baseline: Summer Relative Humidity - Cross-Sectional Dynamics (p.30)',
      title_ja: '現況解析：夏季相対湿度の空間断面解析（p.30）'
    },
    {
      page: 31,
      file: '../images/projects/climate/baseline_slides/slide_31.png',
      title_es: 'Estado Actual: Confort Térmico PET a 1,4 m - Estrés térmico extremo (p.31)',
      title_ca: 'Estat Actual: Confort Tèrmic PET a 1,4 m - Estrès tèrmic extrem (p.31)',
      title_en: 'Baseline: PET Thermal Comfort at 1.4 m - Severe Heat Stress Conditions (p.31)',
      title_ja: '現況解析：体感温度（PET）分布 - 直射日光下の極端な温熱ストレス（p.31）'
    },
    {
      page: 32,
      file: '../images/projects/climate/baseline_slides/slide_32.png',
      title_es: 'Estado Actual: Confort PET en Verano - Cortes transversales y carga térmica (p.32)',
      title_ca: 'Estat Actual: Confort PET a l\'Estiu - Seccions transversals i càrrega tèrmica (p.32)',
      title_en: 'Baseline: Summer PET Comfort - Cross-Sectional Heat Load (p.32)',
      title_ja: '現況解析：夏季体感温度PETの空間断面プロファイル（p.32）'
    }
  ];

  const campusNordSimulationSlidesData = [
    {
      page: 52,
      file: '../images/projects/climate/simulation_slides/slide_52.png',
      title_es: 'Bloque 5: Análisis Comparativo de la Propuesta en ENVI-met (p.52)',
      title_ca: 'Bloc 5: Anàlisi Comparativa de la Proposta a ENVI-met (p.52)',
      title_en: 'Block 5: Comparative Analysis of Adaptation Proposal in ENVI-met (p.52)',
      title_ja: 'ブロック5：改修提案のENVI-metシミュレーション比較検証（p.52）'
    },
    {
      page: 53,
      file: '../images/projects/climate/simulation_slides/slide_53.png',
      title_es: 'Propuesta (22/04): Temperatura del Aire a 1,4 m - Efecto de la sombra (p.53)',
      title_ca: 'Proposta (22/04): Temperatura de l\'Aire a 1,4 m - Efecte de l\'ombra (p.53)',
      title_en: 'Proposal (Apr 22): Air Temperature at 1.4 m - Shading Cooling Impact (p.53)',
      title_ja: '提案シミュレーション（4月22日）：歩行者高気温 - 緑陰による気温低減効果（p.53）'
    },
    {
      page: 54,
      file: '../images/projects/climate/simulation_slides/slide_54.png',
      title_es: 'Propuesta (22/04): Temperatura del Aire - Cortes transversales comparativos (p.54)',
      title_ca: 'Proposta (22/04): Temperatura de l\'Aire - Seccions transversals comparatives (p.54)',
      title_en: 'Proposal (Apr 22): Air Temperature - Comparative Cross-Sections (p.54)',
      title_ja: '提案シミュレーション（4月22日）：気温断面の比較プロファイル（p.54）'
    },
    {
      page: 55,
      file: '../images/projects/climate/simulation_slides/slide_55.png',
      title_es: 'Propuesta (22/04): Velocidad del Viento a 1,4 m (p.55)',
      title_ca: 'Proposta (22/04): Velocitat del Vent a 1,4 m (p.55)',
      title_en: 'Proposal (Apr 22): Wind Speed at 1.4 m - Pedestrian Comfort (p.55)',
      title_ja: '提案シミュレーション（4月22日）：歩行者高風速分布（p.55）'
    },
    {
      page: 56,
      file: '../images/projects/climate/simulation_slides/slide_56.png',
      title_es: 'Propuesta (22/04): Velocidad del Viento - Cortes transversales (E. Omega - Aulas) (p.56)',
      title_ca: 'Proposta (22/04): Velocitat del Vent - Seccions transversals (E. Omega - Aules) (p.56)',
      title_en: 'Proposal (Apr 22): Wind Speed - Cross-Sections (p.56)',
      title_ja: '提案シミュレーション（4月22日）：風速断面プロファイル（オメガ棟〜講義棟間、p.56）'
    },
    {
      page: 57,
      file: '../images/projects/climate/simulation_slides/slide_57.png',
      title_es: 'Propuesta (22/04): Humedad Relativa a 1,4 m - Aporte de vegetación y SUDS (p.57)',
      title_ca: 'Proposta (22/04): Humitat Relativa a 1,4 m - Aportació de vegetació i SUDS (p.57)',
      title_en: 'Proposal (Apr 22): Relative Humidity at 1.4 m - Vegetation & SUDS Moisture Contribution (p.57)',
      title_ja: '提案シミュレーション（4月22日）：相対湿度 - 植栽・SUDSによる湿度改善（p.57）'
    },
    {
      page: 58,
      file: '../images/projects/climate/simulation_slides/slide_58.png',
      title_es: 'Propuesta (22/04): Humedad Relativa - Cortes transversales comparativos (p.58)',
      title_ca: 'Proposta (22/04): Humitat Relativa - Seccions transversals comparatives (p.58)',
      title_en: 'Proposal (Apr 22): Relative Humidity - Comparative Cross-Sections (p.58)',
      title_ja: '提案シミュレーション（4月22日）：相対湿度の空間断面比較（p.58）'
    },
    {
      page: 59,
      file: '../images/projects/climate/simulation_slides/slide_59.png',
      title_es: 'Propuesta (22/04): Confort Térmico PET a 1,4 m - Reducción drástica del estrés térmico (p.59)',
      title_ca: 'Proposta (22/04): Confort Tèrmic PET a 1,4 m - Reducció dràstica de l\'estrès tèrmic (p.59)',
      title_en: 'Proposal (Apr 22): PET Thermal Comfort at 1.4 m - Dramatic Heat Stress Reduction (p.59)',
      title_ja: '提案シミュレーション（4月22日）：体感温度PET - 温熱快適域への改善（p.59）'
    },
    {
      page: 60,
      file: '../images/projects/climate/simulation_slides/slide_60.png',
      title_es: 'Propuesta (22/04): Confort PET - Cortes transversales (E. Omega y Plaza) (p.60)',
      title_ca: 'Proposta (22/04): Confort PET - Seccions transversals (E. Omega i Plaça) (p.60)',
      title_en: 'Proposal (Apr 22): PET Comfort - Cross-Section Profiles (p.60)',
      title_ja: '提案シミュレーション（4月22日）：体感温度PETの空間断面プロファイル（p.60）'
    },
    {
      page: 61,
      file: '../images/projects/climate/simulation_slides/slide_61.png',
      title_es: 'Propuesta (Verano 13/08): Temperatura del Aire a 1,4 m en pico de calor (p.61)',
      title_ca: 'Proposta (Estiu 13/08): Temperatura de l\'Aire a 1,4 m en pic de calor (p.61)',
      title_en: 'Proposal (Summer Aug 13): Air Temperature at 1.4 m During Peak Heat (p.61)',
      title_ja: '提案シミュレーション（夏季8月13日）：ピーク時気温分布（p.61）'
    },
    {
      page: 62,
      file: '../images/projects/climate/simulation_slides/slide_62.png',
      title_es: 'Propuesta (Verano 13/08): Temperatura del Aire - Cortes transversales (p.62)',
      title_ca: 'Proposta (Estiu 13/08): Temperatura de l\'Aire - Seccions transversals (p.62)',
      title_en: 'Proposal (Summer Aug 13): Air Temperature - Cross-Section Profiles (p.62)',
      title_ja: '提案シミュレーション（夏季8月13日）：気温断面プロファイル（p.62）'
    },
    {
      page: 63,
      file: '../images/projects/climate/simulation_slides/slide_63.png',
      title_es: 'Propuesta (Verano 13/08): Velocidad del Viento a 1,4 m (p.63)',
      title_ca: 'Proposta (Estiu 13/08): Velocitat del Vent a 1,4 m (p.63)',
      title_en: 'Proposal (Summer Aug 13): Wind Speed at 1.4 m (p.63)',
      title_ja: '提案シミュレーション（夏季8月13日）：歩行者高風速分布（p.63）'
    },
    {
      page: 64,
      file: '../images/projects/climate/simulation_slides/slide_64.png',
      title_es: 'Propuesta (Verano 13/08): Flujo de Viento - Cortes transversales (p.64)',
      title_ca: 'Proposta (Estiu 13/08): Flux de Vent - Seccions transversals (p.64)',
      title_en: 'Proposal (Summer Aug 13): Wind Flow - Cross-Section Profiles (p.64)',
      title_ja: '提案シミュレーション（夏季8月13日）：風速断面プロファイル（p.64）'
    },
    {
      page: 65,
      file: '../images/projects/climate/simulation_slides/slide_65.png',
      title_es: 'Propuesta (Verano 13/08): Humedad Relativa a 1,4 m (p.65)',
      title_ca: 'Proposta (Estiu 13/08): Humitat Relativa a 1,4 m (p.65)',
      title_en: 'Proposal (Summer Aug 13): Relative Humidity at 1.4 m (p.65)',
      title_ja: '提案シミュレーション（夏季8月13日）：歩行者高相対湿度（p.65）'
    },
    {
      page: 66,
      file: '../images/projects/climate/simulation_slides/slide_66.png',
      title_es: 'Propuesta (Verano 13/08): Humedad Relativa - Comparativa Estado Actual vs Propuesta (p.66)',
      title_ca: 'Proposta (Estiu 13/08): Humitat Relativa - Comparativa Estat Actual vs Proposta (p.66)',
      title_en: 'Proposal (Summer Aug 13): Relative Humidity - Baseline vs Proposal Cross-Sections (p.66)',
      title_ja: '提案シミュレーション（夏季8月13日）：相対湿度 現状 vs 提案 断面比較（p.66）'
    },
    {
      page: 67,
      file: '../images/projects/climate/simulation_slides/slide_67.png',
      title_es: 'Propuesta (Verano 13/08): Confort Térmico PET a 1,4 m - Comparativa de reducción de estrés térmico (p.67)',
      title_ca: 'Proposta (Estiu 13/08): Confort Tèrmic PET a 1,4 m - Comparativa de reducció d\'estrès térmic (p.67)',
      title_en: 'Proposal (Summer Aug 13): PET Comfort at 1.4 m - Direct Baseline vs Proposal Comparison (p.67)',
      title_ja: '提案シミュレーション（夏季8月13日）：体感温度PET 現状 vs 提案 比較検証（p.67）'
    },
    {
      page: 68,
      file: '../images/projects/climate/simulation_slides/slide_68.png',
      title_es: 'Propuesta (Verano 13/08): Confort PET - Cortes transversales comparativos Actual vs Propuesta (p.68)',
      title_ca: 'Proposta (Estiu 13/08): Confort PET - Seccions transversals comparatives Actual vs Proposta (p.68)',
      title_en: 'Proposal (Summer Aug 13): PET Comfort - Cross-Sections Baseline vs Proposal (p.68)',
      title_ja: '提案シミュレーション（夏季8月13日）：体感温度PET 空間断面比較 現状 vs 提案（p.68）'
    }
  ];

  // Universal Lightbox Modal Helper
  let modal = null;
  let modalImg = null;
  let modalCaption = null;

  function setupUniversalModal() {
    modal = document.querySelector('.gallery-modal');
    if (!modal) {
      modal = document.createElement('div');
      modal.className = 'gallery-modal';
      modal.innerHTML = `
        <div class="gallery-modal-overlay"></div>
        <div class="gallery-modal-content">
          <button class="gallery-modal-close" aria-label="Cerrar">&times;</button>
          <img src="" alt="Zoomed image" class="gallery-modal-img">
          <div class="gallery-modal-caption"></div>
        </div>
      `;
      document.body.appendChild(modal);
    }

    modalImg = modal.querySelector('.gallery-modal-img');
    modalCaption = modal.querySelector('.gallery-modal-caption');
    const modalClose = modal.querySelector('.gallery-modal-close');
    const modalOverlay = modal.querySelector('.gallery-modal-overlay');

    if (modalClose) modalClose.addEventListener('click', closeModal);
    if (modalOverlay) modalOverlay.addEventListener('click', closeModal);
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
      }
    });

    // Attach to all non-gallery zoomable boxes
    document.querySelectorAll('.slide-viewer-box, .zoomable-map').forEach(box => {
      box.addEventListener('click', () => {
        const img = box.querySelector('img');
        if (!img) return;
        const container = box.closest('.slide-container');
        let capText = '';
        if (container) {
          const currentLang = document.documentElement.lang || document.body.className.replace('lang-', '') || 'es';
          const capSpan = container.querySelector('.slide-caption [data-lang="' + currentLang + '"]') || container.querySelector('.slide-caption');
          if (capSpan) capText = capSpan.textContent.trim();
        }
        openModal(img.src, capText);
      });
    });
  }

  function openModal(src, captionText) {
    if (!modal || !modalImg) return;
    modalImg.src = src;
    if (modalCaption) {
      if (captionText) {
        modalCaption.textContent = captionText;
        modalCaption.style.display = 'block';
      } else {
        modalCaption.style.display = 'none';
      }
    }
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  function closeModal() {
    if (!modal) return;
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function initSingleGallery(sliderContainer, slidesData, figurePrefix) {
    if (!sliderContainer || !slidesData || slidesData.length === 0) return;

    let currentIndex = 0;
    const mainImage = sliderContainer.querySelector('.gallery-main-image');
    const captionEs = sliderContainer.querySelector('.gallery-caption [data-lang="es"]');
    const captionCa = sliderContainer.querySelector('.gallery-caption [data-lang="ca"]');
    const captionEn = sliderContainer.querySelector('.gallery-caption [data-lang="en"]');
    const captionJa = sliderContainer.querySelector('.gallery-caption [data-lang="ja"]');
    const counterText = sliderContainer.querySelector('.gallery-counter-text');
    const prevBtn = sliderContainer.querySelector('.gallery-prev-btn');
    const nextBtn = sliderContainer.querySelector('.gallery-next-btn');
    const thumbsScrollLeft = sliderContainer.querySelector('.gallery-thumb-scroll-left');
    const thumbsScrollRight = sliderContainer.querySelector('.gallery-thumb-scroll-right');
    const thumbnailsWrapper = sliderContainer.querySelector('.gallery-thumbnails-wrapper');
    const thumbnailsContainer = sliderContainer.querySelector('.gallery-thumbnails');

    // Generate thumbnails if empty
    if (thumbnailsContainer && thumbnailsContainer.children.length === 0) {
      slidesData.forEach((slide, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = `gallery-thumb-btn ${idx === 0 ? 'active' : ''}`;
        btn.setAttribute('data-slide-index', idx);
        btn.setAttribute('aria-label', `Slide p.${slide.page}`);
        btn.title = `p.${slide.page}: ${slide.title_es}`;
        btn.innerHTML = `
          <img src="${slide.file}" alt="Slide p.${slide.page}" loading="lazy">
          <span class="thumb-page-badge">p.${slide.page}</span>
        `;
        thumbnailsContainer.appendChild(btn);
      });
    }

    // Bind click events on thumbnails
    const thumbButtons = thumbnailsContainer ? thumbnailsContainer.querySelectorAll('.gallery-thumb-btn') : [];
    thumbButtons.forEach((thumb, idx) => {
      thumb.addEventListener('click', (e) => {
        e.preventDefault();
        goToSlide(idx);
      });
    });

    function updateSlide(index) {
      if (index < 0) index = slidesData.length - 1;
      if (index >= slidesData.length) index = 0;
      currentIndex = index;
      const slide = slidesData[currentIndex];

      if (mainImage) {
        mainImage.style.opacity = '0.3';
        setTimeout(() => {
          mainImage.src = slide.file;
          mainImage.alt = slide.title_en;
          mainImage.style.opacity = '1';
        }, 120);
      }

      // Update captions
      const figLabelEs = figurePrefix || 'Figura';
      const figLabelEn = figurePrefix === 'Figura 3' ? 'Figure 3' : (figurePrefix === 'Figura 4' ? 'Figure 4' : 'Figure');
      const figLabelJa = figurePrefix === 'Figura 3' ? '図3' : (figurePrefix === 'Figura 4' ? '図4' : '図');

      if (captionEs) captionEs.innerHTML = `<strong>${figLabelEs} (${slide.page}):</strong> ${slide.title_es}`;
      if (captionCa) captionCa.innerHTML = `<strong>${figLabelEs} (${slide.page}):</strong> ${slide.title_ca}`;
      if (captionEn) captionEn.innerHTML = `<strong>${figLabelEn} (${slide.page}):</strong> ${slide.title_en}`;
      if (captionJa) captionJa.innerHTML = `<strong>${figLabelJa} (${slide.page}ページ):</strong> ${slide.title_ja}`;

      // Update counter
      if (counterText) {
        counterText.textContent = `${currentIndex + 1} / ${slidesData.length} (p.${slide.page})`;
      }

      // Update active thumbnail
      if (thumbnailsContainer) {
        const allThumbs = thumbnailsContainer.querySelectorAll('.gallery-thumb-btn');
        allThumbs.forEach((tb, i) => {
          if (i === currentIndex) {
            tb.classList.add('active');
            tb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
          } else {
            tb.classList.remove('active');
          }
        });
      }
    }

    function goToSlide(index) {
      updateSlide(index);
    }

    if (prevBtn) {
      prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        goToSlide(currentIndex - 1);
      });
    }
    if (nextBtn) {
      nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        goToSlide(currentIndex + 1);
      });
    }

    // Thumbnail ribbon scroll arrows
    if (thumbsScrollLeft && thumbnailsWrapper) {
      thumbsScrollLeft.addEventListener('click', (e) => {
        e.preventDefault();
        thumbnailsWrapper.scrollBy({ left: -240, behavior: 'smooth' });
      });
    }
    if (thumbsScrollRight && thumbnailsWrapper) {
      thumbsScrollRight.addEventListener('click', (e) => {
        e.preventDefault();
        thumbnailsWrapper.scrollBy({ left: 240, behavior: 'smooth' });
      });
    }

    // Keyboard navigation when gallery is focused
    sliderContainer.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowLeft') {
        goToSlide(currentIndex - 1);
      } else if (e.key === 'ArrowRight') {
        goToSlide(currentIndex + 1);
      }
    });

    if (mainImage) {
      mainImage.style.cursor = 'zoom-in';
      mainImage.addEventListener('click', () => {
        const slide = slidesData[currentIndex];
        const currentLang = document.documentElement.lang || document.body.className.replace('lang-', '') || 'es';
        let cap = slide.title_es;
        if (currentLang === 'ca') cap = slide.title_ca;
        else if (currentLang === 'en') cap = slide.title_en;
        else if (currentLang === 'ja') cap = slide.title_ja;
        openModal(slide.file, `p.${slide.page}: ${cap}`);
      });
    }

    // Initial state
    updateSlide(0);
  }

  function initAllGalleries() {
    setupUniversalModal();

    // 1. TFM Analysis Gallery (p.24-48)
    const analysisGallery = document.getElementById('analysis-slide-gallery');
    if (analysisGallery) {
      initSingleGallery(analysisGallery, analysisSlidesData, 'Figura 3');
    }

    // 2. TFM Proposal Gallery (p.51-70)
    const proposalGallery = document.getElementById('proposal-slide-gallery');
    if (proposalGallery) {
      initSingleGallery(proposalGallery, proposalSlidesData, 'Figura 4');
    }

    // 3. Campus Nord Fieldwork Gallery (p.10-15)
    const climateFieldworkGallery = document.getElementById('climate-fieldwork-gallery');
    if (climateFieldworkGallery) {
      initSingleGallery(climateFieldworkGallery, campusNordFieldworkSlidesData, 'Figura 1b');
    }

    // 4. Campus Nord Baseline ENVI-met Gallery (p.24-32)
    const climateBaselineGallery = document.getElementById('climate-baseline-gallery');
    if (climateBaselineGallery) {
      initSingleGallery(climateBaselineGallery, campusNordBaselineSlidesData, 'Figura 3b');
    }

    // 5. Campus Nord Simulation Proposal Gallery (p.52-68)
    const climateSimulationGallery = document.getElementById('climate-simulation-gallery');
    if (climateSimulationGallery) {
      initSingleGallery(climateSimulationGallery, campusNordSimulationSlidesData, 'Figura 6b');
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAllGalleries);
  } else {
    initAllGalleries();
  }
})();
