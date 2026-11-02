/**
 * Dovizio Pharmaceutical Solutions — Custom HTML Email Dispatcher
 * Powered by Google Apps Script (100% Free, Native Gmail Delivery, No Third-Party Limits)
 *
 * This script receives form submissions from your Dovizio contact form
 * and sends the EXACT custom website-based HTML email template to your inbox.
 *
 * -----------------------------------------------------------------------------
 * 60-SECOND DEPLOYMENT INSTRUCTIONS:
 * -----------------------------------------------------------------------------
 * 1. Open your browser and go to: https://script.google.com/home/start
 * 2. Click "+ New project" (top-left).
 * 3. Delete any default code in Code.gs, paste this ENTIRE file, and click the Save icon (Ctrl+S / Cmd+S).
 * 4. Click the blue "Deploy" button (top-right) -> choose "New deployment".
 * 5. In the dialog:
 *      - Click the gear icon next to "Select type" -> choose "Web app".
 *      - Description: "Dovizio Inquiry Dispatcher"
 *      - Execute as: "Me (your email)"
 *      - Who has access: "Anyone" (crucial so your static GitHub Pages site can post to it)
 * 6. Click "Deploy".
 *      - Click "Authorize access" -> select your Google account -> click "Advanced" -> "Go to Untitled project (unsafe)" -> "Allow".
 * 7. Copy the "Web app URL" (looks like: https://script.google.com/macros/s/AKfycb.../exec).
 * 8. Open `js/main.js` in your Dovizio project and paste the URL into:
 *      const GOOGLE_SCRIPT_WEBAPP_URL = "YOUR_COPIED_URL_HERE";
 * 9. Commit & push! That's it. Every inquiry will arrive in your inbox with the
 *    exact custom HTML template, lotus logo, teal & navy styling, and buttons!
 * -----------------------------------------------------------------------------
 */

function doPost(e) {
  var lock = LockService.getScriptLock();
  lock.tryLock(15000);

  try {
    var payload;
    if (e.postData && e.postData.contents) {
      try {
        payload = JSON.parse(e.postData.contents);
      } catch (parseErr) {
        payload = e.parameter;
      }
    } else {
      payload = e.parameter || {};
    }

    var toEmail = payload.to || "erdipenshah23@gmail.com";
    var subject = payload.subject || "[Dovizio Inquiry] New Technical Proposal";
    var htmlContent = payload.htmlBody || "<p>New Inquiry Received</p>";
    var replyTo = payload.replyTo || payload.email || "";

    // Send the exact custom HTML email via Gmail
    MailApp.sendEmail({
      to: toEmail,
      subject: subject,
      htmlBody: htmlContent,
      replyTo: replyTo,
      name: "Dovizio Pharmaceutical Solutions"
    });

    return ContentService
      .createTextOutput(JSON.stringify({ status: "success", message: "Custom HTML email delivered to " + toEmail }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ status: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);

  } finally {
    lock.releaseLock();
  }
}

function doGet(e) {
  return ContentService
    .createTextOutput(JSON.stringify({ status: "active", service: "Dovizio Pharmaceutical Solutions Email WebApp" }))
    .setMimeType(ContentService.MimeType.JSON);
}
