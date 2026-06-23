/**
 * YEONJUN 'NO LABELS: PART 02' COMEBACK SUPPORT GUIDE
 * GAS Web App エントリーポイント
 */
function doGet(e) {
  const page = (e && e.parameter && e.parameter.page) || 'index';
  const allowed = { 'index': 'index', 'streaming': 'streaming', 'shows': 'shows' };
  const file = allowed[page] || 'index';

  return HtmlService
    .createHtmlOutputFromFile(file)
    .setTitle("YEONJUN 'NO LABELS: PART 02' COMEBACK SUPPORT GUIDE")
    .setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL)
    .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}
