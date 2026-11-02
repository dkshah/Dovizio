/**
 * Dovizio Pharmaceutical Solutions — Main Interactive Controller
 * Mobile, Tablet, iPad & Desktop Support
 */

document.addEventListener('DOMContentLoaded', () => {

  // --- Mobile & Tablet Navigation Menu Controller ---
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenuDrawer = document.getElementById('mobileMenuDrawer');

  window.toggleMobileMenu = function() {
    const isOpen = mobileMenuBtn?.classList.contains('open');
    if (isOpen) {
      closeMobileMenu();
    } else {
      openMobileMenu();
    }
  };

  window.openMobileMenu = function() {
    mobileMenuBtn?.classList.add('open');
    mobileMenuDrawer?.classList.add('active');
    document.body.classList.add('menu-open');
  };

  window.closeMobileMenu = function() {
    mobileMenuBtn?.classList.remove('open');
    mobileMenuDrawer?.classList.remove('active');
    document.body.classList.remove('menu-open');
  };

  // Close mobile menu when clicking any mobile navigation link
  document.querySelectorAll('.mobile-nav-links a, .mobile-drawer-cta a').forEach(link => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // Close mobile menu if clicked on the darkened backdrop outside the inner content
  mobileMenuDrawer?.addEventListener('click', (e) => {
    if (e.target === mobileMenuDrawer) {
      closeMobileMenu();
    }
  });

  // Close mobile menu on Escape key press
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMobileMenu();
      closeModal();
    }
  });

  // Auto-close mobile menu if window resized to desktop (> 992px)
  window.addEventListener('resize', () => {
    if (window.innerWidth > 992 && mobileMenuBtn?.classList.contains('open')) {
      closeMobileMenu();
    }
  });


  // --- Interactive Global Presence Hub Highlighting ---
  window.highlightHub = function(hubKey) {
    // Reset all pins & hub cards
    document.querySelectorAll('.map-pin').forEach(pin => {
      const circle = pin.querySelector('circle:nth-child(2)');
      if (circle) {
        circle.setAttribute('fill', '#009688');
        circle.setAttribute('r', '8');
      }
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
    const submitBtn = document.getElementById('submitInquiryBtn');

    const name = form.fullName?.value || 'Valued Partner';
    const company = form.company?.value || 'Enterprise Partner';
    const email = form.email?.value || '';
    const phone = form.phone?.value || 'Not provided';
    const region = form.region?.value || 'Global';
    const track = form.inquiryType?.value || 'General Pharmaceutical Inquiry';
    const dosageFormat = form.dosageFormat?.value || 'Not specified';
    const notes = form.notes?.value || 'No specific notes provided';

    // Unique Reference Number
    const refNum = 'DVZ-' + Math.floor(100000 + Math.random() * 900000);

    // Update UI Loading State
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = 'Transmitting Inquiry... ⏳';
    }

    // Populate confirmation modal
    const modalName = document.getElementById('modalLeadName');
    const modalRef = document.getElementById('modalRefNum');
    const modalSummary = document.getElementById('modalSummary');

    if (modalName) modalName.innerText = name;
    if (modalRef) modalRef.innerText = refNum;
    if (modalSummary) {
      modalSummary.innerHTML = `
        <div style="margin-bottom:6px;"><strong>Solution Track:</strong> <span style="color:#009688; font-weight:700;">${track}</span></div>
        <div style="margin-bottom:6px;"><strong>Enterprise:</strong> ${company} (${region})</div>
        <div style="margin-bottom:6px;"><strong>Corporate Email:</strong> <a href="mailto:${email}" style="color:#009688;">${email}</a></div>
        <div style="margin-bottom:6px;"><strong>Dosage Format:</strong> ${dosageFormat}</div>
        <div style="margin-top:10px; padding-top:8px; border-top:1px dashed #cbd5e1; font-size:12px; color:#64748b;">
          <em>Our Business Development committee at Raleigh, NC will review your specifications and respond within 24 business hours.</em>
        </div>
      `;
    }

    // FormSubmit payload
    const payload = {
      _subject: `[Dovizio RFP] ${track} — ${company} (Ref: ${refNum})`,
      _template: 'table',
      _captcha: 'false',
      _replyto: email,
      'Reference ID': refNum,
      'Full Name': name,
      'Organization / Enterprise': company,
      'Corporate Email': email,
      'Phone / WhatsApp': phone,
      'Target Geography': region,
      'Solution Track': track,
      'Dosage Format': dosageFormat,
      'Project Scope & Specifications': notes,
      'Submission Timestamp': new Date().toUTCString()
    };

    // Dispatch via FormSubmit AJAX to corporate inquiries desk
    fetch('https://formsubmit.co/ajax/bd@doviziopharma.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(payload)
    })
    .catch(() => {
      // Graceful fallback for offline / adblocker
    })
    .finally(() => {
      const modal = document.getElementById('confirmModal');
      if (modal) modal.classList.add('active');

      if (submitBtn) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = 'Submit Confidential Enterprise Inquiry ➔';
      }
      form.reset();
    });
  };

  window.closeModal = function() {
    const modal = document.getElementById('confirmModal');
    if (modal) modal.classList.remove('active');
  };

});
