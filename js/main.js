/**
 * Dovizio Pharmaceutical Solutions — Studio & Interactive Controller
 */

document.addEventListener('DOMContentLoaded', () => {
  // --- Canvas Zoom Controller ---
  const showcaseGrid = document.getElementById('showcaseGrid');
  const zoomSelect = document.getElementById('zoomSelect');
  let currentZoom = 1;

  window.setZoom = function(val) {
    if (!showcaseGrid) return;
    if (val === 'fit') {
      const containerWidth = document.querySelector('.showcase-viewport')?.clientWidth || window.innerWidth;
      const naturalWidth = 1750; // approximate natural width of 4 columns
      const calculated = Math.min(1, Math.max(0.4, (containerWidth - 80) / naturalWidth));
      currentZoom = calculated;
    } else {
      currentZoom = parseFloat(val);
    }
    showcaseGrid.style.transform = `scale(${currentZoom})`;
    if (zoomSelect) zoomSelect.value = val;
  };

  // --- View Mode Switcher ---
  const canvasModeBtn = document.getElementById('canvasModeBtn');
  const singleModeBtn = document.getElementById('singleModeBtn');
  const showcaseViewport = document.getElementById('showcaseViewport');
  const singlePageContainer = document.getElementById('singlePageContainer');

  window.switchViewMode = function(mode) {
    if (mode === 'canvas') {
      canvasModeBtn?.classList.add('active');
      singleModeBtn?.classList.remove('active');
      if (showcaseViewport) showcaseViewport.style.display = 'block';
      if (singlePageContainer) singlePageContainer.style.display = 'none';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      singleModeBtn?.classList.add('active');
      canvasModeBtn?.classList.remove('active');
      if (showcaseViewport) showcaseViewport.style.display = 'none';
      if (singlePageContainer) singlePageContainer.style.display = 'block';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // --- Quick Page Selector for Single Mode ---
  window.loadSinglePage = function(pageId) {
    switchViewMode('single');
    const pages = document.querySelectorAll('.single-page-view');
    pages.forEach(p => p.style.display = 'none');
    
    const target = document.getElementById(`single-${pageId}`);
    if (target) {
      target.style.display = 'block';
    }
    
    // Update active nav links
    document.querySelectorAll('.single-nav-link').forEach(link => {
      if (link.getAttribute('data-target') === pageId) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // --- Fullscreen 16:9 Presentation Mode ---
  window.toggleFullscreenShowcase = function() {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(err => {
        console.warn(`Fullscreen error: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  // --- Design System Drawer ---
  const dsDrawer = document.getElementById('dsDrawer');
  window.toggleDesignSystem = function() {
    dsDrawer?.classList.toggle('open');
  };

  // Copy Color HEX on Click
  window.copyColor = function(hex, el) {
    navigator.clipboard?.writeText(hex).then(() => {
      const orig = el.innerText;
      el.innerText = 'COPIED!';
      setTimeout(() => { el.innerText = orig; }, 1500);
    });
  };

  // --- Interactive Global Presence Hub Highlighting ---
  window.highlightHub = function(hubKey) {
    // Reset all pins & hub cards
    document.querySelectorAll('.map-pin').forEach(pin => {
      pin.setAttribute('fill', '#009688');
      pin.setAttribute('r', '7');
    });
    document.querySelectorAll('.hub-card').forEach(card => {
      card.style.borderColor = '#e2e8f0';
      card.style.backgroundColor = '#ffffff';
    });

    const activePin = document.getElementById(`pin-${hubKey}`);
    if (activePin) {
      activePin.setAttribute('fill', '#38bdf8');
      activePin.setAttribute('r', '12');
    }

    const activeCard = document.getElementById(`card-${hubKey}`);
    if (activeCard) {
      activeCard.style.borderColor = '#009688';
      activeCard.style.backgroundColor = '#f0fdfa';
      activeCard.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  };

  // --- Dosage Form Matrix Interactive Details ---
  window.selectDosageForm = function(dosageType) {
    document.querySelectorAll('.dosage-card').forEach(c => {
      c.style.borderColor = '#e2e8f0';
      c.style.backgroundColor = '#ffffff';
    });
    const selected = document.getElementById(`dosage-${dosageType}`);
    if (selected) {
      selected.style.borderColor = '#009688';
      selected.style.backgroundColor = '#f0fdfa';
    }
  };

  // --- Contact Form Submission Handler ---
  window.handleInquirySubmit = function(e) {
    e.preventDefault();
    const form = e.target;
    const name = form.fullName?.value || 'Valued Partner';
    const company = form.company?.value || 'Enterprise Partner';
    const email = form.email?.value || '';
    const track = form.inquiryType?.value || 'General Pharmaceutical Inquiry';

    // Random Ref Number
    const refNum = 'DVZ-' + Math.floor(100000 + Math.random() * 900000);

    // Populate modal
    const modalName = document.getElementById('modalLeadName');
    const modalRef = document.getElementById('modalRefNum');
    const modalSummary = document.getElementById('modalSummary');

    if (modalName) modalName.innerText = name;
    if (modalRef) modalRef.innerText = refNum;
    if (modalSummary) {
      modalSummary.innerHTML = `
        <strong>Track:</strong> ${track}<br/>
        <strong>Company:</strong> ${company}<br/>
        <strong>Work Email:</strong> ${email}<br/>
        <em>Our BD team at Raleigh, NC will respond within 24 business hours.</em>
      `;
    }

    const modal = document.getElementById('confirmModal');
    if (modal) modal.classList.add('active');

    form.reset();
  };

  window.closeModal = function() {
    const modal = document.getElementById('confirmModal');
    if (modal) modal.classList.remove('active');
  };

  // Initial Responsive Fit
  if (window.innerWidth < 1440) {
    setZoom('fit');
  }
});
