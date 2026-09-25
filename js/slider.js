/**
 * Project Proposal Slide Gallery / Carousel Component
 * Handles interactive slide browsing, thumbnails, keyboard navigation, and fullscreen modal
 */

document.addEventListener('DOMContentLoaded', () => {
  const sliderContainer = document.querySelector('.project-slide-gallery');
  if (!sliderContainer) return;

  const slidesData = [
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

  let currentIndex = 0;
  const mainImage = sliderContainer.querySelector('.gallery-main-image');
  const captionEs = sliderContainer.querySelector('.gallery-caption [data-lang="es"]');
  const captionCa = sliderContainer.querySelector('.gallery-caption [data-lang="ca"]');
  const captionEn = sliderContainer.querySelector('.gallery-caption [data-lang="en"]');
  const captionJa = sliderContainer.querySelector('.gallery-caption [data-lang="ja"]');
  const counterText = sliderContainer.querySelector('.gallery-counter-text');
  const prevBtn = sliderContainer.querySelector('.gallery-prev-btn');
  const nextBtn = sliderContainer.querySelector('.gallery-next-btn');
  const thumbnailsContainer = sliderContainer.querySelector('.gallery-thumbnails');

  // Build thumbnails
  slidesData.forEach((slide, idx) => {
    const thumb = document.createElement('button');
    thumb.className = `gallery-thumb-btn ${idx === 0 ? 'active' : ''}`;
    thumb.setAttribute('type', 'button');
    thumb.setAttribute('aria-label', `Slide ${slide.page}`);
    thumb.innerHTML = `
      <img src="${slide.file}" alt="Thumbnail p.${slide.page}" loading="lazy">
      <span class="thumb-page-badge">p.${slide.page}</span>
    `;
    thumb.addEventListener('click', () => {
      goToSlide(idx);
    });
    thumbnailsContainer.appendChild(thumb);
  });

  function updateSlide(index) {
    currentIndex = index;
    const slide = slidesData[currentIndex];

    // Fade effect on image
    mainImage.style.opacity = '0.4';
    setTimeout(() => {
      mainImage.src = slide.file;
      mainImage.alt = slide.title_en;
      mainImage.style.opacity = '1';
    }, 150);

    // Update captions
    if (captionEs) captionEs.innerHTML = `<strong>Figura 4 (${slide.page}/70):</strong> ${slide.title_es}`;
    if (captionCa) captionCa.innerHTML = `<strong>Figura 4 (${slide.page}/70):</strong> ${slide.title_ca}`;
    if (captionEn) captionEn.innerHTML = `<strong>Figure 4 (${slide.page}/70):</strong> ${slide.title_en}`;
    if (captionJa) captionJa.innerHTML = `<strong>図4 (${slide.page}/70ページ):</strong> ${slide.title_ja}`;

    // Update counter
    if (counterText) {
      counterText.textContent = `${currentIndex + 1} / ${slidesData.length} (p.${slide.page})`;
    }

    // Update active thumbnail
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

  function goToSlide(index) {
    if (index < 0) {
      index = slidesData.length - 1;
    } else if (index >= slidesData.length) {
      index = 0;
    }
    updateSlide(index);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => goToSlide(currentIndex - 1));
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', () => goToSlide(currentIndex + 1));
  }

  // Keyboard navigation
  sliderContainer.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
      goToSlide(currentIndex - 1);
    } else if (e.key === 'ArrowRight') {
      goToSlide(currentIndex + 1);
    }
  });

  // Modal / Fullscreen Viewer
  const modal = document.createElement('div');
  modal.className = 'gallery-modal';
  modal.innerHTML = `
    <div class="gallery-modal-overlay"></div>
    <div class="gallery-modal-content">
      <button class="gallery-modal-close" aria-label="Cerrar">&times;</button>
      <img src="" alt="Zoomed slide" class="gallery-modal-img">
      <div class="gallery-modal-caption"></div>
    </div>
  `;
  document.body.appendChild(modal);

  const modalImg = modal.querySelector('.gallery-modal-img');
  const modalClose = modal.querySelector('.gallery-modal-close');
  const modalOverlay = modal.querySelector('.gallery-modal-overlay');

  mainImage.style.cursor = 'zoom-in';
  mainImage.addEventListener('click', () => {
    const slide = slidesData[currentIndex];
    modalImg.src = slide.file;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
  });

  function closeModal() {
    modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', closeModal);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
});
