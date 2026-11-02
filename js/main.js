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


  // --- Helper to Generate Website-Based Email Template ---
  function generateWebsiteEmailTemplate(data) {
    return `
      <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background:#f1f5f9; padding:16px 8px; color:#0f172a;">
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width:580px; margin:0 auto; background:#ffffff; border-radius:12px; overflow:hidden; border:1px solid #e2e8f0; box-shadow:0 6px 20px rgba(10,25,47,0.06);">
          
          <!-- Header -->
          <tr>
            <td style="background: linear-gradient(135deg, #0a192f 0%, #0d213f 100%); padding:24px 28px; border-bottom:3px solid #009688;">
              <table role="presentation" width="100%">
                <tr>
                  <td valign="middle">
                    <div style="font-size:20px; font-weight:800; color:#ffffff; line-height:1.1;">Dovizio</div>
                    <div style="font-size:10.5px; font-weight:700; color:#14b8a6; text-transform:uppercase; letter-spacing:0.08em; margin-top:2px;">Pharmaceutical Solutions</div>
                  </td>
                  <td align="right" valign="middle">
                    <span style="background:rgba(20,184,166,0.18); border:1px solid rgba(20,184,166,0.4); color:#2dd4bf; padding:4px 10px; border-radius:16px; font-size:10px; font-weight:700; text-transform:uppercase;">
                      New RFP
                    </span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Ref & Timestamp Banner -->
          <tr>
            <td style="background:#f8fafc; padding:16px 28px; border-bottom:1px solid #e2e8f0;">
              <div style="font-size:11px; font-weight:800; color:#009688; text-transform:uppercase; letter-spacing:0.08em; margin-bottom:2px;">
                Enterprise Pipeline Dispatch
              </div>
              <div style="font-size:16px; font-weight:800; color:#0a192f;">
                Technical Proposal & Partnership Request
              </div>
              <div style="margin-top:6px; font-size:12px; color:#64748b;">
                Reference: <strong style="color:#0a192f; background:#e6f4f1; padding:2px 6px; border-radius:4px; border:1px solid #14b8a6;">${data.refNum}</strong> &bull; Received: <span>${data.timestamp}</span>
              </div>
            </td>
          </tr>

          <!-- Section 1: Lead Profile -->
          <tr>
            <td style="padding:20px 28px 10px 28px;">
              <div style="font-size:11px; font-weight:800; color:#0a192f; text-transform:uppercase; letter-spacing:0.06em; margin-bottom:10px; border-bottom:1px solid #e2e8f0; padding-bottom:4px;">
                1. Prospective Partner Profile
              </div>
              <table role="presentation" width="100%" style="font-size:13px; line-height:1.5;">
                <tr>
                  <td width="50%" style="padding-bottom:8px; vertical-align:top;">
                    <span style="color:#64748b; font-size:10.5px; text-transform:uppercase; font-weight:600; display:block;">Full Name</span>
                    <strong style="color:#0f172a; font-size:14px;">${data.fullName}</strong>
                  </td>
                  <td width="50%" style="padding-bottom:8px; vertical-align:top;">
                    <span style="color:#64748b; font-size:10.5px; text-transform:uppercase; font-weight:600; display:block;">Corporate Email</span>
                    <a href="mailto:${data.email}" style="color:#009688; text-decoration:none; font-weight:700; font-size:14px;">${data.email}</a>
                  </td>
                </tr>
                <tr>
                  <td style="padding-bottom:8px; vertical-align:top;">
                    <span style="color:#64748b; font-size:10.5px; text-transform:uppercase; font-weight:600; display:block;">Organization / Enterprise</span>
                    <strong style="color:#0f172a;">${data.company}</strong>
                  </td>
                  <td style="padding-bottom:8px; vertical-align:top;">
                    <span style="color:#64748b; font-size:10.5px; text-transform:uppercase; font-weight:600; display:block;">Phone / WhatsApp</span>
                    <span style="color:#0f172a;">${data.phone || 'Not provided'}</span>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Section 2: Technical Parameters -->
          <tr>
            <td style="padding:10px 28px;">
              <div style="font-size:11px; font-weight:800; color:#0a192f; text-transform:uppercase; letter-spacing:0.06em; margin-bottom:10px; border-bottom:1px solid #e2e8f0; padding-bottom:4px;">
                2. Scope & Technical Parameters
              </div>
              <table role="presentation" width="100%" style="background:#f8fafc; border:1px solid #e2e8f0; border-radius:8px; font-size:12.5px;">
                <tr>
                  <td style="padding:12px 16px;">
                    <div style="margin-bottom:6px;">
                      <span style="color:#64748b; font-weight:600;">Solution Track:</span>
                      <strong style="color:#009688; margin-left:6px;">${data.inquiryType}</strong>
                    </div>
                    <div style="margin-bottom:6px;">
                      <span style="color:#64748b; font-weight:600;">Target Geography:</span>
                      <span style="color:#0f172a; font-weight:600; margin-left:6px;">${data.region}</span>
                    </div>
                    <div>
                      <span style="color:#64748b; font-weight:600;">Dosage Format:</span>
                      <span style="color:#0f172a; font-weight:600; margin-left:6px;">${data.dosageFormat}</span>
                    </div>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Section 3: Scope Notes -->
          <tr>
            <td style="padding:12px 28px;">
              <div style="font-size:11px; font-weight:800; color:#0a192f; text-transform:uppercase; letter-spacing:0.06em; margin-bottom:6px;">
                3. Project Scope, Molecule & Volume Details
              </div>
              <div style="background:#ffffff; border-left:3px solid #009688; border-top:1px solid #e2e8f0; border-right:1px solid #e2e8f0; border-bottom:1px solid #e2e8f0; padding:12px 14px; border-radius:4px; font-size:12.5px; line-height:1.5; color:#334155; white-space:pre-line;">
                ${data.notes}
              </div>
            </td>
          </tr>

          <!-- SLA Commitment -->
          <tr>
            <td style="padding:10px 28px;">
              <div style="background:#f0fdfa; border:1px solid #ccfbf1; border-radius:8px; padding:12px 14px; font-size:11.5px; color:#0f766e;">
                <strong style="display:block; margin-bottom:2px;">⏱️ Executive 24-Hour Review Protocol:</strong>
                Routed directly to Business Development (Raleigh, NC, USA) for immediate technical committee review.
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#0a192f; color:#94a3b8; padding:18px 28px; font-size:11px; line-height:1.5; border-top:1px solid #1e293b;">
              <strong style="color:#ffffff;">Dovizio Pharmaceutical Solutions LLC</strong><br/>
              Global HQ: 9121 Anson Way, Suite 200, Raleigh, NC 27615, USA<br/>
              Portal: <a href="https://doviziopharma.com" target="_blank" style="color:#14b8a6; text-decoration:none;">doviziopharma.com</a> &bull; BD Desk: <a href="mailto:bd@doviziopharma.com" style="color:#14b8a6; text-decoration:none;">bd@doviziopharma.com</a>
            </td>
          </tr>

        </table>
      </div>
    `;
  }

  // --- Copy Generated Email HTML to Clipboard ---
  window.copyEmailHtml = function() {
    const container = document.getElementById('emailPreviewContainer');
    const btn = document.getElementById('copyHtmlBtn');
    if (!container) return;

    const htmlToCopy = container.innerHTML;
    navigator.clipboard.writeText(htmlToCopy).then(() => {
      if (btn) {
        const oldText = btn.innerHTML;
        btn.innerHTML = '✓ Copied!';
        setTimeout(() => { btn.innerHTML = oldText; }, 2000);
      }
    }).catch(() => {
      alert('Unable to copy HTML automatically. Please select and copy manually.');
    });
  };

  // --- Toggle Email Preview Inside Modal ---
  window.toggleEmailPreview = function() {
    const modalBox = document.getElementById('modalBox');
    const previewWrapper = document.getElementById('emailPreviewWrapper');
    const toggleBtn = document.getElementById('togglePreviewBtn');

    if (!previewWrapper) return;

    const isActive = previewWrapper.classList.contains('active');
    if (isActive) {
      previewWrapper.classList.remove('active');
      modalBox?.classList.remove('modal-expanded');
      if (toggleBtn) toggleBtn.innerHTML = '📧 View Website-Based Email Template ▾';
    } else {
      previewWrapper.classList.add('active');
      modalBox?.classList.add('modal-expanded');
      if (toggleBtn) toggleBtn.innerHTML = '📧 Hide Website-Based Email Template ▴';
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

    // Unique Reference Number & Timestamp
    const refNum = 'DVZ-' + Math.floor(100000 + Math.random() * 900000);
    const timestamp = new Date().toUTCString();

    const leadData = {
      refNum,
      timestamp,
      fullName: name,
      company,
      email,
      phone,
      region,
      inquiryType: track,
      dosageFormat,
      notes
    };

    // =========================================================================
    // INBOUND INQUIRY DISPATCH CONFIGURATION
    // -------------------------------------------------------------------------
    // To receive the EXACT custom website-based HTML email in your inbox,
    // paste your deployed Google Apps Script Web App URL below (see google-apps-script.js).
    // =========================================================================
    const GOOGLE_SCRIPT_WEBAPP_URL = ''; // e.g. 'https://script.google.com/macros/s/AKfycb.../exec'
    const RECIPIENT_EMAIL = 'erdipenshah23@gmail.com';

    // Update UI Loading State
    if (submitBtn) {
      submitBtn.disabled = true;
      submitBtn.innerHTML = `Transmitting to ${RECIPIENT_EMAIL}... ⏳`;
    }

    // Populate modal summary elements
    const modalName = document.getElementById('modalLeadName');
    const modalRef = document.getElementById('modalRefNum');
    const modalSummary = document.getElementById('modalSummary');
    const statusBadge = document.getElementById('modalStatusBadge');
    const previewContainer = document.getElementById('emailPreviewContainer');
    const mailtoBtn = document.getElementById('modalMailtoBtn');

    if (modalName) modalName.innerText = name;
    if (modalRef) modalRef.innerText = refNum;
    if (modalSummary) {
      modalSummary.innerHTML = `
        <div style="margin-bottom:4px;"><strong>Solution Track:</strong> <span style="color:#009688; font-weight:700;">${track}</span></div>
        <div style="margin-bottom:4px;"><strong>Enterprise:</strong> ${company} (${region})</div>
        <div style="margin-bottom:4px;"><strong>Point of Contact:</strong> ${name} &bull; <a href="mailto:${email}" style="color:#009688;">${email}</a></div>
        <div style="margin-bottom:4px;"><strong>Dosage Format:</strong> ${dosageFormat}</div>
        <div style="margin-top:8px; padding-top:6px; border-top:1px dashed #cbd5e1; font-size:11.5px; color:#64748b;">
          <em>Guaranteed Executive Review: Our BD team at Raleigh, NC will respond within 24 business hours.</em>
        </div>
      `;
    }

    // Construct Mailto Link for 1-Click Native Email Client Backup
    const emailSubject = `[Dovizio RFP] ${track} — ${company} (Ref: ${refNum})`;
    const emailPlainBody = `DOVIZIO PHARMACEUTICAL SOLUTIONS - NEW INQUIRY DISPATCH
============================================================
Reference ID: ${refNum}
Timestamp:    ${timestamp}

1. PROSPECTIVE PARTNER PROFILE
------------------------------------------------------------
Full Name:    ${name}
Organization: ${company}
Corporate Email: ${email}
Phone / WA:   ${phone}

2. SCOPE & TECHNICAL PARAMETERS
------------------------------------------------------------
Solution Track:   ${track}
Target Geography: ${region}
Dosage Format:    ${dosageFormat}

3. PROJECT SCOPE & MOLECULE DETAILS
------------------------------------------------------------
${notes}

============================================================
Corporate HQ: 9121 Anson Way, Suite 200, Raleigh, NC 27615, USA
Official Portal: https://doviziopharma.com
Direct BD Desk:  bd@doviziopharma.com
`;

    const mailtoUrl = `mailto:${RECIPIENT_EMAIL}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailPlainBody)}`;
    if (mailtoBtn) mailtoBtn.href = mailtoUrl;

    // Render Website Email Template in Modal Preview Container
    const htmlEmail = generateWebsiteEmailTemplate(leadData);
    if (previewContainer) {
      previewContainer.innerHTML = htmlEmail;
    }

    // FormSubmit payload (standard fallback)
    const payload = {
      _subject: emailSubject,
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
      'Submission Timestamp': timestamp,
      'Notification': `Transmitted from doviziopharma.com Contact Form to ${RECIPIENT_EMAIL}`
    };

    // Choose Dispatch Mechanism:
    // 1) If Google Apps Script Web App URL is present, send the custom HTML email directly!
    // 2) Otherwise, fallback to FormSubmit AJAX endpoint.
    const sendPromise = GOOGLE_SCRIPT_WEBAPP_URL
      ? fetch(GOOGLE_SCRIPT_WEBAPP_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            to: RECIPIENT_EMAIL,
            subject: emailSubject,
            htmlBody: htmlEmail,
            replyTo: email,
            leadData: leadData
          })
        })
      : fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify(payload)
        });

    sendPromise
      .then(res => {
        if (statusBadge) {
          statusBadge.innerHTML = `✉️ Transmitted to ${RECIPIENT_EMAIL}`;
          statusBadge.style.background = '#f0fdfa';
          statusBadge.style.color = '#0f766e';
          statusBadge.style.borderColor = '#99f6e4';
        }
      })
      .catch(err => {
        // In case of ad-blocker or offline mode, inform user that mail client backup is ready
        if (statusBadge) {
          statusBadge.innerHTML = `⚡ Ready for Direct Dispatch (${RECIPIENT_EMAIL})`;
          statusBadge.style.background = '#fefce8';
          statusBadge.style.color = '#854d0e';
          statusBadge.style.borderColor = '#fef08a';
        }
      })
      .finally(() => {
        // Display Confirmation Modal
        const modal = document.getElementById('confirmModal');
        if (modal) modal.classList.add('active');

        // Reset Button & Form
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = 'Submit Confidential Enterprise Inquiry ➔';
        }
        form.reset();
      });
  };

  window.closeModal = function() {
    const modal = document.getElementById('confirmModal');
    const previewWrapper = document.getElementById('emailPreviewWrapper');
    const modalBox = document.getElementById('modalBox');
    const toggleBtn = document.getElementById('togglePreviewBtn');

    if (modal) modal.classList.remove('active');
    if (previewWrapper) previewWrapper.classList.remove('active');
    if (modalBox) modalBox.classList.remove('modal-expanded');
    if (toggleBtn) toggleBtn.innerHTML = '📧 View Website-Based Email Template ▾';
  };

});
