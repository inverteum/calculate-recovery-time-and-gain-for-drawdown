(function () {
  function formatPct(x, digits) {
    if (!isFinite(x)) return "—";
    var n = (x * 100).toFixed(digits == null ? 1 : digits);
    if (Object.is(Number(n), -0) || n === "-0.0" || n === "-0.00") n = (0).toFixed(digits == null ? 1 : digits);
    return n + "%";
  }

  function renderDrawdown() {
    var loss = Number(document.getElementById("loss-pct").value);
    var annual = Number(document.getElementById("annual-return").value);
    var d = loss / 100;
    var remaining = 1 - d;
    var gain = remaining > 0 ? d / remaining : Infinity;
    document.getElementById("loss-label").textContent = loss + "%";
    document.getElementById("loss-pct").setAttribute("aria-valuetext", loss + " percent");
    document.getElementById("after-fall").textContent = String(Math.round(remaining * 100));
    document.getElementById("gain-needed").textContent = isFinite(gain) ? formatPct(gain, 1) : "—";
    var yearsEl = document.getElementById("years-needed");
    var noteEl = document.getElementById("years-note");
    if (!isFinite(annual) || annual <= 0 || !isFinite(gain)) {
      yearsEl.textContent = "—";
      noteEl.textContent = "Enter a positive annual return to estimate the time to recover.";
    } else {
      var yrs = Math.log(1 + gain) / Math.log(1 + annual / 100);
      yearsEl.textContent = yrs.toFixed(1) + " yrs";
      noteEl.textContent = "At " + annual + "% a year, compounded";
    }

    var w = 800;
    var h = 84;
    var x0 = 40;
    var x1 = 400;
    var x2 = 760;
    function cy(v) { return 70 - (v / 100) * 50; }
    document.getElementById("recovery-visual").innerHTML =
      '<svg viewBox="0 0 ' + w + " " + h + '" preserveAspectRatio="none" aria-hidden="true">' +
      '<line x1="20" y1="' + cy(100) + '" x2="780" y2="' + cy(100) + '" stroke="#e4e0d8" stroke-dasharray="4 4" />' +
      '<polyline fill="none" stroke="#111" stroke-width="2.5" stroke-linejoin="round" points="' +
      x0 + "," + cy(100) + " " + x1 + "," + cy(remaining * 100) + " " + x2 + "," + cy(100) + '" />' +
      '<circle cx="' + x0 + '" cy="' + cy(100) + '" r="4" fill="#111" />' +
      '<circle cx="' + x1 + '" cy="' + cy(remaining * 100) + '" r="4" fill="#111" />' +
      '<circle cx="' + x2 + '" cy="' + cy(100) + '" r="4" fill="#111" />' +
      "</svg>";
  }

  document.getElementById("loss-pct").addEventListener("input", renderDrawdown);
  document.getElementById("annual-return").addEventListener("input", renderDrawdown);
  renderDrawdown();
})();
